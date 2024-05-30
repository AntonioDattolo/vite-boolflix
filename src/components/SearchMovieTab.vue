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
     ///
  },
   mounted: {
    chose(img,title,vote,preview){
			myMovieList.userSelect = img
      myMovieList.userTitle = title
      myMovieList.userVote = vote
      myMovieList.userPreview = preview
			console.log(img , title , vote)
		},

  }
}


</script>

<template>

  
  <div class="col-3 myCard text-center p-2" @click="chose(movies.backdrop_path,movies.title,movies.vote_average,movies.overview)">
   
    <img class="col-12" :src="`https://image.tmdb.org/t/p/original` + movies.poster_path" alt="">
    <h3 class="col-12 p-2" style="font-size:18px">
      {{ movies.name }}
    </h3>
    <!-- <h5 class="col-12">
     
      <h6>
        {{ movies.vote_average }}
      </h6>
    </h5> -->
    
  </div>
</template>

<style scoped>
img{
  object-fit: contain;
  height:250px;
}

</style>