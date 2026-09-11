//ItemCard component: reusable card that displays any product passed to it!!

function ItemCard({title, price, isOffer, category}) {
    return (
        <div style={{
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            padding: "16px",
            margin: "10px",
            width: "220px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            background: isOffer ? "#fef3c7": "white" //yellow highlight if it's an offerrr
            }}>
            <h3 style={{margin: "0 0 8px 0"}}> {title}</h3>
            <p style={{color: "#475569", margin: "4px 0"}}> Category: {category}</p>
            <p style={{fontSize: "18px", fontWeight: "bold", margin: "8px 0", color: "#0f172a"}}> RM {price}</p>
            {isOffer && <span style={{background: "#ef4444", color: "white", padding: "2px 8px", borderRadius: "4px", fontSize: "12px"}}> ON SALEZZ!!!</span>}
        </div>
    );
}

export default ItemCard;
