<template>
  <div class="h-24 flex flex-col justify-center bg-blue text-light sticky top-0 z-50 ">
    
      <nav class="flex flex-row justify-between md:px-12  px-5">
        
        <div>
          <router-link to="/">
          <h1 class="md:text-4xl text2xl">Movie Finder</h1>
         </router-link>
        </div>

        <div class="bg-blue flex flex-col justify-center">
          <select name="Genres" id="" class="bg-blue outline-none" @change="searchMovieByGenre($event)" >
            <option value="" selected disabled>Genre</option>
            <option  v-for="genre in this.store.genres" :key="genre.id" :value="genre.id" >{{genre.name}}</option>
          </select>
        </div>  
      </nav>

  </div>
</template>

<script>
import { store } from '@/store';
export default {
  name: 'LandingPage',
  data(){
    return{
      store,
      gen: store.genres
    }
  },
  created(){
    this.store.fetchGenres()
    
  },
  methods:{
    searchMovieByGenre(e){
        
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=6ad9a9058889fb72a10160a86ef5a7a6&with_genres=${e.target.value}`)
        .then((Response)=>Response.json())
        .then((data)=>
        //console.log(data)
        this.store.genreMovies = data.results
        
        )
        
        this.store.genreSelected = this.store.genres[e.target.value].name
        
        this.$router.push({path:`/genre/${this.store.genreSelected}`})
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
