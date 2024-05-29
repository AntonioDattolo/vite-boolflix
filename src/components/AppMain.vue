<script>
import axios from "axios"
import myMovieList from '../store/MovieContent.js';
import PopularMovie from "./PopularMovie.vue";
import AppHeader from "./AppHeader.vue";
import SearchMovieTab from "./SearchMovieTab.vue";




export default {
  components: {
   PopularMovie,
   AppHeader,
   SearchMovieTab
   
  },
  data() {
    return {
        myMovieList,
       

    }
  },
  methods: {
    getPopular(){
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2U3ZDU1NGFiZTM1OTQ3NDcwNWY5N2MyYjYyOWFhMSIsInN1YiI6IjY2NTc0MjFkNGVlMGI4OGE0ZGVmMWUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VIslYAY7USQiSPdEPQQi4IHes40Pky43Df5Kkk-UVu8'
            }
        }
        axios
        .request(options)
        .then(function (response) {
            console.log(response.data, "risultato chiamata");
            myMovieList.moviePopular = response.data.results
            console.log(myMovieList.moviePopular , "array di film popular")
            console.log(myMovieList.moviePopular[0].original_title, "primo film dell'array")
        })
        .catch(function (error) {
            console.error(error);
        });
    },

    getTopMovie(){
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2U3ZDU1NGFiZTM1OTQ3NDcwNWY5N2MyYjYyOWFhMSIsInN1YiI6IjY2NTc0MjFkNGVlMGI4OGE0ZGVmMWUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VIslYAY7USQiSPdEPQQi4IHes40Pky43Df5Kkk-UVu8'
            }
        }
        axios
        .request(options)
        .then(function (response) {
            console.log(response.data, "risultato chiamata");
            myMovieList.movieTop = response.data.results
            console.log(myMovieList.movieTop , "array di film top")
            console.log(myMovieList.movieTop[0].original_title, "primo film dell'array")
        })
        .catch(function (error) {
            console.error(error);
        });
    },
      searchMovie() {
          const options = {
              method: 'GET',
              url: 'https://api.themoviedb.org/3/search/movie',
              params: { query: myMovieList.userSearch , include_adult: 'false', language: 'en-US', page: '1' },
              headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2U3ZDU1NGFiZTM1OTQ3NDcwNWY5N2MyYjYyOWFhMSIsInN1YiI6IjY2NTc0MjFkNGVlMGI4OGE0ZGVmMWUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VIslYAY7USQiSPdEPQQi4IHes40Pky43Df5Kkk-UVu8'
              }
          };

          axios
        .request(options)
        .then(function (response) {
            console.log(response.data, "risultato chiamata cerca");
            myMovieList.movieSearch = response.data.results
            console.log(myMovieList.movieSearch , "array di film cercati")
            console.log(myMovieList.movieSearch[0].original_title, "primo film dell'array")
        })
        .catch(function (error) {
            console.error(error);
        });

          const options2 = {
              method: 'GET',
              url: 'https://api.themoviedb.org/3/search/tv',
              params: { query: myMovieList.userSearch, include_adult: 'false', language: 'en-US', page: '1' },
              headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2U3ZDU1NGFiZTM1OTQ3NDcwNWY5N2MyYjYyOWFhMSIsInN1YiI6IjY2NTc0MjFkNGVlMGI4OGE0ZGVmMWUxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VIslYAY7USQiSPdEPQQi4IHes40Pky43Df5Kkk-UVu8'
              }
          };
          axios
        .request(options2)
        .then(function (response) {
            console.log(response.data, "risultato chiamata cerca");
            myMovieList.tvSeriesSearch = response.data.results
            console.log(myMovieList.tvSeriesSearch , "array di SerieTV cercati")
            console.log(myMovieList.tvSeriesSearch[0].original_title, "primo film dell'array")
        })
        .catch(function (error) {
            console.error(error);
        });
      }


  },
  mounted() {
    this.getPopular()
    this.getTopMovie()

  }
}


</script>

<template>
    <section style="height:calc(90vh - 24px);  overflow: auto;">

        <!-- section di search Work in Progress -->
        <!-- <experiment @enthis.searchMovie /> -->
        <div class="input-group p-4">

            <input type="text" class="form-control" placeholder="Search.." v-model="myMovieList.userSearch" @keyup.enter="searchMovie">
            <button class="btn btn-outline-secondary" type="button" @click="searchMovie">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        <section class="d-flex overflow-y-auto myHeight" >
            <PopularMovie v-for="movie in myMovieList.movieSearch" :movies="movie"/> 
            <SearchMovieTab v-for="movie in myMovieList.tvSeriesSearch" :movies="movie"/> 
        </section>
        <h1 class="p-3">Popular</h1>
        <section class="d-flex overflow-y-auto myHeight">
            <PopularMovie v-for="movie in myMovieList.moviePopular" :movies="movie"/>
        </section>
        <h1 class="p-3">Top Rated Movies</h1>
        <section class="d-flex overflow-y-auto myHeight">
            <PopularMovie v-for="movie in myMovieList.movieTop" :movies="movie" /> 
        </section>
    </section>
</template>

<style scoped>
section::-webkit-scrollbar {
height: 8px;
width: 5px;
}
section::-webkit-scrollbar-track {
background-color: rgba(204, 204, 204, 0.5);
box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
border-radius: 10px;
margin: 1.5rem 2rem;
}
section::-webkit-scrollbar-thumb {
background-color: rgb(30, 31, 31) ;
border-radius: 10px;
}

</style>
