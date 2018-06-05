//  action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

// action creators
const updateUser = newUser => ({
    type: UPDATE_USER,
    payload: newUser
})

const updateContact = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact
})

module.exports = {
    UPDATE_USER,
    UPDATE_CONTACT,
    updateUser,
    updateContact
}