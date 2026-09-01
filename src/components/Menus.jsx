import { menuItems } from '../data/menu'

export default function Menu() {
  return (
    <section id="menu" className="px-6 py-16 bg-stone-50">
      <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">
        Our Menu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-lg shadow-md p-5 border border-slate-100 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:border-slate-200"
          >
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-lg font-semibold text-slate-800">{item.name}</h3>
              <span className="text-amber-700 font-bold">R{item.price}</span>
            </div>
            <p className="text-stone-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}