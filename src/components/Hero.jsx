export default function Hero() {
  const highlights = ['Wood-fired', 'Locally loved', 'Family kitchen']

  return (
    <section id="home" className="hero-section relative overflow-hidden px-6 py-20 sm:py-24 lg:py-32">
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

      <div className="absolute inset-0 bg-slate-900/70" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b38a] sm:text-sm">
          Simon's Town favourite
        </p>
        <h2 className="hero-title mb-6 text-4xl font-black tracking-tight text-amber-50 sm:text-5xl lg:text-7xl">
          Deep South Pizzeria
        </h2>
        <p className="mx-auto max-w-2xl text-base text-stone-100 sm:text-xl">
          Authentic wood-fired pizza, vibrant toppings, and warm harbour-town hospitality served fresh every day.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#menu" className="primary-btn">
            View Menu
          </a>
          <a href="#visit" className="secondary-btn">
            Find Us
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-stone-200">
          {highlights.map((item) => (
            <span key={item} className="metric-pill">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}