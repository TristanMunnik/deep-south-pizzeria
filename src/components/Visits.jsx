export default function Visit() {
    return (
        <section id="visit" className="px-4 py-8 bg-slate-200">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">
                Visit Us
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-8 max-w-3xl mx-auto">
                <img
                    src="/Pizzeria.jpg"
                    alt="Deep South Pizzeria storefront"
                    className="w-full sm:w-64 h-64 object-cover rounded-lg shadow-md"
                />

                <div className="text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Address</h3>
                    <p className="text-stone-600 mb-4">
                        Shop GF03, Harbour Bay Centre<br />
                        Cnr Main Road & Dido Valley Road<br />
                        Simon's Town, 7975
                    </p>

                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Hours</h3>
                    <p className="text-stone-600 mb-4">Monday – Sunday, 12:00 – 20:00</p>

                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Contact</h3>
                    <p className="text-stone-600">021 180 2757</p>
                </div>
            </div>
        </section>
    )
}