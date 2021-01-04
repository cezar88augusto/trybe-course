
const INITIAL_STATE =  [];

function registerReducer(state = INITIAL_STATE, action) {
    if (action.type === "ADD_CLIENT") {
        return [...state, action.client]
    }
    return state

}

export default registerReducer;