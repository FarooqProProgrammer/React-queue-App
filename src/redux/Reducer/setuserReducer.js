export default function reducer(state = {}, action) {

    console.log('theme inside reducer', action.data)

    switch (action.type) {

        case 'SET_USER': return { ...state, User: action.data }

        // case 'REMOVE_THEME': return { ...state, User: null }

        default: return state

    }

}
