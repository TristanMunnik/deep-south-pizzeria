import { useRef } from 'react'
import { reviews } from '../data/reviews'

export default function Reviews() {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        const container = scrollRef.current
        const scrollAmount = container.clientWidth
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        })
    }

    return (
        <section id="reviews" className="px-6 py-16 bg-white">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">
                What People Are Saying
            </h2>

            <div className="relative max-w-4xl mx-auto">
                <button
                    onClick={() => scroll('left')}
                    className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-slate-800 text-amber-50 w-10 h-10 rounded-full shadow-md hover:bg-slate-700"
                >
                    ←
                </button>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 scrollbar-hide"
                >
                    {reviews.map((review) => (
                        <div
                            key={review.name}
                            className="snap-start shrink-0 w-[calc(50%-12px)] bg-stone-50 rounded-lg shadow-md p-5 border border-slate-100"
                        >
                            <div className="text-slate-500 mb-2">
                                {'★'.repeat(review.rating)}
                            </div>
                            <p className="text-stone-600 text-sm mb-3">"{review.text}"</p>
                            <p className="text-slate-800 font-semibold text-sm">— {review.name}</p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-slate-800 text-amber-50 w-10 h-10 rounded-full shadow-md hover:bg-slate-700"
                >
                    →
                </button>
            </div>
        </section>
    )
}