import { reactive } from "vue";


export const store = reactive({

    
    genres:'',
    genreMovies: '',
    genreSelected:'',
    trendingMovies:'',
    movieDetails:'',
    movieCollections:'',
    movieName:'',
    name:'',
    fetchTrendingMovies(){
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=6ad9a9058889fb72a10160a86ef5a7a6')
        .then((Response)=> Response.json())
        .then((data)=>
        this.trendingMovies = data.results,
        //console.log(data)
        )
    },
    fetchGenres(){
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=6ad9a9058889fb72a10160a86ef5a7a6&language=en-US')
            .then((Response)=>Response.json())
            .then((data)=>
        //console.log(data.genres)
        this.genres = data.genres,
        //console.log(this.genres)
        
        )
    },

    searchMovies(value){
        let word = value.toLowerCase()
        console.log(word)
        fetch( `https://api.themoviedb.org/3/search/movie?api_key=6ad9a9058889fb72a10160a86ef5a7a6&language=en-US&query=${word}&page=1&include_adult=false`)
        .then((Response)=>Response.json())
        .then((data)=>
        //console.log(data),
        this.movieCollections = data.results,
        )
        this.movieName = value
    },

    searchMovie(movie){
        fetch(`https://www.omdbapi.com/?apikey=afa110c8&t=${movie}&plot=full`)
        .then((Response)=>Response.json())
        .then((data)=>
        //console.log(data),
        
        this.movieDetails = data
        )
        this.name = movie
    },
    
})