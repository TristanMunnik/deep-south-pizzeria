export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-900/90 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="Deep South Pizzeria home">
          <div className="brand-mark flex h-10 w-10 items-center justify-center rounded-full text-sm font-black">
            DS
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d9b38a] sm:text-xs">
              Deep South
            </p>
            <h1 className="text-sm font-bold text-amber-50 sm:text-base">Pizzeria</h1>
          </div>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-stone-200 md:flex">
          <a href="#home" className="transition hover:text-[#d9b38a]">Home</a>
          <a href="#menu" className="transition hover:text-[#d9b38a]">Menu</a>
          <a href="#reviews" className="transition hover:text-[#d9b38a]">Reviews</a>
          <a href="#visit" className="transition hover:text-[#d9b38a]">Visit</a>
        </nav>

        <p className="text-[1rem] font-medium text-stone-100">
          Call us: 021 180 2757
        </p>
      </div>
    </header>
  )
}

