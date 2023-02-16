<template>
  <div class="h-24 flex flex-col justify-center bg-blue text-light">
    
      <nav class="flex flex-row justify-between mx-12 ">
        <div>
          <h1 class="text-4xl">Movie Finder</h1>
        </div>

        <div class="bg-blue flex flex-col justify-center">
          <select name="Genres" id="" class="bg-blue">
            <option  v-for="genre in this.store.genres" :key="genre.id" :value="genre.name">{{genre.name}}</option>
          </select>
        </div>  
      </nav>

  </div>
</template>

<script>
import { store } from '@/store';
export default {
  name: 'LandingPage',
  data(){
    return{
      store,
    }
  },
  created(){
    this.store.fetchGenres()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
