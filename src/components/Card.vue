<template>
  <div class="card" style="width: 18rem;">
  <img :src=url class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title text-success">{{title}}</h5>
    <p class="card-text">{{descripcion}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: '',
    descripcion: '',
    url: ''
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
