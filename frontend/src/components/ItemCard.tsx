/*ItemCard component: reusable card that displays any product passed to it!!
-accept prop: onToggleSale
-add a "Toggle Sale" button next to the Delete button!

Day 33
Renamed from ItemCard.jsx to ItemCard.tsx
*/

/*
function oldItemCard({id, title, price, isOffer, category, onDelete, onToggleSale}) {
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
            */

            
            {/*action buttons: UPDATE and DELETE */}
            //<div style={{display: "flex", gap: "8px", marginTop: "14px"}}>

            {/*Day 28 - UPDATE (Toggle Sale)*/}
            /*
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
            */
            
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
            /*
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
*/

import {Trash2, Tag} from 'lucide-react';

interface ItemCardProps {
    id: number;
    title: string;
    price: number;
    isOffer: boolean;
    category: string;
    onDelete: (id:number) => void;
    onToggleSale: (id:number, currentIsOffer: boolean) => void; 
}

function ItemCard({id, title, price, isOffer, category, onDelete, onToggleSale}: ItemCardProps) {
    return (
        <div
           className={`relative flex flex-col justify-between p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl w-64 ${
            isOffer
            ? 'bg-amber-500/10 hover:border-amber-400/60'
            : 'bg-white/5 border-white/10 shadow-black/40 hover:border-white/20 hover:bg-white/[0.08]'
           }`}>

            {/*top section: category badge & title*/}
            <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">{category}</span>
                    {isOffer && (
                        <span className="text-[11px] font-bold text-amber-300 bg-amber-500/20 border border-amber-400/40 px-2 py-0.5 rounded-full animate pulse">ON SALEZZ!!!</span>
                    )}
                </div>

                <h3 className="text-base font-semibold text-slate-100 line-clamp-2 leading-snug">{title}</h3>
            </div>

            {/*bottom section: price & glass action buttons*/}
            <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs text-slate-400">Price</span>
                    <span className="text-xl font-bold text-emerald-400 tracking-tight">RM {price}</span>
                    </div>
                    
                    <div className="flex gap-2">
                        
                        {/*toggle sale button*/}
                        <button 
                        onClick={() => onToggleSale(id, isOffer)}
                        className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            isOffer
                            ? 'bg-white/10 hover:bg-white/20 text-slate-300 border border-white/10'
                            : 'bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/30 hover:border-blue-400/50'
                        }`}>
                            <Tag size={13} className="inline mr-1"></Tag>
                            {isOffer ? 'End Sale' : 'Put on Sale'}
                        </button>
                        
                        {/*delete button*/}
                        <button
                        onClick={() => onDelete(id)}
                        className="py-1.5 px-2.5 rounded-lg text-xs font-semibold bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 border border-rose-500/30 hover:border-rose-400/50 transition-all cursor-pointer">
                        <Trash2 size={13} className="inline mr-1"></Trash2>Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
         
export default ItemCard;
