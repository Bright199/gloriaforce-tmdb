<template>
    <div>
        <!-- <p class="text-white">{{ movieDetails }}</p> -->
        <img v-if="movieDetails.backdrop_path" :src="imageUrl+movieDetails.backdrop_path" alt="" style="width: 100vw; height: 100%">
        <img v-else :src="imageUrl+movieDetails.poster_path" alt="" style="width: 100vw; height: 100%">
    </div>
</template>

<script>
import axios from 'axios'
import api from '../assets/js/api'
export default {
    name: 'SingleMovie',
    props: ['movieId'],
    data() {
        return {
            movieDetails: ''
        }
    },
    methods: {
        singleMovie() {
            const singleMovieUrl = 'https://api.themoviedb.org/3/movie/ ' + this.movieId + '?api_key=' + api.api_key + '&language=en-US'
            axios.get(`${singleMovieUrl}`)
                .then(res => {
                    this.movieDetails = res.data
                    console.log(res.data);
                })
                .catch(error => {
                    console.log(error);
                })
            // https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1
        },
    },
    mounted() {
        this.singleMovie()
    },

    computed: {
        imageUrl() {
            return api.movie_image
        }
    },
}
</script>

<style>
</style>