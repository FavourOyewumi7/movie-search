<template>
    <div class="md:px-20 px-5">
        <SearchBar />
        
        <div class="sm:grid lg:grid-cols-3 lg:grid-rows-4 gap-2 flex flex-col sm:grid-cols-2">
            <MovieListCard v-for="movie in this.store.genreMovies" :key="movie.id" :movie-info="movie" />
        </div>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import MovieListCard from './MovieListCard.vue';
import { store } from '@/store';
export default {
    name:'GenreMovieListPage',
    components:[
        SearchBar,
        MovieListCard

    ],
    data(){
        return{
            store
        }
    },
    
}
</script>

<style>

</style>