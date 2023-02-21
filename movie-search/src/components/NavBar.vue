<template>
  <div class="py-8 flex flex-col justify-center bg-blue text-light sticky top-0 z-50 ">
    
      <nav class="flex flex-row justify-between gap-4 md:px-12  px-5">
        
        <div>
          <router-link to="/">
          <h1 class="md:text-4xl text2xl">Movie Finder</h1>
         </router-link>
        </div>

        <div class="md:block hidden">
      
          <form action="" @submit.prevent="searchByYear(year)">
            <input type="text" placeholder="Year of release" class="outline-none pl-2 text-blue py-2 " v-model="year">
            <!-- <input type="submit" value="" hidden> -->
          </form>
        </div>

        <div class="bg-blue rounded-lg flex flex-col justify-center md:block hidden">
          <select name="Genres" id="" class=" outline-none cursor-pointer rounded-lg text-blue"  @change="searchMovieByGenre($event)" >
            <option value="" selected disabled>Genre</option>
            <option  v-for="genre in this.store.genres" :key="genre.id" :value="genre.id" class="text-blue " >{{genre.name}}</option>
          </select>
        </div>  

        <!-- from here for small screen -->
        <span class="md:hidden flex justify-end transition hover:transform hover:rotate-360" @click="click()" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 " v-show="!isOpen">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg> 
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition ease-in delay-3000" v-show="isOpen">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
        
        <!-- <div class="relative">
          <button @click="click()" class="block">Genre</button>
        <div  class="bg-blue rounded-lg absolute top-full right-8 bg-[#ccc] px-4 py-4 z-100" v-show="isOpen">
          
            <p class="block px-4 py-1 rounded-lg  hover:bg-light hover:text-blue"  v-for="genre in this.store.genres" :key="genre.id" :value="genre.id" >{{genre.name}}</p>
          
        </div>  
      </div> -->
      </nav>
      <div class="md:hidden block pt-8 mx-4" v-show="isOpen">
        <div class="mb-4 w-full">
    
          <form action="" @submit.prevent="searchByYear(year)">
            <input type="text" placeholder="Year of release" class="outline-none pl-2 text-blue w-full py-2" v-model="year">
            <!-- <input type="submit" value="" hidden> -->
          </form>
        </div>

        <div class="bg-blue rounded-lg flex flex-col justify-center">
          <select name="Genres" id="" class=" outline-none cursor-pointer rounded-lg text-blue"  @change="searchMovieByGenre($event)" >
            <option value="" selected disabled>Genre</option>
            <option  v-for="genre in this.store.genres" :key="genre.id" :value="genre.id" class="text-blue " >{{genre.name}}</option>
          </select>
        </div>  
      </div>

  </div>
</template>

<script>
import { store } from '@/store';
export default {
  name: 'LandingPage',
  data(){
    return{
      store,
      gen: store.genres,
      isOpen: false,
      year:''
    }
  },
  created(){
    this.store.fetchGenres()
    
  },
  methods:{
    click(){
      this.isOpen = !this.isOpen
      console.log(this.isOpen)
    },
    searchMovieByGenre(e){
        
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=6ad9a9058889fb72a10160a86ef5a7a6&with_genres=${e.target.value}`)
        .then((Response)=>Response.json())
        .then((data)=>
        //console.log(data)
        this.store.genreMovies = data.results
        
        )
        
        this.store.genreSelected = this.store.genres[e.target.value].name
        
        this.$router.push({path:`/genre/${this.store.genreSelected}`})
        
    },
    searchByYear(){
      this.store.fetchYear(this.year)
      this.$router.push({path:`/year/${this.year}`})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
select option{
  padding: 2px 4px;
}
select{
  font-family: 'Nunito', sans-serif;
  -webkit-appearance: button;
  -moz-appearance: button;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-padding-start: 2px;
  -moz-padding-start: 2px;
  background-color: #ccc; /* Fallback color if gradients are not supported */
  background-image:  -webkit-linear-gradient(top, #E5E5E5, #F4F4F4); /* For Chrome and Safari */
  background-image:  -moz-linear-gradient(top, #E5E5E5, #F4F4F4); /* For old Firefox (3.6 to 15) */
  background-image:  -ms-linear-gradient(top, #E5E5E5, #F4F4F4); /* For pre-releases of Internet Explorer  10*/
  background-image:  -o-linear-gradient(top, #E5E5E5, #F4F4F4); /* For old Opera (11.1 to 12.0) */
  background-image:  linear-gradient(to bottom, #E5E5E5, #F4F4F4); /* Standard syntax; must be last */
  background-position: center right;
  background-repeat: no-repeat;
  border: 1px solid #AAA;
  border-radius: 2px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  color: #020d18;
  font-size: inherit;
  margin: 0;
  overflow: hidden;
  padding-top: 2px;
  padding-bottom: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
