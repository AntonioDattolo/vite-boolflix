<script>
import myMovieList from '../store/MovieContent.js';
export default {
   
   props :
    ["movies"]
  ,
  data() {
    return {
      myMovieList
    }
  },
  methods: {
    chose(img,title,vote,preview){
			myMovieList.userSelect = img
      myMovieList.userTitle = title
      myMovieList.userPreview = preview
      myMovieList.userVote = vote / 2
			console.log(img , title , vote)
		},
    magic(){
      myMovieList.magic = "visible"
      console.log("premuto magic", myMovieList.magic)
      return myMovieList.magic
    },
   },
}
</script>

<template>
  <div class="col-2 myCard text-center p-2" @click="chose(movies.backdrop_path,movies.title,movies.vote_average,movies.overview),magic()">
    <img class="col-12"  :src="`https://image.tmdb.org/t/p/original` + movies.poster_path" alt="">
    <h5 class="col-12 p-2" style="font-size: 18px;">
      {{ movies.title }}
    </h5>
  </div>
</template>

<style scoped>
img{
  object-fit: contain;
  height:250px;
}

</style>