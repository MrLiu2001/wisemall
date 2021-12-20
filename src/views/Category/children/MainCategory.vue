<template>
  <div class="main-category">
  <nav-bar class="main-header-text">
    <span slot="middle">分类</span>
  </nav-bar>

  <nav-bar class="category-tab-bar" :bgColor="'#fff'">
    <span slot="left" @click="clickedIndex=0" :class="{isClick: clickedIndex==0}">精选</span>
    <span slot="middle" @click="clickedIndex=1" :class="{isClick: clickedIndex==1}">推荐</span>
    <span slot="right" @click="clickedIndex=2" :class="{isClick: clickedIndex==2}">热销</span>
  </nav-bar>

    <ul class="category-item">
      <li v-for="item in itemData[clickedIndex]" :key="item.name">
        <item class="category-item-one"
              :imgSrc="item.imgSrc"
              :description="item.description"
              :price="item.price"
              :id="item.id" />
      </li>
    </ul>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar";
import item from "components/content/home/homeItem/item";
export default {
  name: "Main-category",
  components: {
    navBar,
    item
  },
  data() {
    return {
      clickedIndex: 0,
      itemData: [[{
        id: '123',
        name: 'testItem4',
        description: '那是个啥豆腐干阿斯顿发射点adfasdddddddddddddddddd',
        imgSrc: "https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/164068/7/11812/111800/60488e5cE3a022381/cec7028c441a9c0e.jpg!q70.dpg.webp",
        price: 999,

      }],[],[{
        id: '123',
        name: 'testItem4',
        description: '那是个啥豆腐干阿斯顿发射点adfasdddddddddddddddddd',
        imgSrc: "https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/164068/7/11812/111800/60488e5cE3a022381/cec7028c441a9c0e.jpg!q70.dpg.webp",
        price: 999,

      }]]
    }
  }
}
</script>

<style scoped>
.main-header-text{
  justify-content: center;
  align-items: center;
  height: 35px;
}
.category-tab-bar{
  justify-content: space-around;
  height: 35px;
}

.category-tab-bar span{
  width: 33.3%;
  text-align: center;
  line-height: 35px;
  display: inline-block;
}

.category-item{
  column-count: 2;
  column-gap: 1.563vw;
  width: 100%;
  overflow: hidden;
  padding:0 3%;
}

.category-item li{
  transform: scale(0.95);
  break-inside: avoid;
  border-radius: 2.5vw;
  overflow: hidden;
  margin-bottom: 1.563vw;
  box-shadow: rgba(0,0,0,.1) 0 1px 5px 0;
}

.isClick{
  border-bottom: 3px solid #666;
}
</style>