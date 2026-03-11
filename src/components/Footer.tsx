import { Link } from "react-router-dom";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-surface-1 border-t border-border">
    <div className="container-max section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Kim Safaris Logo" className="h-8 md:h-10 w-auto" />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Tanzania's premium transfer & safari route service. Arrive in style, explore in comfort. — Kim Safaris
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "Routes", path: "/routes" },
              { label: "Book Now", path: "/booking" },
              { label: "Reviews", path: "/reviews" },
              { label: "Gallery", path: "/gallery" },
              { label: "About Us", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="tel:+255756997609" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} /> +255 756 997 609
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> Arusha, Tanzania
            </div>
            <a
              href="https://wa.me/255756997609"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © 2025 Kim Safaris. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
