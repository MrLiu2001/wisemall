<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="view"/>

    </transition>
    <main-tab-bar v-if="$route.meta.show"></main-tab-bar>
  </div>
</template>



<script>
import MainTabBar from 'components/content/home/tabbar/MainTabBar'


export default {
  components: {
    MainTabBar,
  },
  data(){
    return {
      transitionName: ''
    }
  },
  watch: {
    $route(to, from){
      if(to.meta.index > from.meta.index){
        this.transitionName = 'slide-left'
      }else{
        this.transitionName = 'slide-right'
      }
    }
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

#app{
  position: relative;
}
/*view transition*/
.view{
  width: 100%;
  position: absolute;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 250ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active{
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter{
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active{
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
