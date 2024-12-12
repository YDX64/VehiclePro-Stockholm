export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Stockholm Fordon och Byggentreprenad AB. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  )
}
