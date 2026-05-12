import NewsItem from "./News";
import BookItem from "./BookItem";

export default function App() {
    return (
        <div className="min-h-screen bg-[#111315] text-white p-5">

            <div className="max-w-[1400px] mx-auto flex gap-5">
                <section className="flex-1">
                    <div className="flex items-center justify-between mb-5">

                        <h1 className="text-3xl font-bold">Yangiliklar</h1>
                        <div className="relative">

                            <img
                                src="/icon.jpg"
                                alt="search"
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60"
                            />

                            <input
                                type="text"
                                placeholder="Izlash"
                                className="bg-[#1A1D1F] pl-10 pr-4 py-2 rounded-lg outline-none text-white"
                            />

                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

                        <NewsItem
                            date="Sentabr 7, 2022"
                            image="/image.png"
                        />

                        <NewsItem
                            date="Sentabr 8, 2023"
                            image="/image2.png"
                        />

                        <NewsItem
                            date="Sentabr 9, 2022"
                            image="/image.png"
                        />

                        <NewsItem
                            date="Sentabr 10, 2025"
                            image="/image2.png"
                        />

                        <NewsItem
                            date="Sentabr 11, 2022"
                            image="/image.png"
                        />

                        <NewsItem date="Sentabr 12, 2022" image="/image2.png"/>
                        <NewsItem date="Sentabr 13, 2022" image="/image.png"/>
                        <NewsItem date="Sentabr 14, 2022" image="/image2.png"/>
                        <NewsItem date="Sentabr 15, 2022" image="/image.png"/>
                        <NewsItem date="Sentabr 16, 2022" image="/image2.png"/>
                        <NewsItem date="Sentabr 17, 2022" image="/image.png"/>
                        <NewsItem date="Sentabr 18, 2022" image="/image2.png"/>

                    </div>
                </section>

                <aside className="w-[300px] hidden lg:block pt-70">
                    <div className="bg-[#1A1D1F] rounded-xl p-4">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="font-semibold text-lg text-white">Top kitoblar</h2>
                            <button className="text-sm text-gray-400 hover:text-white transition">Barchasi ›</button>
                        </div>

                        <div className="flex flex-col gap-5">
                            <BookItem image="b2bfa98f14b7816c6d6c6a3e6815b29449f09415.png"
                                      title="Shaxmatdagi qobiliyatingizga qayta baho bering"
                                      author="J.Silmon"
                            />

                            <BookItem
                                image="a3d571f5e3d315ed54d2a4b920914d0b7337ee43.png"
                                title="Mening tizimim"
                                author="A.Nimzowitsch"
                            />

                            <BookItem
                                image="08b36d301019f18f6d957da01a0553e1e0ed14f0.png"
                                title="Zurixdagi shaxmat musobaqasi"
                                author="D.Bronstein"
                            />

                            <BookItem
                                image="1413fa5baf99834deb86841d0815ee89da6d7f92.png"
                                title="Mening esda qolarli o‘yinlarim"
                                author="B.Fischer"
                            />

                        </div>

                    </div>
                </aside>

            </div>
        </div>
    );
}