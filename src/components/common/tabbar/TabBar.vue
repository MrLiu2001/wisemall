<template>
  <div class="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
    name: 'tab-bar',
    components: {
        TabBarItem
    }
}
</script>

<style scoped>
    .tab-bar{
        position: fixed;
        left: 0;
        bottom: 0;

        display: flex;

        z-index: 999;
        box-sizing: border-box;
        box-shadow: 0 -1px 7px 1px #d8d6d6;
        width: 100%;
        padding: 0.8vw;
        background-color: #fff;

    }

    .tab-bar img{
        width: 20px;
        height: 20px;
    }
</style>