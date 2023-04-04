import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import "./Header.css"
const Header = () => {

    const {toggleTheme} = useContext(ThemeContext)

    return (     
            <header className="header">
                <div className="container">
                    <h1>devjobs</h1>
                    <div className="icon-switch">
                        <img src="assets/desktop/icon-sun.svg" alt="sun icon for light mode" />
                        <label className="switch">
                            <input type="checkbox" onChange={toggleTheme} />
                            <span></span>
                        </label>
                        <img src="assets/desktop/icon-moon.svg" alt="moon icon for dark mode" />
                    </div>
                </div>
            </header>
    );
}
 
export default Header;
