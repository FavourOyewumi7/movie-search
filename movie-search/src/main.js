import { createApp } from 'vue'
import App from './App.vue'
import SearchBar from '../src/components/SearchBar.vue'
import MovieListCard from '../src/components/MovieListCard'
import PageLoader from '../src/components/PageLoader'
import './index.css'
import router from './router'



createApp(App).component('SearchBar', SearchBar).component('MovieListCard', MovieListCard).component('PageLoader',PageLoader).use(router).mount('#app')
