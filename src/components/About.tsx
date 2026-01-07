import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { label: t.about.stat1, value: "15+" },
    { label: t.about.stat2, value: "500+" },
    { label: t.about.stat3, value: "100%" },
  ];

  return (
    <section
      id="a-propos"
      ref={ref}
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-widest text-primary font-medium">
              {t.about.label}
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold">
              {t.about.title1}
              <br />
              <span className="text-accent">{t.about.title2}</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              {t.about.p1}
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.about.p2}
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="font-serif text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {t.about.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="rounded-lg border border-border bg-card p-6 hover:shadow-soft transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
