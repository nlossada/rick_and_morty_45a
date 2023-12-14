import axios from "axios"
import { ADD_EPISODE, ADD_FAV, COMPLETED_EPISODE, DELETE_EPISODE, FILTER, ORDER, REMOVE_FAV } from "./action-types"


export const addFav = (character) => {
    return async (dispatch) => {
        try {
            const endpoint = "http://localhost:3001/rickandmorty/fav";
            const { data } = await axios.post(endpoint, character);

            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            //ideal, despachar un error y modificar reducer, creando nuevo case ERROR y nnuevo estado errors{}, si tiene algo, mostrar el error al usuario y limpiar error en cada caso positivo
            window.alert(error.message)
        }
    };
};


export const removeFav = (id) => {
    return async (dispatch) => {
        try {
            const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
            const { data } = await axios.delete(endpoint)
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.log("error en actions removeFav" + error.message)
        }
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


export const addEpisode = (id) => {
    return async (dispatch) => {
        try {
            if (!id) throw new Error("You must insert and id")
            //falta hacer la parte del back
            // const endpoint = "http://localhost:3001/rickandmorty/episode/" + id;
            const endpoint = "https://rickandmortyapi.com/api/episode/" + id;
            const { data } = await axios.get(endpoint)

            return dispatch({
                type: ADD_EPISODE,
                payload: { ...data, completed: false }
            });
        } catch (error) {
            window.alert("Episode ID must be between 1 and 51")
        }
    };
};

export const deleteEpisode = (id) => {
    return {
        type: DELETE_EPISODE,
        payload: id,
    }
}

export const completedEpisode = (id) => {
    return {
        type: COMPLETED_EPISODE,
        payload: id,
    }
}


