import { Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const recipients = [
  { name: 'Maskiner/Entreprenad', email: 'arne@sthfordonmaskin.se' },
  { name: 'Personbilar/Sportbilar', email: 'anders@sthfordonmaskin.se' },
  { name: 'Husbilar/Husvagnar', email: 'peter@sthfordonmaskin.se' },
  { name: 'Försäljning Bilar', email: 'robert@sthfordonmaskin.se' }
]

const contactCards = [
  {
    title: 'Maskiner/Entreprenad',
    name: 'Arne',
    phone: '0720-314833',
    email: 'arne@sthfordonmaskin.se'
  },
  {
    title: 'Personbilar/Sportbilar',
    name: 'Anders',
    phone: '0728-430692',
    email: 'anders@sthfordonmaskin.se'
  },
  {
    title: 'Husbilar/Husvagnar',
    name: 'Peter',
    phone: '0707-795548',
    email: 'peter@sthfordonmaskin.se'
  },
  {
    title: 'Försäljning Bilar',
    name: 'Robert Gustafsson',
    phone: '0737-291549',
    email: 'robert@sthfordonmaskin.se'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    recipient: recipients[0].email
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', message: '', recipient: recipients[0].email })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div id="kontakt" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-swedish-blue">Kontakta oss</h2>
          <p className="mt-4 text-xl text-gray-600">Vi är här för att hjälpa dig med alla dina fordonsbehov</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactCards.map((card) => (
              <div key={card.title} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <Phone className="h-8 w-8 text-swedish-blue" />
                  <div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-lg text-gray-600">{card.name}: {card.phone}</p>
                    <p className="text-lg text-gray-600">{card.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="recipient" className="block text-lg font-medium text-gray-700 mb-2">
                  Välj avdelning
                </label>
                <select
                  id="recipient"
                  name="recipient"
                  value={formData.recipient}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg rounded-lg border-gray-300 shadow-sm focus:border-swedish-blue focus:ring-swedish-blue"
                  required
                >
                  {recipients.map((recipient) => (
                    <option key={recipient.email} value={recipient.email}>
                      {recipient.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                  Namn
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg rounded-lg border-gray-300 shadow-sm focus:border-swedish-blue focus:ring-swedish-blue"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                  E-post
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg rounded-lg border-gray-300 shadow-sm focus:border-swedish-blue focus:ring-swedish-blue"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg rounded-lg border-gray-300 shadow-sm focus:border-swedish-blue focus:ring-swedish-blue"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                  Meddelande
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg rounded-lg border-gray-300 shadow-sm focus:border-swedish-blue focus:ring-swedish-blue"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-swedish-blue text-white text-lg font-medium rounded-lg hover:bg-swedish-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-swedish-blue transition-colors duration-200"
              >
                <span>Skicka meddelande</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 