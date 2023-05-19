import { useContext } from "react";
import {Link} from "react-router-dom"
import { ThemeContext } from "../../contexts/themeContext";
import "./Header.css"
import sunIcon from "../../assets/desktop/icon-sun.svg"
import moonIcon from "../../assets/desktop/icon-moon.svg"

const Header = () => {

    const {toggleTheme} = useContext(ThemeContext)

    return (     
            <header className="header">
                <div className="header--container">
                    <h1 className="site-title"><Link to="/">devjobs</Link></h1>
                    <div className="icon-switch">
                        <img src={sunIcon} alt="sun icon for light mode" />
                        <label className="switch">
                            <input type="checkbox" onChange={toggleTheme} />
                            <span></span>
                        </label>
                        <img src={moonIcon} alt="moon icon for dark mode" />
                    </div>
                </div>
            </header>
    );
}
 
export default Header;
