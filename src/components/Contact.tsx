import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 79 154 88 68",
      href: "tel:+41791548868",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "info@smautoperformance.ch",
      href: "mailto:info@smautoperformance.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Route de Léchelles 92, 1773 Russy, Suisse",
      href: "https://maps.google.com/?q=46.835282,7.000323",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            {t.contact.label}
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.label === t.contact.address ? "_blank" : undefined}
                  rel={info.label === t.contact.address ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 hover:shadow-soft hover:border-accent transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="mt-1 font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Button asChild size="lg" className="w-full">
                <a href="tel:+41791548868">
                  <Phone className="mr-2 h-5 w-5" />
                  {t.contact.cta}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-soft h-full min-h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.1234567890!2d7.000323!3d46.835282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e9e8e9e9e9e9d%3A0x1234567890abcdef!2sRoute%20de%20L%C3%A9chelles%2092%2C%201773%20Russy!5e0!3m2!1sfr!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
