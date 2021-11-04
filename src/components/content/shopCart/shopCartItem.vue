<template>
  <div class="shop-cart-item">
    <div class="item">

<!--   购物车左侧选择图标   -->
      <div class="shop-cart-left">
        <i v-if="isItemSelected" class="shop-cart-left-icon-selected" @click="selectedClick"></i>
        <i v-else class="shop-cart-left-icon-unselected" @click="selectedClick"></i>
      </div>

<!--   购物车中商品图片   -->
      <div class="shop-cart-middle">
        <img :src="imgSrc" alt="">
      </div>

<!--  购物车商品描述   -->
      <div class="shop-cart-right">
        <div class="shop-cart-right-text">{{ description }}</div>
        <div class="shop-cart-right-price">￥{{ getPrice }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "shopCartItem",
  props: {
    imgSrc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '默认描述',
    },
    price: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return  {
      num: 0,
      isItemSelected: true,
    }
  },
  methods: {
    selectedClick() {
      this.isItemSelected = !this.isItemSelected
    }
  },
  computed: {
    getPrice(){
      return this.price.toFixed(2)
    }
  }

}
</script>

<style scoped>
.shop-cart-item{
  color: black;
  width: 96vw;
  margin: 1.5625vw 2vw;
  background-color: #fff;
  height: 40.25vw;
  border-radius: 2.5vw;
  overflow: hidden;
}
.item{
  display: flex;
  width: 96vw;
  height: 32.25vw;
}

.shop-cart-left{
  display: flex;
  width: 10vw;
  justify-content: center;
  align-items: center;
}

.shop-cart-left-icon-selected{
  width: 6.25vw;
  height: 6.25vw;
  background: url("~assets/img/ShopCart/selected.svg") no-repeat center center;
  background-size: cover;
}

.shop-cart-left-icon-unselected{
  width: 6.25vw;
  height: 6.25vw;
  background: url("~assets/img/ShopCart/unselected.svg") no-repeat center center;
  background-size: cover;
}


.shop-cart-middle{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31.25vw;
}

.shop-cart-middle img{
  border-radius: 2.5vw;
  margin-top: 3.125vw;
  width: 29.25vw;
}

.shop-cart-right{
  width: 58.75vw;
  height: 100%;
}

.shop-cart-right-text{
  height: 70%;
  font-size: 4.375vw;
  padding: 3.125vw 0 0 5vw;
}

.shop-cart-right-price{
  color: #e21616;
  font-size: 4.375vw;
  padding: 3.125vw 0 0 5vw;
}
</style>