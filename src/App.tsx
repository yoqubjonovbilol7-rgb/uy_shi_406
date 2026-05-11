import BookItem from "./BookItem";

const books = [
    {
        id: 1,
        cover: "b2bfa98f14b7816c6d6c6a3e6815b29449f09415.png",
        title: "Shaxmatdagi qobiliyatlaringizga qayta baxo bering",
        author: "J.Silman",
    },
    {
        id: 2,
        cover: "a3d571f5e3d315ed54d2a4b920914d0b7337ee43.png",
        title: "Mening tizimim",
        author: "A.Nimzowitsch",
    },
    {
        id: 3,
        cover: "08b36d301019f18f6d957da01a0553e1e0ed14f0.png",
        title: "Zurixdagi shaxmat musobaqasi",
        author: "D.Bronstein",
    },
    {
        id: 4,
        cover: "1413fa5baf99834deb86841d0815ee89da6d7f92.png",
        title: "Mening esdaqolarlik o'yinlarim",
        author: "B.Fischer",
    },
];

const App = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#111111",
        }}>
            <div style={{
                width: "340px",
                backgroundColor: "#1a1a1a",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 16px 12px",
                }}>
          <span style={{
              color: "#ffffff",
              fontWeight: "700",
              fontSize: "18px",
          }}>
            Top kitoblar
          </span>
                    <span style={{
                        color: "#888888",
                        fontSize: "14px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                    }}>
            Barchasi ›
          </span>
                </div>

                {/* Book List */}
                <div>
                    {books.map((book) => (
                        <BookItem
                            key={book.id}
                            cover={book.cover}
                            title={book.title}
                            author={book.author}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;