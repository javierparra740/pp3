<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <h2 class="navbar-brand">Application</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link text-light" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-light" to="/galeria">Galeria</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-light" to="/crud">Crud</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  <div class="container mt-3">
    <router-view />
  </div>
  
</template>

<style>

</style>
