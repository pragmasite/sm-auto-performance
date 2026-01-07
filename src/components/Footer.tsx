import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const navLinks = [
    { href: "#a-propos", label: t.about.label },
    { href: "#services", label: t.services.label },
    { href: "#galerie", label: t.gallery.label },
    { href: "#horaires", label: t.hours.label },
    { href: "#contact", label: t.contact.label },
  ];

  return (
    <footer ref={ref} className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-xl font-bold">SM Auto Performance</h3>
            <p className="text-xs font-medium tracking-widest uppercase mt-2 opacity-80">
              {t.footer.tagline}
            </p>
            <p className="mt-4 text-sm opacity-80 leading-relaxed">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest mb-4">
              {t.contact.label}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+41791548868" className="opacity-80 hover:opacity-100 transition-opacity">
                  +41 79 154 88 68
                </a>
              </li>
              <li>
                <a href="mailto:info@smautoperformance.ch" className="opacity-80 hover:opacity-100 transition-opacity">
                  info@smautoperformance.ch
                </a>
              </li>
              <li className="opacity-80">
                Route de Léchelles 92
                <br />
                1773 Russy, Suisse
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest mb-4">
              Social Media
            </h4>
            <div className="space-y-3 text-sm">
              <a href="https://www.facebook.com/Smautoperformance" target="_blank" rel="noopener noreferrer" className="block opacity-80 hover:opacity-100 transition-opacity">
                Facebook
              </a>
              <a href="https://www.instagram.com/smautoperformance" target="_blank" rel="noopener noreferrer" className="block opacity-80 hover:opacity-100 transition-opacity">
                Instagram
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/20 pt-8 text-center text-sm opacity-80"
        >
          <p>
            © {new Date().getFullYear()} SM Auto Performance. {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
