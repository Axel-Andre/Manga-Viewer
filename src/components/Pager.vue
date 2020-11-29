<template>
  <div class="mt-5">
    <button class="pager-button" v-if="currentPage > 1" @click="clickHandler(1)">
        &#171;
    </button>
    <button class="pager-button" v-if="currentPage > 1" @click="clickHandler(currentPage - 1)">
      &#8249;
    </button>
    <button class="pager-button" @click="clickHandler(currentPage)" disabled>
      {{ currentPage }}</button
    >
    
    <button class="pager-button" v-for="index in 10" :key="index" @click="clickHandler(currentPage + index)">{{currentPage + index}}</button>
    <button class="pager-button" @click="clickHandler(currentPage + 1)">&#8250;</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    clickHandler: Function,
  },
};
</script>

<style>
.pager-button {
    @apply p-2 mx-2 border-gray-200 border leading-4 w-10 rounded-md transition-colors;
}
.pager-button:hover {
    @apply p-2 mx-2 border-blue-300 border leading-4 w-10 rounded-md;
}
.pager-button:disabled{
    @apply bg-blue-600 border-transparent text-white cursor-not-allowed;
}
</style>