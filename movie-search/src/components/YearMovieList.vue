<template>
    <div class="md:px-20 px-5">
        
        <SearchBar />
        <h1 class="text-2xl mb-4 font-bold text-light">You searched: {{store.year}}</h1>
        <div class="sm:grid lg:grid-cols-3 lg:grid-rows-4 gap-2 flex flex-col sm:grid-cols-2">
            <h1 v-if="this.store.yearList.length == 0">There's no movie made in this year</h1>
            <MovieListCard v-for="movie in this.store.yearList" :key="movie.id" :movie-info="movie" v-else />
        </div>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import MovieListCard from './MovieListCard.vue';
import { store } from '@/store';

export default {
    name:'YearMovieListPage',
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