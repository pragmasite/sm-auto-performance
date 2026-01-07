import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: "/images/img-1.jpg", alt: t.gallery.images[0].alt },
    { src: "/images/img-3.jpg", alt: t.gallery.images[1].alt },
    { src: "/images/img-4.jpg", alt: t.gallery.images[2].alt },
    { src: "/images/hero-bg.jpg", alt: "Atelier professionnel" },
  ];

  return (
    <section id="galerie" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            {t.gallery.label}
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-bold">
            {t.gallery.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.05 * index }}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <p className="mt-4 text-center text-white text-sm">
              {images[selectedImage].alt}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
