import { useState, useEffect } from "react";
import footer_logo from "../images/logo/logo-dark.svg";
import arrow_right from "../images/icons/arrow_right.svg";
import apple_store from "../images/badges/black-app-store.svg";
import google_store from "../images/badges/black-google.svg";
import blogpost from "../images/icons/icon-blogpost.svg";
import podcast from "../images/icons/icon-podcast.svg";
import pinterest from "../images/icons/icon-pinterest.svg";
import facebook from "../images/icons/icon-facebook.svg";
import twitter from "../images/icons/icon-twitter.svg";
import instagram from "../images/icons/icon-instagram.svg";
import youtube from "../images/icons/icon-youtube.svg";
import global from "../images/icons/icon-global.svg";

const Footer = () => {
    const [sellOnline, setSellOnline] = useState(false);
    const [product, setProduct] = useState(false);
    const [business, setBusiness] = useState(false);
    const [partners, setPartners] = useState(false);
    const [company, setCompany] = useState(false);
    const [support, setSupport] = useState(false);
    const [resources, setResources] = useState(false);
    const [blog, setBlog] = useState(false);

    return (
        <div className="big-width-footer">
            <footer>
                <div className="logo--nav--container">
                    <a href="https://www.ecwid.com/" aria-label="Go to our homepage"><img src={footer_logo} alt="Ecwid's logo" className="footer--logo"/></a>
                    <nav className="footer--nav">
                        <ul className="footer--nav--ul">
                            <li>
                                <span role="button" onClick={() => setSellOnline(!sellOnline)}>SELL ONLINE <img src={arrow_right} alt="" className={`dropdown ${sellOnline ? "rotate--img" : ""}`}/></span>
                                <ul className={`dropdown ${sellOnline ? "show" : ""}`}>
                                    <li><a href="https://www.ecwid.com/sell-everywhere">Sell Everywhere</a></li>
                                    <li><a href="https://www.ecwid.com/social-selling">Sell on Social</a></li>
                                    <li><a href="https://www.ecwid.com/instagram">Sell on Instagram</a></li>
                                    <li><a href="https://www.ecwid.com/tiktok">Sell TikTok</a></li>
                                    <li><a href="https://www.ecwid.com/facebook-commerce">Sell Facebook</a></li>
                                    <li><a href="https://www.ecwid.com/sell-on-google">Sell Google</a></li>
                                    <li><a href="https://www.ecwid.com/amazon">Sell Amazon</a></li>
                                    <li><a href="https://www.ecwid.com/sell-on-whatsapp">Sell whatsApp</a></li>
                                    <li><a href="https://www.ecwid.com/pinterest">Sell Pinterest</a></li>
                                    <li><a href="https://www.ecwid.com/shopapp">Sell ShopApp</a></li>
                                </ul>
                            </li>
                            <li>
                                <span role="button" onClick={() => setProduct(!product)}>PRODUCT <img src={arrow_right} alt="" className={`dropdown ${product ? "rotate--img" : ""}`}/></span>
                                <ul className={`dropdown ${product ? "show" : ""}`}>
                                    <li><a href="https://www.ecwid.com/features">Features</a></li>
                                    <li><a href="https://www.ecwid.com/pricing">Pricing</a></li>
                                    <li><a href="https://www.ecwid.com/watchdemo/">Watch Demo</a></li>
                                    <li><a href="https://www.ecwid.com/buy-now-button">Buy Now Button</a></li>
                                    <li><a href="https://www.ecwid.com/ecommerce-hosting">Ecommerce Hosting</a></li>
                                    <li><a href="https://www.ecwid.com/pos">Point-of-Sale</a></li>
                                    <li><a href="https://www.ecwid.com/sell-digital-products-online">Digital Products</a></li>
                                    <li><a href="https://www.ecwid.com/subscriptions">Subscriptions</a></li>
                                    <li><a href="https://www.ecwid.com/comparison">Compare Ecwid</a></li>
                                    <li><a href="https://www.ecwid.com/customization">Ecwid Customization</a></li>
                                </ul>
                            </li>
                            <li>
                                <span role="button" onClick={() => setBusiness(!business)}>FOR YOUR BUSINESS <img src={arrow_right} alt="" className={`dropdown ${business ? "rotate--img" : ""}`}/></span>
                                <ul className={`dropdown ${business ? "show" : ""}`}>
                                    <li><a href="https://www.ecwid.com/solutions">Business Solutions</a></li>
                                    <li><a href="https://www.ecwid.com/easy-ecommerce">Ecommerce Website</a></li>
                                    <li><a href="https://www.ecwid.com/wordpress-ecommerce">WordPress Ecommerce</a></li>
                                    <li><a href="https://www.ecwid.com/joomla">Joomla Ecommerce</a></li>
                                    <li><a href="https://www.ecwid.com/squarespace">Squarespace Ecommerce</a></li>
                                    <li><a href="https://www.ecwid.com/weebly">Weebly Ecommerce</a></li>
                                    <li><a href="https://www.ecwid.com/wix">Wix Ecommerce</a></li>
                                    <li><a href="https://www.ecwid.com/etsy">Etsy Ecommerce</a></li>
                                    <li><a href="https://www.ecwid.com/sell">Add Online Store</a></li>
                                </ul>
                            </li>
                            <li>
                                <span role="button" onClick={() => setPartners(!partners)}>PARTNERS <img src={arrow_right} alt="" className={`dropdown ${partners ? "rotate--img" : ""}`}/></span>
                                <ul className={`dropdown ${partners ? "show" : ""}`}>
                                    <li><a href="https://www.ecwid.com/partners/reseller">Reseller Program</a></li>
                                    <li><a href="https://www.ecwid.com/partners/white-label">White Label Solutions</a></li>
                                    <li><a href="https://www.ecwid.com/partners/referral">Referral Program</a></li>
                                    <li><a href="https://www.ecwid.com/partners/app-market">Build an app</a></li>
                                    <li><a href="https://www.ecwid.com/experts">Ecwid Experts</a></li>
                                </ul>
                            </li>
                            <li>
                                <span role="button" onClick={() => setCompany(!company)}>COMPANY <img src={arrow_right} alt="" className={`dropdown ${company ? "rotate--img" : ""}`}/></span>
                                <ul className={`dropdown ${company ? "show" : ""}`}>
                                    <li><a href="https://www.ecwid.com/about">About Us</a></li>
                                    <li><a href="https://www.ecwid.com/blog">Ecwid Blog</a></li>
                                    <li><a href="https://www.ecwid.com/press">Press</a></li>
                                    <li><a href="https://www.ecwid.com/sitemap">Sitemap</a></li>
                                    <li><a href="https://www.lightspeedhq.com/legal/privacy-policy/">Privacy Policy</a></li>
                                </ul>
                            </li>
                            <li>
                                <span role="button" onClick={() => setSupport(!support)}>SUPPORT <img src={arrow_right} alt="" className={`dropdown ${support ? "rotate--img" : ""}`}/></span>
                                <ul className={`dropdown ${support ? "show" : ""}`}>
                                    <li><a href="https://support.ecwid.com/">Help Center</a></li>
                                    <li><a href="https://support.ecwid.com/hc/en-us/articles/4405020488466">Product Updates</a></li>
                                    <li><a href="https://developers.ecwid.com/">App developers</a></li>
                                    <li><a href="https://status.ecwid.com/">Status Monitor</a></li>
                                    <li><a href="https://support.ecwid.com/hc/en-us/requests/new">Contact Support</a></li>
                                    <li><a href="https://www.ecwid.com/guides">Free Guides</a></li>
                                    <li><a href="https://api-docs.ecwid.com/reference/overview">API documentation</a></li>
                                    <li><a href="https://www.ecwid.com/ecwid-101">Ecwid 101</a></li>
                                    <li><a href="https://ecommerce-academy.ecwid.com/">Ecwid Academy</a></li>
                                </ul>
                            </li>
                            <li>
                                <span role="button" onClick={() => setResources(!resources)}>RESOURCES <img src={arrow_right} alt="" className={`dropdown ${resources ? "rotate--img" : ""}`}/></span>
                                <ul className={`dropdown ${resources ? "show" : ""}`}>
                                    <li><a href="https://www.ecwid.com/products-to-sell">Products to sell</a></li>
                                    <li><a href="https://www.ecwid.com/sell-online">How to Sell Online</a></li>
                                    <li><a href="https://www.ecwid.com/online-store">Create an Online Store</a></li>
                                    <li><a href="https://www.ecwid.com/start-business-usa">Start a Business</a></li>
                                    <li><a href="https://www.ecwid.com/glossary">Ecom Glossary</a></li>
                                    <li><a href="https://www.ecwid.com/insights">Ecommerce Insights</a></li>
                                </ul>
                            </li>
                            <li>
                                <span role="button" onClick={() => setBlog(!blog)}>LATEST BLOG <img src={arrow_right} alt="" className={`dropdown ${blog ? "rotate--img" : ""}`}/></span>
                                <ul className={`dropdown ${blog ? "show" : ""}`}>
                                    <li><a href="https://www.ecwid.com/blog/overcoming-the-fear-of-creating-content.html">Ecommerce Content 101: Overcoming the Fear of Creating Content</a></li>
                                    <li><a href="https://www.ecwid.com/blog/how-this-store-saved-hundreds-of-work-hours.html">How This Store with a Large Catalog Saved Hundreds of Work Hours</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="search--socials--container">
                            <form>
                                <input type="text" placeholder="Search" title="Search"/>
                            </form>
                            <div className="socials--download--container">
                                <ul className="socials--ul">
                                    <li><a href="https://www.ecwid.com/blog" aria-label="Read our blog"><img src={blogpost} alt="Read our blog"/></a></li>
                                    <li><a href="https://www.ecwid.com/podcasts" aria-label="Listen to our podcast"><img src={podcast} alt="Listen to our podcast"/></a></li>
                                    <li><a href="https://www.pinterest.ru/ecwid" aria-label="Visit our Pinterest page"><img src={pinterest} alt="Visit our Pinterest page"/></a></li>
                                    <li><a href="https://www.facebook.com/ecwid" aria-label="Visit our Facebook page"><img src={facebook} alt="Visit our Facebook page"/></a></li>
                                    <li><a href="https://twitter.com/ecwid" aria-label="Visit our Twitter profile"><img src={twitter} alt="Visit our Twitter profile"/></a></li>
                                    <li><a href="https://www.instagram.com/ecwid/" aria-label="Visit our Instagram profile"><img src={instagram} alt="Visit our Instagram profile"/></a></li>
                                    <li><a href="https://www.youtube.com/user/EcwidTeam" aria-label="Visit our Youtube channel"><img src={youtube} alt="Visit our Youtube channel"/></a></li>
                                </ul>
                                <div className="download--container">
                                    <a href="https://itunes.apple.com/us/app/ecwid/id626731456?mt=8" aria-label="Download our app from Apple App Store"><img src={apple_store} alt="Download our app from Apple App Store"/></a>
                                    <a href="https://play.google.com/store/apps/details?id=com.ecwid.android" aria-label="Download our app from Google Play"><img src={google_store} alt="Download our app from Google Play"/></a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="footer--separator tablet"></div>
                <ul className="language--copyright--ul">
                    <li>
                        <button>
                            <img src={global} alt=""/>
                            <span>GLOBAL</span>
                        </button>
                    </li>
                    <li><p>© 2022 Ecwid by Lightspeed</p></li>
                    <li><a href="https://www.lightspeedhq.com/legal/data-processing-agreement/">DPA</a></li>
                    <li><a href="https://www.lightspeedhq.com/legal/lightspeed-service-agreement/">Terms of Service</a></li>
                    <li><a href="https://www.ecwid.com/copyright-policy">Copyright Policy</a></li>
                    <div className="footer--separator"></div>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;