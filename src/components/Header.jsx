export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-slate-800 shadow-md">
            <h1 className="text-xl font-bold text-amber-50">Deep South Pizzeria</h1>
            <nav className="flex gap-6 text-stone-100">
                <a href="#home" className="inline-block transition-all duration-200 hover:scale-110 hover:text-amber-200">Home</a>
                <a href="#menu" className="inline-block transition-all duration-200 hover:scale-110 hover:text-amber-200">Menu</a>
                <a href="#reviews" className="inline-block transition-all duration-200 hover:scale-110 hover:text-amber-200">Reviews</a>
                <a href="#visit" className="inline-block transition-all duration-200 hover:scale-110 hover:text-amber-200">Visit</a>
            </nav>
        </header>
    )
}



