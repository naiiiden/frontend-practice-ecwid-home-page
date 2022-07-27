const Content = ({ hText, mainDesc, href, f1Src, f1Desc, f2Src, f1Desc, tAvatar, tName, tDesc, tReviewer, tStars, cIllustration }) => {
    <section className="content--container">
        <div className="content--text--container">
            <h2 className="content--heading">{hText}</h2>
            <p className="content--description">{mainDesc}</p>
            <a href={href} className="content--link">Learn more →</a>
            <div className="content--features--container">
                <div className="feature">
                    <img src={f1Src} alt="" className="content--feature--img"/>
                    <p className="content--feature--desc">{f1Desc}</p>
                </div>
                <div className="feature">
                    <img src={f2Src} alt="" className="content--feature--img"/>
                    <p className="content--feature--desc">{f2Desc}</p>
                </div>
            </div>
            <div className="content--testimonial--container">
                <div className="testimonial--avatar--container">
                    <img src={tAvatar} alt="" className="testimonial--avatar"/>
                    <p className="testimonial--name">{tName}</p>
                </div>
                <p>{tDesc}</p>
                <div className="testimonial--img--container">
                    <img src={tReviewer} alt="" className="testimonial--reviewer"/>
                    <img src={tStars} alt="" className="testimonial--stars"/>
                </div>
            </div>
        </div>
        <img src={cIllustration} alt="" className="content--illustration"/>
    </section>
}

export default Content;