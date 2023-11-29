import { useDispatch, useSelector } from "react-redux"
import Card from "../Card/Card"
import { filterCards, orderCards } from "../../redux/actions";
import style from './Favorites.module.css'



export default function Favorites({ onClose }) {

    const myFavorites = useSelector(state => state.myFavorites)

    const dispatch = useDispatch();
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value)) //value debe coincidir con base de api
    }

    return (
        <div>
            <div>
                <select className={style.select} name="order" id="" onChange={handleOrder}>
                    <option value="A">Upward</option>
                    <option value="D">Downward</option>
                </select>
                <select className={style.select} name="filter" id="" onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                    <option value="all">All</option>
                </select>
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly"
                }}
            >
                {
                    !myFavorites.length ?
                        <h2>Ups! You don't have any favorites characters yet</h2>
                        :
                        myFavorites && myFavorites.map((character) =>
                        (<Card
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            gender={character.gender}
                            origin={character.origin.name}
                            image={character.image}
                            onClose={onClose}
                        />)
                        )

                }
            </div >


        </div>


    )
}
// seleccionar todos iguales: ctrl F y cambio todos juntos!