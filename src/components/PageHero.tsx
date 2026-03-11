import { motion } from "framer-motion";

interface PageHeroProps {
  image: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const PageHero = ({ image, title, subtitle, children }: PageHeroProps) => (
  <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-surface-1">
    {/* Split Background Effect */}
    <div className="absolute inset-y-0 right-0 w-full md:w-[65%] lg:w-[70%] h-full z-0">
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        loading="eager"
        initial={{ scale: 1.1, x: 20, opacity: 0 }}
        animate={{ scale: 1, x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-1 via-surface-1/80 md:via-surface-1/40 to-transparent z-10" />
      <div className="absolute inset-0 hero-overlay opacity-60 z-10" />
      <div className="absolute inset-0 grain-overlay z-10" />
    </div>

    {/* Content Container */}
    <div className="container-max relative z-20 w-full pt-28 md:pt-32 pb-16">
      <div className="max-w-2xl text-left">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-16 h-[2px] bg-primary mb-6 origin-left"
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight uppercase tracking-wide"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg sm:text-xl md:text-2xl mb-8 font-light max-w-xl"
        >
          {subtitle}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent z-20 opacity-50" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-8 right-8 z-20 hidden md:block"
    >
      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm">
        <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
      </div>
    </motion.div>
  </section>
);

export default PageHero;
