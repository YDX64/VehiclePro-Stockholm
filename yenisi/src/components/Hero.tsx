import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative bg-swedish-blue overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          className="w-full h-full object-cover object-center opacity-20"
          alt="Luxury car background"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-swedish-blue/80 to-swedish-blue/60" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl whitespace-nowrap">
            Stockholm Fordon och <span className="text-swedish-yellow">Byggentreprenad AB</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-xl text-gray-300"
          >
            Vi har många års erfarenhet inom branschen. Vi köper, byter, säljer samt förmedlar alla slags fordon.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-swedish-blue bg-swedish-yellow hover:bg-swedish-yellow/90 transform transition-all hover:scale-105 hover:shadow-lg"
            >
              Kontakta oss
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
