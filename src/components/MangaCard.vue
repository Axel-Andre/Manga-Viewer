<template>
  <router-link :to="`/manga/${id}`">
    <div class="manga-card">
      <img loading="lazy" :src="image" :alt="title" class="manga-card__background" />
      <!-- <h3 class="manga-card__title">{{title}}</h3> -->
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    id: String
  },
};
</script>

<style>
.manga-card {
  @apply h-56 w-40 inline-block border-gray-200 border rounded-lg relative overflow-hidden shadow-md transition-all cursor-pointer;
}
.manga-card:hover {
  @apply shadow-xl z-10 transform scale-110;
}
.manga-card__title {
  @apply absolute top-0;
}
</style>