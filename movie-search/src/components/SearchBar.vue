<template>
    <div class="flex flex-row w-full mb-12 mt-5 text-input-text border-4 border-input-border relative sticky top-24 z-50">
        <input type="text" class="w-4/5 p-4 bg-dark sm:pl-12 pl-8 outline-none" v-model="movie_name" @submit.prevent="store.searchMovies(movie_name)">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="sm:w-8 sm:h-8 w-6 h-6 absolute sm:top-3 top-4 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        
          <button class="p w-1/5 bg-dark border-blue border-l-2 md:text-base text-sm" @click="store.searchMovies(movie_name)">
            <router-link to="/search"> 
              Search
            </router-link>
          </button>
        
    </div>
</template>

<script>
import { store } from '@/store';
export default {
    name:'SearchBar',
    data(){
      return{
        store
      }
    }
}
</script>

<style>

</style>