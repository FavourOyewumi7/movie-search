<template>
  <div class="landing-cont  px-20">
    <div class="flex flex-row w-full mb-12 mt-5 text-input-text border-4 border-input-border relative sticky top-24 z-50">
        <input type="text" class="w-4/5 p-4 bg-dark pl-12 outline-none" v-model="movie_name">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 absolute top-3 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          
        <button class="p w-1/5 bg-dark border-blue border-l-2 " @click="store.searchMovies(movie_name)">
          Search
        </button>
      </div>


      <h1 class="text-2xl mb-4 font-bold text-light">Trending Movies:</h1>
      <div class="grid grid-cols-3 grid-rows-4 gap-2">

        <MovieListCard v-for="movie in this.store.trendingMovies.slice(0,12)" :key="movie.id" :movie-info="movie" />
      </div>
  </div>

</template>

<script>
import MovieListCard from './MovieListCard.vue';
import {store} from '@/store'
export default {
    name:'MovieListPage',
    components:{
        MovieListCard
    },
    data(){
        return{
            store,
            movie_name:''
        }
    },
    created(){
        this.store.fetchTrendingMovies()
    }
}
</script>

<style scoped>
    .landing-cont{
        
    }


</style>