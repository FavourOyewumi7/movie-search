<template>
  <div class="landing-cont w-screen h-screen px-20">
    <div>
        <input type="text">
        <button>
          Search
        </button>
      </div>


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
            store
        }
    },
    created(){
        this.store.fetchTrendingMovies()
    }
}
</script>

<style scoped>
    .landing-cont{
        background: url('http://buster.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2017/12/slider-bg2.jpg?id=160');
    }


</style>