<template>
  <div class="px-20 text-light">
    <SearchBar />

   
    <h1 class="text-2xl mb-4 font-bold text-light">You searched: {{store.name}}</h1>
    <div class="grid grid-cols-3">
    <img :src="this.store.movieDetails.Poster" alt="">

        <div class="grid-span-2">
            <h1 class="text-2xl font-bold pb-4">{{this.store.movieDetails.Title}}</h1>
            <p class="text-lg mb-4">Plot:  {{this.store.movieDetails.Plot}}</p>

            <p class="text-lg pb-4">
               Year Released:  {{ this.store.movieDetails.Released }}
            </p>

            <p class="text-lg pb-4">Genres: {{ this.store.movieDetails.Genre}}</p>

            <p v-if=" this.store.movieDetails.imdbRating == 'N/A'" class="text-lg pb-4">Ratings: No Ratings Available </p>
            <p v-else class="flex flex-row text-lg pb-4">
                Ratings: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                {{this.store.movieDetails.imdbRating}} 
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