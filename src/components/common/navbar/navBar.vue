<template>
  <div class="nav-bar" :style="{backgroundColor:bgColor}">
    <slot name="left"></slot>
    <slot name="middle"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'search-bar',
  props: {
    bgColor: {
      type: String,
      default: '#328B62',
    },
  }
}
</script>

<style scoped>
.nav-bar{
  display: flex;
  width: 100%;
  height: 13.75vw;
}

</style>