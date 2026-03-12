import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Mountain, ArrowRight, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { TopoDecoration } from "@/components/SvgDecorations";
import heroImage from "@/assets/hero-routes.jpg";

const allRoutes = [
  { from: "Arusha", to: "Kilimanjaro Airport (JRO)", distance: "~50 km", duration: "~1 hr", landmark: "International Airport", category: "Airport" },
  { from: "Kilimanjaro Airport (JRO)", to: "Arusha", distance: "~50 km", duration: "~1 hr", landmark: "City Transfer", category: "Airport" },
  { from: "Arusha", to: "Arusha Airport (ARK)", distance: "~15 km", duration: "~30 min", landmark: "Domestic Airport", category: "Airport" },
  { from: "Arusha", to: "Karatu", distance: "~140 km", duration: "~3 hrs", landmark: "Safari Gateway", category: "Safari" },
  { from: "Arusha", to: "Namanga", distance: "~110 km", duration: "~2.5 hrs", landmark: "Border Town", category: "City" },
  { from: "Arusha", to: "Moshi", distance: "~80 km", duration: "~1.5 hrs", landmark: "Base of Kilimanjaro", category: "City" },
  { from: "Arusha", to: "Materuni Waterfalls", distance: "~95 km", duration: "~2 hrs", landmark: "Scenic Day Trip", category: "Safari" },
  { from: "Arusha", to: "City Tour (Full Day)", distance: "Various", duration: "8 hrs", landmark: "Arusha Exploration", category: "City" },
  { from: "Arusha", to: "City Tour (Half Day)", distance: "Various", duration: "6 hrs", landmark: "Arusha Highlights", category: "City" },
];

const RoutesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Airport", "Safari", "City"];

  const filteredRoutes = allRoutes.filter((r) => {
    const matchesSearch =
      r.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.landmark.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || r.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      <PageHero
        image={heroImage}
        title="Our Routes"
        subtitle="Explore Tanzania's most popular transfer routes — all at your fingertips."
      />

      <section className="section-padding bg-background relative overflow-hidden">
        <TopoDecoration className="absolute bottom-0 right-0 w-full h-[300px] text-primary" />

        <div className="container-max relative z-10">
          {/* Mobile: Search + filter row at top */}
          <div className="lg:hidden mb-6 space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-border rounded-full bg-surface-2 text-foreground font-body focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm"
                placeholder="Search routes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "gold" : "outline"}
                  size="sm"
                  className={`shrink-0 text-xs ${activeCategory === cat
                    ? ""
                    : "bg-transparent border-border text-foreground hover:bg-surface-2"
                    }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block lg:col-span-1 space-y-8">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-border rounded-full bg-surface-2 text-foreground font-body focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all sm:text-sm"
                    placeholder="Search routes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Filter size={18} className="text-primary" />
                    Categories
                  </h3>
                  <div className="flex flex-col items-stretch gap-2">
                    {categories.map((cat) => (
                      <Button
                        key={cat}
                        variant={activeCategory === cat ? "gold" : "outline"}
                        size="sm"
                        className={`justify-start ${activeCategory === cat
                          ? ""
                          : "bg-transparent border-border text-foreground hover:bg-surface-2"
                          }`}
                        onClick={() => setActiveCategory(cat)}
                      >
                        {cat}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {filteredRoutes.length === 0 ? (
                <div className="text-center py-12 bg-card border border-border rounded-2xl">
                  <Mountain size={40} className="mx-auto text-muted-foreground mb-4 opacity-50" />
                  <h3 className="text-base md:text-lg font-display text-foreground font-semibold mb-2">No routes found</h3>
                  <p className="text-muted-foreground text-sm">Try adjusting your search or category filter.</p>
                  <Button
                    variant="link"
                    className="mt-4 text-primary"
                    onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                  {filteredRoutes.map((r, i) => (
                    <AnimatedSection key={`${r.from}-${r.to}-${i}`} delay={i * 0.05}>
                      <div className="bg-card border border-border rounded-2xl p-4 md:p-6 hover:-translate-y-1 transition-all duration-300 hover:gold-border-glow h-full flex flex-col">
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                          <div className="flex items-center gap-2 text-muted-foreground text-xs">
                            <Mountain size={14} className="text-primary" />
                            <span className="truncate">{r.landmark}</span>
                          </div>
                          <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-wider bg-surface-2 px-2 py-1 rounded-full text-foreground border border-border shrink-0 ml-2">
                            {r.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] md:text-xs text-muted-foreground mb-1">From</div>
                            <div className="font-display text-base md:text-lg font-semibold text-foreground truncate">{r.from}</div>
                          </div>
                          <ArrowRight size={18} className="text-primary shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] md:text-xs text-muted-foreground mb-1">To</div>
                            <div className="font-display text-base md:text-lg font-semibold text-foreground truncate">{r.to}</div>
                          </div>
                        </div>

                        <div className="flex gap-3 md:gap-4 text-[10px] md:text-xs text-muted-foreground mb-4 md:mb-6">
                          <span className="flex items-center gap-1"><MapPin size={12} className="text-primary" /> {r.distance}</span>
                          <span className="flex items-center gap-1"><Clock size={12} className="text-primary" /> {r.duration}</span>
                        </div>

                        <Button variant="gold" size="default" className="mt-auto w-full text-xs md:text-sm" asChild>
                          <Link to={`/booking?route=${encodeURIComponent(`${r.from} → ${r.to}`)}`}>
                            Book This Route
                          </Link>
                        </Button>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoutesPage;
