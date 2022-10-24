import React from "react";
import "../styles/components/header.css";

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar">
                <figure>
                <img src={process.env.PUBLIC_URL + './images/airbnb-logo.png'} alt="airbnb-logo" />
                </figure>
            </nav>
        </div>
    )
}

export default Header