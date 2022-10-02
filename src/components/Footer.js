import { useState } from "react";
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
import search from "../images/icons/icon-search.svg";

const Footer = () => {
    const [sellOnline, setSellOnline] = useState(false);
    const [product, setProduct] = useState(false);
    const [business, setBusiness] = useState(false);
    const [partners, setPartners] = useState(false);
    const [company, setCompany] = useState(false);
    const [support, setSupport] = useState(false);
    const [resources, setResources] = useState(false);
    const [blog, setBlog] = useState(false);
    const [openGlobal, setOpenGlobal] = useState(false);

    return (
        <>
        <div className="big-width-footer">
            <footer>
                <div className="logo--nav--container">
                    <a href="https://www.ecwid.com/" aria-label="Go to our homepage" className="footer--logo--link"><img src={footer_logo} alt="Ecwid's logo" className="footer--logo"/></a>
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
                                <input type="text" placeholder="Search" title="Search" aria-label="Search"/>
                                <button className="search--button" type="submit" aria-label="Search">
                                    <img src={search} alt=""/>
                                </button>
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
                        <a href={openGlobal ? "#languages" : "#languages"} className="languages--button" onClick={() => setOpenGlobal(!openGlobal)}>
                            <img src={global} alt=""/>
                            <span>GLOBAL</span>
                        </a>
                    </li>
                    <li><p>© 2022 Ecwid by Lightspeed</p></li>
                    <li><a href="https://www.lightspeedhq.com/legal/data-processing-agreement/">DPA</a></li>
                    <li><a href="https://www.lightspeedhq.com/legal/lightspeed-service-agreement/">Terms of Service</a></li>
                    <li><a href="https://www.ecwid.com/copyright-policy">Copyright Policy</a></li>
                    <div className="footer--separator"></div>
                </ul>
            </footer>
        </div>
        <div className="languages--big--container">
            <section id="languages" className={`languages--container ${openGlobal ? "opened" : ""}`}>
                <div>
                    <a href="https://www.ecwid.com/es">
                        <span className="flag argentina"></span>
                        <span className="country--name">Argentina</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/fi">
                        <span className="flag finland"></span>
                        <span className="country--name">Finland</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/jp">
                        <span className="flag japan"></span>
                        <span className="country--name">Japan</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/pe">
                        <span className="flag peru"></span>
                        <span className="country--name">Peru</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/se">
                        <span className="flag sweden"></span>
                        <span className="country--name">Sweden</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/br">
                        <span className="flag brazil"></span>
                        <span className="country--name">Brazil</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/fr">
                        <span className="flag france"></span>
                        <span className="country--name">France</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/kr">
                        <span className="flag korea"></span>
                        <span className="country--name">Korea</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/ph">
                        <span className="flag philippines"></span>
                        <span className="country--name">Philippines</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/th">
                        <span className="flag thailand"></span>
                        <span className="country--name">Thailand</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/bg">
                        <span className="flag bulgaria"></span>
                        <span className="country--name">Bulgaria</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/de">
                        <span className="flag germany"></span>
                        <span className="country--name">Germany</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/lv">
                        <span className="flag latvia"></span>
                        <span className="country--name">Latvia</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/pl">
                        <span className="flag poland"></span>
                        <span className="country--name">Poland</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/tr">
                        <span className="flag turkey"></span>
                        <span className="country--name">Turkey</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/cn">
                        <span className="flag china"></span>
                        <span className="country--name">China</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/el">
                        <span className="flag greece"></span>
                        <span className="country--name">Greece</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/lt">
                        <span className="flag lithuania"></span>
                        <span className="country--name">Lithuania</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/pt">
                        <span className="flag portugal"></span>
                        <span className="country--name">Portugal</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/">
                        <span className="flag usa"></span>
                        <span className="country--name">USA</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/es">
                        <span className="flag colombia"></span>
                        <span className="country--name">Columbia</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/hu">
                        <span className="flag hungary"></span>
                        <span className="country--name">Hungary</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/es">
                        <span className="flag mexico"></span>
                        <span className="country--name">Mexico</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/ro">
                        <span className="flag romania"></span>
                        <span className="country--name">Romania</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/es">
                        <span className="flag venezuela"></span>
                        <span className="country--name">Venezuela</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/cz">
                        <span className="flag czech"></span>
                        <span className="country--name">Czech Republic</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/in">
                        <span className="flag india"></span>
                        <span className="country--name">India</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/nl">
                        <span className="flag netherlands"></span>
                        <span className="country--name">Netherlands</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/sk">
                        <span className="flag slovakia"></span>
                        <span className="country--name">Slovakia</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/ae">
                        <span className="flag uae"></span>
                        <span className="country--name">United Arab Emirates</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/da">
                        <span className="flag denmark"></span>
                        <span className="country--name">Denmark</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/id">
                        <span className="flag indonesia"></span>
                        <span className="country--name">Indonesia</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/no">
                        <span className="flag norway"></span>
                        <span className="country--name">Norway</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/es">
                        <span className="flag spain"></span>
                        <span className="country--name">Spain</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/">
                        <span className="flag global"></span>
                        <span className="country--name">Global</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/eg">
                        <span className="flag egypt"></span>
                        <span className="country--name">Egypt</span>
                    </a>
                </div>
                <div>
                    <a href="https://www.ecwid.com/it">
                        <span className="flag italy"></span>
                        <span className="country--name">Italy</span>
                    </a>
                </div>
            </section>
        </div>
        </>
    )
}

export default Footer;