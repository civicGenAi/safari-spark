import { Link, useSearchParams } from "react-router-dom";
import { MapPin, Clock, Mountain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-routes.jpg";

const allRoutes = [
  { from: "JRO Airport", to: "Arusha", distance: "~50 km", duration: "~1 hr", landmark: "Kilimanjaro Int'l Airport" },
  { from: "JRO Airport", to: "Moshi", distance: "~35 km", duration: "~45 min", landmark: "Mt. Kilimanjaro base" },
  { from: "JRO Airport", to: "Serengeti Gate", distance: "~325 km", duration: "~6 hrs", landmark: "Serengeti National Park" },
  { from: "DAR Airport", to: "City Center", distance: "~12 km", duration: "~30 min", landmark: "Julius Nyerere Airport" },
  { from: "ZNZ Airport", to: "Stone Town", distance: "~8 km", duration: "~20 min", landmark: "Historic Stone Town" },
  { from: "Arusha", to: "Ngorongoro", distance: "~185 km", duration: "~4 hrs", landmark: "Ngorongoro Crater" },
  { from: "Arusha", to: "Tarangire", distance: "~120 km", duration: "~2.5 hrs", landmark: "Tarangire National Park" },
];

const RoutesPage = () => (
  <main>
    <PageHero
      image={heroImage}
      title="Our Routes"
      subtitle="Explore Tanzania's most popular transfer routes — all at your fingertips."
    />

    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allRoutes.map((r, i) => (
            <AnimatedSection key={`${r.from}-${r.to}`} delay={i * 0.08}>
              <div className="bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:gold-border-glow h-full flex flex-col">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-4">
                  <Mountain size={14} className="text-primary" />
                  {r.landmark}
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-1">From</div>
                    <div className="font-display text-lg font-semibold text-foreground">{r.from}</div>
                  </div>
                  <ArrowRight size={20} className="text-primary shrink-0" />
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-1">To</div>
                    <div className="font-display text-lg font-semibold text-foreground">{r.to}</div>
                  </div>
                </div>

                <div className="flex gap-4 text-xs text-muted-foreground mb-6">
                  <span className="flex items-center gap-1"><MapPin size={12} className="text-primary" /> {r.distance}</span>
                  <span className="flex items-center gap-1"><Clock size={12} className="text-primary" /> {r.duration}</span>
                </div>

                <Button variant="gold" size="default" className="mt-auto" asChild>
                  <Link to={`/booking?route=${encodeURIComponent(`${r.from} → ${r.to}`)}`}>
                    Book This Route
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default RoutesPage;
