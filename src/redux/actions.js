import axios from "axios"


export function addFav(id) {
    return function (dispatch) {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => dispatch({
                type: "ADD_FAV",
                payload: response.data
            }))
    }
}


// FALTA TERMINAR, REVISAR
export function removeFav(id) {
    return {
        type: "REMOVE_FAV",
        payload: response.data
    }
}

