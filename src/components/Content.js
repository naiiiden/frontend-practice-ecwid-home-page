const Content = ({ hText, mainDesc, href, imgOrText, f1Src, f1hText, f1Desc, f2Src, f2hText, f2Desc, tAvatar, tName, tDesc, tReviewer, tStars, cIllustration }) => {
    return (
        <section className="content--container">
            <div className="text--illustration--container">
                <div className="content--text--container">
                    <h2 className="content--heading">{hText}</h2>
                    <p className="content--description">{mainDesc}</p>
                    <a href={href} className="content--link">Learn more →</a>
                    <div className="content--features--container">
                        <div className="content--feature">
                            {imgOrText ? <img src={f1Src} alt="" className="content--feature--img"/> : <h3 className="content--feature--heading">{f1hText}</h3>}
                            <p className="content--feature--desc">{f1Desc}</p>
                        </div>
                        <div className="content--feature">
                            {imgOrText ? <img src={f2Src} alt="" className="content--feature--img"/> : <h3 className="content--feature--heading">{f2hText}</h3>}
                            <p className="content--feature--desc">{f2Desc}</p>
                        </div>
                    </div>
                </div>
                <img src={cIllustration} alt="" className="content--illustration"/>
            </div>
            <div className="content--testimonial--container">
                <p>{tDesc}</p>
                <div className="avatar--reviewer--container">
                    <div className="testimonial--avatar--container">
                        <img src={tAvatar} alt="" className="testimonial--avatar"/>
                        <p className="testimonial--name">{tName}</p>
                    </div>
                    <div className="testimonial--img--container">
                        <img src={tReviewer} alt="" className="testimonial--reviewer"/>
                        <img src={tStars} alt="" className="testimonial--stars"/>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Content;