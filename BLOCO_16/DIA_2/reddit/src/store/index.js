import { combineReducers, createStore } from 'redux';
import registerReducer from '../reducer'

const rootReducer = combineReducers({
    registerReducer
})

const store = createStore(rootReducer)

export default store;