import { Link } from "react-router-dom";
import { Plane, Building2, Compass, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { AirplanePathDecoration, CompassDecoration } from "@/components/SvgDecorations";
import heroImage from "@/assets/hero-services.jpg";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    desc: "Seamless pickups and drop-offs at Tanzania's major international airports. We track your flight so we're always on time.",
    includes: [
      "Kilimanjaro International Airport (JRO)",
      "Julius Nyerere International Airport (DAR)",
      "Abeid Amani Karume Airport (ZNZ)",
      "Meet & greet at arrivals",
      "Flight tracking for delays",
      "Complimentary wait time",
      "Clean, air-conditioned vehicles",
    ],
  },
  {
    icon: Building2,
    title: "Hotel Transfers",
    desc: "Comfortable transfers between your hotel and any destination in the city. Professional drivers who know every shortcut.",
    includes: [
      "City center to hotel transfers",
      "Inter-hotel transfers",
      "Group bookings available",
      "Luggage assistance",
      "English-speaking drivers",
      "Door-to-door service",
      "Safe, insured vehicles",
    ],
  },
  {
    icon: Compass,
    title: "Private Safari Routes",
    desc: "Custom journeys tailored to your itinerary. Travel at your own pace to national parks, beaches, and hidden gems.",
    includes: [
      "Safari park gate transfers",
      "Multi-day route planning",
      "Flexible schedules",
      "Experienced local drivers",
      "Scenic route options",
      "Rest stops included",
      "Custom pickup locations",
    ],
  },
];

const ServicesPage = () => (
  <main>
    <PageHero
      image={heroImage}
      title="Our Services"
      subtitle="Premium transport solutions for every leg of your Tanzanian adventure."
    />

    <section className="section-padding bg-background relative overflow-hidden">
      {/* SVG Decorations */}
      <AirplanePathDecoration className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[200px] md:h-[300px] text-primary" />
      <CompassDecoration className="absolute bottom-10 left-0 w-[200px] md:w-[350px] h-[200px] md:h-[350px] text-primary opacity-50" />

      <div className="container-max relative z-10 space-y-12 md:space-y-20">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={0.1}>
            <div className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 md:gap-12 items-start lg:items-center`}>
              <div className="flex-1 w-full">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                  <s.icon size={24} className="text-primary md:w-7 md:h-7" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 text-sm md:text-base">{s.desc}</p>
                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {s.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2 md:gap-3">
                      <Check size={16} className="text-primary mt-0.5 shrink-0 md:w-[18px] md:h-[18px]" />
                      <span className="text-foreground text-xs md:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-xs md:text-sm italic mb-4 md:mb-6">Contact us for a personalized quote.</p>
                <Button variant="gold" size="default" className="w-full sm:w-auto" asChild>
                  <Link to="/booking">Book This Service</Link>
                </Button>
              </div>
              <div className="flex-1 w-full bg-card border border-border rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-[150px] md:min-h-[200px]">
                <s.icon size={80} className="text-primary/20 md:w-[120px] md:h-[120px]" />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </main>
);

export default ServicesPage;
