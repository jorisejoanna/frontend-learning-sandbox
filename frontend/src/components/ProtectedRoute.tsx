//prevents unauthenticated guests from viewing/interacting with private inventory data

import React from "react";
import { Lock, Sparkles } from "lucide-react";

interface ProtectedRouteProps {
    isAuthenticated: boolean;
    onOpenLogin: () => void;
    children: React.ReactNode;
}

function ProtectedRoute({ isAuthenticated, onOpenLogin, children}: ProtectedRouteProps) {
    
    //1. if authenticated, unlock and render the full dashboard
    if (isAuthenticated) {
        return <>{children}</>;
    }

    //2. otherwise, render the lock screen
    return (
        <section className="relative overflow-hidden my-12 p-8 sm:p-12 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-2xl shadow-2xl text-center max-w-2xl mx-auto">
        
        {/*ambient bg glow*/}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/*lock icon badge*/}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 shadow-inner">
        <Lock size={32} />
        </div>

        {/*headline & desc*/}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3 tracking-tight">Private Cloud Inventory Locked</h2>
        <p className="text-sm text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">This database contains live peripherals connected to Neon PostgreSQL. Please sign in with your credentials to manage or mutate inventory.</p>

        {/*unlock CTA*/}
        <button
        onClick={onOpenLogin}
        className="inline-flex items-center gap-2 py-3 px-8 rounded-xl font-bold text-sm bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 trnasition-all duration-300 hover:scale-105 cursor-pointer">
        <Sparkles size={16} />
        Unlock Dashboard
        </button>
        </section>
    );
}

export default ProtectedRoute;