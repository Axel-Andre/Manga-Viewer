<template>
    <MangaList :mangas="mangas"/>
    <Pager 
    :currentPage="currentPage" 
    :clickHandler="fetchPage"
  />
</template>

<script>
import MangaList from "../components/MangaList";
import Pager from "../components/Pager";
import { mangaService } from "../services";
export default {
  components: {
    Pager,
    MangaList,
  },
  data() {
    return {
      mangas: [],
      currentPage: 1,
    };
  },
  async mounted() {
    const response = await mangaService.getSome();
    console.log("RESPONSE: ", response);
    this.mangas = response;
  },
  methods: {
    async fetchPage(pageNumber) {
      const response = await mangaService.getSome(pageNumber);
      console.warn("[FETCH_PAGE]", { response });
      console.log("PAGENUMBER : ", pageNumber);
      this.mangas = response;
      this.currentPage = pageNumber;
    },
  },
};
</script>