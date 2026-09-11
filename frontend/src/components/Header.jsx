/*
component - a JS function that returns visuals (JSX)
props (short for properties lol) - arguments passed into the component

Header component: accepts 'username' as a prop
*/

function Header ({username}) {
    return (
        <header style={{borderBottom: "2px solid #e2e8f0", padding: "15px 0", textAlign: "center"}}>
            <h2 style={{fontWeight: "bold"}}>Joanna's Inventory Dashboard</h2>
            <p style={{color: "#64748b", margin: 0}}> Logged in as: <strong>{username}</strong></p>
        </header>
    );
}

export default Header;