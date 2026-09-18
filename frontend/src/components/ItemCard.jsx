//ItemCard component: reusable card that displays any product passed to it!!
//accept prop: onToggleSale
//add a "Toggle Sale" button next to the Delete button!

function ItemCard({id, title, price, isOffer, category, onDelete, onToggleSale}) {
    return (
        <div style={{
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            padding: "16px",
            margin: "10px",
            width: "220px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            background: isOffer ? "#fef3c7": "white", //yellow highlight if it's an offerrr
            transition: "background 0.3s ease",
            color: "#0f172a"
            }}>
            <h3 style={{margin: "0 0 8px 0"}}> {title}</h3>
            <p style={{color: "#475569", margin: "4px 0"}}> Category: {category}</p>
            <p style={{fontSize: "18px", fontWeight: "bold", margin: "8px 0", color: "#0f172a"}}> RM {price}</p>

            {isOffer && <span style={{background: "#ef4444", color: "white", padding: "2px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold"}}> ON SALEZZ!!!</span>}

            {/*action buttons: UPDATE and DELETE */}
            <div style={{display: "flex", gap: "8px", marginTop: "14px"}}>

            {/*Day 28 - UPDATE (Toggle Sale)*/}
            <button
            onClick={() => onToggleSale(id, isOffer)}
            style={{
                flex:1,
                background:isOffer ? "#e2e8f0":"#dbeafe",
                color:isOffer ? "#475569":"#1d4ed8",
                border: "none",
                padding: "6px 8px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "11px",
                fontWeight: "bold"
            }}>{isOffer ? "End Sale" : "Put on Sale"}</button>

            {/*Day 24- adding delete button! calls onDelete with this item's id */}
            {/*<button
            onClick={() => Day24onDelete(id)}
            style={{
                display: "block",
                marginTop: "12px",
                background: "#fee2e2",
                color: "#dc2626",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "bold"
            }}
            >
                Delete ❌
            </button>*/}

            {/*Day 28- DELETE */}
            <button
            onClick={() => onDelete(id)}
            style={{
                background: "#fee2e2",
                color: "#dc2626",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "11px",
                fontWeight: "bold"
            }}>Delete ❌</button>
            </div>
        </div>
    );
}

export default ItemCard;
