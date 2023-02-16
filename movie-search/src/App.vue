<template>
  <div id="app px-20 text-light">
    <NavBar />
    <MovieListPage />
  
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import MovieListPage from './components/MovieListPage.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    MovieListPage
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

#app {
  font-family: 'Nunito', sans-serif;
}
</style>
