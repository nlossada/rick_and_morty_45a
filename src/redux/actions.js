import axios from "axios"
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types"


export function addFav(character) { //viene objeto {id:1, name:Rick, status}
    return {
        type: ADD_FAV,
        payload: character
    }
}

export function removeFav(id) {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

// para filtrado siempre hacer copia de todos ANTES de filtrar: allFavorites
export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender
    }
}

export function orderCards(order) {
    return {
        type: ORDER,
        payload: order
    }
}


