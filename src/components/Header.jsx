import { useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#visit', label: 'Location' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

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
            <p className="text-sm font-bold text-amber-50 sm:text-base">Pizzeria</p>
          </div>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-stone-200 md:flex" aria-label="Main">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[#d9b38a]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:0211802757" className="text-sm font-medium text-stone-100 hover:text-[#d9b38a] sm:text-base">
            <span className="hidden sm:inline">Call us: </span>021 180 2757
          </a>

          <button
            type="button"
            className="rounded-md p-2 text-stone-100 md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="border-t border-slate-700 px-4 py-2 md:hidden" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-stone-200 hover:text-[#d9b38a]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
