<template>
<div class="home">
  <main-search-bar/>
  <focus/>
  <home-item/>
</div>
  
</template>

<script>
import MainSearchBar from 'components/content/home/search/MainSearchBar'
import focus from 'components/content/home/focus/focus'
import homeItem from "components/content/home/homeItem/homeItem";

export default {
  name: 'Home',
  components: {
    MainSearchBar,
    focus,
    homeItem
  }
}
</script>

<style scoped>

</style>>
