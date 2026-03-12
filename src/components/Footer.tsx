import { Link } from "react-router-dom";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-1 border-t border-border">
      <div className="container-max section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <img src="/logo.png" alt="Kim Safaris Logo" className="h-12 md:h-20 w-auto" />
            </div>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              Tanzania's premium transfer & safari route service. Arrive in style, explore in comfort. — Kim Safaris
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold mb-3 md:mb-4 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2 md:gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "Routes", path: "/routes" },
                { label: "Book Now", path: "/booking" },
                { label: "Reviews", path: "/reviews" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <Link key={l.path} to={l.path} className="text-muted-foreground text-xs md:text-sm hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Learn More */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold mb-3 md:mb-4 text-foreground">Learn More</h4>
            <div className="flex flex-col gap-2 md:gap-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
              ].map((l) => (
                <Link key={l.path} to={l.path} className="text-muted-foreground text-xs md:text-sm hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-display text-base md:text-lg font-semibold mb-3 md:mb-4 text-foreground">Contact</h4>
            <div className="flex flex-col gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
              <a href="tel:+255756997609" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} className="md:w-4 md:h-4" /> +255 756 997 609
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="md:w-4 md:h-4" /> Arusha, Tanzania
              </div>
              <a
                href="https://wa.me/255756997609"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MessageCircle size={14} className="md:w-4 md:h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border text-center text-[10px] md:text-sm text-muted-foreground">
          © {currentYear} Kim Safaris. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
