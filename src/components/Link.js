const Link = ({ src, hText, pText, href1, href2 }) => {
    return (
        <a href={href1} className="link--main">
            <section className="link--container">
                <img src={src} alt="" className="link--img"/>
                <h3 className="link--heading">{hText}</h3>
                <p className="link--desc">{pText}</p>
                <a href={href2} className="link--sub">Learn more →</a>
            </section>
        </a>
    )
}

export default Link;