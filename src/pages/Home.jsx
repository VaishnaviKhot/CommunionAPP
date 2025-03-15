// src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footeer.jsx"; // Fixed incorrect import name
import "../styles/Home.css";
import homeimage1 from "../images/home-image1.jpg";
import homeimage2 from "../images/home-image2.jpg";
import homeimage3 from "../images/home-image3.jpg";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <Header />

            <h1 className="home-title">Welcome to CommunionHub</h1>
            <p className="home-description">Bridging communities through events, discussions, and shared experiences.</p>

            <div className="app-purpose">
                <h2>About CommunionHub</h2>
                <p>
                    CommunionHub is a platform designed to connect individuals through meaningful gatherings, events, 
                    and discussions. Whether you're looking to participate in engaging conversations, discover 
                    exciting events, or build a strong community, we bring people together in one place.
                </p>
            </div>

            <div className="section first-section">
                <div className="text">
                   <p>Discover amazing gatherings that bring people together for unforgettable moments.</p>
                </div>
                <div className="image">
                    <img src={homeimage1} alt="Event 1" className="home-image" />
                </div>
            </div>

            <div className="section second-section">
                <div className="image">
                    <img src={homeimage2} alt="Event 2" className="home-image" />
                </div>
                <div className="text">
                    <p>Join vibrant communities and engage in meaningful discussions.</p>
                </div>
            </div>

            <div className="section third-section">
                <div className="text">
                  <p>Celebrate connections and create memories with like-minded individuals.</p> 
                </div>
                <div className="image">
                    <img src={homeimage3} alt="Event 3" className="home-image" />
                </div>
            </div>

            <button className="home-button" onClick={() => navigate("/events")}>
                Explore Events
            </button>

            <Footer />
        </div>
    );
};

export default Home;
