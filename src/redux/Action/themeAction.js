

function setTheme(theme) {

    console.log('theme inside setTheme action', theme)

    return {

        type: 'SET_THEME',

        data: theme

    }

}
export {
    setTheme
}