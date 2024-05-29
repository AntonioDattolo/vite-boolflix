<script>
import axios from "axios"
export default {
  components: {
   
  },
  data() {
    return {
       

    }
  },
  methods: {
//      axios.get(options.url , options.headers ).then((result) => {
//         console.log(result.data)
    
//     })
//    }

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
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
    }


 


  
  },
  mounted() {

  }
}


</script>

<template>
  {{getMovie()}}
</template>

<style scoped>

</style>
