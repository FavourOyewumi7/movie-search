<template>
  <div class=" md:px-20 px-5">
    
    <SearchBar />
    <h1 class="text-2xl mb-4 font-bold text-light">Trending Movies:</h1>
    <div class="sm:grid lg:grid-cols-3 lg:grid-rows-4 gap-2 flex flex-col sm:grid-cols-2">
        <MovieListCard v-for="movie in this.store.trendingMovies.slice(0,12)" :key="movie.id" :movie-info="movie" />
    </div>
  </div>

</template>

<script>
import MovieListCard from './MovieListCard.vue';
import SearchBar from './SearchBar.vue';
import {store} from '@/store'
export default {
    name:'TrendingMovieListPage',
    components:{
        MovieListCard,
        SearchBar,
        
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