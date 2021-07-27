import {combineReducers} from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllPizzasReducer } from './reducers/pizzaReducers'

const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer
})
const InitialState = {}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, InitialState, composeEnhancers(applyMiddleware(thunk)))

export default store;