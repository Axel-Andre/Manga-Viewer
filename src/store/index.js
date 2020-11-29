import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      favorites: []
    }
  },
  mutations: {
    add(state, manga) {
      state.favorites.push(manga)
    },
    remove(state, mangaId) {
      state.favorites = state.favorites.filter(manga => manga.id != mangaId)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    favoritesList(state) {
      return state.favorites
    }
  }
})
