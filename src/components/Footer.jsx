export default function Footer() {
  return (
    <footer
      className="relative flex items-center justify-center px-6 py-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/Pizzeria.jpg')" }}
    >
      <div className="absolute inset-0 bg-slate-900/80"></div>

      <div className="relative z-10 text-center text-stone-100">
        <p className="font-bold text-amber-50 mb-1">Deep South Pizzeria</p>
        <p className="text-sm">Shop GF03, Harbour Bay Centre, Simon's Town</p>
        <p className="text-sm mt-2">© 2026 Deep South Pizzeria</p>
      </div>
    </footer>
  )
}