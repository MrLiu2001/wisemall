<template>
  <div class="shop-cart-item">
    <div class="item">
      <div class="first"></div>
      <div class="se"></div>
      <div class="th"></div>
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
      isChecked: true,
    }
  },
  methods: {
    onClick() {
      this.isChecked = !this.isChecked
    }
  }
}
</script>

<style scoped>
.shop-cart-item{
  width: 96vw;
  margin: 1.5625vw 2vw;
  background-color: green;
  height: 40.25vw;
  border-radius: 2.5vw;
  overflow: hidden;
}
.item{
  display: flex;
  width: 96vw;
  height: 32.25vw;
}
.first{
  width: 10vw;
  height: 100%;
  background-color: blue;
}
.se{
  width: 31.25vw;
  height: 100%;
  background-color: yellow;
}

.th{
  width: 58.75vw;
  height: 100%;
  background-color: #ffffff;
}
</style>