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
    <h5 class="col-12 p-2">
      {{ movies.title }}
    </h5>
    <img class="col-12"  :src="`https://image.tmdb.org/t/p/original` + movies.poster_path" alt="">
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
  height: 525px;
}

</style>