<template>
  <div class="shop-cart">
    <nav-bar :bgColor="'#328B62'"
             :style="{display: 'flex',
                      position: 'fixed',
                      top: '0',
    }">
      <div slot="left" class="left">购物车</div>
      <div slot="middle" class="middle">
        <i class="middle-icon"></i>
        <span>{{ address }}</span>
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
  computed: {
    address() {
      return this.$store.state.user.address
    }
  },

  components: {
    navBar,
    MainShopCart
  }
}
</script>

<style>
.shop-cart{
  color: #fff;
}

.left{
  width: 15.625vw;
  font-size: 5vw;
  text-align: center;
  line-height: 2.5;
}
.middle{
  text-align: center;
  font-size: 3.75vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 4.6875vw 0 3.125vw;
  overflow: hidden;
  line-height: 13.75vw;
}
.middle span{
  padding-left: 1.6875vw;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.middle-icon{
  display: inline-block;
  width: 5.625vw;
  height: 5.625vw;
  background-image: url(~assets/img/ShopCart/adress-icon.svg);
  background-size: cover;
}
.right {
  width: 15.625vw;
  font-size: 5vw;
  line-height: 13.75vw;
  text-align: center;
}
</style>