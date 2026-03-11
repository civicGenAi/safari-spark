import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plane, Building2, Compass, Users, Clock, ShieldCheck, MapPin, ChevronDown, Star, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import heroImage from "@/assets/hero-home.jpg";

const reviews = [
  { stars: 5, text: "Kim Safaris made our Tanzania trip seamless. Driver was at the airport 20 mins early, vehicle spotless. Highly recommend!", name: "Sarah M.", flag: "🇬🇧", date: "Jan 2025" },
  { stars: 5, text: "Booked a private route to Serengeti gate. Professional, punctual and great company during the drive. Will use again.", name: "Johan K.", flag: "🇳🇱", date: "Feb 2025" },
  { stars: 5, text: "Best transfer service in Arusha. WhatsApp booking was so easy. Driver spoke good English and was very helpful.", name: "Amina T.", flag: "🇦🇪", date: "Mar 2025" },
  { stars: 5, text: "Arrived late at night, they were still there waiting. Felt safe the whole journey. True professionals.", name: "Lucas B.", flag: "🇩🇪", date: "Mar 2025" },
];

const routes = [
  { from: "JRO Airport", to: "Arusha", landmark: "Kilimanjaro Int'l" },
  { from: "JRO Airport", to: "Moshi", landmark: "Mt. Kilimanjaro" },
  { from: "JRO Airport", to: "Serengeti Gate", landmark: "Serengeti NP" },
  { from: "DAR Airport", to: "City Center", landmark: "Dar es Salaam" },
  { from: "ZNZ Airport", to: "Stone Town", landmark: "Zanzibar" },
  { from: "Arusha", to: "Ngorongoro", landmark: "Crater Highlands" },
  { from: "Arusha", to: "Tarangire", landmark: "Tarangire NP" },
];

const stats = [
  { icon: Users, label: "Happy Clients", value: 200, suffix: "+" },
  { icon: Globe, label: "Airports Covered", value: 3, suffix: "" },
  { icon: Clock, label: "Availability", value: 24, suffix: "/7" },
  { icon: ShieldCheck, label: "Safe Rides", value: 100, suffix: "%" },
];

const Index = () => {
  return (
    <main>
      {/* Hero — Cinematic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Ken Burns zoom + pan on the hero image */}
        <motion.img
          src={heroImage}
          alt="Tanzania safari landscape"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        {/* Cinematic letterbox bars */}
        <motion.div
          className="absolute top-0 left-0 right-0 bg-background z-20"
          initial={{ height: "50%" }}
          animate={{ height: "0%" }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-background z-20"
          initial={{ height: "50%" }}
          animate={{ height: "0%" }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="inline-flex items-center gap-2 text-primary text-sm font-body tracking-widest uppercase mb-6"
          >
            <span className="w-8 h-px bg-primary" />
            Tanzania's Trusted Transfer Service
            <span className="w-8 h-px bg-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.0 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Arrive in Style,
            <br />
            <span className="text-primary">Explore in Comfort</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10"
          >
            Premium airport transfers, hotel pickups & private safari routes across Tanzania and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="gold" size="xl" asChild>
              <Link to="/booking">Book a Transfer</Link>
            </Button>
            <Button variant="gold-outline" size="xl" asChild>
              <Link to="/routes">View Our Routes</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="text-primary animate-bounce" />
        </motion.div>
      </section>

      {/* Stats — Creative Cards */}
      <section className="relative -mt-16 z-30 px-4">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6 + i * 0.15, duration: 0.6 }}
                className="relative group bg-card/90 backdrop-blur-xl border border-border rounded-2xl p-6 text-center overflow-hidden hover:gold-border-glow transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <s.icon size={20} className="text-primary" />
                  </div>
                  <CountUp end={s.value} suffix={s.suffix} />
                  <p className="text-muted-foreground text-xs mt-1 tracking-wide uppercase">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary text-sm tracking-widest uppercase font-body">What We Offer</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">Our Services</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Plane,
                title: "Airport Transfers",
                desc: "Kilimanjaro (JRO), Dar es Salaam (DAR), Zanzibar (ZNZ). Punctual, tracked, stress-free arrivals and departures.",
              },
              {
                icon: Building2,
                title: "Hotel Transfers",
                desc: "City to hotel, hotel to city. Clean vehicles, professional drivers who know every route.",
              },
              {
                icon: Compass,
                title: "Private Routes",
                desc: "Custom journeys to safari gates, beaches, towns, national parks. Full flexibility, your schedule.",
              },
            ].map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.15}>
                <div className="group bg-card border border-border rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 hover:gold-border-glow">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <s.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-primary text-sm hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="section-padding bg-surface-1 border-y border-border">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-primary text-sm tracking-widest uppercase font-body">Explore</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">Popular Routes</h2>
            </div>
          </AnimatedSection>

          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 min-w-max">
              {routes.map((r, i) => (
                <AnimatedSection key={`${r.from}-${r.to}`} delay={i * 0.08}>
                  <div className="w-64 bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:gold-border-glow flex flex-col">
                    <div className="flex items-center gap-2 text-primary mb-3">
                      <MapPin size={16} />
                      <span className="text-xs text-muted-foreground">{r.landmark}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{r.from}</h3>
                    <div className="text-primary text-sm mb-1">→</div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-4">{r.to}</h3>
                    <Button variant="gold-outline" size="sm" className="mt-auto" asChild>
                      <Link to={`/booking?route=${encodeURIComponent(`${r.from} → ${r.to}`)}`}>
                        Book This Route
                      </Link>
                    </Button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-primary text-sm tracking-widest uppercase font-body">Testimonials</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">What Our Clients Say</h2>
              <p className="text-muted-foreground mt-2">Real experiences from real travelers — verified on Google</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviews.map((r, i) => (
              <AnimatedSection key={r.name} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:gold-border-glow transition-all duration-300">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{r.name} {r.flag}</span>
                    <span>{r.date}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <p className="text-foreground mb-4">Happy with Kim Safaris? Help other travelers find us.</p>
              <Button variant="gold" size="lg" asChild>
                <a href="https://maps.google.com/?q=Kim+Safaris+Arusha+Tanzania" target="_blank" rel="noopener noreferrer">
                  Leave a Review on Google Maps
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-padding bg-surface-1 relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
        <div className="container-max relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Ride?</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Fill our simple form and your booking goes straight to WhatsApp. No app needed.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/booking">Book Your Transfer Now</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Index;
