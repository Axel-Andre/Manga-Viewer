<template>
  <div v-if="manga" class="">
    <div class="flex">
      <img
        class="rounded-md border border-gray-200 shadow-lg"
        :src="image"
        alt=""
      />
      <h1 class="text-2xl ml-20 mt-10 font-bold">{{ title }}</h1>
    </div>
    <div class="cta-container" style="width:286px">
      <button class="bg-blue-600 px-4 py-2 rounded-md text-white w-full mt-4 hover:bg-blue-700 focus:bg-blue-500 transition-colors focus:outline-none">
        Ajouter aux favoris
      </button>
    </div>
  </div>
</template>

<script>
import { mangaService } from "../services";
export default {
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
  },
};
</script>

<style>
</style>