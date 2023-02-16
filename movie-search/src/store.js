import { reactive } from "vue";


export const store = reactive({

    
    genres:'',
    trendingMovies:'',
    fetchTrendingMovies(){
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=6ad9a9058889fb72a10160a86ef5a7a6')
        .then((Response)=> Response.json())
        .then((data)=>
        
        this.trendingMovies = data.results)
    },
    fetchGenres(){
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=6ad9a9058889fb72a10160a86ef5a7a6&language=en-US')
        .then((Response)=>Response.json())
        .then((data)=>
        //console.log(data.genres)
        this.genres = data.genres,
        console.log(this.genres)
        
        )
    }
})