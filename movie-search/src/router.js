import { createRouter, createWebHistory } from 'vue-router'


const routes = [
            {
                name:'',
                path:'/',
                component:()=>import('./components/TrendingMovieListPage.vue')
            },
            {
                name:'search',
                path:'/search',
                component:()=>import('./components/SearchedMovieList.vue')
            },
            {
                name:'genre',
                path:'/genre/:value',
                component:()=>import('./components/GenreMovieList.vue')
            },
            {
                name:'movie',
                path:'/movie',
                component:()=>import('./components/MovieDetails.vue')
            }

            
        ]


const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router