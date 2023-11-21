
const initialState = {
    myFavorites: []
}

export default function reducer(state = initialState, actions) {
    switch (actions.type) {
        case "ADD_FAV":
            return {
                ...state,
                myFavorites: [...state.myFavorites, (actions.payload)]
            }
        // case "REMOVE_FAV":
        //     return {
        //         ...state,
        //         myFavorites versi hacer un filter
        //     }
        default:
            return {
                ...state
            }
    }
}