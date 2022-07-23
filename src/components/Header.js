import { useState } from "react";
import header_logo from "../images/logo/logo-light.svg"; 

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className="header">
            <img src={header_logo} alt="Ecwid's logo" className="header--logo"/>
            <button className="mobile--navigation--button" aria-label="toggle navigation" onClick={() => setOpenMenu(!openMenu)}>
                <div className={`button--inner--div ${openMenu ? "open" : ""}`}></div>
            </button>
            <nav className="header--nav">
                <ul className={`header--nav--ul ${openMenu ? "show" : ""}`}>
                    <li>
                        <span>Sell</span>
                    </li>
                    <li>
                        <span>Market</span>
                    </li>
                    <li>
                        <span>Manage</span>
                    </li>
                    <li>
                        <span>Learn</span>
                    </li>
                    <li>
                        <span>Partners</span>
                    </li>
                    <li><a href="#" className="link">Pricing</a></li>
                    <li className="get--started--li"><a href="#" className="get--started--link link">Get started for FREE</a></li>
                    <li className="login--li"><a href="#" className="login--link link">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;