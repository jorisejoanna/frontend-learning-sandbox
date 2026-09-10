/*
In modern JS,
const - for variables that don't change
let - for variables that do change */
const myName = "Joanna";
let currentMood = "Ready to learn frontend";

console.log(`Hello from JavaScript, ${myName}! Status: ${currentMood}`);    //console.log is a built-in method used to print messages
                                                                            //string uses backticks `letak string sini`

/* 
========================================================================
1. ARROW FUNCTIONS: ()=>{}
========================================================================
In Java: public int add(int a, intb) {return a + b;}
In Python: def add(a, b): return a + b
*/

//In JS, Arrow Functions are the standard way to write functions:
const add = (a, b)=> a+b;
const greet = (name) => `Hello, ${name}!`;

//If a function has multiple lines, use curly braces {} and a return statement:
const multiplyAndLog = (a, b) => {
    const result = a*b;
    return result;
};

console.log("---1. ARROW FUNCTIONS---");
console.log(greet("Joanna"));

console.log("5+3=", add(5, 3));
console.log("5*3=", multiplyAndLog(5, 3));


/* 
========================================================================
2. OBJECTS & DESTRUCTURING: {title, price}
========================================================================
In Java: this would be an instance of an Item class with getters
In Python: this is a dictionary: item = {"title": "Gaming Mouse", "price": 49.99}
*/

const item = {
    id: 1,
    title: "Razer Orochi V2",
    price: 377,
    isOffer: false
};

console.log("\n---2. OBJECTS & DESTRUCTURING---");
console.log("Item title:", item.title);

/*DESTRUCTURING
Instead of writing:
const title = item.title;
const price = item.price;
*/

//In JS, we unpack them in ONE line:
const {title, price} = item;
console.log(`Destructured: ${title} costs $${price} (before discount!!!)`);


/* 
========================================================================
3. THE SPREAD OPERATOR: ...
========================================================================
In Python: new_item = {**item, "price": 39.99}
In React, we NEVER modify the original object directly (item.price = 39.99 is forbidden oh naurr!)
*/

//You ALWAYS copy the old object and update specific fields using three dots (...):
const discountedItem = {
    ...item,            //copies id, title, price, isOffer
    price: 199.99,      //overwrites the old price, got discount 47% njayy
    isOffer: true,       
    category: "Gaming"  //adds a new field
};

console.log("\n---3. SPREAD OPERATOR---");
console.log("Original item:", item);
console.log("Discounted item copy:", discountedItem);


/* 
========================================================================
4. ARRAY .map() (React uses this to render lists of UI!)
========================================================================
In Java: products.stream().map(p-> p.getTitle()).toList()
In Python: titles = [product["title"] for product in products]
*/

const products = [
    {id: 1, name: "Razer Orochi V2", price: 199},
    {id: 2, name: "Keychron V1", price: 379},
    {id: 3, name: "Monitor", price: 400}
];

//map.() loops over every item and transforms it into something new:
const productNames = products.map(p => p.name);
console.log("\n---4. ARRAY .map()---");
console.log("Product names:", productNames);


/* 
========================================================================
5. ARRAY .filter() (React uses this to filter search results!!)
========================================================================
In Java: products.stream().filter(p -> p.getPrice()<100).toList()
In Python: cheap = [p for p in products if p["price" < 100] 
*/

const affordableProducts = products.filter(p => p.price < 250);

console.log("\n---5. ARRAY .filter()---");
console.log("Products under RM 250:", affordableProducts);

/*
CHALLENGE
get an array of sentences that look like:
["Razer Orochi V2 costs RM 199", "Keychron costs RM 379", "Monitor costs RM 400"]
*/

console.log("\n---CHALLENGE SOLUTION---");

const sentences = products.map(p => `${p.name} costs RM ${p.price}`);
console.log(sentences);
