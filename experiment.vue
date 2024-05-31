<script>
import myMovieList from '../store/MovieContent.js';
export default {
  data() {
    return {
        myMovieList,
       

    }
  }

}

</script>

<template>
    
   <input type="text" v-model="myMovieList.userSearch">
    <button @click="$emit(this.searchMovie)" @keyup.enter="this.searchMovie">CERCA</button>
</template>

<style scoped>

</style>