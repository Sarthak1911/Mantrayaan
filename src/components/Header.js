import React from 'react';
import "./Header.css";

const Header = ({ onTryNowClick, onExitClick, showTryNowButton }) => {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <h2 className="navbar-item">Mantrayaan</h2>
                        </div>
                        <div className="container">
                            <span></span>
                            <div className="navbar-item">
                                {showTryNowButton ? (
                                    <button className="button is-primary btn-lg" onClick={onTryNowClick}>Try Now</button>
                                ) : (
                                    <button className="button is-primary btn-lg" onClick={onExitClick}>Exit</button>
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
