<template>
  <div class="main-shop-cart">
    <ul class="item">
      <li v-for="(item,index) in this.$store.state.cartItemList">
        <shop-cart-item
            :index = index
            :id = "item.id"
            :imgSrc = "item.imgSrc"
            :description = "item.description"
            :price = "item.price"
            @isSelectCartAll = "isSelectCartAll"
        />
      </li>
    </ul>
<!--  占位  -->
<div class="clear"></div>
<!--  shopCart-bottom  -->
    <div class="shop-cart-bottom">
      <nav-bar :bgColor="'#fff'">
        <div slot="left" class="shop-cart-bottom-left" @click="selectAll">
          <select-icon :selected="selectCartAllState"/>
          全选
        </div>
        <div slot="middle" class="shop-cart-bottom-middle">
          总计：<span class="total-price">{{ getTotalPrice }}</span>
        </div>
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
  created() {
    for (let item of this.$store.state.cartItemList){
      this.$set(item, 'selected', true)
    }
  },
  data() {
    return {
       selectCartAllState: true
    }
  },
  methods: {
    selectAll(){
      this.$store.commit('selectCartAll')
    },
    isSelectCartAll(state) {          //全选的状态
      console.log(state);
      this.selectCartAllState = state
    }
  },
  computed: {
    getTotalPrice() {
      //统计选中的商品总价
      return this.$store.state.cartItemList.reduce((accumulator, currentValue)=>{
        if(currentValue.selected){
          return accumulator + currentValue.price
        }else{
          return accumulator
        }
      }, 0)
      .toFixed(2)
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
  margin-top: 15vw;
  width: 100%;
}

.clear{
  height: 27.5vw;
}

.shop-cart-bottom{
  font-size: 4.375vw;
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
  width: 50%;
}

.shop-cart-bottom-right{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #42b983;
  width: 30%;
}
.total-price{
  color: #e21616;
}
</style>