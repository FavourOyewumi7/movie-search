<template>
    <div class="px-20">
        <SearchBar />
        
        <div class="grid grid-cols-3 grid-rows-4 gap-2">
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