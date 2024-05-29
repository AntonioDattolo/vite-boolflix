<script>

export default {
   
   props :
    ["movies"]
       

   
   
 ,
  data() {
    return {
        

    }
  },
  // methods: {
  //   ///
  // },
  // mounted: {

  // }
}


</script>

<template>

  
  <div class="col-3 myCard text-center p-2">
    <h3 class="col-12" style="height: 70px;">
      {{ movies.name }}
    </h3>
    <img class="col-12" style="height: 460px;" :src="`https://image.tmdb.org/t/p/original` + movies.poster_path" alt="">
    <h5 class="col-12">
     
      <h6>
        {{ movies.vote_average }}
      </h6>
    </h5>
    
  </div>
</template>

<style scoped>
img{
  object-fit: contain;
}

</style>