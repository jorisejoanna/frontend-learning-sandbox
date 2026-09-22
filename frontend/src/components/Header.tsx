/*
component - a JS function that returns visuals (JSX)
props (short for properties lol) - arguments passed into the component

Header component: accepts 'username' as a prop

Day 33
Renamed from Header.jsx to Header.tsx

Day 37
shows "Sign In" button when logged out, or user email + Logout button when logged in
*/

import {LogIn, LogOut} from 'lucide-react';
import { User } from '../types/auth';

interface HeaderProps {
    //username: string;
    currentUser: User | null;
    onOpenLogin: () => void;
    onLogout: () => void;
}

/*
function oldHeader ({username}) {
    return (
        <header style={{borderBottom: "2px solid #e2e8f0", padding: "15px 0", textAlign: "center"}}>
            <h2 style={{fontWeight: "bold"}}>Joanna's Inventory Dashboard</h2>
            <p style={{color: "#64748b", margin: 0}}> Logged in as: <strong>{username}</strong></p>
        </header>
    );
}
*/

function Header ({currentUser, onOpenLogin, onLogout}: HeaderProps) {
    return (
        <header className="border-b border-slate-800 pb-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-linear-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Joanna's Inventory Dashboard</h1>
            
            <div className="flex items-center justify-center gap-3 mt-3">
                {currentUser ? (
                    <>
            <p className="text-slate-400 text-sm mt-2">Logged in as: <span className="font-semibold text-slate-200">{currentUser.email}</span></p>
            <button
            onClick={onLogout}
            className="py-1 px-2.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-rose-300 border border-white/10 transition-all flex items-center gap-1 cursor-pointer">
                <LogOut size={12} />
                Logout
            </button>
            </>
            ):(
                <button
                onClick={onOpenLogin}
                className="py-1.5 px-4 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-blue-500/20">
                    <LogIn size={14} />
                    Sign In
                </button>
            )}
            </div>
        </header>
    );
}

export default Header;