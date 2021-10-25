<template>
  <div class="main-shop-cart">
    <ul class="item">
      <li v-for="item in shopCartItem">
        <shop-cart-item/>
      </li>
    </ul>
  </div>
</template>

<script>
import shopCartItem from "./shopCartItem";

export default {
  name: "MainShopCart",
  data(){
    return {
      shopCartItem: [1]

    }
  },
  components: {
    shopCartItem,
  }
}
</script>

<style scoped>
.main-shop-cart{
  width: 100%;
  /*height: 135px;*/
}
</style>