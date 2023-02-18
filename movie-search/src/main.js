import { createApp } from 'vue'
import App from './App.vue'
import SearchBar from '../src/components/SearchBar.vue'
import MovieListCard from '../src/components/MovieListCard'
import './index.css'
import router from './router'



createApp(App).component('SearchBar', SearchBar).component('MovieListCard', MovieListCard).use(router).mount('#app')
