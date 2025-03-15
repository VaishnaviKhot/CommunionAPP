// src/components/Footer.jsx
import React from "react";
import "../styles/Footeer.css";

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} CommunionHub. All rights reserved.</p>
                <nav className="footer-links">
                    <a href="#footer">About</a>
                    <a href="#footer">Contact</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;