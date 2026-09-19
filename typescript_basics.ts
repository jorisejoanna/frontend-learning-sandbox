//this script is to explore the 5 core superpowers of TypeScript!!

//1. primitive types (string, number, boolean)
let developerName: string = "Joanna";
let daysCompleted: number = 30;
let isFullStackReady: boolean = true;

//2. type interface (TypeScript is smart)
//we don't always have to type `:string`, TS automatically guesses it
let favouriteFramework = "React";   //TS knows this is a string
//if you uncomment the line below it'll say "type 'boolean' is not assignable to type string"
//favouriteFramework = false

//3. typed arrays
let categories: string[] = ["laptops", "smartphones", "audio"];
let prices: number [] = [199, 379, 1299];

//4. union types
//allows a variable to be only specific allowed values (like Enums)
type ItemCategory = "laptops" | "smartphones" | "audio" | "accessories";

let myGadgetCategory: ItemCategory = "laptops";
//myGadgetCategory =  "flower"    //would cause an error as "flowers" is not allowed

//5. typed function signatures
//this specifies what types go IN, and what type comes OUT
function calculateTotalWithTax (price: number, taxRate: number): number {
    return price + (price * taxRate);
}

const finalPrice = calculateTotalWithTax(5499, 0.06);

console.log("---------------------------------------------");
console.log(`Developer: ${developerName}`);
console.log(`Progress: Day ${daysCompleted}`);
console.log(`Total for M4 ipad Pro (with 6% SST): RM ${finalPrice.toFixed(2)}`);
console.log("---------------------------------------------");
