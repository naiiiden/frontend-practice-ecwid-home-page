import header_logo from "../images/logo/logo-light.svg"; 

const Header = () => {
    return (
        <header className="header">
            <img src={header_logo} alt="Ecwid's logo" className="header--logo"/>
            <button className="mobile--navigation--button" aria-label="toggle navigation">
                <div className="button--inner--div"></div>
            </button>
        </header>
    )
}

export default Header;