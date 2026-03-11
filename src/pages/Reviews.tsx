import { useState } from "react";
import { Star, ExternalLink, MessageCircle, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-reviews.jpg";

const reviews = [
  // Original / International
  { id: 1, stars: 5, text: "Kim Safaris made our Tanzania trip seamless. Driver was at the airport 20 mins early, vehicle spotless. Highly recommend!", name: "Sarah M.", flag: "🇬🇧", date: "Jan 2025" },
  { id: 2, stars: 5, text: "Booked a private route to Serengeti gate. Professional, punctual and great company during the drive. Will use again.", name: "Johan K.", flag: "🇳🇱", date: "Feb 2025" },
  { id: 3, stars: 5, text: "Best transfer service in Arusha. WhatsApp booking was so easy. Driver spoke good English and was very helpful.", name: "Amina T.", flag: "🇦🇪", date: "Mar 2025" },
  { id: 4, stars: 4, text: "Arrived late at night, they were still there waiting. Felt safe the whole journey. True professionals.", name: "Lucas B.", flag: "🇩🇪", date: "Mar 2025" },
  { id: 5, stars: 5, text: "Used Kim Safaris for our entire 2-week Tanzania trip. Every transfer was perfect. The drivers are knowledgeable and friendly.", name: "Emily R.", flag: "🇺🇸", date: "Dec 2024" },
  { id: 6, stars: 5, text: "From Zanzibar airport to Stone Town in a clean, comfortable car. Great communication via WhatsApp. Five stars!", name: "Pierre L.", flag: "🇫🇷", date: "Nov 2024" },
  { id: 7, stars: 5, text: "Excellent service from Arusha to Ngorongoro. Driver shared amazing stories about the area. Worth every penny.", name: "Yuki T.", flag: "🇯🇵", date: "Feb 2025" },
  { id: 8, stars: 4, text: "We booked last-minute and they still delivered. Vehicle was waiting, driver was smiling. Couldn't ask for more.", name: "Marco S.", flag: "🇮🇹", date: "Jan 2025" },
  { id: 9, stars: 5, text: "A truly premium experience. The Wi-Fi in the car was a lifesaver for our business trip. Highly recommended.", name: "David C.", flag: "🇨🇦", date: "Mar 2025" },
  { id: 10, stars: 5, text: "Impeccable timing. We had a tight connection from JRO to Arusha Airport and the driver got us there safely and swiftly.", name: "Elena V.", flag: "🇪🇸", date: "Feb 2025" },
  { id: 11, stars: 5, text: "The cars are new, clean, and air-conditioned. Makes a huge difference after a long flight.", name: "Michael W.", flag: "🇦🇺", date: "Jan 2025" },
  { id: 12, stars: 4, text: "Good transfer from Moshi. Driver was polite. Overall a solid service.", name: "Kofi A.", flag: "🇬🇭", date: "Dec 2024" },
  { id: 13, stars: 5, text: "WhatsApp booking is a game-changer. Sent a text, got a quote, and the car was there exactly as promised.", name: "Sophie M.", flag: "🇨🇭", date: "Mar 2025" },
  { id: 14, stars: 5, text: "We used them for a multi-day private route. It was like having a local guide and driver in one. Fantastic!", name: "Oliver P.", flag: "🇳🇿", date: "Feb 2025" },
  { id: 15, stars: 5, text: "Simply the best in Arusha. I use them every time I fly in for work.", name: "James K.", flag: "🇰🇪", date: "Jan 2025" },

  // Tanzanian / Local / Arusha specific
  { id: 16, stars: 5, text: "Excellent service from JRO. Driver was on time and very professional.", name: "Godfrey", flag: "🇹🇿", date: "Jan 2025" },
  { id: 17, stars: 5, text: "Always reliable when I have business guests arriving in Arusha. Top notch.", name: "Rehman", flag: "🇹🇿", date: "Feb 2025" },
  { id: 18, stars: 5, text: "Perfect timing. The car was incredibly clean and the driver drove very safely.", name: "Abdul Swamad", flag: "🇹🇿", date: "Mar 2025" },
  { id: 19, stars: 5, text: "Very smooth transfer from Moshi to Arusha. Highly recommended for locals and tourists alike.", name: "Jamel", flag: "🇹🇿", date: "Dec 2024" },
  { id: 20, stars: 5, text: "Used them for a family event transport. Punctual, polite, and great cars.", name: "Emmy", flag: "🇹🇿", date: "Nov 2024" },
  { id: 21, stars: 4, text: "Good ride. Nice air conditioning during the hot season. Very comfortable seats.", name: "Baraka M.", flag: "🇹🇿", date: "Feb 2025" },
  { id: 22, stars: 5, text: "Best customer service in Arusha when it comes to transfers. Keep it up!", name: "Neema J.", flag: "🇹🇿", date: "Mar 2025" },
  { id: 23, stars: 5, text: "Always my first choice for Kilimanjaro airport drops. Never missed a flight.", name: "Joshua T.", flag: "🇹🇿", date: "Jan 2025" },
  { id: 24, stars: 5, text: "Clean Alphards, respectful drivers. Very safe driving on the highway.", name: "Fatma S.", flag: "🇹🇿", date: "Oct 2024" },
  { id: 25, stars: 5, text: "Booked them for a full day city tour in Arusha. The driver knew all the best hidden spots.", name: "Kelvin", flag: "🇹🇿", date: "Sep 2024" },
  { id: 26, stars: 5, text: "Very professional team. Booking via WhatsApp was instant and easy.", name: "Hassan", flag: "🇹🇿", date: "Aug 2024" },
  { id: 27, stars: 4, text: "Smooth journey to Karatu. The driver was very informative about the local areas.", name: "Glory", flag: "🇹🇿", date: "Jul 2024" },
  { id: 28, stars: 5, text: "They handle our corporate transfers in Arusha. Outstanding reliability.", name: "Peter W.", flag: "🇹🇿", date: "Jun 2024" },
  { id: 29, stars: 5, text: "My go-to for late-night arrivals at JRO. I always feel completely safe.", name: "Aisha", flag: "🇹🇿", date: "May 2024" },
  { id: 30, stars: 5, text: "Great pricing for the quality of vehicles provided. Truly premium.", name: "David L.", flag: "🇹🇿", date: "Apr 2024" },
  { id: 31, stars: 5, text: "The vehicles are always maintained perfectly. No breakdowns, just smooth riding.", name: "Salum", flag: "🇹🇿", date: "Mar 2024" },
  { id: 32, stars: 5, text: "Excellent and very respectful drivers. Good knowledge of Arusha traffic.", name: "Mariam", flag: "🇹🇿", date: "Feb 2024" },
  { id: 33, stars: 4, text: "Helped us move some guests between hotels. Very efficient service.", name: "Emanuel", flag: "🇹🇿", date: "Jan 2024" },
  { id: 34, stars: 5, text: "The best luxury transfer option in town. Kim Safaris never disappoints.", name: "Zainab", flag: "🇹🇿", date: "Dec 2023" },
  { id: 35, stars: 5, text: "Awesome experience riding with them to Tarangire. Safari started early!", name: "Godlisten", flag: "🇹🇿", date: "Nov 2023" }
];

const ReviewsPage = () => {
  const [filter, setFilter] = useState("All Views");

  const filteredReviews = reviews.filter((r) => {
    if (filter === "All Views") return true;
    if (filter === "5 Stars") return r.stars === 5;
    if (filter === "4 Stars") return r.stars === 4;
    return true;
  });

  return (
    <main>
      <PageHero
        image={heroImage}
        title="Traveler Stories"
        subtitle="Real experiences from real travelers who chose Kim Safaris."
      />

      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filter (PC Only) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-card border border-border rounded-2xl p-6">
                  {/* Rating summary */}
                  <AnimatedSection>
                    <div className="text-center mb-8 pb-8 border-b border-border">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={20} className="text-primary fill-primary" />
                        ))}
                      </div>
                      <p className="font-display text-4xl font-bold text-foreground">4.8</p>
                      <p className="text-muted-foreground text-xs mt-1 uppercase tracking-wider">Out of 5</p>
                    </div>
                  </AnimatedSection>

                  <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Filter size={18} className="text-primary" />
                    Filter Reviews
                  </h3>
                  <div className="flex flex-col gap-2 relative z-10">
                    {["All Views", "5 Stars", "4 Stars"].map((f) => (
                      <Button
                        key={f}
                        variant={filter === f ? "gold" : "outline"}
                        size="sm"
                        className={`justify-start ${filter === f ? "" : "bg-transparent border-border text-foreground hover:bg-surface-2"
                          } w-full`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setFilter(f);
                        }}
                        type="button"
                      >
                        {f}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Reviews Grid */}
            <div className="lg:col-span-3">
              {/* Mobile Rating Summary (Hidden on PC) */}
              <div className="lg:hidden text-center mb-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={24} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="font-display text-4xl font-bold text-foreground">4.8</p>
                <p className="text-muted-foreground text-sm mt-1">Based on Google Reviews</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredReviews.map((r, i) => (
                  <AnimatedSection key={`${r.name}-${i}`} delay={i * 0.05}>
                    <div className="bg-card border border-border rounded-2xl p-6 hover:gold-border-glow transition-all duration-300 h-full flex flex-col">
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: r.stars }).map((_, j) => (
                          <Star key={j} size={14} className="text-primary fill-primary" />
                        ))}
                      </div>
                      <p className="text-foreground text-sm leading-relaxed mb-6 italic flex-1">"{r.text}"</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                        <span className="font-medium text-foreground">{r.name} {r.flag}</span>
                        <span>{r.date}</span>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-20 text-center bg-card border border-border rounded-2xl p-10 max-w-3xl mx-auto">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Traveled with Kim Safaris?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Share your experience and help fellow travelers make the right choice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" asChild>
                  <a href="https://maps.google.com/?q=Kim+Safaris+Arusha+Tanzania" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} /> Write a Review on Google
                  </a>
                </Button>
                <Button variant="gold-outline" size="lg" asChild>
                  <a href="https://wa.me/255756997609?text=Hi! I'd like to recommend Kim Safaris..." target="_blank" rel="noopener noreferrer">
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
};

export default ReviewsPage;
