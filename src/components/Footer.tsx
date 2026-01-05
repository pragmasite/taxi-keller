import { useLanguage } from "@/hooks/useLanguage";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-2">Taxi Keller</h3>
            <p className="text-sm text-background/70">{t.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-background/70 hover:text-accent transition-colors">
                  {t.about.label}
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/70 hover:text-accent transition-colors">
                  {t.services.label}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/70 hover:text-accent transition-colors">
                  {t.gallery.label}
                </a>
              </li>
              <li>
                <a href="#hours" className="text-background/70 hover:text-accent transition-colors">
                  {t.hours.label}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-accent transition-colors">
                  {t.contact.label}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.contact.label}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+41768059158" className="text-background/70 hover:text-accent transition-colors">
                  +41 76 805 91 58
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@taxikeller.ch" className="text-background/70 hover:text-accent transition-colors">
                  info@taxikeller.ch
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-background/70">St. Jakobs-Str. 395<br />4052 Basel, CH</span>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">24/7</h4>
            <p className="text-sm text-background/70 mb-4">{t.footer.description}</p>
            <p className="text-xs text-background/50">{t.hero.badge}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>
            © {currentYear} Taxi Keller. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
