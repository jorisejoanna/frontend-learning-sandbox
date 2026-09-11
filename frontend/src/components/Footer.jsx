function Footer({apiStatus}) {
    return (
        <footer style={{marginTop: "40px", borderTop: "1px solid #e2e8f0", padding: "15px 0", textAlign: "center", color: "#94a3b8", fontSize: "14px"}}>
            <p>Cloud Backend: <code>{apiStatus}</code> | Phase 2 Frontend</p>
        </footer>
    );
}

export default Footer;