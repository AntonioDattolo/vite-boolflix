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
      if(vote.toFixed(2)/2 > 0.5){
        document.getElementById("star").innerHTML = `<i class="fa-solid fa-star"></i>`
      }if(vote.toFixed(2)/2 > 1.5){
        document.getElementById("star").innerHTML = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`
      }if(vote.toFixed(2)/2 > 2.5){
        document.getElementById("star").innerHTML = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`
      }if(vote.toFixed(2)/2 > 3.5){
        document.getElementById("star").innerHTML = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`
      }if(vote.toFixed(2)/2 > 4){
        document.getElementById("star").innerHTML = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`
      }
			console.log(img , title , vote)
		},
    magic(){
      myMovieList.magic = "visible"
      console.log("premuto magic", myMovieList.magic)
      return myMovieList.magic
      
    },
    // getStar(){
    //     if(userVote > 5){
    //         myMovieList.userVote = `<i class="fa-solid fa-star"></i>`
    //         console.log/(myMovieList.userVote)
    //         return myMovieList.userVote
    //     }
    // }
     
   },
  // mounted: {

  // }
}


</script>

<template>
  <div class="col-2 myCard text-center p-2" @click="chose(movies.backdrop_path,movies.title,movies.vote_average,movies.overview),magic()">
   
    <img class="col-12"  :src="`https://image.tmdb.org/t/p/original` + movies.poster_path" alt="">
    <h5 class="col-12 p-2" style="font-size: 18px;">
      {{ movies.title }}
    </h5>
    <!-- <h5 class="col-12 p-2">
      <p>
        {{ movies.overview }}
      </p> 
      <h6>
        {{ movies.release_date }}
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