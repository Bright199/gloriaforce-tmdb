<template>
    <div class="header" v-if="searchMovie">
        <div class="pagination ">
            <h1 class="header-text">Search results</h1>
            <ul>
                <li class="prev-pagination" @click="prevPage"><i class="fa-solid fa-angle-left"></i></li>
                <li class="page-number">Page {{ pageNumber }}</li>
                <li class="next-pagination" @click="nextPage"><i class="fa-solid fa-angle-right"></i></li>
            </ul>
        </div>
        <div class="text-white most-popular-movies">
            <div class="movie-card" v-for="movie in searchMovieList" :key="movie.id">
                <img :src="movie_image + movie.poster_path" alt="" class="movie-image">
                <div class="overlay">
                    <p class="movie-rate">{{ movie.vote_average }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'SearchMovie',
    props: [
        'searchMovieList'
    ],
    data() {
        return {
            pageNumber: 1,
            movie_image: ' https://image.tmdb.org/t/p/original/',
        }
    },
    computed: {
        ...mapState({
            count: state => state.count,
            searchMovie: state => state.searchMovie
        })
    },
    methods: {
        prevPage() {
            if (this.pageNumber > 1) {
                this.pageNumber--
                this.$store.commit({
                    type: 'decreaseSearchPageNumber'
                })
                this.$emit('searchPrevPage')
            }
        },
        nextPage() {
            this.pageNumber++
            this.$store.commit({
                type: 'increaseSearchPageNumber'
            })
            this.$emit('searchNextPage')
            // this.getLatestMovies()
        },
    },
}
</script>

<style scoped>
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
    .movie-card {
        width: 100%;
    }

    .movie-card .movie-image {
        width: 100%;
    }
}
</style>