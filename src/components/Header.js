import { useState } from "react";
import header_logo from "../images/logo/logo-light.svg"; 
import { ReactComponent as WindowIcon } from "../images/icons/new-window.svg";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openSell, setOpenSell] = useState(false);
    const [openMarket, setOpenMarket] = useState(false);
    const [openManage, setOpenManage] = useState(false);
    const [openLearn, setOpenLearn] = useState(false);
    const [openPartners, setOpenPartners] = useState(false);

    openMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";

    return (
        <header className="header">
            <a href="https://www.ecwid.com/" className="header--logo--link"><img src={header_logo} alt="Ecwid's logo" className="header--logo"/></a>
            <button className="mobile--navigation--button" aria-label="toggle navigation" onClick={() => setOpenMenu(!openMenu)}>
                <div className={`button--inner--div ${openMenu ? "open" : ""}`}></div>
            </button>
            <nav className="header--nav">
                <ul className={`header--nav--ul ${openMenu ? "show" : ""}`}>
                    <li>
                        <span onClick={() => setOpenSell(!openSell)} className={`${openSell ? "open" : ""}`}>Sell</span>
                        <ul className={`dropdown ${openSell ? "show" : ""}`}>
                            <li><a href="#">Sell anywhere</a></li>
                            <li><a href="#">Website</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">TikTok</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Google</a></li>
                            <li><a href="#">Amazon</a></li>
                            <li><a href="#">POS</a></li>
                            <li><a href="#">ShopApp</a></li>
                        </ul>
                    </li>
                    <li>
                        <span onClick={() => setOpenMarket(!openMarket)} className={`${openMarket ? "open" : ""}`}>Market</span>
                        <ul className={`dropdown ${openMarket ? "show" : ""}`}>
                            <li><a href="#">Market your business</a></li>
                            <li><a href="#">Google Ads</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Email</a></li>

                        </ul>
                    </li>
                    <li>
                        <span onClick={() => setOpenManage(!openManage)} className={`${openManage ? "open" : ""}`}>Manage</span>
                        <ul className={`dropdown ${openManage ? "show" : ""}`}>
                            <li><a href="#">Manage your store</a></li>
                            <li><a href="#">Mobile</a></li>
                            <li><a href="#">App Market</a></li>
                            <li><a href="#">Discount Shipping</a></li>
                        </ul>
                    </li>
                    <li>
                        <span onClick={() => setOpenLearn(!openLearn)} className={`${openLearn ? "open" : ""}`}>Learn</span>
                        <ul className={`dropdown ${openLearn ? "show" : ""}`}>
                            <li><a href="#">Learn</a></li>
                            <li><a href="#">Demo</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Customer Support</a></li>
                            <li><a href="#">Guides</a></li>
                            <li><a href="#">Ecwid Academy</a></li>
                            <li><a href="#">Podcast</a></li>
                            <li><a href="#">Tutorials</a></li>
                        </ul>
                    </li>
                    <li>
                        <span onClick={() => setOpenPartners(!openPartners)} className={`${openPartners ? "open" : ""}`}>Partners</span>
                        <ul className={`dropdown ${openPartners ? "show" : ""}`}>
                            <li><a href="#">Partners <WindowIcon className="window--icon"/></a></li>
                            <li><a href="#">Resell <WindowIcon className="window--icon"/></a></li>
                            <li><a href="#">Refer <WindowIcon className="window--icon"/></a></li>
                            <li><a href="#">Build an App <WindowIcon className="window--icon"/></a></li>
                            <li><a href="#">Find an expert <WindowIcon className="window--icon"/></a></li>
                        </ul>
                    </li>
                    <li className="pricing--li"><a href="#" className="pricing--link link">Pricing</a></li>
                    <li className="get--started--li"><a href="#" className="get--started--link link">Get started for FREE</a></li>
                    <li className="login--li"><a href="#" className="login--link link">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;