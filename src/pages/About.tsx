import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-home.jpg";
import { CheckCircle2, Shield, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <main>
            <PageHero
                image={heroImage}
                title="Our Story"
                subtitle="Discover why Kim Safaris is Northern Tanzania's most trusted name in premium transport."
            />

            {/* Intro Section */}
            <section className="section-padding bg-background relative">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <div className="space-y-6">
                                <span className="text-primary text-sm tracking-widest uppercase font-body">Who We Are</span>
                                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                                    Elevating the standard of <span className="text-primary italic">travel.</span>
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Founded with a vision to redefine luxury transportation in Arusha and Moshi, Kim Safaris has grown into a premier fleet favored by business travelers, tourists, and locals alike.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    We believe that the journey is just as important as the destination. From the moment you land at Kilimanjaro International Airport to your final drop-off at a serene safari lodge, our dedicated team ensures absolute comfort, safety, and punctuality.
                                </p>
                                <div className="pt-6">
                                    <Button variant="gold" size="xl" asChild>
                                        <Link to="/booking">Book Your Ride Today</Link>
                                    </Button>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
                                <img
                                    src="/hero-routes.jpg"
                                    alt="Kim Safaris Vehicles"
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h3 className="font-display text-2xl font-bold mb-2">Premium Fleet</h3>
                                    <p className="text-white/80">Immaculate vehicles maintained to the highest standards.</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-surface-1 border-y border-border">
                <div className="container-max">
                    <AnimatedSection>
                        <div className="text-center mb-16 max-w-2xl mx-auto">
                            <span className="text-primary text-sm tracking-widest uppercase font-body">The Kim Safaris Difference</span>
                            <h2 className="font-display text-4xl font-bold text-foreground mt-3">Why Choose Us?</h2>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Safety First",
                                desc: "Certified drivers, rigorous vehicle maintenance, and comprehensive insurance for peace of mind."
                            },
                            {
                                icon: Clock,
                                title: "Always Punctual",
                                desc: "We track your flights and schedule carefully so we're always waiting for you, not the other way around."
                            },
                            {
                                icon: Users,
                                title: "Professional Team",
                                desc: "Our drivers are local experts, fluent in English, and trained in premium hospitality."
                            },
                            {
                                icon: CheckCircle2,
                                title: "Seamless Booking",
                                desc: "No apps required. One simple form connects directly to our WhatsApp dispatch line instantly."
                            }
                        ].map((value, i) => (
                            <AnimatedSection key={value.title} delay={i * 0.1}>
                                <div className="bg-card border border-border p-8 rounded-3xl h-full flex flex-col items-center text-center group hover:gold-border-glow transition-all duration-300">
                                    <div className="w-16 h-16 rounded-full bg-surface-2 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all">
                                        <value.icon className="text-primary" size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
