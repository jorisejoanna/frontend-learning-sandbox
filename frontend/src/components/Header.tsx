/*
component - a JS function that returns visuals (JSX)
props (short for properties lol) - arguments passed into the component

Header component: accepts 'username' as a prop

Day 33
Renamed from Header.jsx to Header.tsx
*/

interface HeaderProps {
    username: string;
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

function Header ({username}: HeaderProps) {
    return (
        <header className="border-b border-slate-800 pb-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Joanna's Inventory Dashboard</h1>
            <p className="text-slate-400 text-sm mt-2">Logged in as: <span className="font-semibold text-slate-200">{username}</span></p>
        </header>
    );
}

export default Header;