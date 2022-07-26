import square from "../images/shapes/bitmap--3.webp";
import triangle1 from "../images/triangles/bitmap--4.webp";
import triangle2 from "../images/triangles/bitmap--5.webp";

const World = () => {
    return (
        <div className="big-width">
            <section className="world--section">
                <img src={square} alt="" className="shape"/>
                <img src={triangle1} alt="" className="shape"/>
                <img src={triangle2} alt="" className="shape"/>
                <div className="text--container">
                    <h2 className="world--heading">Sell around the world</h2>
                    <p className="world--desc">Take your small business global with built-in international payment tools and translation support for 50 languages - and counting.</p>
                </div>
                <div className="numbers--container">
                    <div className="number--subcontainer">
                        <h3 className="number">50+</h3>
                        <p className="small-text">Payment gateways</p>
                    </div>
                    <div className="number--subcontainer">
                        <h3 className="number">175</h3>
                        <p className="small-text">Countries</p>
                    </div> 
                    <div className="number--subcontainer">
                        <h3 className="number">50</h3>
                        <p className="small-text">Languages</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default World;