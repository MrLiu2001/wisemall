<template>
  <div class="main-shop-cart">
    <ul class="item">
      <li v-for="item in shopCartItem">
        <shop-cart-item
            :link="'https://www.baidu.com'"
            :imgSrc="'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/195462/30/12283/198021/60e6a927E24b85271/373080c3384c11fc.jpg!q70.dpg.webp'"
            :description="'this  is test text'"
            :price="12.99"
        />
      </li>
    </ul>
<!--  占位  -->
<div class="clear"></div>
<!--  shopCart-bottom  -->
    <div class="shop-cart-bottom">
      <nav-bar :bgColor="'#fff'">
        <div slot="left" class="shop-cart-bottom-left">
          <select-icon/>
          全选
        </div>
        <div slot="middle" class="shop-cart-bottom-middle">总价：{{totalPrice}}</div>
        <div slot="right" class="shop-cart-bottom-right" @click="">购买</div>
      </nav-bar>
    </div>
  </div>
</template>

<script>
import shopCartItem from "./shopCartItem";
import navBar from "components/common/navbar/navBar";
import selectIcon from "components/common/selectIcon/selectIcon";
export default {
  name: "MainShopCart",
  data(){
    return {
      shopCartItem: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    totalPrice(){
      let totalPrice = this.shopCartItem.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0)
      return totalPrice
    }
  },
  components: {
    shopCartItem,
    navBar,
    selectIcon
  }
}
</script>

<style scoped>
.main-shop-cart{
  width: 100%;
}

.clear{
  height: 27.5vw;
}

.shop-cart-bottom{
  color: black;
  z-index: 999;
  width: 100%;
  position: fixed;
  bottom: 13.75vw;
}

.shop-cart-bottom-left{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
}

.shop-cart-bottom-middle{
  display: flex;
  align-items: center;
  padding-left: 9.375vw;
  font-size: 14px;
  width: 50%;
}

.shop-cart-bottom-right{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #42b983;
  width: 30%;
}
</style>