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
                            image="df14d30f67804e54a957bcbbabd9a35d04fb52e0.png"
                            title="Nodirbek Abdusattorov FIDE reytingida yuqoriladi"
                        />

                        <NewsItem
                            date="Sentabr 8, 2023"
                            image="c687108248533be0ee3231e0baf151a013e85043.png"
                            title="“Qo‘shnilarning buyuk jasorati”: Rossiyalik grossmeyster o‘zbek shaxmatining g‘alab..."
                        />

                        <NewsItem
                            date="Sentabr 9, 2022"
                            image="3ada3f89a86a9ac6e48c392904e3ba6bfe5e5bee.png"
                            title="O‘zbekiston shaxmatchilari olimpiadada Armanistonlik raqiblarini mag‘lub etishdi"
                        />

                        <NewsItem
                            date="Sentabr 10, 2025"
                            image="3ada3f89a86a9ac6e48c392904e3ba6bfe5e5bee.png"
                            title="Yosh grossmeyster yangi rekord qayd etdi"
                        />

                        <NewsItem
                            date="Sentabr 11, 2022"
                            image="eff9b8e21db4f39b46c999830d22cd642436feaf.png"
                            title="Shaxmat olimpiadasida tarixiy natija qayd etildi"
                        />

                        <NewsItem
                            date="Sentabr 12, 2022"
                            image="4a2175a2e0f9e3f22e55b8ae03f35e5e8def138f.png"
                            title="O‘zbekiston terma jamoasi kuchli uchlikka kirdi"
                        />

                        <NewsItem
                            date="Sentabr 13, 2022"
                            image="c687108248533be0ee3231e0baf151a013e85043.png"
                            title="Magnus Carlsen yangi bayonot bilan chiqdi"
                        />

                        <NewsItem
                            date="Sentabr 14, 2022"
                            image="0bd06861c9a0a64331e9cac149a7c53b5949ce23.png"
                            title="Toshkentda xalqaro shaxmat turniri boshlandi"
                        />

                        <NewsItem
                            date="Sentabr 15, 2022"
                            image="3ada3f89a86a9ac6e48c392904e3ba6bfe5e5bee.png"
                            title="Nodirbek rapid yo‘nalishida chempion bo‘ldi"
                        />

                        <NewsItem
                            date="Sentabr 16, 2022"
                            image="eff9b8e21db4f39b46c999830d22cd642436feaf.png"
                            title="Yangi FIDE reytingi e’lon qilindi"
                        />

                        <NewsItem
                            date="Sentabr 17, 2022"
                            image="c687108248533be0ee3231e0baf151a013e85043.png"
                            title="Jahon chempionatida kuchli bahslar davom etmoqda"
                        />

                        <NewsItem
                            date="Sentabr 18, 2022"
                            image="df14d30f67804e54a957bcbbabd9a35d04fb52e0.png"
                            title="Shaxmat bo‘yicha yangi loyiha ishga tushdi"
                        />
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