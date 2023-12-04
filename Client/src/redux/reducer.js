import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types"

const initialState = {
    myFavorites: [],  // es que se renderiza, va agrgeando char [{id:1, name:, status} {id:2, name:}]
    allCharacters: []  // se hace prop para filter y order, no perder nada
}

export default function reducer(state = initialState, action) {
    //si no destructuring en argum-> en vez de action poner {type, payload} y usar directmente
    const { type, payload } = action
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload,
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload
            }
        case FILTER: //Le hago filter al all, crea copia no lo modifica y renderizo solo myFavorites, en all queda todo
            if (payload === "all") return {
                ...state,
                myFavorites: state.allCharacters
            }
            const filterGender = state.allCharacters.filter(
                (char) => char.gender === payload)  //la base de dato debe ser igual que el event.target en min y may
            return {
                ...state,
                myFavorites: filterGender, //este renderiza, el all guarda todos
            }
        case ORDER:
            const orderCopyFavs = [...state.myFavorites]
            if (payload === "A") { // El sort modifica el orig, por eso hago copia
                orderCopyFavs.sort((a, b) => a.id - b.id)// sort con cb ordena ascendente
            }
            if (payload === "D") {// El sort modifica el orig, por eso hago copia
                orderCopyFavs.sort((a, b) => b.id - a.id)
            }
            return {
                ...state,
                myFavorites: orderCopyFavs,
            }
        default:
            return {
                ...state
            }
    }
}