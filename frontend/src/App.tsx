/*
this is the main React component, everything we can see on screen starts hereee!!

Day 33
Renamed from App.jsx to App.tsx
*/
import { useEffect, useState } from 'react'
/*
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
*/
import './App.css'

//importing the 3 child components
import Header from './components/Header'
import ItemCard from './components/ItemCard'
import Footer from './components/Footer'

import ItemForm from './components/ItemForm'

import {Analytics} from '@vercel/analytics/react';

import { Item } from './types/inventory'

import { fetchInventoryItems, toggleCloudSale, deleteCloudItem } from './services/api';

import toast, {Toaster} from 'react-hot-toast';

import LoginForm from './components/LoginForm';
import { getStoredUser, logoutUser } from './services/auth';
import { User } from './types/auth';

import ProtectedRoute from './components/ProtectedRoute';

// Day 29
function App() {
  const [items, setItems] = useState<Item[]>([]); //data state (starts as empty array)
  const [isLoading, setIsLoading] = useState<boolean>(true); //loading state
  const [error, setError] = useState<string | null>(null); //error state

  //auth states (auto-checks localStorage on mount)
  const [currentUser, setCurrentUser] = useState<User | null>(() => getStoredUser());
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    toast.success('Logged out sucessfully, BYE!!');
  }
 
  useEffect(() => {
    const fetchInventory = async() => {
      try {
        setIsLoading(true);
        setError(null);

        //const response = await fetch ("https://dummyjson.com/products/category/laptops");
        //const response = await fetch("https://fastapi-learning-sandbox.onrender.com/items");

        /*if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }*/

       //const data = await response.json(); //TypeScript thinks data is `any`

        /*//map backend database fields to frontend card props if needed:
        //(FastAPI returns [{id, title, price, is_offer,...}])
        const formattedItems = data.map((item) => ({
          id: item.id || Date.now(),
          title: item.title || item.item_name || "Mystery Item",
          price: item.price || 99,
          isOffer: item.is_offer ?? false,
          category: item.category || "General"
        }));*/

        /*const formattedItems = data.products.map((item:any) => ({
          id: item.id,
          title: item.title,
          price: Math.round(item.price * 4.4), //converts USD to MYR!
          isOffer: item.discountPercentage > 10,  //checked if the discount is more than 10%
          category: item.category
        }));*/

        //day 34
        const items = await fetchInventoryItems();
        setItems(items);

        //setItems(formattedItems);
      } catch (err) {
        console.error("Failed to load inventory sowwyy:", err);
        setError("Could not load items from cloud server alamakk! (Render free tier may take ~45s to wake up!)");
    } finally {
      setIsLoading(false);  //stop loading regardless of success/error
    }
  };
  fetchInventory();
}, []); //empty dependency array: runs ONCE on page mount!
 
//add newly created item to the top our state list
const handleItemAdded = (newItem: Item) => {
  setItems((prevItems) => [newItem, ...prevItems]);
};

const handleDeleteItem = async (idToDelete: number) => {
  try {
    /*
    const response = await fetch(`https://dummyjson.com/products/${idToDelete}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete from cloud server");
    }

    const deletedData = await response.json();
    console.log("Cloud confirmed deleted:", deletedData);
    */

    //day 34
    await deleteCloudItem(idToDelete);

    setItems((prevItems) => prevItems.filter((item) => item.id !== idToDelete));
    toast.success(`Item #${idToDelete} permanently deleted from cloud!`)
    
  } catch (err) {
    console.error("Delete failed:", err);
    toast.error("Ohh naurrr couldn't delete from cloud server:(");
  }
 };

 //Day 28 - cloud PUT (Update) Request
 const handleToggleSale = async(idToUpdate: number, currentIsOffer: boolean) => {
  const newSaleStatus = !currentIsOffer;

  try {
    /*
    const response = await fetch(`https://dummyjson.com/products/${idToUpdate}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        discountPercentage: newSaleStatus ? 20:0,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update product on cloud server");
    }

    const updatedData = await response.json();
    console.log("Cloud confirmed update:", updatedData);
    */

    //day 34
    const newSaleStatus = await toggleCloudSale (idToUpdate, currentIsOffer);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === idToUpdate ? {...item, isOffer: newSaleStatus} : item
      )
    );

    toast.success(newSaleStatus ? 'Put on sale!':'Sale ended!!')

  } catch (err) {
    console.error("Update failed:", err);
    toast.error("Ohh naurrr couldn't update item on cloud server:(")
  }
 };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 py-10 px-4 font-sans overflow-hidden">
      <div className="absolute tip-10 left-1/4 w-96 bg-blue-500-15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-4xl mx-auto space-y-8">
    
    {/*main content*/}
    {/*1. header with 'username' prop*/}
    <div className="relative max-w-4xl mx-auto space-y-8"></div>
    <Header 
    currentUser={currentUser}
    onOpenLogin={() => setIsLoginModalOpen(true)}
    onLogout={handleLogout}
    />
    <ProtectedRoute
    isAuthenticated={currentUser !== null}
      onOpenLogin={() => setIsLoginModalOpen(true)}>

    <ItemForm onItemAdded={handleItemAdded}></ItemForm>
    
    {/*items list, main content area*/}
    <main style={{marginTop: "30px"}}>
      {/*sleeker tailwind badge header lesgaurr*/}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">Available Peripherals
          <span className="text-xs font-semibold bg-white/10 text-slate-300 py-0.5 px-2.5 rounded-full border border-white/10">{items.length}</span>
        </h2>
      </div>
        

      {/*loading state*/}
      {isLoading&& (
        <div style={{textAlign: "center", padding: "40px", color: "#64748b"}}>
          <p style={{fontSize: "18px"}}>Loading live data from PostgreSQL cloud...</p>
        </div>
      )}

      {/*error state*/}
      {error&& (
        <div style={{background: "#fee2e2", border: "1px solid #ef4444", color: "#b91c1c", padding: "12px", borderRadius: "8px", margin: "10px 0"}}>
          {error}
        </div>
      )}

      {/*live cards */}
      {!isLoading&&(
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item)=> (
           <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            isOffer={item.isOffer}
            category={item.category}
            onDelete={handleDeleteItem} //pass delete function down as a prop
            onToggleSale={handleToggleSale} //pass update handler prop
          />
        ))}
      </div>
      )}
    </main>

    </ProtectedRoute>

    <Footer apiStatus="fastapi-learning-sendbox.onrender.com (Live)" />

    {/*vercel analytics tracker*/}
    <Analytics/>
    <Toaster
    position = "top-right"
    toastOptions={{
      style: {
        background: '#0f172a',
        color: '#f8fafc',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
      },
    }}>
    </Toaster>

    <LoginForm
    isOpen={isLoginModalOpen}
    onClose={() => setIsLoginModalOpen (false)}
    onLoginSucess={(user) => setCurrentUser(user)}>
    </LoginForm>
  </div>
  </div>
 );
}

export default App;

