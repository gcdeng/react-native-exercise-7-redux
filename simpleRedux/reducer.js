/**
 * Takes the previous state and an update and applies the update
 * Should be a pure function
 * Should be immutable
 */
const merge = (prev, next) => Object.assign({}, prev, next) 

const reducer = (state, update) => ({
    ...state,
    ...update
})

let state = {}
state = reducer(state, {foo: 'foo'})
state = reducer(state, {bar: 'bar'})
state = reducer(state, {foo: 'baz'})

// console.log(state)

module.exports = reducer