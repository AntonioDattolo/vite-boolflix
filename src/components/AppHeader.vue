<script>

export default {
  data() {
    return { 
    }
  }
}

</script>
<template>
  <section style="z-index: 999;position: fixed;">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
         <img  src="http://www.serialthings.com/wp-content/uploads/2019/06/Netflix-Logo.png" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Serie TV</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Film</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" aria-disabled="true">Originali</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<style scoped>
img{
  height: 90px;
}
</style>
