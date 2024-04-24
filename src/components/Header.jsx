import React from "react";

const Header = () => {
    return (
        <header id="header">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">portfolio<em>vite</em></a>
                </div>
                <nav className="hader__nav">
                    <ul>
                        <li><a href="#">intro</a></li>
                        <li><a href="#">skill</a></li>
                    </ul>
                </nav>
                <div className="header__nav__mobile" id="headerToggle">
                    <span></span>
                </div>
            </div>
        </header>
    )
};

export default Header;