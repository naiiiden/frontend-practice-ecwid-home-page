import hero_illustration from "../images/illustrations/hero-illustration.webp";
import capterra from "../images/awards/capterra.webp";
import trustpilot from "../images/awards/trustpilot.webp";
import crowd from "../images/awards/crowd.webp";

const Hero = () => {
    return (
        <section className="hero--section">
            <h1 className="hero--heading">Start selling online for free</h1>
            <p className="hero--description">We’re putting free trials on trial. With Ecwid, you get free forever. Set up your free account once, and keep it as long as you like. Seriously.</p>
            <a href="https://my.ecwid.com/cp/#register">Get started for free</a>
            <p className="hero--small">No credit card required</p>
            <img src={hero_illustration} alt="" className="hero--illustration"/>
            <div className="hero--ratings--container">
                <figure className="hero--rating">
                    <img src={capterra} alt="capterra's review" className="reviewer"/>
                    <figcaption className="rater--opinion">Best ease of use</figcaption>
                </figure>
                <figure className="hero--rating">
                    <img src={trustpilot} alt="trustpilot's review" className="reviewer"/>
                    <figcaption className="rater--opinion">4.7 average rating</figcaption>
                </figure>   
                <figure className="hero--rating">
                    <img src={crowd} alt="crowd's review" className="reviewer"/>
                    <figcaption className="rater--opinion">Easiest Setup Summer 2021</figcaption>
                </figure>
                <figure className="hero--rating">
                    <img src={crowd} alt="crowd's review" className="reviewer"/>
                    <figcaption className="rater--opinion">Best Usability Summer 2021</figcaption>
                </figure>
            </div>
        </section>
    )
}

export default Hero;