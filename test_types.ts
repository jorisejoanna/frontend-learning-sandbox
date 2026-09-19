import { Item, NewItemInput } from "./frontend/src/types/inventory";

const validLaptop: Item = {
    id: 101,
    title: "Framework Laptop 16",
    price: 6899,
    category: "laptops",
    isOffer: true,
};

console.log("🥳🎉Laptop passes TypeScript validation!!!:", validLaptop.title);

//uncommenting this would give an error "type "books" is not assignable to type 'ItemCategory'"
//validLaptop.category = "books";

//uncommenting this would give an error "cannot assign ot 'id' because it is a read-only property"
//validLaptop.id = 100;