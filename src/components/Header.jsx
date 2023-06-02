import { Link, useNavigate } from "react-router-dom"
import { Menu, MenuNav } from "../styled_components/TextStyledComponents";
import { useContext } from "react";
import { GeneralContext } from "../ThemeContext";

const Header = () => {
    const navigate = useNavigate();
    const logout = () => {
        sessionStorage.clear();
        navigate("/login");
    }
    const {store, setStore} = useContext(GeneralContext);
    const switchTheme = () => {
        setStore(
            {
                ...store, 
                theme: store.theme === "light" ? "dark" : "light"
            }
        )
    }

    return (
        <header>
            <MenuNav themeColor={store.theme === "light" ? "light" : "dark"}>
                <Menu>
                    <li>
                        <Link to="/quotes">Quotes</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <button onClick={logout}>Logout</button>
                    </li>
                    <li>
                        <button onClick={switchTheme}>{store.theme === "light" ? "Dark Mode" : "Ligth Mode"}</button>
                    </li>
                </Menu>
            </MenuNav>
        </header>
    )
}

export default Header