import { motion } from 'framer-motion'
import { Truck, Car, Home } from 'lucide-react'
import { memo } from 'react'

const ServiceCard = memo(({ service, index }: { service: any, index: number }) => (
  <motion.div
    key={service.title}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="relative group"
  >
    <div className="relative h-64 w-full overflow-hidden rounded-lg">
      <img
        src={service.image}
        alt={service.title}
        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
    </div>
    <div className="relative bg-white p-6 -mt-12 mx-4 rounded-lg shadow-lg">
      <div className="absolute -top-4 left-4">
        <div className="inline-flex p-2 rounded-lg bg-swedish-blue text-white">
          <service.icon className="h-6 w-6" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">{service.title}</h3>
      <div className="text-gray-600 whitespace-pre-line">{service.description}</div>
    </div>
  </motion.div>
))

const services = [
  {
    title: "Maskiner/Entreprenad",
    description: "Vi specialiserar oss på alla typer av entreprenadmaskiner och utrustning. Vår expertis omfattar grävmaskiner, lastmaskiner, dumpers och andra tunga maskiner för byggbranschen.",
    image: "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Truck
  },
  {
    title: "Personbilar/Sportbilar",
    description: "Från lyxiga personbilar till exklusiva sportbilar, vi har expertisen för att hantera högpresterande fordon och erbjuder professionell värdering och förmedling.",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Car
  },
  {
    title: "Försäljning Bilar",
    description: "Vi erbjuder professionell bilförsäljning med personlig service. Kontakta Robert Gustafsson på 0737-291549 eller robert@sthfordonmaskin.se för mer information.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Car
  },
  {
    title: "Husbilar/Husvagnar",
    description: `Vi är specialister på husbilar och husvagnar av alla storlekar och märken. Vi hjälper dig hitta det perfekta fritidsfordonet för dina behov.

Vi åtar oss förmedlingsuppdrag. Att som privatperson sälja en husbil/husvagn kan både var krångligt, jobbigt och tidskrävande. Låt oss ta hand om er försäljning så ni slipper hantera tröttsama telefonsamtal, oseriösa köpare, långa provkörningar, prutare och ansträngande förhandlingar.

Här följer flera starka skäl att anlita oss:

• Som handlare får vi ut betydligt mer för ditt objekt än vad du får privat. Genom våra kontakter, vår kundkrets samt annonser på de största annonssajterna bytbil.se och blocket.se kommer ditt objekt att synas för köpare i hela landet.

• Vi tar fullt ansvar för försäljningen. Du som säljare behöver inte bekymra dig om fordonet går sönder efter ett kort tag då vi lämnar garanti på alla fordon vi säljer.

• Vi ordnar även med finansieringsupplägg till köparen. När säljfinansiering kan erbjudas ökar sannolikheten att fler spekulanter visar intresse.

• Du slipper de vemödor och undviker de fallgropar som det kan innebära att sälja ditt fordon privat.

• Vi säljer majoriteten av våra förmedlingsuppdrag inom 30 dagar.`,
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: Home
  },
]

export default function Services() {
  return (
    <div id="tjanster" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-swedish-blue">Våra tjänster</h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
