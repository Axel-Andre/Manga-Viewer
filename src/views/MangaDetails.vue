<template>
  <transition name="fade" mode="out-in">
    <div v-if="title" class="" key="title">
      <div class="layout">
        <div>
          <img
            class="rounded-md border border-gray-200 shadow-lg"
            :src="image"
            alt=""
          />
          <div class="cta-container" style="width: 286px">
            <button
              v-if="!favoritesIds.includes($route.params.id)"
              class="bg-blue-600 px-4 py-2 rounded-md text-white w-full mt-4 hover:bg-blue-700 focus:bg-blue-500 transition-colors focus:outline-none"
              @click="addToFavorites"
            >
              + Add to favorites
            </button>
            <button
              v-else
              class="border-2 border-red-500 px-4 py-2 rounded-md text-red-500 w-full hover:text-white mt-4 hover:bg-red-500 focus:bg-red-600 transition-colors focus:outline-none"
              @click="removeFromFavorites"
            >
              Remove from favorites
            </button>
          </div>
        </div>
        <div class="ml-20 mt-10 text-left">
          <h1 class="text-4xl font-bold">{{ title }} <span v-if="chapterCount" class="font-normal text-gray-400">– {{chapterCount}} chapters</span></h1>
          <hr class="divide-x-8 my-4" />
          <h2 class="text-xl inline mt-4">Rating</h2>
          <span
            class="text-base mt-10 ml-4 bg-yellow-500 text-white px-3 py-1 rounded-full"
            >{{ rating }} / 100</span
          >
          <br />
          <h2 class="text-xl inline mt-4">Type</h2>
          <span
            class="text-base mt-10 ml-4 bg-red-500 text-white px-3 py-1 rounded-full"
            >{{ type }}</span
          >
          <p class="text-base mt-10 block">{{ description }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </transition>
</template>

<script>
import { mangaService } from "../services";
import Spinner from "../components/Spinner";
export default {
  components: {
    Spinner,
  },
  data() {
    return {
      manga: {},
    };
  },
  async mounted() {
    const manga = await mangaService.getOne(this.$route.params.id);
    this.manga = manga;
  },
  computed: {
    title() {
      if (this.manga.attributes) return this.manga.attributes.canonicalTitle;
      return "";
    },
    image() {
      if (this.manga.attributes) return this.manga.attributes.posterImage.small;
      return "";
    },
    description() {
      if (this.manga.attributes) return this.manga.attributes.description;
      return "";
    },
    rating() {
      if (this.manga.attributes) return this.manga.attributes.averageRating;
      return "";
    },
    type() {
      if (this.manga.attributes) return this.manga.type;
      return "";
    },
    chapterCount() {
      if (this.manga.attributes) return this.manga.attributes.chapterCount;
      return "";
    },
    favoritesIds(){
      return this.$store.state.favorites.map(manga=>manga.id);
    }
  },
  watch: {
    async $route(){
       const manga = await mangaService.getOne(this.$route.params.id);
        this.manga = manga;
    }
  },
  methods:{
    addToFavorites(){
      this.$store.commit('add',this.manga);
    },
    removeFromFavorites(){
      this.$store.commit('remove',this.$route.params.id);
    }
  }
};
</script>

<style lang="scss">
.layout {
  @apply grid;
  grid-template-columns: 286px 1fr;
}
</style>