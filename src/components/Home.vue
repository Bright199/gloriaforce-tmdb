<template>
  <div>
    <nav class="large-screen-nav">
      <router-link to="/" class="logo-image">
        <img src="@/assets/images/logo.webp" alt="">
      </router-link>
      <ul class="right-nav">
        <li class="search">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search Movie" v-model="movieName">
            <button class="search-btn input-group-text" @click="movieSearch">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </li>
        <li class="log-in">
          <router-link to="#">Sign In</router-link>
        </li>
      </ul>
    </nav>
    <div class="big-heading">
      <BigHeaderVue @search-movie='searchMovie' />
    </div>
    <div class="search-results">
      <SearchMovieVue :search-movie-list='searchResults' @searchPrevPage='searchPrevPage'
        @searchNextPage='searchNextPage' />
    </div>

    <div class="popular-movies ">
      <PopularMoviesVue />
    </div>

    <div class="">
      <Footer />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Footer from './Footer.vue';
import BigHeaderVue from './Header/BigHeader.vue';
import SearchMovieVue from './SearchMovie.vue';
import PopularMoviesVue from './PopularMovies.vue';
import { mapState } from 'vuex';
export default {
  name: "Home",
  emits: [
    'searchNextPage', 'searchPrevPage', 'searchMovie'
  ],
  components: { BigHeaderVue, SearchMovieVue, PopularMoviesVue, Footer },
  data() {
    return {
      movieName: '',
      pageNumber: 1,
      apiKey: 'e9c8d956b7d8cfbf6c128920d4c39493',
      searchResults: '',
    }
  },
  methods: {
    searchMovie(movieTitle) {
      this.movieName = movieTitle
      this.movieSearch()
    },
    searchPrevPage() {
      this.movieSearch()
    },
    searchNextPage() {
      this.movieSearch()
    },
    movieSearch() {
      const serachUrl = 'https://api.themoviedb.org/3/search/movie?api_key='
      axios.get(`${serachUrl + this.apiKey + '&query=' + this.movieName + '&page=' + this.searchPageNumber + '&include_adult=false'}`)
        .then(res => {
          this.searchResults = res.data.results
          console.log(res);
        })
        .finally(() => {
          this.$store.commit({
            type: 'setSearchMovie'
          })
        })
    }
  },
  computed: {
    ...mapState({
      searchPageNumber: state => state.searchPageNumber,
    })
  },
}
</script>

<style>
</style>>