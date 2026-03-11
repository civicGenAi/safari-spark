import { motion } from "framer-motion";

interface PageHeroProps {
  image: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const PageHero = ({ image, title, subtitle, children }: PageHeroProps) => (
  <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 hero-overlay" />
    <div className="absolute inset-0 grain-overlay" />
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-muted-foreground text-lg sm:text-xl mb-8"
      >
        {subtitle}
      </motion.p>
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  </section>
);

export default PageHero;
