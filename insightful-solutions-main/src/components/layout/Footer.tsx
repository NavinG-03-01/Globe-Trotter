import { Globe, Mail, Twitter, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Globe className="w-8 h-8 text-accent" />
              <span className="font-display text-xl font-semibold">
                Globe<span className="text-accent">Trotter</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Empowering travelers to dream, design, and organize their perfect journeys.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Product</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/dashboard" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/my-trips" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  My Trips
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Explore Cities
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Activities
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/help" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2025 GlobeTrotter. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Made with ❤️ for travelers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
