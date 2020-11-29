import { createRouter, createWebHashHistory } from 'vue-router'

import MangaDetails from '@/views/MangaDetails.vue'
import HomeView from '@/views/Home.vue'
import SearchView from '@/views/Search.vue'
import FavoriteView from '@/views/FavoriteView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/manga/:id', component: MangaDetails, name: "manga" },
  { path: '/search/:text', component: SearchView },
  {path: '/favorites', component: FavoriteView}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active-link'
})

export default router