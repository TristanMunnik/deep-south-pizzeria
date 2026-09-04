export default function Visit() {
    return (
        <section id="visit" className="bg-slate-200 px-6 py-20">
            <div className="mx-auto max-w-5xl">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-black text-slate-800 sm:text-4xl">Visit Us</h2>
                </div>

                <div className="grid items-center gap-8 rounded-3xl bg-white p-6 shadow-lg shadow-slate-300/50 sm:p-8 lg:grid-cols-[1.1fr_1.3fr]">
                    <img
                        src="/Pizzeria.jpg"
                        alt="Deep South Pizzeria storefront"
                        className="visit-photo"
                    />

                    <div className="text-center sm:text-left">
                        <div className="mb-6">
                            <h3 className="mb-2 text-lg font-bold text-slate-800">Address</h3>
                            <p className="text-stone-600">
                                Shop GF03, Harbour Bay Centre<br />
                                Cnr Main Road & Dido Valley Road<br />
                                Simon's Town, 7975
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="mb-2 text-lg font-bold text-slate-800">Hours</h3>
                            <p className="text-stone-600">Monday – Sunday, 12:00 – 20:00</p>
                        </div>

                        <div className="mb-7">
                            <h3 className="mb-2 text-lg font-bold text-slate-800">Contact</h3>
                            <p className="text-stone-600">021 180 2757</p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:justify-start">
                            <a
                                href="https://www.google.com/search?q=Deep+South+Pizzeria+Simon%27s+Town"
                                target="_blank"
                                rel="noreferrer"
                                className="primary-btn w-full sm:w-auto"
                            >
                                View on Google
                            </a>
                            <a href="#home" className="secondary-btn w-full sm:w-auto">
                                Back to Top
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}