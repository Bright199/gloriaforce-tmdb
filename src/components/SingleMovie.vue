<template>
    <div>
        <nav class="large-screen-nav">
            <router-link to="/" class="logo-image">
                <img src="@/assets/images/logo.webp" alt="">
            </router-link>
            <ul class="right-nav">
                <!-- <li>
                    <router-link to="/">Home</router-link>
                </li> -->
                <li class="log-in">
                    <router-link to="#">sign in</router-link>
                </li>
            </ul>
        </nav>

        <div class="single-movie-container">
            <div class="main-container">
                <!-- <p class="text-white">{{ movieDetails }}</p> -->
                <div class="row p-5">
                    <div class="col-md-3">
                        <div class="poster-image">
                            <img :src="imageUrl + movieDetails.poster_path" alt="">
                        </div>
                    </div>
                    <div class="col-md-5">
                        <!-- descriptions -->
                        <h1 class="text-white">{{ movieDetails.original_title }}</h1>
                        <p class="text-white">{{ movieDetails.overview }}</p>
                        <div class="small-details">
                            <p class="text-white"><i class="fa-solid fa-star" style="color: var(--theme-color-red)"></i>
                                {{
                                        movieDetails.vote_average
                                }}</p>
                            <p class="text-white"><i class="fa-solid fa-calendar-days" style="color: #FFEC4A;"></i> {{
                                    movieDetails.release_date
                            }}</p>
                            <p class="text-white" v-for="genre in movieDetails.genres" :key="genre"> {{ genre.name }}
                            </p>

                        </div>
                    </div>
                    <div class="col-md-4"></div>
                </div>

            </div>
            <div style="width: 100%; height: 100%;">

                <img v-if="movieDetails.backdrop_path" :src="imageUrl + movieDetails.backdrop_path" alt=""
                    class="cover-image">
                <img v-else :src="imageUrl + movieDetails.poster_path" alt="" class="cover-image">
            </div>

        </div>
        <p class="text-white text-center mt-5">You may also like movies</p>
        <div class="container card-container mt-5">
            <div class="movie-card" v-for="movie in similarMovies" :key="movie.id" @click="goToSingleMovie(movie.id)">
                <img :src="imageUrl + movie.poster_path" alt="">
            </div>
        </div>

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
            movieDetails: '',
            whereToWatch: '',
            similarMovies: '',

        }
    },
    methods: {
        goToSingleMovie(movieId) {
            this.$router.push('/single/movie/' + movieId)
            setTimeout(() => {
                this.singleMovie()
                this.getSimilarMovies()
            }, 1000);
        },
        getWhereToWatch() {
            const whereToWatchUrl = 'https://api.themoviedb.org/3/movie/' + this.movieId + '/watch/providers?api_key=' + api.api_key + '&language=en-US';
            axios.get(`${whereToWatchUrl}`)
                .then(res => {
                    this.whereToWatch = res.data.results
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        getSimilarMovies() {
            const similarMovieUrl = 'https://api.themoviedb.org/3/movie/' + this.movieId + '/similar?api_key=' + api.api_key + '&language=en-US';
            axios.get(`${similarMovieUrl}`)
                .then(res => {
                    this.similarMovies = res.data.results
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        singleMovie() {
            const singleMovieUrl = 'https://api.themoviedb.org/3/movie/ ' + this.movieId + '?api_key=' + api.api_key + '&language=en-US'
            axios.get(`${singleMovieUrl}`)
                .then(res => {
                    this.movieDetails = res.data
                })
                .catch(error => {
                    console.log(error);
                })

        },

    },
    mounted() {
        this.singleMovie()
        this.getWhereToWatch()
        this.getSimilarMovies()
    },

    computed: {
        imageUrl() {
            return api.movie_image
        }
    },
}
</script>

<style scoped>
.movie-card {
    width: 250px;
    height: 300px;
}

.card-container {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}

.card-container img:hover {
    cursor: pointer;
    opacity: 0.5;
}

.movie-card img {
    width: 100%;
    height: 100%;
}

.small-details {
    display: flex;
    gap: 20px;
}

.poster-image {
    width: 300px;
    height: 390px;
    background-color: #fff;
    padding: 5px;
    border-radius: 10px 90px 150px;
}

.poster-image img {
    width: 100%;
    height: 100%;
    border-radius: 10px 90px 150px;

}

.cover-image {
    height: 100%;
    overflow-y: hidden;
    float: right;
}

.single-movie-container {
    position: relative;
    height: 650px;
}

.main-container {
    background: linear-gradient(to right, #000 40%, transparent);
    width: 100vw;
    height: 100%;
    position: absolute;
}

@media only screen and (max-width: 992px) {
    .card-container {
        display: flex;
        gap: 0px 0px 25px 0px;
        justify-content: center;
        width: 100%;
    }

    .movie-card {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
    }

    .movie-card img {
        width: 80%;
        height: 90%;
    }

    .movie-card .movie-image {
        width: 100%;
    }

    .single-movie-container {
    position: relative;
    min-height: 850px;
}
}
</style>