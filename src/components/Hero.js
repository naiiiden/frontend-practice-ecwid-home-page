import hero_illustration from "../images/illustrations/rectangle--8.webp";

const Hero = () => {
    return (
        <section className="hero--section">
            <h1 className="hero--heading">Start selling online for free</h1>
            <p className="hero--description">We’re putting free trials on trial. With Ecwid, you get free forever. Set up your free account once, and keep it as long as you like. Seriously.</p>
            <a href="https://my.ecwid.com/cp/#register">Get started for free</a>
            <p className="hero--small">No credit card required</p>
            <img src={hero_illustration} alt="" className="hero--illustration"/>
        </section>
    )
}

export default Hero;