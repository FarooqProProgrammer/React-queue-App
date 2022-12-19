

function setUser(User) {

    console.log('theme inside setTheme action', User)

    return {

        type: 'SET_USER',

        data: User

    }

}
export {
    setUser
}