import { useState, useEffect } from "react";
import footer_logo from "../images/logo/logo-dark.svg";
import arrow_right from "../images/icons/arrow_right.svg";

const Footer = () => {
    return (
        <footer>
            <img src={footer_logo} alt="Ecwid's logo" className="footer--logo"/>
            <nav className="footer--nav">
                <li>
                    <span role="button">SELL ONLINE <img src={arrow_right} alt=""/></span>
                    <ul>
                        <li><a href="#">Sell Everywhere</a></li>
                        <li><a href="#">Sell on Social</a></li>
                        <li><a href="#">Sell on Instagram</a></li>
                        <li><a href="#">Sell TikTok</a></li>
                        <li><a href="#">Sell Facebook</a></li>
                        <li><a href="#">Sell Google</a></li>
                        <li><a href="#">Sell Amazon</a></li>
                        <li><a href="#">Sell whatsApp</a></li>
                        <li><a href="#">Sell Pinterest</a></li>
                        <li><a href="#">Sell ShopApp</a></li>
                    </ul>
                </li>
                <li>
                    <span role="button">PRODUCT <img src={arrow_right} alt=""/></span>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Watch Demo</a></li>
                        <li><a href="#">Buy Now Button</a></li>
                        <li><a href="#">Ecommerce Hosting</a></li>
                        <li><a href="#">Point-of-Sale</a></li>
                        <li><a href="#">Digital Products</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Compare Ecwid</a></li>
                        <li><a href="#">Ecwid Customization</a></li>
                    </ul>
                </li>
                <li>
                    <span role="button">FOR YOUR BUSINESS <img src={arrow_right} alt=""/></span>
                    <ul>
                        <li><a href="#">Business Solutions</a></li>
                        <li><a href="#">Ecommerce Website</a></li>
                        <li><a href="#">WordPress Ecommerce</a></li>
                        <li><a href="#">Joomla Ecommerce</a></li>
                        <li><a href="#">Squarespace Ecommerce</a></li>
                        <li><a href="#">Weebly Ecommerce</a></li>
                        <li><a href="#">Wix Ecommerce</a></li>
                        <li><a href="#">Etsy Ecommerce</a></li>
                        <li><a href="#">Add Online Store</a></li>
                    </ul>
                </li>
                <li>
                    <span role="button">PARTNERS <img src={arrow_right} alt=""/></span>
                    <ul>
                        <li><a href="#">Reseller Program</a></li>
                        <li><a href="#">White Label Solutions</a></li>
                        <li><a href="#">Referral Program</a></li>
                        <li><a href="#">Build an app</a></li>
                        <li><a href="#">Ecwid Experts</a></li>
                    </ul>
                </li>
                <li>
                    <span role="button">COMPANY <img src={arrow_right} alt=""/></span>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Ecwid Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </li>
                <li>
                    <span role="button">SUPPORT <img src={arrow_right} alt=""/></span>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Product Updates</a></li>
                        <li><a href="#">App developers</a></li>
                        <li><a href="#">Status Monitor</a></li>
                        <li><a href="#">Contact Support</a></li>
                        <li><a href="#">Free Guides</a></li>
                        <li><a href="#">API documentation</a></li>
                        <li><a href="#">Ecwid 101</a></li>
                        <li><a href="#">Ecwid Academy</a></li>
                    </ul>
                </li>
                <li>
                    <span role="button">RESOURCES <img src={arrow_right} alt=""/></span>
                    <ul>
                        <li><a href="#">Products to sell</a></li>
                        <li><a href="#">How to Sell Online</a></li>
                        <li><a href="#">Create an Online Store</a></li>
                        <li><a href="#">Start a Business</a></li>
                        <li><a href="#">Ecom Glossary</a></li>
                        <li><a href="#">Ecommerce Insights</a></li>
                    </ul>
                </li>
                <li>
                    <span role="button">LATEST BLOG <img src={arrow_right} alt=""/></span>
                    <ul>
                        <li><a href="#">Ecommerce Content 101: Overcoming the Fear of Creating Content</a></li>
                        <li><a href="#">How This Store with a Large Catalog Saved Hundreds of Work Hours</a></li>
                    </ul>
                </li>
            </nav>
        </footer>
    )
}

export default Footer;