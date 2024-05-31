<script>
import myMovieList from '../store/MovieContent.js';
export default {
  props :
    ["movies"]
 ,
  data() {
    return {
      myMovieList,
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
  // mounted: {
  // }
}
</script>

<template>
  <div class="col-3 myCard text-center " @click="chose(movies.backdrop_path,movies.name,movies.vote_average,movies.overview)">
    <img class="col-12" :src="`https://image.tmdb.org/t/p/original` + movies.poster_path" alt="">
    <h3 class="col-12 p-2" style="font-size:18px">
      {{ movies.name }}
    </h3>
  </div>
</template>

<style scoped>
img{
  object-fit: contain;
  height:250px;
}
div:hover{
  filter: drop-shadow( 0 0 10px  rgb(248, 248, 248))
}
</style>