<template>
    <div class="header-background">
        <div class="container">

            <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6 movies-text-container">
                    <p style="color: var(--theme-color-red);">
                        Discover
                    </p>
                    <p class="text-white">
                        The Best Movies
                    </p>
                    <div class="input-group big-search mb-3">
                        <input type="text" class="form-control" placeholder="Search Movie" v-model="movieName">
                        <button class="search-btn input-group-text" @click="movieSearch">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../assets/js/api'
export default {
    name: 'BigHeader',
    data() {
        return {
            movieName: '',
        }
    },

    methods: {
        movieSearch() {
            this.$emit('searchMovie',this.movieName)
        }
    },
}
</script>

<style scoped>
.big-search input {
    height: 60px;
    background-color: black;
    border: 1px solid white;
    border-radius: 10px;
}

.big-search input:focus {
    outline: none;
    box-shadow: none;
    color: white;
}

.big-search button {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
}

.header-background {
    background: url('@/assets/images/cover.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-blend-mode: luminosity;
    height: 100vh;
    width: 100vw;
}

.movies-text-container {
    display: flex;
    padding: 200px 0px;
    flex-direction: column;
}

.movies-text-container p {
    font-size: 70px;
    line-height: 70px;
}
</style>