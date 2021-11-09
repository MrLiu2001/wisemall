<template>
  <div id="app">
    <router-view/>
    <main-tab-bar v-if="$route.meta.show"></main-tab-bar>
  </div>
</template>



<script>
import MainTabBar from 'components/content/home/tabbar/MainTabBar'


export default {
  components: {
    MainTabBar,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  min-width: 300px;
  background-color: #f6f6f6;
}
a:hover {
  color: #666;
}
a:visited {
  color: #666;
}

.textOverThree {
  display: -webkit-box;
  overflow: hidden;
  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap:break-word;
  -webkit-line-clamp:3;
  -webkit-box-orient: vertical
}

</style>
