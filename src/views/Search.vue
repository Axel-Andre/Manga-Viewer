<template>
  <MangaList :mangas="mangas" />
</template>

<script>
import { mangaService } from "../services";
import MangaList from "../components/MangaList";
export default {
  name: 'SearchView',
  data() {
    return {
      mangas: [],

    };
  },
  async mounted() {
    const mangas = await mangaService.searchSome(this.$route.params.text);
    this.mangas = mangas;
  },
  components: {
    MangaList,
  }
};
</script>

<style>
</style>