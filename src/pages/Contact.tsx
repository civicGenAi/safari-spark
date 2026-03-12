import { useState } from "react";
import { Phone, MapPin, MessageCircle, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { GlobeDecoration } from "@/components/SvgDecorations";
import heroImage from "@/assets/hero-contact.jpg";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setLoading(true);
    const msg = `Hi Kim Safaris! My name is ${form.name}. ${form.message}`;
    setTimeout(() => {
      window.open(`https://wa.me/255756997609?text=${encodeURIComponent(msg)}`, "_blank");
      setLoading(false);
    }, 500);
  };

  const inputClass = "w-full bg-surface-2 border border-border rounded-full px-5 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-body";

  return (
    <main>
      <PageHero
        image={heroImage}
        title="Contact Us"
        subtitle="We're here to help. Reach out anytime — we respond fast."
      />

      <section className="section-padding bg-background relative overflow-hidden">
        <GlobeDecoration className="absolute -top-10 -right-10 md:top-0 md:right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] text-primary" />

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact info */}
            <AnimatedSection>
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    Whether you have a question about our services, need a custom route, or just want to say hello — we'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <a href="tel:+255756997609" className="flex items-center gap-3 md:gap-4 text-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <Phone size={18} className="text-primary md:w-5 md:h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs md:text-sm text-muted-foreground">Call Us</div>
                      <div className="font-semibold text-sm md:text-base">+255 756 997 609</div>
                    </div>
                  </a>

                  <a href="https://wa.me/255756997609" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 text-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <MessageCircle size={18} className="text-primary md:w-5 md:h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs md:text-sm text-muted-foreground">WhatsApp</div>
                      <div className="font-semibold text-sm md:text-base">Chat with us instantly</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 md:gap-4 text-foreground">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-primary md:w-5 md:h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs md:text-sm text-muted-foreground">Location</div>
                      <div className="font-semibold text-sm md:text-base">Arusha, Tanzania</div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127451.24047508394!2d36.63!3d-3.3869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371b1b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sArusha%2C%20Tanzania!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Kim Safaris Location - Arusha, Tanzania"
                    className="md:h-[250px]"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Contact form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  <div>
                    <label className="block text-xs md:text-sm text-muted-foreground mb-2 font-body">Your Name</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm text-muted-foreground mb-2 font-body">Your Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className={`${inputClass} !rounded-2xl`}
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button variant="gold" size="default" type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={16} /> Send via WhatsApp</>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
