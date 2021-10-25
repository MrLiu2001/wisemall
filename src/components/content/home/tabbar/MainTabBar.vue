<template>
<div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="~assets/img/MainTabBar/Home.svg" alt="" slot="item-icon">
        <img src="~assets/img/MainTabBar/Home-active.svg" alt="" slot="item-icon-active">
        <p slot="item-text">首页</p>
      </tab-bar-item>

      <tab-bar-item path="/category">
        <img src="~assets/img/MainTabBar/category.svg" alt="" slot="item-icon">
        <img src="~assets/img/MainTabBar/category-active.svg" alt="" slot="item-icon-active">
        <p slot="item-text">分类</p>
      </tab-bar-item>

      <tab-bar-item path="/shopCart">
        <img src="~assets/img/MainTabBar/shop-cart.svg" alt="" slot="item-icon">
        <img src="~assets/img/MainTabBar/shopcart-active.svg" alt="" slot="item-icon-active">
        <p slot="item-text">购物车</p>
      </tab-bar-item>

      <tab-bar-item path="/profile">
        <img src="~assets/img/MainTabBar/profile.svg" alt="" slot="item-icon">
        <img src="~assets/img/MainTabBar/profile-active.svg" alt="" slot="item-icon-active">
        <p slot="item-text">我的</p>
      </tab-bar-item>

    </tab-bar>
</div>
  
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
    name: 'main-tab-bar',
    components: {
      TabBar,
      TabBarItem
    }
}
</script>

<style scoped>

</style>