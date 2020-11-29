<template>
  <div
    class="grid grid-cols-5  justify-center items-center mx-auto gap-8"
    v-if="mangas.length"
  >
    <MangaCard
      v-for="manga in mangas"
      :key="manga.id"
      :title="manga.attributes.canonicalTitle"
      :image="manga.attributes.posterImage.medium"
      :id="manga.id"
    />
  </div>
</template>

<script>
import MangaCard from "./MangaCard";
export default {
  props: {
    mangas: {
      type: Array,
    },
  },
  components: {
    MangaCard,
  },
};
</script>

<style>
</style>