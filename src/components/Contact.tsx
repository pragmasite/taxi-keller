import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 76 805 91 58",
      href: "tel:+41768059158",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "info@taxikeller.ch",
      href: "mailto:info@taxikeller.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "St. Jakobs-Strasse 395, 4052 Basel, CH",
      href: "https://maps.google.com/?q=St.+Jakobs-Strasse+395+4052+Basel",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.contact.description}</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="space-y-6">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.a key={i} href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="group flex items-start gap-4 p-6 rounded-lg border border-border hover:border-primary hover:shadow-medium transition-all">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} className="mt-8">
              <Button asChild size="lg" className="w-full">
                <a href="tel:+41768059158">
                  <Phone className="mr-2 h-5 w-5" />
                  {t.contact.callNow}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Google Maps */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden h-[500px] shadow-medium">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.1234567891234!2d7.619071!3d47.541102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479065c5f5f5f5f5%3A0x1234567890abcdef!2sTaxi%20Keller!5e0!3m2!1sde!2sch!4v1234567890123"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
