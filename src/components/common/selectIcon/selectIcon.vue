<template>
  <span class="select-icon">
    <i v-if="isItemSelected" class="shop-cart-left-icon-selected" @click="selectedClick"></i>
    <i v-else class="shop-cart-left-icon-unselected" @click="selectedClick"></i>
  </span>
</template>

<script>
export default {
  name: "selectIcon",
  data() {
    return  {
      isItemSelected: true,
    }
  },
  methods: {
    selectedClick() {
      this.isItemSelected = !this.isItemSelected
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