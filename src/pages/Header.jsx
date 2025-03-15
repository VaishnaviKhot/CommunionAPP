// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    const scrollToFooter = (event) => {
        event.preventDefault();
        const footer = document.getElementById("footer");
        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="header">
            <div className="logo">CommunionHub</div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/events">Events</Link>
                <a href="#footer" onClick={scrollToFooter}>About</a>
                <a href="#footer" onClick={scrollToFooter}>Contact</a>
            </nav>
        </header>
    );
};

export default Header;
