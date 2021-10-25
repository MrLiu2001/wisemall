<template>
  <div>
    <nav-bar
        :bgColor="'#fff'"
        :style="{background: 'linear-gradient(to bottom right, blue, pink)'}"
    >
      <div slot="left" class="left">购物车</div>
      <div slot="middle" class="middle">
        <i class="middle-icon"></i> {{ address }}
      </div>
      <div slot="right" class="right">编辑</div>
    </nav-bar>
    <main-shop-cart/>
  </div>

</template>

<script>
import navBar from "components/common/navbar/navBar";

import MainShopCart from "components/content/shopCart/MainShopCart";

export default {
  name: 'ShopCart',
  data() {
    return {
      address: '湖南工程学院',     //~~~~~父组件传入
    }
  },

  components: {
    navBar,
    MainShopCart
  }
}
</script>

<style>
.left{
  width: 25%;
  font-size: 7vw;
  text-align: center;
  line-height: 13.75vw;
}
.middle{
  width: 60%;
  line-height: 13.75vw;
  text-align: center;
}
.right {
  width: 15%;
  line-height: 13.75vw;
  text-align: center;
}
</style>