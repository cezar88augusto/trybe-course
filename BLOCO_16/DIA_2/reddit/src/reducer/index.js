import data from '../data'
const INITIAL_STATE =  data;

function registerReducer(state = INITIAL_STATE, action) {
    if (action.type === "ADD_CLIENT") {
        return [...state, action.client]
    }
    return state

}

export default registerReducer;