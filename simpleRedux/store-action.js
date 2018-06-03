/**
 * An action is a piece of data that contains the information required to make a state update
 * Functions that create actions are called action creators
 * Actions must be dispatched in order to affect the state
 * Action -> Reducer -> Update Store
 */

//  action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

const DEFAULT_STATE = {
    user: {},
    contact: []
}

class Store {
    constructor(reducer, initState){
        this.reducer = reducer
        this.state = initState
    }

    getState(){
        return this.state
    }

    dispatch(update){
        this.state = this.reducer(this.state, update)
    }
}

// reducers
// const userReducer = (state, update) => ({
//     ...state,
//     ...update
// })
// const contactReducer = (state, newContact) => [...state, newContact]
// const reducer = (state, action) => {
//     if(action.type === UPDATE_USER){
//         return {
//             ...state,
//             user: userReducer(state.user, action.payload)
//         }
//     }
//     if(action.type === UPDATE_CONTACT){
//         return {
//             ...state,
//             contact: contactReducer(state.contact, action.payload)
//         }
//     }

//     return state
// }

const userReducer = (state, action) => {
    if(action.type === UPDATE_USER){
        return {
            ...state,
            ...action.payload
        }
    }
    return state
}

const contactReducer = (state, action) => {
    if(action.type === UPDATE_CONTACT){
        return [...state, action.payload]
    }

    return state
}

const reducer = (state, action) => ({
    user: userReducer(state.user, action),
    contact: contactReducer(state.contact, action)
})

// action creators
const updateUser = newUser => ({
    type: UPDATE_USER,
    payload: newUser
})

const updateContact = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact
})

const store = new Store(reducer, DEFAULT_STATE)
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'baz'}))
store.dispatch(updateContact({name: 'eric', number: '123467890'}))
store.dispatch(updateContact({name: 'kevin', number: '667788'}))

console.log(store.getState())
