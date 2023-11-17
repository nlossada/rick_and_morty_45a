import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom"

function Nav({ onSearch, onRandomSearch, logout }) {

    function handleClickLogout(event) {
        logout();
    }

    return (
        <div>
            <button>
                <NavLink
                    to="/home"
                    style={({ isActive }) => isActive ? { color: "gray" } : null}
                >Home</NavLink>
            </button>
            <button>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? { color: "gray" } : null}
                >About</NavLink>
            </button>
            <SearchBar onSearch={onSearch} onRandomSearch={onRandomSearch}> </SearchBar>

            <button onClick={handleClickLogout}>Log out</button>
        </div >


    )
}

export default Nav;