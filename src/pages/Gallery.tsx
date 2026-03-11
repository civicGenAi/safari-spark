import { useState } from "react";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-home.jpg";
import { Button } from "@/components/ui/button";

const categories = ["All", "Vehicles", "Safari", "Transfers"];

const galleryImages = [
    { src: "/hero-routes.jpg", category: "Vehicles" },
    { src: "/hero-services.jpg", category: "Safari" },
    { src: "/hero-contact.jpg", category: "Transfers" },
    { src: "/hero-home.jpg", category: "Vehicles" },
    { src: "/hero-reviews.jpg", category: "Safari" },
    { src: "/hero-booking.jpg", category: "Transfers" },
];

const GalleryPage = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredImages = galleryImages.filter(img =>
        activeTab === "All" ? true : img.category === activeTab
    );

    return (
        <main>
            <PageHero
                image={heroImage}
                title="Our Gallery"
                subtitle="Visuals from our premium fleet, beautiful destinations, and happy clients."
            />

            <section className="section-padding bg-background relative min-h-screen">
                <div className="container-max">

                    {/* Tabs */}
                    <AnimatedSection>
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {categories.map((cat) => (
                                <Button
                                    key={cat}
                                    variant={activeTab === cat ? "gold" : "outline"}
                                    onClick={() => setActiveTab(cat)}
                                    className={`rounded-full px-8 ${activeTab !== cat ? 'hover:bg-surface-2 border-border text-foreground' : ''}`}
                                >
                                    {cat}
                                </Button>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map((img, i) => (
                            <AnimatedSection key={`${img.src}-${i}`} delay={i * 0.1}>
                                <div className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer border border-border">
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                                    <img
                                        src={img.src}
                                        alt={`${img.category} Image`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                                        <span className="text-primary text-xs uppercase tracking-widest font-display font-semibold">
                                            {img.category}
                                        </span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
};

export default GalleryPage;
