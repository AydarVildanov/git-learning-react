import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    <div className="header__logo">

                    </div>
                    <div className="header__links">
                        <ul>
                            <li>Name</li>
                            <li>Surname</li>
                            <li>Yoga</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;