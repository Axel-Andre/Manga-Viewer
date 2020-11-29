import { createRouter, createWebHashHistory } from 'vue-router'

import MangaDetails from '@/views/MangaDetails.vue'
import HomeView from '@/views/Home.vue'
import SearchView from '@/views/Search.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/manga/:id', component: MangaDetails },
  { path: '/search/:text', component: SearchView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active-link'
})

export default router