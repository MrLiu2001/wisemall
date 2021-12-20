<template>
  <div>
    <div class="title">{{ title }}</div>
    <ul class="home-item" ref="homeItem">
      <li v-for="item in items" :key="item.name">
        <item :imgSrc="item.imgSrc"
              :description="item.description"
              :price="item.price"
              :id="item.id" />
      </li>
    </ul>
    <div class="clear"></div>
  </div>
</template>

<script>
import item from "./item.vue";
import {get} from "@/network/base"

export default {
  name: 'home-item',
  created() {
    get('/getHomeMutiData').then(resolve => this.items.push(...resolve.data), reject => console.log(reject))
  },
  data() {
    return {
      title: '今日推荐',
      items: []        //商品数据,axios请求
    }
  },
  methods: {

  },
  components: {
    item
  }
}
</script>

<style scoped>
  .title{
    margin-top: 10.75vw;
    margin-left: 5%;
    margin-bottom: 3.125vw;
    font-size: 6.875vw;
    font-weight: bolder;
  }
  .home-item{
    column-count: 2;
    column-gap: 1.563vw;
    width: 100%;
    overflow: hidden;
    padding:0 3%;
  }

  .home-item li{
    break-inside: avoid;
    border-radius: 2.5vw;
    overflow: hidden;
    margin-bottom: 1.563vw;
  }

  .clear{
    height: 15.625vw;
  }
</style>