import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { BookingDecoration } from "@/components/SvgDecorations";
import heroImage from "@/assets/hero-booking.jpg";

const serviceOptions = [
  "Airport → Hotel",
  "Hotel → Airport",
  "Private Route",
];

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const prefilledRoute = searchParams.get("route") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: prefilledRoute ? "Private Route" : "",
    pickup: prefilledRoute ? prefilledRoute.split(" → ")[0] || "" : "",
    dropoff: prefilledRoute ? prefilledRoute.split(" → ")[1] || "" : "",
    date: "",
    passengers: "1",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const required = ["name", "phone", "service", "pickup", "dropoff", "date"];
    const newErrors: Record<string, boolean> = {};
    required.forEach((f) => {
      if (!form[f as keyof typeof form]?.trim()) newErrors[f] = true;
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    const msg = `🚗 *NEW BOOKING — KIM SAFARIS*%0A%0A👤 Name: ${form.name}%0A📞 Phone: ${form.phone}%0A🛎️ Service: ${form.service}%0A📍 Pickup: ${form.pickup}%0A🏁 Drop-off: ${form.dropoff}%0A📅 Date & Time: ${form.date}%0A👥 Passengers: ${form.passengers}%0A📝 Notes: ${form.notes || "None"}%0A%0ASent via KimSafaris.com`;

    setTimeout(() => {
      window.open(`https://wa.me/255756997609?text=${msg}`, "_blank");
      setLoading(false);
    }, 800);
  };

  const inputClass = (field: string) =>
    `w-full bg-surface-2 border ${errors[field] ? "border-destructive animate-[shake_0.3s_ease-in-out]" : "border-border"} rounded-full px-4 md:px-5 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-body`;

  return (
    <main>
      <PageHero
        image={heroImage}
        title="Book Your Transfer"
        subtitle="Fill in the details and your booking goes straight to WhatsApp."
      />

      <section className="section-padding bg-background relative overflow-hidden">
        <BookingDecoration className="absolute top-0 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] text-primary" />

        <div className="container-max max-w-2xl relative z-10">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label className="block text-xs md:text-sm text-muted-foreground mb-2 font-body">Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} className={inputClass("name")} placeholder="John Doe" />
              </div>

              <div>
                <label className="block text-xs md:text-sm text-muted-foreground mb-2 font-body">Phone Number *</label>
                <input name="phone" value={form.phone} onChange={handleChange} className={inputClass("phone")} placeholder="+255 ..." type="tel" />
              </div>

              <div>
                <label className="block text-xs md:text-sm text-muted-foreground mb-2 font-body">Service Type *</label>
                <select name="service" value={form.service} onChange={handleChange} className={inputClass("service")}>
                  <option value="">Select service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs md:text-sm text-muted-foreground mb-2 font-body">Pickup Location *</label>
                <input name="pickup" value={form.pickup} onChange={handleChange} className={inputClass("pickup")} placeholder="e.g. JRO Airport" />
              </div>

              <div>
                <label className="block text-xs md:text-sm text-muted-foreground mb-2 font-body">Drop-off / Destination *</label>
                <input name="dropoff" value={form.dropoff} onChange={handleChange} className={inputClass("dropoff")} placeholder="e.g. Arusha" />
              </div>

              <div>
                <label className="block text-xs md:text-sm text-muted-foreground mb-2 font-body">Date & Time *</label>
                <input name="date" value={form.date} onChange={handleChange} className={inputClass("date")} type="datetime-local" />
              </div>

              <div>
                <label className="block text-xs md:text-sm text-muted-foreground mb-2 font-body">Number of Passengers</label>
                <select name="passengers" value={form.passengers} onChange={handleChange} className={inputClass("passengers")}>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs md:text-sm text-muted-foreground mb-2 font-body">Special Requests</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className={`${inputClass("notes")} !rounded-2xl`} placeholder="Any special requirements..." />
              </div>

              <Button variant="gold" size="lg" type="submit" className="w-full text-sm md:text-base" disabled={loading}>
                {loading ? (
                  <><Loader2 size={18} className="animate-spin" /> Sending...</>
                ) : (
                  <><Send size={18} /> Send Booking via WhatsApp</>
                )}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
