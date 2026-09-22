/*
a child component
this form
-hold its own input states (title, price, category, is0ffer)
-show a Submitting... state on the button so users don't accidentally double click
-pass the newly created item up to App.jsx via a prop called onItemAdded

A RECAPPPP
component - a JS function that returns visuals (JSX)
props (short for properties lol) - arguments passed into the component

ItemForm component: accepts 'onItemAdded' as a prop

Day 33
Renamed from ItemForm.jsx to ItemForm.tsx
*/

import { useState, FormEvent } from "react";
import { Item, ItemCategory } from "../types/inventory";
import { createCloudItem } from "../services/api";
import toast from 'react-hot-toast';
import { PlusCircle } from "lucide-react";

//1. define props contract- accepts onItemAdded function
interface ItemFormProps {
    onItemAdded: (newItem: Item) => void;
}

function ItemForm({onItemAdded}: ItemFormProps) {

    //2. form input states with strict types
    const [title, setTitle] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [category, setCategory] = useState<ItemCategory>('laptops');
    const [isOffer, setIsOffer] = useState<boolean>(false);

    //2b. submitting state (prevents double submissions!)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    //3. handle form submit
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if  (!title.trim() || !price) {
            return toast.error("Pwease enter both a title and price ohh!!");
        }
            //send POST request to cloud API
            /*
            const response = await fetch("https://dummyjson.com/products/add", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    title: title,
                    price: Number(price),
                    category: category,
                    discountPercentage: isOffer ? 15:0,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to create product on cloud server");
            }

            const createdProduct = await response.json();

            }
            //format for our cards
            const newItem: Item = {
                id: createdProduct.id || Date.now(),
                title: createdProduct.title,
                price: createdProduct.price,
                category: createdProduct.category,
                isOffer: isOffer,
            };
            */

        //day 34
        try {
            setIsSubmitting(true);

            //call our strongly-typed service function
            const newItem = await createCloudItem({
                title,
                price: Number(price),
                category,
                isOffer,
            });
                //notify parent component (App.jsx) to add this to the list
                onItemAdded(newItem);

                //reset the form
                setTitle('');
                setPrice('');
                setIsOffer(false);
                toast.success("AYYYY Product succesfully saved to cloud API");
            }   catch(err) {
                console.error("Submission failed sowwyy:", err);
                toast.error("Failed to save item. Check console!");
            }   finally {
                setIsSubmitting(false);
            }
    };
            

    return (
        <section style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "8px",
            marginTop: "20px",
            border: "1px solid #334155",
            color: "white"
        }}>

            <h3 style={{margin: "0 0 15px 0"}}> ➕ Add New Peripheral to Cloud</h3>

            <form onSubmit={handleSubmit} style={{display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center"}}>

                <input
                type = "text"
                placeholder = "Device Name (e.g Macbook Air M4)"
                value= {title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={isSubmitting}
                style={{padding: "8px 12px", borderRadius: "4px", border: "1px solid #cbd5e1", flex: "1 1 200px"}}>
                </input>
                
                <input
                type = "number"
                placeholder = "Price in RM"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                disabled={isSubmitting}
                style={{padding: "8px 12px", borderRadius: "4px", border: "1px solid #cbd5e1", flex: "1 1 200px"}}>
                </input>
                
                <select
                value = {category}
                onChange={(e) => setCategory(e.target.value as ItemCategory)}
                disabled={isSubmitting}
                style={{padding: "8px 12px", borderRadius: "4px", border: "1px solid #cbd5e1", flex: "1 1 200px"}}>

                <option value="laptops">laptops</option>
                <option value="smartphones">smartphones</option>
                <option value="audio">audio</option>
                <option value="accessories">accessories</option>

                </select>

                <label style={{fontSize: "14px", display: "flex", alignItems: "center", gap: "6px", cursor: "pointer"}}>
                    <input
                    type = "checkbox"
                    checked = {isOffer}
                    onChange={(e) => setIsOffer(e.target.checked)}
                    disabled={isSubmitting}>
                    </input>
                    On Sale??
                </label>

                <button
                type= "submit"
                disabled={isSubmitting}
                style={{
                    background: isSubmitting ? "#54748b" : "#2563eb", 
                    color: "white", 
                    border: "none", 
                    padding: "8px 20px", 
                    borderRadius: "4px", 
                    cursor: isSubmitting ? "not-allowed" : "pointer", 
                    fontWeight: "bold"
                    }}
                >
                    <PlusCircle size={16} className="inline mr-2"></PlusCircle>
                    {isSubmitting ? "Saving to Cloud..." : "Add to Inventory"}
                </button>
            </form>
        </section>
    );
}


export default ItemForm;