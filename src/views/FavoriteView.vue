<template>
  <MangaList :mangas="$store.state.favorites"/>
</template>

<script>
import MangaList from '../components/MangaList'
export default {
    name: "FavoriteList",
    components: {
        MangaList
    }
}
</script>