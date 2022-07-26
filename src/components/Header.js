import { useState, useEffect } from "react";
import header_logo from "../images/logo/logo-light.svg"; 
import { ReactComponent as WindowIcon } from "../images/icons/new-window.svg";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openSell, setOpenSell] = useState(false);
    const [openMarket, setOpenMarket] = useState(false);
    const [openManage, setOpenManage] = useState(false);
    const [openLearn, setOpenLearn] = useState(false);
    const [openPartners, setOpenPartners] = useState(false);
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
    const [scroll, setScroll] = useState(0);

    openMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
    openMenu ? document.body.style.pointerEvents = "none" : document.body.style.pointerEvents = "";
    openMenu ? document.body.style.userSelect = "none" : document.body.style.userSelect = "";

    const updateMediaTablet = () => setIsTablet(window.innerWidth >= 768);
    
    useEffect(() => {
        window.addEventListener("resize", updateMediaTablet);
        return () => window.removeEventListener("resize", updateMediaTablet);
    });
    
    const updateMediaDesktop = () => setIsDesktop(window.innerWidth >= 1280);
    
    useEffect(() => {
        if (isDesktop) {
            setOpenMenu(false);
        }
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY < 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        })
        window.addEventListener("resize", updateMediaDesktop);
        return () => window.removeEventListener("resize", updateMediaDesktop);
    }, [isDesktop, scroll]);

    return (
        <>
        <div className={`click--outside ${openMenu ? "close" : ""}`} onClick={() => setOpenMenu(false)}></div>
        <div className={`header--container ${scroll ? "" : "sticky"}`}>

        <header className="header">
            <a href="https://www.ecwid.com/" className="header--logo--link"><img src={header_logo} alt="Ecwid's logo" className="header--logo"/></a>
            <button className="mobile--navigation--button" aria-label={!openMenu ? "Open menu" : "Close menu"} aria-expanded={!openMenu ? "false" : "true"} aria-haspopup="true" onClick={() => setOpenMenu(!openMenu)}>
                <div className={`button--inner--div ${openMenu ? "open" : ""}`}></div>
            </button>
            <nav className="header--nav" aria-label="Header">
                {isTablet && !isDesktop ? 
                <ul role="menubar" className="nav768-1280--ul">
                    <li role="none"><a role="menuitem" href="https://www.ecwid.com/sell">Sell</a></li>
                    <li role="none"><a role="menuitem" href="https://www.ecwid.com/promote">Market</a></li>
                    <li role="none"><a role="menuitem" href="https://www.ecwid.com/manage">Manage</a></li>
                    <li role="none" className="get--started--li2"><a role="menuitem" href="https://my.ecwid.com/cp/#register">Get Started for FREE</a></li>
                </ul> : ""}
                <ul className={`header--nav--ul ${openMenu ? "show" : ""}`} role="menubar">
                {!isDesktop ? 
                    <li role="none">
                        <button onClick={() => setOpenSell(!openSell)} className={`${openSell ? "open" : ""} header--subbtn`} role="menuitem" aria-haspopup="true" aria-expanded={openSell ? "true" : "false"}>Sell</button>
                        <ul className={`dropdown ${openSell ? "show" : ""}`} role="menu">
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/sell">Sell anywhere</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/sell">Website</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/instagram">Instagram</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/tiktok">TikTok</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/facebook-commerce">Facebook</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/sell-on-google">Google</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/amazon">Amazon</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/pos">POS</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/shopapp">ShopApp</a></li>
                        </ul>
                    </li>
                    :
                    <li role="none"><a role="menuitem" href="https://www.ecwid.com/sell">Sell</a></li>
                }
                {!isDesktop ? 
                    <li role="none">
                        <button onClick={() => setOpenMarket(!openMarket)} className={`${openMarket ? "open" : ""} header--subbtn`} role="menuitem" aria-haspopup="true" aria-expanded={openMarket ? "true" : "false"}>Market</button>
                        <ul className={`dropdown ${openMarket ? "show" : ""}`} role="menu">
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/promote">Market your business</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/google-advertising">Google Ads</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/facebook-remarketing">Facebook</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/mailchimp">Email</a></li>
                        </ul>
                    </li>
                    :
                    <li role="none"><a role="menuitem" href="https://www.ecwid.com/promote">Market</a></li>
                }
                {!isDesktop ? 
                    <li role="none">
                        <button onClick={() => setOpenManage(!openManage)} className={`${openManage ? "open" : ""} header--subbtn`} role="menuitem" aria-haspopup="true" aria-expanded={openManage ? "true" : "false"}>Manage</button>
                        <ul className={`dropdown ${openManage ? "show" : ""}`} role="menu">
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/manage">Manage your store</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/ecwid-mobile">Mobile</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/apps">App Market</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/shipping-labels">Discount Shipping</a></li>
                        </ul>
                    </li>
                    :
                    <li role="none"><a role="menuitem" href="https://www.ecwid.com/manage">Manage</a></li>
                }
                {!isDesktop ? 
                    <li role="none">
                        <button onClick={() => setOpenLearn(!openLearn)} className={`${openLearn ? "open" : ""} header--subbtn`} role="menuitem" aria-haspopup="true" aria-expanded={openLearn ? "true" : "false"}>Learn</button>
                        <ul className={`dropdown ${openLearn ? "show" : ""}`} role="menu">
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/blog">Learn</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/watchdemo">Demo</a></li>
                            <li role="none"><a role="menuitem" href="https://support.ecwid.com/hc/en-us">Help Center</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/blog">Blog</a></li>
                            <li role="none"><a role="menuitem" href="https://support.ecwid.com/hc/en-us/requests/new">Customer Support</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/guides">Guides</a></li>
                            <li role="none"><a role="menuitem" href="https://ecommerce-academy.ecwid.com/">Ecwid Academy</a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/blog/podcast">Podcast</a></li>
                            <li role="none"><a role="menuitem" href="https://support.ecwid.com/hc/en-us/categories/360000015889-Ecwid-Video-Guides">Tutorials</a></li>
                        </ul>
                    </li>
                    :
                    <li role="none"><a role="menuitem" href="https://www.ecwid.com/blog">Learn</a></li>
                }
                {!isDesktop ? 
                    <li role="none">
                        <button onClick={() => setOpenPartners(!openPartners)} className={`${openPartners ? "open" : ""} header--subbtn`} role="menuitem" aria-haspopup="true" aria-expanded={openPartners ? "true" : "false"}>Partners</button>
                        <ul className={`dropdown ${openPartners ? "show" : ""}`} role="menu">
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/partners">Partners <WindowIcon className="window--icon"/></a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/partners/reseller">Resell <WindowIcon className="window--icon"/></a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/partners/referral">Refer <WindowIcon className="window--icon"/></a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/partners/app-market">Build an App <WindowIcon className="window--icon"/></a></li>
                            <li role="none"><a role="menuitem" href="https://www.ecwid.com/experts">Find an expert <WindowIcon className="window--icon"/></a></li>
                        </ul>
                    </li>
                    :
                    <li role="none"><a role="menuitem" href="https://www.ecwid.com/partners">Partners</a></li>
                }
                    <li role="none" className="pricing--li"><a role="menuitem" href="https://www.ecwid.com/pricing" className="pricing--link link">Pricing</a></li>
                    <li role="none" className="get--started--li"><a role="menuitem" href="https://my.ecwid.com/cp/#register" className="get--started--link link">Get started for FREE</a></li>
                    <li role="none" className="login--li"><a role="menuitem" href="https://my.ecwid.com/cp/" className="login--link link">Login</a></li>
                </ul>
            </nav>
            <div className={`overlay ${openMenu ? "overlay--open" : ""}`}></div>
        </header>

        </div>
        </>
    )
}

export default Header;