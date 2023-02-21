import { reactive } from "vue";


export const store = reactive({
    year:'',
    yearList:'',
    genres:'',
    genreMovies: '',
    genreSelected:'',
    trendingMovies:'',
    movieDetails:'',
    movieCollections:'',
    movieName:'',
    name:'',
    fetchTrendingMovies(){
        try{
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=6ad9a9058889fb72a10160a86ef5a7a6')
        .then((Response)=> Response.json())
        .then((data)=>
        this.trendingMovies = data.results,
        //console.log(data)
        )}
        catch(err){
            alert(err)
        }
    },
    fetchGenres(){
        try{
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=6ad9a9058889fb72a10160a86ef5a7a6&language=en-US')
            .then((Response)=>Response.json())
            .then((data)=>
        //console.log(data.genres)
        this.genres = data.genres,
        //console.log(this.genres)
        
        )}
        catch(err){
            alert(err)
        }
    },
    fetchYear(year){
        try{
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=6ad9a9058889fb72a10160a86ef5a7a6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&with_watch_monetization_types=flatrate`)
            .then((Response)=>Response.json())
            .then((data)=>
        //console.log(data.results)
        this.yearList = data.results,
        this.year = year
        )}
        catch(err){
            alert(err)
        }
    },


    searchMovies(value){
        let word = value.toLowerCase()
        try{
        fetch( `https://api.themoviedb.org/3/search/movie?api_key=6ad9a9058889fb72a10160a86ef5a7a6&language=en-US&query=${word}&page=1&include_adult=false`)
        .then((Response)=>Response.json())
        .then((data)=>
        //console.log(data),
        this.movieCollections = data.results,
        )
        this.movieName = value}
        catch(err){
           alert(err)
            
        }
    },

    searchMovie(movie){
        try{
        fetch(`https://www.omdbapi.com/?apikey=afa110c8&t=${movie}&plot=full`)
        .then((Response)=>Response.json())
        .then((data)=>
        //console.log(data),
        
        this.movieDetails = data
        )
        this.name = movie}
        catch(err){
           alert(err)
        }
    },
    
})