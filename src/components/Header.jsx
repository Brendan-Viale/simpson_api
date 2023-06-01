import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.clear();
        navigate("/login");
    }

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/quotes">Quotes</Link>
                    <Link to="/login">Login</Link>
                    <button onClick={logout}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}

export default Header