import circle from "../images/shapes/bitmap--1.webp";
import triangle from "../images/shapes/bitmap.webp";

const Cta = () => {
    return (
        <div className="big-width">
            <article className="cta--container">
                <img src={circle} alt="" className="shape"/>
                <img src={triangle} alt="" className="shape"/>
                <h2 className="cta--heading">Your free online store is just a few clicks away</h2>
                <div className="cta--subcontainer">
                    <a href="https://my.ecwid.com/cp/#register" className="cta--link">Get started for free →</a>
                    <p className="cta--p">No credit card required</p>
                </div>
            </article>
        </div>
    )
}

export default Cta;