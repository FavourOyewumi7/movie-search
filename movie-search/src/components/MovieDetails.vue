<template>
  <div class="px-20 text-light">
    <SearchBar />

   
    <h1 class="text-2xl mb-4 font-bold text-light">You searched: {{store.name}}</h1>
    <div class="grid grid-cols-3">
    <img :src="this.store.movieDetails.Poster" alt="">

        <div class="grid-span-2">
            <h1>{{this.store.movieDetails.Title}}</h1>
            <p>{{this.store.movieDetails.Plot}}</p>

            <p>

            </p>

        </div>
    </div>

  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import { store } from '@/store';
export default {
    name:'MovieDetails',
    components:{
        SearchBar
    },
    data(){
        return{
            store,
            
        }
    },
    created(){
        
    }
   
}
</script>

<style>

</style>