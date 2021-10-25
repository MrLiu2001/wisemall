<template>
  <div>
    <div class="title">{{ title }}</div>
    <ul class="home-item" ref="homeItem">
      <li v-for="item in items" :key="item.name">
        <item :imgSrc="item.imgSrc" :description="item.description" :price="item.price" :link="item.link" />
      </li>
    </ul>
    <div class="clear"></div>
  </div>
</template>

<script>
import item from "./item.vue";

export default {
  name: 'home-item',
  data() {
    return {
      title: '今日推荐',
      items: [{
        name: 'testItem1',
        description: 'testItem',
        imgSrc: "https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/195462/30/12283/198021/60e6a927E24b85271/373080c3384c11fc.jpg!q70.dpg.webp",
        price: 11.02,
        link: 'https://www.baidu.com'
      },
        {
        name: 'testItem2',
        description: '那是个啥豆腐干阿斯顿发射点撒旦发射点发射点发热tyre有',
        imgSrc: "https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/164068/7/11812/111800/60488e5cE3a022381/cec7028c441a9c0e.jpg!q70.dpg.webp",
        price: 10,
        link: 'https://www.baidu.com'
      },
        {
        name: 'testItem3',
        description: '那是个啥豆腐干阿斯顿发射点是个啥豆腐干阿斯顿发射点撒旦发射点发射点是个啥豆腐干阿斯顿发射点撒旦发射点发射点是个啥豆腐干阿斯顿发射点撒旦发射点发射点',
        imgSrc: "https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/195462/30/12283/198021/60e6a927E24b85271/373080c3384c11fc.jpg!q70.dpg.webp",
        price: 0.01,
        link: 'https://www.baidu.com'
      },
        {
        name: 'testItem4',
        description: '那是个啥豆腐干阿斯顿发射点adfasdddddddddddddddddd',
        imgSrc: "https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/164068/7/11812/111800/60488e5cE3a022381/cec7028c441a9c0e.jpg!q70.dpg.webp",
        price: 999,
        link: 'https://www.baidu.com'
      }
      ]        //商品数据,axios请求
    }
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