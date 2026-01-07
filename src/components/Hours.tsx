import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Schedule: Mon-Sun (adjusted for JS Date.getDay() which starts at Sunday=0)
  const schedule = [
    { hours: "07:00 - 19:00" }, // Monday
    { hours: "07:00 - 19:00" }, // Tuesday
    { hours: "07:00 - 19:00" }, // Wednesday
    { hours: "07:00 - 19:00" }, // Thursday
    { hours: "07:00 - 18:00" }, // Friday
    { hours: "08:00 - 12:00" }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  // Get today's day index (0 = Sunday, 6 = Saturday)
  // Convert to our schedule index (0 = Monday, 6 = Sunday)
  const jsDay = new Date().getDay();
  const todayIndex = jsDay === 0 ? 6 : jsDay - 1;

  return (
    <section id="horaires" ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <div className="mb-8 text-center">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">
              {t.hours.label}
            </span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold">
              {t.hours.title}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-border bg-background shadow-soft overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-bold text-primary">
                {t.hours.header}
              </span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.3 + i * 0.03 }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        </motion.div>
                      )}
                      <span className={`font-medium ${isToday ? "text-primary font-semibold" : "text-foreground"}`}>
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span className={`font-medium ${isClosed ? "text-muted-foreground" : "text-foreground"}`}>
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
