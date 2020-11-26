import { createRouter, createWebHashHistory } from 'vue-router'

import MangaList from './views/MangaList.vue'
import HomeView from './views/Home.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/manga', component: MangaList },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active-link'
})

export default router