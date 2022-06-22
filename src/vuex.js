import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            count: 0,
            searchMovie: false,
            searchPageNumber: 1,
            selectedDayIndex: 0
        }
    },

    mutations: {
        setDayIndex(state, payload){
            state.selectedDayIndex = payload.dayIndex
        },
        setSearchMovie(state) {
            state.searchMovie = true
        },
        increaseSearchPageNumber(state) {
            state.searchPageNumber++
        },
        decreaseSearchPageNumber(state) {
            if (state.searchPageNumber > 1) {
                state.searchPageNumber--
            }
        }
    }
})

export default store;