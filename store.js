const {createStore, combineReducers} = require('redux')
const reducer = require('./reducer')
const {updateUser, updateContact} = require('./actions')

const store = createStore(reducer)
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'baz'}))
store.dispatch(updateContact({name: 'eric', number: '123467890'}))
store.dispatch(updateContact({name: 'kris', number: '12345'}))
store.dispatch(updateContact({name: 'kevin', number: '667788'}))

console.log(store.getState())
