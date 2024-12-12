import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-swedish-blue/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-swedish-yellow rounded-full flex items-center justify-center">
                <span className="text-swedish-blue font-bold text-xl">SF</span>
              </div>
              <h1 className="text-xl font-bold text-white whitespace-nowrap">
                Stockholm Fordon
              </h1>
            </div>
          </motion.div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-swedish-yellow hover:bg-swedish-blue/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-swedish-yellow"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:flex sm:items-center sm:space-x-8"
          >
            <a 
              href="#tjanster" 
              className="text-white hover:text-swedish-yellow transition-colors relative group"
            >
              Tjänster
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-swedish-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a 
              href="#kontakt" 
              className="text-white hover:text-swedish-yellow transition-colors relative group"
            >
              Kontakt
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-swedish-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:hidden bg-swedish-blue"
        >
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#tjanster"
              className="block px-3 py-2 text-base font-medium text-white hover:text-swedish-yellow hover:bg-swedish-blue/80"
              onClick={() => setIsOpen(false)}
            >
              Tjänster
            </a>
            <a
              href="#kontakt"
              className="block px-3 py-2 text-base font-medium text-white hover:text-swedish-yellow hover:bg-swedish-blue/80"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
