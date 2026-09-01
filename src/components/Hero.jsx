

export default function Hero() {
  return (
    <section id="home" className="relative px-6 py-32 text-center overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-3">
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('/Pizza4.jpg')" }}
        ></div>
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('/Pizza2.jpg')" }}
        ></div>
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('/Pizza3.jpg')" }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-slate-900/60"></div>

      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-amber-50 mb-4">
          Deep South Pizzeria
        </h2>
        <p className="text-lg text-stone-100 max-w-xl mx-auto">
          Authentic wood-fired pizza in the heart of Simon's Town.
        </p>
      </div>
    </section>
  )
}