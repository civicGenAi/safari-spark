import { Star, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-reviews.jpg";

const reviews = [
  { stars: 5, text: "Kim Safaris made our Tanzania trip seamless. Driver was at the airport 20 mins early, vehicle spotless. Highly recommend!", name: "Sarah M.", flag: "🇬🇧", date: "Jan 2025" },
  { stars: 5, text: "Booked a private route to Serengeti gate. Professional, punctual and great company during the drive. Will use again.", name: "Johan K.", flag: "🇳🇱", date: "Feb 2025" },
  { stars: 5, text: "Best transfer service in Arusha. WhatsApp booking was so easy. Driver spoke good English and was very helpful.", name: "Amina T.", flag: "🇦🇪", date: "Mar 2025" },
  { stars: 5, text: "Arrived late at night, they were still there waiting. Felt safe the whole journey. True professionals.", name: "Lucas B.", flag: "🇩🇪", date: "Mar 2025" },
  { stars: 5, text: "Used Kim Safaris for our entire 2-week Tanzania trip. Every transfer was perfect. The drivers are knowledgeable and friendly.", name: "Emily R.", flag: "🇺🇸", date: "Dec 2024" },
  { stars: 5, text: "From Zanzibar airport to Stone Town in a clean, comfortable car. Great communication via WhatsApp. Five stars!", name: "Pierre L.", flag: "🇫🇷", date: "Nov 2024" },
  { stars: 5, text: "Excellent service from Arusha to Ngorongoro. Driver shared amazing stories about the area. Worth every penny.", name: "Yuki T.", flag: "🇯🇵", date: "Feb 2025" },
  { stars: 5, text: "We booked last-minute and they still delivered. Vehicle was waiting, driver was smiling. Couldn't ask for more.", name: "Marco S.", flag: "🇮🇹", date: "Jan 2025" },
];

const ReviewsPage = () => (
  <main>
    <PageHero
      image={heroImage}
      title="Traveler Stories"
      subtitle="Real experiences from real travelers who chose Kim Safaris."
    />

    <section className="section-padding bg-background">
      <div className="container-max">
        {/* Rating summary */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} className="text-primary fill-primary" />
              ))}
            </div>
            <p className="font-display text-3xl font-bold text-foreground">5.0 / 5</p>
            <p className="text-muted-foreground text-sm mt-1">Based on Google Reviews</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((r, i) => (
            <AnimatedSection key={r.name} delay={i * 0.08}>
              <div className="bg-card border border-border rounded-2xl p-6 hover:gold-border-glow transition-all duration-300">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} size={14} className="text-primary fill-primary" />
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

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="mt-20 text-center bg-card border border-border rounded-2xl p-10 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Traveled with Kim Safari?
            </h3>
            <p className="text-muted-foreground mb-8">
              Share your experience and help fellow travelers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <a href="https://maps.google.com/?q=Kim+Safari+Arusha+Tanzania" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} /> Write a Review on Google
                </a>
              </Button>
              <Button variant="gold-outline" size="lg" asChild>
                <a href="https://wa.me/255756997609?text=Hi! I'd like to recommend Kim Safari..." target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} /> Recommend on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default ReviewsPage;
