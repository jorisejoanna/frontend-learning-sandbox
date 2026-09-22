/**a modal for logging ito the inventory system
 * what's a modal??
 * a pop up window/interface element that appears on top of the main page and blocks user interaction with the rest of the app until it is closed/answered
 * this one's frosted-glass😛
 */

import { useState, FormEvent } from "react";
import { LogIn, X } from "lucide-react";
import toast from "react-hot-toast";
import { loginUser } from "../services/auth";
import { User } from "../types/auth";

interface LoginFormProps {
    isOpen: boolean;
    onClose: () => void;
    onLoginSucess: (user: User) => void;
}

function LoginForm ({isOpen, onClose, onLoginSucess}: LoginFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim () || !password.trim()) {
            return toast.error('Aippp! Please enter both email and password!');
        }

        try {
            setIsSubmitting(true);
            const {user} = await loginUser({email, password});

            toast.success(`Welcome back, ${user.email}!! Glad to see you again teehee:)`);
            onLoginSucess(user);
            onClose();
        }
        catch (err) {
            console.error('Login failed:', err);
            toast.error('Login failed! Cuba check your credentials again.');
        }
        finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="relative w-fill max-w-md p-6 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl backdrop-blur-xl text-slate-100">
            
            {/*close button*/}
            <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer">
                <X size={20}/>
            </button>

            {/*title*/}
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Sign In to Inventory</h2>
                <p className="text-xs text-slate-400 mt-1">Access your private cloud peripherals</p>
            </div>

            {/*form*/}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
                    <input
                    type="email"
                    placeholder="example@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-3 text-sm bg-white/5 border border-white/10 rounded-lg text-slate-100 placeholder-slate-500 focus:border-blue-500">
                    </input>
                </div>

                <div>
                    <label className="block text-xs font semibold text-slate-300 mb-1">Password</label>
                    <input
                    type="password"
                    placeholder="........"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-non focus:border-blue-500">
                    </input>
                </div>

                <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-2.5 px-4 rounded-lg text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50">
                    <LogIn size={16}/>
                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                </button>
            </form>
        </div>
    </div>
    );
}

export default LoginForm;