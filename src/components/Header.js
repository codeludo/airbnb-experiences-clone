import React from "react";
import "../styles/components/header.css";
import airbnbLogo from "../assets/images/airbnb-logo.png";

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar">
                <figure>
                <img src={airbnbLogo} alt="airbnb-logo" />
                </figure>
            </nav>
        </div>
    )
}

export default Header