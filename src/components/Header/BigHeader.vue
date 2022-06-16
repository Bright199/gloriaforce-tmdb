<template>
    <div class="header">
        <!-- <img :src="movie_image + movieDetails.poster_path" alt="" class="header-image"> -->
        <div class="pagination ">
            <h1 class="header-text">MOST POPULAR MOVIES</h1>
            <ul>
                <li class="prev-pagination" @click="prevPage"><i class="fa-solid fa-angle-left"></i></li>
                <li class="page-number">Page {{ pageNumber }}</li>
                <li class="next-pagination" @click="nextPage"><i class="fa-solid fa-angle-right"></i></li>
            </ul>
        </div>
        <div class="text-white most-popular-movies">
            <div class="movie-card" v-for="movie in mostPopularMovieList" :key="movie.id">
                <img :src="movie_image + movie.poster_path" alt="" class="movie-image">
                <div class="overlay">
                    <p class="movie-rate">{{ movie.vote_average }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import api from '@/assets/js/api.js'
export default {
    name: 'BigHeader',
    data() {
        return {
            movieDetails: '',
            api_key: 'e9c8d956b7d8cfbf6c128920d4c39493',
            movie_image: ' https://image.tmdb.org/t/p/original/',
            most_popular_movies: 'https://api.themoviedb.org/3/movie/popular?api_key=',
            mostPopularMovieList: '',
            pageNumber: 1
        };
    },
    methods: {
        prevPage() {
            if (this.pageNumber > 1) {
                this.pageNumber--
                this.getLatestMovies()
            }
        },
        nextPage() {
            this.pageNumber++
            this.getLatestMovies()
        },
        // getSingleMovie() {
        //     axios.get(`https://api.themoviedb.org/3/movie/76341?api_key=${this.api_key}`)
        //         .then(res => {
        //             this.movieDetails = res.data
        //             console.log(res.data);
        //         });
        // },
        getLatestMovies() {
            axios.get(`${this.most_popular_movies + this.api_key + '&language=en-US&page=' +this.pageNumber}`)
                .then(res => {
                    this.mostPopularMovieList = res.data.results
                })
        }
    },
    mounted() {
        // this.getSingleMovie();
        this.getLatestMovies();

    },
}
</script>

<style scoped>
.header-image {
    width: 100%;
    height: 100%;
}

.header {
    height: 100vh;
    width: 100%;
}

.most-popular-movies {
    padding: 20px;
    display: flex;
    flex-flow: row wrap;
    gap: 25px;
}

.movie-card {
    position: relative;
}

.movie-card .overlay {
    position: absolute;
    background-color: var(--theme-color-lightblue);
    opacity: 0.3;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    width: 0%;
    /* bottom: 0; */
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.2s ease;
}

.movie-card:hover .overlay {
    width: 100%;
    cursor: pointer;
}

.movie-card .overlay .movie-rate {
    color: white;
    background-color: var(--theme-color-red);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.movie-card .movie-image {
    width: 250px;

}

.header-text {
    color: white;
    font-weight: 100;
}

.pagination {
    display: flex;
    padding: 25px 0px 25px 25px;
}

.pagination ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    width: 72%;
    padding: 5px 0px 2px;
}

.pagination .prev-pagination {
    border: 1px solid var(--theme-color-lightblue);
    padding: 6px 20px;
    color: var(--theme-color-red);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.pagination .next-pagination {
    border: 1px solid var(--theme-color-lightblue);
    padding: 6px 20px;
    color: var(--theme-color-red);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

.pagination .next-pagination:hover {
    background-color: #0d4992;
    color: white;
    cursor: pointer;
}

.pagination .prev-pagination:hover {
    background-color: #0d4992;
    color: white;
    cursor: pointer;
}

.page-number {
    color: white;
    padding: 6px 20px;
}

@media only screen and (max-width: 992px) {
    .movie-card{
        width: 100%;
    }
    .movie-card .movie-image{
        width: 100%;
    }
}

</style>