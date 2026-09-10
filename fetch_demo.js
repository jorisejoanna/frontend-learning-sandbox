/*
using async/await and modern fetch() to sent HTTP requests and receive JSON data over the internet
it essentially tells JS to sent a request to Render in the background to pause a function with await, 
but let the rest of the website keep running smoothly, 
when Render replies with the data, resume right here!*/ 

/* 
========================================================================
1. SIMPLE GET REQUEST USING async/await
========================================================================
*/

//an async function is a function that can wait for internet requests!
const fetchSampleData = async () => {
    console.log("1. Sending request to public API jap aaaa");

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");   //'await' pauses here until the server responds, without freezing your computer!!!
                                                                                        // the website is a free dummy test API
        const data = await response.json();                                             //convert the raw HTTP response into a JavaScript object (JSON)

        console.log("2. Data received sucessfully yayyyy:\n", data);
        console.log(`\nTask title: "${data.title}" | Completed: ${data.completed}`);
    }   catch (error) {
        console.error("Alamak, request failed sozzz:", error);
    }
};

fetchSampleData();

/* 
========================================================================
2. TALKING TO OUR LIVE FASTAPI RENDER BACKEND!!
========================================================================
*/

const fetchMyLiveFastAPI = async () => {
    console.log("\n Connecting to live Render backend wait aaa...\n");

    try{
        //fetch the OpenAPI documentation specifications from Render:
        const response = await fetch("https://fastapi-learning-sandbox.onrender.com/openapi.json");     //the website was mine from when I was learning FastAPI
        const spec = await response.json();

        console.log("Connected to the live Cloud API wohoooo!");
        console.log("API Title:", spec.info.title);
        console.log("Available Endpoints:", Object.keys(spec.paths));   //extracts all the route names into an array
    }   catch (error)   {
        console.error("Failed to connect to Render:", error);
    }
};

fetchMyLiveFastAPI();