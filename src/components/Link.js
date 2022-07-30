const Link = ({ src, hText, pText, href }) => {
    return (
        <a href={href} className="link--main">
            <section className="link--container">
                <img src={src} alt="" className="link--img"/>
                <h3 className="link--heading">{hText}</h3>
                <p className="link--desc">{pText}</p>
                <a href={href} className="link--sub">Learn more →</a>
            </section>
        </a>
    )
}

export default Link;