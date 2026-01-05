import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Translate descriptions based on language
  const imageDescriptions = {
    de: [
      "Mercedes Taxi am Terminal",
      "Professional Taxi Service",
      "Modern Fleet",
      "Airport Transfer",
      "Basel City Service",
    ],
    en: [
      "Mercedes Taxi at Terminal",
      "Professional Taxi Service",
      "Modern Fleet",
      "Airport Transfer",
      "Basel City Service",
    ],
  };

  const descriptions = imageDescriptions[t as unknown as 'de' | 'en'];

  const images = [
    { src: "/images/img-1.jpg", alt: descriptions[0] },
    { src: "/images/img-2.jpg", alt: descriptions[1] },
    { src: "/images/img-5.jpg", alt: descriptions[4] },
    { src: "/images/img-4.jpg", alt: descriptions[3] },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t.gallery.title}</h2>
          <p className="text-muted-foreground">{t.gallery.description}</p>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }} className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-foreground">
            <img src={images[currentSlide].src} alt={images[currentSlide].alt} className="h-full w-full object-cover" />

            {/* Image Description */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
              <p className="text-white font-medium">{images[currentSlide].alt}</p>
            </div>

            {/* Navigation Buttons */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className={`h-2 rounded-full transition-all ${currentSlide === i ? "w-8 bg-white" : "w-2 bg-white/50"}`} />
              ))}
            </div>
          </motion.div>

          {/* Thumbnail Grid */}
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="grid grid-cols-4 gap-4 mt-8">
            {images.map((img, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`group relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${currentSlide === i ? "border-primary" : "border-border hover:border-primary"}`}>
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover group-hover:scale-110 transition-transform" />
                <div className={`absolute inset-0 ${currentSlide === i ? "bg-primary/20" : "bg-transparent"}`} />
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
