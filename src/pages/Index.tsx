import { useState } from "react";
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
  { from: "Arusha", to: "Kilimanjaro Airport (JRO)", landmark: "International Airport" },
  { from: "Kilimanjaro Airport (JRO)", to: "Arusha", landmark: "City Transfer" },
  { from: "Arusha", to: "Arusha Airport (ARK)", landmark: "Domestic Airport" },
  { from: "Arusha", to: "Karatu", landmark: "Safari Gateway" },
  { from: "Arusha", to: "Namanga", landmark: "Border Town" },
  { from: "Arusha", to: "Moshi", landmark: "Base of Kilimanjaro" },
  { from: "Arusha", to: "Materuni Waterfalls", landmark: "Scenic Day Trip" },
  { from: "Arusha", to: "City Tour (Full Day)", landmark: "Arusha Exploration" },
  { from: "Arusha", to: "City Tour (Half Day)", landmark: "Arusha Highlights" },
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
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent w-full md:w-2/3 z-10" />
        <div className="absolute inset-0 grain-overlay z-10" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="inline-flex items-center gap-2 text-primary text-[10px] md:text-sm font-body tracking-widest uppercase mb-4 md:mb-6"
          >
            <span className="w-4 md:w-8 h-px bg-primary" />
            Tanzania's Trusted Transfer Service
            <span className="w-4 md:w-8 h-px bg-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.0 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-tight"
          >
            Arrive in Style,
            <br />
            <span className="text-primary">Explore in Comfort</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="text-muted-foreground text-base sm:text-xl max-w-2xl mx-auto mb-8 md:mb-10"
          >
            Premium airport transfers, hotel pickups & private safari routes across Tanzania and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
          >
            <Button variant="gold" size="xl" className="w-full sm:w-auto" asChild>
              <Link to="/booking">Book a Transfer</Link>
            </Button>
            <Button variant="gold-outline" size="xl" className="w-full sm:w-auto" asChild>
              <Link to="/routes">View Our Routes</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll cue (Left Sidebar Indicator) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 z-30 mix-blend-difference text-white/50"
        >
          <span className="text-[10px] tracking-widest uppercase writing-vertical origin-center -rotate-90 md:-rotate-90 mb-4 font-display translate-y-8">Scroll to Explore</span>
          <div className="w-[1px] h-20 bg-white/20 relative overflow-hidden mt-8">
            <motion.div
              className="w-full h-1/3 bg-white absolute top-0"
              animate={{ y: ["-100%", "300%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Integrated Sleek Stats (Bottom of Hero) - Hidden on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="absolute bottom-0 left-0 right-0 z-30 px-4 pb-8 md:pb-12 bg-gradient-to-t from-background to-transparent pt-32 hidden md:block"
        >
          <div className="container-max">
            <div className="flex flex-wrap items-center justify-between gap-12 opacity-80 backdrop-blur-sm border-t border-white/5 pt-8">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 flex text-primary items-center justify-center group-hover:scale-110 transition-transform">
                    <s.icon strokeWidth={1.5} size={32} />
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="font-display text-2xl font-light text-foreground tracking-wide">
                      <CountUp end={s.value} suffix={s.suffix} />
                    </div>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Thematic Background Elements (African/Safari Vibe) */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSIyOSI+PHBhdGggZD0iTTQzIDE0TDIxLjUgME00MyAxNEw2NC41IDI5TTQzIDE0djE1bTIxLjUtMTQuNWwxNC41IDE0LjVNMjEuNSAxNEw3IDI5bTAtMTRsMTQuNS0xNC41TTg2IDE0bC0yMS41IDE1TTQzIDBMMjEuNSAxNE00MyBMMjEuNSAxNE0wIDE0bDIxLjUtMTQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-map-pattern opacity-10 z-0 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4" />

        <div className="container-max relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary text-sm tracking-widest uppercase font-body">What We Offer</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3">Signature Services</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Plane,
                title: "Airport Transfers",
                desc: "Kilimanjaro (JRO), Dar es Salaam (DAR), Zanzibar (ZNZ). Punctual, tracked, stress-free arrivals and departures.",
                delay: 0,
              },
              {
                icon: Building2,
                title: "Hotel Transfers",
                desc: "City to hotel, hotel to city. Clean vehicles, professional drivers who know every route inside out.",
                delay: 0.15,
              },
              {
                icon: Compass,
                title: "Private Routes",
                desc: "Custom journeys to safari gates, beaches, towns, national parks. Full flexibility, completely on your schedule.",
                delay: 0.3,
              },
            ].map((s) => (
              <AnimatedSection key={s.title} delay={s.delay}>
                <div className="group relative bg-surface-1/80 backdrop-blur-sm border border-border p-8 rounded-3xl hover:-translate-y-2 transition-all duration-500 hover:gold-border-glow overflow-hidden h-full flex flex-col">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl" />

                  <div className="w-14 h-14 rounded-full bg-surface-2 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                    <s.icon strokeWidth={1.5} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-light text-foreground mb-4">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-primary font-display tracking-widest text-xs uppercase hover:gap-3 transition-all mt-auto group/link">
                    Explore <ArrowRight size={14} className="group-hover/link:animate-pulse" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="section-padding bg-surface-1 border-y border-border relative overflow-hidden">
        {/* Subtle contour lines / road background graphic */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, hsl(0 0% 20%) 10px, hsl(0 0% 20%) 11px)"
          }}
        />

        <div className="container-max relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <AnimatedSection>
              <span className="text-primary text-sm tracking-widest uppercase font-body">Explore Tanzania</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3">Popular Routes</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="hidden md:block">
              <Button variant="outline" className="border-border text-foreground hover:bg-surface-2 uppercase tracking-widest text-xs font-display rounded-full" asChild>
                <Link to="/routes">View All Routes</Link>
              </Button>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {routes.map((r, i) => (
              <AnimatedSection key={`${r.from}-${r.to}`} delay={i * 0.05} className={`${i >= 3 ? 'hidden lg:block' : ''} ${i >= 4 ? 'lg:hidden' : ''}`}>
                <Link to={`/booking?route=${encodeURIComponent(`${r.from} → ${r.to}`)}`} className="block group h-full">
                  <div className="bg-card border border-border p-5 rounded-3xl hover:gold-border-glow transition-all duration-300 relative overflow-hidden h-full">
                    {/* Hover slash effect */}
                    <div className="absolute inset-0 bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-primary">
                          <MapPin size={14} />
                          <span className="text-[10px] tracking-widest uppercase text-muted-foreground">{r.landmark}</span>
                        </div>
                        <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1" />
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-display text-lg font-light text-foreground">{r.from}</h3>
                        <div className="w-4 h-px bg-border group-hover:bg-primary transition-colors" />
                        <h3 className="font-display text-lg font-semibold text-foreground">{r.to}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="border-border text-foreground hover:bg-surface-2 uppercase tracking-widest text-xs font-display rounded-full w-full" asChild>
              <Link to="/routes">View All Routes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews (Marquee) */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Subtle Quotes Background Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-serif text-primary/5 pointer-events-none select-none z-0">
          "
        </div>

        <div className="container-max relative z-10 mb-12 text-center">
          <AnimatedSection>
            <span className="text-primary text-sm tracking-widest uppercase font-body">Testimonials</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mt-3">What Our Clients Say</h2>
          </AnimatedSection>
        </div>

        <div className="relative z-10 w-full overflow-hidden flex flex-col gap-6">
          {/* Edge fades for the marquee */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          {/* Row 1: Moves Left */}
          <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] gap-6 px-3">
            {[...reviews, ...reviews].map((r, i) => (
              <div key={`${r.name}-row1-${i}`} className="w-80 md:w-96 bg-card border border-border p-6 hover:gold-border-glow transition-all duration-300 flex-shrink-0">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                  <span className="font-medium text-foreground">{r.name} {r.flag}</span>
                  <span>{r.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Moves Right (Hidden on Mobile) */}
          <div className="hidden md:flex w-max animate-marquee-right hover:[animation-play-state:paused] gap-6 px-3">
            {[...reviews, ...reviews].reverse().map((r, i) => (
              <div key={`${r.name}-row2-${i}`} className="w-80 md:w-96 bg-card border border-border p-6 hover:gold-border-glow transition-all duration-300 flex-shrink-0">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                  <span className="font-medium text-foreground">{r.name} {r.flag}</span>
                  <span>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-padding relative overflow-hidden">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-1 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,hsl(43_52%_54%_/_0.15),transparent_50%)] z-0" />

        <div className="container-max relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto bg-surface-1/50 backdrop-blur-md border border-border p-12 md:p-16 text-center shadow-2xl overflow-hidden relative group rounded-3xl">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-primary/20 blur-[50px] group-hover:bg-primary/30 transition-colors" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] group-hover:bg-primary/30 transition-colors" />

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 uppercase tracking-wider">
                Ready to <span className="text-primary italic">Ride?</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
                Fill our simple form and your booking goes straight to WhatsApp.
                No apps, no stress, just a premium transfer waiting for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="gold" size="xl" className="h-16 px-10 text-lg uppercase tracking-widest font-display w-full sm:w-auto" asChild>
                  <Link to="/booking">Book Your Transfer Now</Link>
                </Button>

                <RatingModal />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

// Internal component for the rating modal
import { X, ExternalLink } from "lucide-react";
const RatingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1 = choice, 2 = platform review form
  const [stars, setStars] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      setStep(1);
    }, 1500);
  };

  return (
    <>
      <Button
        variant="outline"
        size="xl"
        className="h-16 px-10 text-lg uppercase tracking-widest font-display border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
        onClick={() => { setIsOpen(true); setStep(1); setStars(0); }}
      >
        Rate Our Service
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-card border border-border rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200 text-left">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-2 z-10 bg-surface-2 rounded-full"
            >
              <X size={20} />
            </button>

            {step === 1 ? (
              <div className="p-8 text-center pt-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Star size={32} className="text-primary fill-primary" />
                </div>
                <h3 className="font-display text-3xl font-bold mb-3 text-foreground">How was your experience?</h3>
                <p className="text-muted-foreground mb-8">Choose where you'd like to share your review.</p>

                <div className="space-y-4">
                  <a
                    href="https://maps.google.com/?q=Kim+Safaris+Arusha+Tanzania"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center w-full p-4 rounded-2xl border border-border hover:border-primary/50 hover:bg-surface-2 transition-all group"
                  >
                    <span className="font-display text-xl mb-1 flex items-center gap-2 group-hover:text-primary transition-colors text-foreground">
                      Google Maps <ExternalLink size={16} />
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest text-center">Fastest & helps us grow</span>
                  </a>

                  <button
                    onClick={() => setStep(2)}
                    className="flex flex-col items-center justify-center w-full p-4 rounded-2xl border border-border hover:border-primary/50 hover:bg-surface-2 transition-all group"
                  >
                    <span className="font-display text-xl mb-1 flex items-center gap-2 group-hover:text-primary transition-colors text-foreground">
                      Our Platform
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">Leave a detailed review</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 pt-12 text-left">
                <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Leave a Review</h3>
                <p className="text-muted-foreground mb-6 text-sm">Your feedback helps us improve our luxury services.</p>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3 text-foreground tracking-widest uppercase">Rate your transfer</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setStars(star)}
                        className={`transition-all hover:scale-110 ${stars >= star ? "text-primary fill-primary" : "text-border"}`}
                      >
                        <Star size={32} className={stars >= star ? "fill-primary" : ""} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name (Optional)"
                      className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      placeholder="Tell us about your trip..."
                      className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 h-32 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  disabled={stars === 0 || isSubmitting}
                  className="w-full h-12 text-md"
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
