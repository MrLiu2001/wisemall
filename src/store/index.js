import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //用户信息
    user: {
      nickname: '',
      address: '湖南工程学院'

    },
    //购物车信息
    cartItemList: [
      {
        id: '1',
        name: 'testItem1',
        description: 'testItem',
        imgSrc: "https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/195462/30/12283/198021/60e6a927E24b85271/373080c3384c11fc.jpg!q70.dpg.webp",
        price: 11.02,

      },
      {
        id: '2',
        name: 'testItem2',
        description: '那是个啥豆腐干阿斯顿发射点撒旦发射点发射点发热tyre有',
        imgSrc: "https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/164068/7/11812/111800/60488e5cE3a022381/cec7028c441a9c0e.jpg!q70.dpg.webp",
        price: 10,

      },
      {
        id: '3',
        name: 'testItem3',
        description: '那是个啥豆腐干阿斯顿发射点是个啥豆腐干阿斯顿发射点撒旦发射点发射点是个啥豆腐干阿斯顿发射点撒旦发射点发射点是个啥豆腐干阿斯顿发射点撒旦发射点发射点',
        imgSrc: "https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/195462/30/12283/198021/60e6a927E24b85271/373080c3384c11fc.jpg!q70.dpg.webp",
        price: 0.01,

      },
      {
        id: '4',
        name: 'testItem4',
        description: '那是个啥豆腐干阿斯顿发射点adfasdddddddddddddddddd',
        imgSrc: "https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/164068/7/11812/111800/60488e5cE3a022381/cec7028c441a9c0e.jpg!q70.dpg.webp",
        price: 999,

      }
    ]
  },
  mutations: {
    //添加购物车物品
    addCartItem(state, payload) {
      state.cartItemList.push(...payload)
    },
    //选中购物车商品
    selectedCartClick(state, payload) {
      state.cartItemList[payload].selected = !state.cartItemList[payload].selected
    },
    //全选购物车物品
    selectCartAll(state, payload) {
      let result = state.cartItemList.every((item) =>{
        return item.selected
      })
      if(result) {
        state.cartItemList.forEach((item) =>{
          item.selected = false
        })
      } else {
        state.cartItemList.forEach((item) =>{
          item.selected = true
        })
      }
    },
  },


  actions: {
  },
  modules: {
  }
})
