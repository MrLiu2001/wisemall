<template>
  <span class="select-icon">
    <i v-if="isSelected" class="shop-cart-left-icon-selected"></i>
    <i v-else class="shop-cart-left-icon-unselected"></i>
  </span>
</template>

<script>
export default {
  name: "selectIcon",
  props: {
    selected: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isSelected() {
      return this.selected
    }
  }
}
</script>

<style scoped>
.select-icon{
  display: inline-block;
  width: 6.25vw;
  height: 6.25vw;
}
.shop-cart-left-icon-selected{
  display: inline-block;
  width: 100%;
  height: 100%;
  background: url("~assets/img/ShopCart/selected.svg") no-repeat center center;
  background-size: cover;
}

.shop-cart-left-icon-unselected{
  display: inline-block;
  width: 100%;
  height: 100%;
  background: url("~assets/img/ShopCart/unselected.svg") no-repeat center center;
  background-size: cover;
}
</style>