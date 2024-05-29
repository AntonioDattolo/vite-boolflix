<script>
import axios from "axios"
import myMovieList from '../store/MovieContent.js';
export default {
  components: {
   
  },
  data() {
    return {
        myMovieList,
       

    }
  },
  methods: {
    getMovie(){
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
            myMovieList.movie = response.data.results
            console.log(myMovieList.movie , "array di film")
            console.log(myMovieList.movie[0].original_title, "primo film dell'array")
        })
        .catch(function (error) {
            console.error(error);
        });
    }

  
  },
  mounted() {
    this.getMovie()

  }
}


</script>

<template>
  <div v-for="movie in myMovieList.movie">{{ movie.original_title }}
    <img :src="`https://image.tmdb.org/t/p/w200` + movie.poster_path" alt="">
  </div>
</template>

<style scoped>

</style>
