import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom"
import style from "./Nav.module.css"

function Nav({ onSearch, onRandomSearch, logout }) {

    function handleClickLogout(event) {
        logout();
    }

    return (
        <div className={style.container}>
            <div className={style.containerBtns}>
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
                <button>
                    <NavLink
                        to="/favorites"
                        style={({ isActive }) => isActive ? { color: "gray" } : null}
                    >Favorites</NavLink>
                </button>
            </div>

            <div>
                <SearchBar onSearch={onSearch} onRandomSearch={onRandomSearch}> </SearchBar>
            </div>

            <button onClick={handleClickLogout}>Log out ✘</button>


        </div >


    )
}

export default Nav;