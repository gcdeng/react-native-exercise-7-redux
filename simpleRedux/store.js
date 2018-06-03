/**
 * Responsible for maintaining state
 * Exposes getter via getState()
 * Can only be updated by using dispatch()
 * Can add listeners that get invoked when state changes
 */

const reducer = require('./reducer')

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

const store = new Store(reducer)
store.dispatch({foo: 'foo'})
store.dispatch({bar: 'bar'})
store.dispatch({foo: 'baz'})

console.log(store.getState())
