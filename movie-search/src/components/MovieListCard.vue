<template>
  <div class="text-white">

    <div v-bind:style="{ backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w500/'+ movieInfo.backdrop_path + ')' }">

        <p></p>
        <h2 class="text-white">{{movieInfo.title}}</h2>

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
            store
        }
    }
}
</script>

<style>

</style>