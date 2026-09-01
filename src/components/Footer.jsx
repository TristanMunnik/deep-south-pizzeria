export default function Footer() {
  return (
    <footer
      className="relative flex items-center justify-center bg-cover bg-center px-6 py-16"
      style={{ backgroundImage: "url('/Pizzeria.jpg')" }}
    >
      <div className="absolute inset-0 bg-slate-900/80" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl text-center text-stone-100">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.26em] text-amber-200">
          Deep South Pizzeria
        </p>
        <h3 className="mb-4 text-3xl font-black text-amber-50">Fresh pizza, warm hospitality</h3>
        <p className="mx-auto max-w-xl text-sm text-stone-200">
          Shop GF03, Harbour Bay Centre, Simon's Town • Wood-fired favourites and family-friendly takeaway.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-stone-100">
          <a href="tel:0211802757" className="hover:text-amber-200">021 180 2757</a>
          <span>•</span>
          <a href="#menu" className="hover:text-amber-200">View Menu</a>
          <span>•</span>
          <a href="#visit" className="hover:text-amber-200">Find Us</a>
        </div>

        <p className="mt-8 text-sm text-stone-300">© 2026 Deep South Pizzeria</p>
      </div>
    </footer>
  )
}