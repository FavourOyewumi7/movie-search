<template>
  <div id="app " class=" text-light">
    <NavBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

import FooterBar from './components/FooterBar.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

#app {
  font-family: 'Nunito', sans-serif;
  background: url(./assets/slider-bg2.jpg) #020d18;
  background-attachment: fixed;
}
::-webkit-scrollbar {
  background: white;
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 01px grey; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:  #020d18;
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:  linear-gradient(75deg, rgba(13, 246, 250, 0.3) 14%, rgba(224, 91, 177, 0.3) 92% ); 
}

</style>
 