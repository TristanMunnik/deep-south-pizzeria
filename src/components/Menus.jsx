import { menuItems } from '../data/menu'

export default function Menu() {
  return (
    <section id="menu" className="px-4 py-16 bg-stone-50 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8d5b3c]">
            Signature favourites
          </p>
          <h2 className="text-3xl font-black text-slate-800 sm:text-4xl">
            Our Menu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
          {menuItems.map((item) => (
            <article key={item.name} className="menu-card">
              <div className="menu-card-header flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h3 className="text-lg font-bold text-slate-800">{item.name}</h3>
                  {item.featured && <span className="menu-badge">Most loved</span>}
                </div>
                <span className="price-tag">R{item.price}</span>
              </div>
              <p className="text-sm leading-6 text-stone-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}