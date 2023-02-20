<template>
  <div class="text-light" @click="store.searchMovie(this.title); route()">

    <div v-bind:style="{ backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w500/'+ movieInfo.poster_path + ')', backgroundPosition:'center' }" class="p-4 h-[45rem]  relative rounded-md ">
        <div class="ml-4 absolute inset-x-0 bottom-8 mb-4">
            <div class="flex flex-row gap-2 flex-wrap">
                <p v-for="(genre,index) in this.genres" :key="index" class=" bg-blue px-2 py-1 rounded-md">{{genre}}</p>
            </div>
            <h2 class="text-[#fff] text-2xl font-bold pl-2 mt-2" v-if="movieInfo.title">{{movieInfo.title}}</h2>
            <h2 class="text-[#fff] text-2xl font-bold pl-2 mt-2" v-else-if="movieInfo.name">{{movieInfo.name}}</h2>
            <h2 class="text-[#fff] text-2xl font-bold pl-2 mt-2" v-else-if="movieInfo == '' ">There's no movie name</h2>

            
            
        </div>

    </div>
  </div>
</template>

<script>
import { store } from '@/store'
export default {
    name:'MovieListCard',
    props:{
        movieInfo:Object
    },
    data(){
        return{
            store,
            genres : [],
            title:''
        }
    },
    created(){
        for(let id in this.movieInfo.genre_ids){
            this.genres.push(store.genres[id].name)
        
        }
        if (this.movieInfo.title){
            this.title = this.movieInfo.title
        }else{
            this.title = this.movieInfo.name
        }
        
    },
    methods:{
        route(){
            this.$router.push({path:`/movie/${this.title}`})
        }
    }
}
</script>

<style>

</style>