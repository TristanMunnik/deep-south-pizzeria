import { useRef } from 'react'
import { reviews } from '../data/reviews'

export default function Reviews() {
    const sliderRef = useRef(null)

    const scrollSlider = (direction) => {
        const container = sliderRef.current
        if (!container) return

        const firstCard = container.querySelector('.review-card')
        if (!firstCard) return

        const gap = 24
        const cardWidth = firstCard.getBoundingClientRect().width + gap

        container.scrollBy({
            left: direction === 'next' ? cardWidth : -cardWidth,
            behavior: 'smooth',
        })
    }

    return (
        <section id="reviews" className="bg-white px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex flex-col items-center justify-between gap-5 text-center sm:mb-10 sm:flex-row sm:text-left">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8d5b3c]">
                            Loved by locals
                        </p>
                        <h2 className="text-3xl font-black text-slate-800 sm:text-4xl">
                            What People Are Saying
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            aria-label="Previous reviews"
                            onClick={() => scrollSlider('prev')}
                            className="review-nav-btn"
                        >
                            ←
                        </button>
                        <button
                            type="button"
                            aria-label="Next reviews"
                            onClick={() => scrollSlider('next')}
                            className="review-nav-btn"
                        >
                            →
                        </button>
                    </div>
                </div>

                <div ref={sliderRef} className="review-slider">
                    {reviews.map((review) => (
                        <article key={review.name} className="review-card">
                            <div className="mb-4 text-lg text-[#b9804a]" aria-label={`${review.rating} out of 5 stars`}>
                                {'★'.repeat(review.rating)}
                            </div>
                            <p className="mb-5 text-sm leading-7 text-stone-600">“{review.text}”</p>
                            <p className="text-sm font-semibold text-slate-800">— {review.name}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}