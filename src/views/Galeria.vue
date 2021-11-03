<template>
  <div class="row mx-auto">
    <div v-for="card in cards" :key="card.id" class="col-lg-4 col-md-6 col-sm-12 mt-3">
      <Card :url="card.url" :title="card.title" :descripcion="card.description" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

import {cargarCards} from "@/services/serviceCard.js";

const tarjetas = cargarCards();


export default {
  name: "Galeria",
  components: {
    Card,
  },
  data(){
    return {
      cards: tarjetas
    }
  }
};
</script>