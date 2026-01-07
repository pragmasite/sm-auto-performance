import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            {t.services.label}
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold">
            {t.services.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.05 * index }}
              className="group rounded-lg border border-border bg-background p-8 hover:shadow-medium hover:border-accent transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Wrench className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
