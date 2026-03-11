import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/255756997609"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center gold-glow-strong hover:scale-110 transition-transform duration-300 group"
    aria-label="Chat on WhatsApp"
  >
    <span className="absolute inset-0 rounded-full bg-primary/40 animate-pulse-ring" />
    <MessageCircle size={26} className="text-primary-foreground relative z-10" />
  </a>
);

export default WhatsAppFloat;
