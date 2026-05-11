const BookItem = ({cover,title,author }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "14px 16px",
            borderBottom: "1px solid #2a2a2a",
            cursor: "pointer",
        }}>
            <img
                src={cover}
                alt={title}
                style={{
                    width: "60px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    flexShrink: 0,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                }}
            />
            <div>
                <p style={{
                    margin: 0,
                    color: "#ffffff",
                    fontWeight: "700",
                    fontSize: "15px",
                    lineHeight: "1.35",
                    marginBottom: "6px",
                }}>
                    {title}
                </p>
                <p style={{
                    margin: 0,
                    color: "#888888",
                    fontSize: "13px",
                }}>
                    {author}
                </p>
            </div>
        </div>
    );
};

export default BookItem;