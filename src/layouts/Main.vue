<template>
  <div id="nav" class="flex w-full justify-center items-center">
    <router-link to="/" class="text-lg mr-4">Explore</router-link>
    <router-link to="/favorites" class="mr-auto text-lg">Favorites</router-link>
    <form
      v-if="$route.name != '/manga'"
      @submit.prevent="goToSearchPage()"
      class="inline-block relative justify-end mr-auto"
    >
      <input
        class="border border-gray-300 w-96 rounded-md py-4 px-4 leading-4 placeholder-gray-300 italic outline-none focus:ring focus:border-blue-500"
        type="search"
        id="site-search"
        name="s"
        placeholder="Search ..."
        v-model="searchText"
        autocomplete="off"
        @keyup="updateSuggestions(searchText)"
        @focus="updateSuggestions(searchText)"
        @blur.capture="goToMangaPage"
      />
      <div
        v-if="searchText && suggestions.length && !hideSuggestions"
        class="suggestions"
      >
        <router-link
          v-for="sug in suggestions"
          :key="sug.id"
          :to="`/manga/${sug.id}`"
          @click="suggestions = []"
        >
          <div class="suggestion">
            <img
              class="suggestion__image"
              :src="sug.attributes.posterImage.tiny"
            />
            <h1 class="suggestion__text">
              {{ sug.attributes.canonicalTitle }} &#8250;
            </h1>
            <p class="suggestion__category">{{ sug.attributes.mangaType }}</p>
          </div>
        </router-link>
      </div>
    </form>
  </div>
  <main><slot /></main>
</template>
<script>
import { mangaService } from "../services";
let timeout;
export default {
  data() {
    return {
      searchText: null,
      suggestions: [],
      hideSuggestions: false,
    };
  },
  methods: {
    goToSearchPage() {
      const { searchText } = this;
      this.$router.push(`/search/${searchText}`);
    },
    async updateSuggestions(searchText) {
      this.hideSuggestions = false;
      const that = this;
      clearTimeout(timeout);
      timeout = setTimeout(async () => {
        const suggestions = await mangaService.searchSome(searchText);
        that.suggestions = suggestions;
        return clearTimeout(timeout);
      }, 300);
    },
    goToMangaPage(event) {
      if (event.relatedTarget?.tagName === "A") {
        event.preventDefault;
      } else {
        this.hideSuggestions = true;
      }
    },
  }
};
</script>
<style>
a.active-link {
  @apply text-blue-600 font-bold;
}
.suggestions {
  @apply absolute top-full left-0 z-20 bg-white px-4 flex flex-col w-96 shadow-md rounded-md mt-4;
}
.suggestion {
  @apply text-left my-4 flex items-center rounded transition-all cursor-pointer;
}
.suggestion:hover {
  @apply bg-blue-600 -mx-4 p-4 my-0 text-white;
}
.suggestion__text {
  @apply mr-4;
}
.suggestion__category {
  @apply text-sm bg-red-600 text-white px-2 rounded;
}
.suggestion__image {
  @apply h-20 mr-4 rounded;
}
main {
  @apply w-2/3 mx-auto;
}
</style>
