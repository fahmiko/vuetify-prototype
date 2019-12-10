export default {
    state: {
        dark: false
    },
    muttation: {
        setTheme(state) {
            state.dark = !state.dark
        }
    }
}