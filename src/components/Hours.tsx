import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Taxi is always open (24/7)
  const schedule = [
    { hours: "00:00 - 23:59" }, // Monday
    { hours: "00:00 - 23:59" }, // Tuesday
    { hours: "00:00 - 23:59" }, // Wednesday
    { hours: "00:00 - 23:59" }, // Thursday
    { hours: "00:00 - 23:59" }, // Friday
    { hours: "00:00 - 23:59" }, // Saturday
    { hours: "00:00 - 23:59" }, // Sunday
  ];

  const todayIndex = new Date().getDay();
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1; // Convert Sunday 0 to 6

  return (
    <section id="hours" ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-primary">{t.hours.label}</span>
            <h2 className="font-serif text-3xl md:text-4xl">{t.hours.title}</h2>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6 }} className="rounded-2xl border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-bold">{t.hours.header}</span>
            </div>

            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === adjustedTodayIndex;
                return (
                  <motion.div key={i} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: i * 0.05 }} className={`px-6 py-4 flex justify-between items-center ${isToday ? "bg-primary/5" : ""}`}>
                    <div className="flex items-center gap-3">
                      {isToday && <CheckCircle className="h-4 w-4 text-primary" />}
                      <span className={`${isToday ? "font-bold text-primary" : ""}`}>{t.hours.days[i]}</span>
                      {isToday && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{t.hours.today}</span>}
                    </div>
                    <span className="font-medium text-accent">{item.hours}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* 24/7 Banner */}
            <div className="bg-accent/10 px-6 py-4 text-center border-t">
              <p className="text-sm font-medium text-accent">24/7 {t.nav.call} - {t.hero.badge}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
