// import {combineReducers} from 'redux'
const {combineReducers} = require('redux')
// import {UPDATE_CONTACT, UPDATE_USER} from './actions'
const {UPDATE_CONTACT, UPDATE_USER} = require('./actions')

const userReducer = (state = {}, action) => {
    if(action.type === UPDATE_USER){
        return {
            ...state,
            ...action.payload
        }
    }
    return state
}

const contactReducer = (state = [], action) => {
    if(action.type === UPDATE_CONTACT){
        return [...state, action.payload]
    }
    return state
}

const reducer = combineReducers({
    user: userReducer,
    contact: contactReducer
})

module.exports = reducer