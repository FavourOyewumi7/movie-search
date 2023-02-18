<template>
    <div class="px-20">
        <SearchBar />
        <h1 class="text-2xl mb-4 font-bold text-light">You searched: {{store.movieName}}</h1>
        <div class="grid grid-cols-3 grid-rows-4 gap-2">
            <MovieListCard v-for="movie in this.store.movieCollections" :key="movie.id" :movie-info="movie" />
        </div>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import MovieListCard from './MovieListCard.vue';
import { store } from '@/store';
export default {
    name:'SearchedMovieListPage',
    components:[
        SearchBar,
        MovieListCard

    ],
    data(){
        return{
            store
        }
    }
}
</script>

<style>

</style>