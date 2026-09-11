//this is the main React component, everything we can see on screen starts hereee!!
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

//importing the 3 child components
import Header from './components/Header'
import ItemCard from './components/ItemCard'
import Footer from './components/Footer'

/* Day 22
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}
*/

/* Day 23
function App() {
  const developerName = "Joanna";
  const status = "Building Full-Stack Applications";

  return (
    <div style = {{fontFamily: "sans-serif", textAlign: "center", marginTop: "50px"}}>
      <h1>Welcome to React, {developerName}!!🥳✨✨</h1>
      <p>Current Mission: <strong>{status}</strong></p>
      <div style = {{padding: "20px", background: "#f0f4f8", display: "inline-block", borderRadius: "10px"}}>
        <p>Connected to Backend: <code>fastapi_learning-sandbox.onrender.com</code></p>
        <button onClick = {() => alert("React is working!!!!!")} style = {{padding: "10px 20px", fontSize: "16px", cursor: "pointer"}}>
          Click Me!
        </button>
      </div>
    </div>
  );
}
*/

// Day 24
function App() {

  //sample data (mirrors our Neon PostgreSQL database items!!)
  const items = [
    {id: 1, title: "Razer Orochi V2", price: 199, isOffer: true, category: "Mice"},
    {id: 2, title: "Keychron V1", price: 379, isOffer: false, category: "Keyboards"},
    {id: 3, title: "Monitor", price: 400, isOffer: false, category: "Monitors"},
  ];

  return (
    <div style={{fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto", padding: "20px"}}> 
   
    {/*1. header with 'username' prop*/}
    <Header username="joanna@example.com" />
    
    {/*2. main content area: loop over items using .map() and render and ItemCard for eachh*/}
    <main style={{marginTop: "30px"}}>
      <h3> Available Peripherals ({items.length})</h3>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {items.map((item)=> (
          <ItemCard
          key={item.id}
          title={item.title}
          price={item.price}
          isOffer={item.isOffer}
          category={item.category}
          />
        ))}
      </div>
    </main>

    {/*3. footer with 'apiStatus' prop*/}
    <Footer apiStatus="fastapi_learning-sandbox.onrender.com (Live)"/>
    </div>
  );
}
export default App;

