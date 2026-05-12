function NewsItem({ image, date }) {
    return (
        <article className="bg-[#1A1D1F] rounded-xl p-3 flex flex-col gap-3">

            <img
                src={image}
                alt="News item image"
                className="w-full h-[180px] object-cover rounded-lg"
            />

            <section className="flex flex-col gap-2">

                <p className="text-sm text-[#F7F9FA]/40">
                    {date}
                </p>

                <h3 className="text-[15px] text-white font-semibold leading-6">
                    Nodirbek Abdusattorov FIDE jonli reytingida
                    2700 balldan o‘tdi
                </h3>

                <p className="text-sm text-[#9DA1A3] leading-6">
                    O‘zbekistonlik yosh grossmeyster Turkiyada
                    o‘tkazilgan shaxmat olimpiadasida ikkita
                    g‘alaba qozondi lorem ipsum dolor sit amet.
                </p>

            </section>
        </article>
    );
}

export default NewsItem;
