import { combineReducers, createStore } from 'redux';
import registerReducer from '../reducer/registerReducer'
import loginReducer from '../reducer/loginReducer'

const rootReducers = combineReducers({
    registerReducer,
    loginReducer
})

const store = createStore(rootReducers)

export default store;