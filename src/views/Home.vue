<template>
  <div class="container">
    <h2>Imagenes</h2>
    <br>
    <div class="row">
      <div v-for="imagen in imagenes" :key="imagen.id" class="col-lg-4 col-md-6 col-sm-12">
        <img :src="imagen.url" alt="imagen" class="mt-3">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {cargarCards} from "@/services/serviceCard.js";

const tarjetas = cargarCards();

export default {
  name: "Home",
  components: {
  },
  data(){
    return {
      imagenes: tarjetas
    }
  }
};
</script>
<style scoped>
img {
  width: 100%; 
  height: auto;
}
img:hover {
  padding: 20px;
}
</style>