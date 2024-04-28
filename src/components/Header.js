import React from 'react';
import "./Header.css";
import swastika from "../assets/swastika.gif";
import Logo from "../assets/Logo.png";

const Header = ({ onTryNowClick, onExitClick, showTryNowButton }) => {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="hcontainer">
                        <div className="navbar-brand">
                            <img src= {swastika} alt="logo" />
                            <img className='main-logo' src= {Logo} alt="mantrayaan" />
                            {/* <h2 className="navbar-item">Mantrayaan</h2> */}
                        </div>
                        <div className="hcontainer-btn">
                            <span></span>
                            <div className="navbar-item">
                                {showTryNowButton ? (
                                    <button className="button is-primary btn-lg rounded-pill bg-dark" onClick={onTryNowClick}>Try Now</button>
                                ) : (
                                    <button className="button is-primary btn-lg rounded-pill bg-dark" onClick={onExitClick}>Exit</button>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;
