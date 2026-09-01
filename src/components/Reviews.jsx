import { reviews } from '../data/reviews'

export default function Reviews() {
    return (
        <section id="reviews" className="bg-white px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                        Loved by locals
                    </p>
                    <h2 className="text-3xl font-black text-slate-800 sm:text-4xl">
                        What People Are Saying
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {reviews.map((review) => (
                        <article key={review.name} className="review-card">
                            <div className="mb-4 text-lg text-amber-500" aria-label={`${review.rating} out of 5 stars`}>
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