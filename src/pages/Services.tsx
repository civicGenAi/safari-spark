import { Link } from "react-router-dom";
import { Plane, Building2, Compass, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
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

    <section className="section-padding bg-background">
      <div className="container-max space-y-20">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={0.1}>
            <div className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="flex-1">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <s.icon size={28} className="text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <div className="space-y-3 mb-8">
                  {s.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm italic mb-6">Contact us for a personalized quote.</p>
                <Button variant="gold" size="lg" asChild>
                  <Link to="/booking">Book This Service</Link>
                </Button>
              </div>
              <div className="flex-1 w-full bg-card border border-border rounded-2xl p-12 flex items-center justify-center">
                <s.icon size={120} className="text-primary/20" />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </main>
);

export default ServicesPage;
