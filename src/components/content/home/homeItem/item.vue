<template>
  <div class="item" @click="getDetail">
      <img :src="imgSrc" alt="">
      <h2 class="textOverThree">{{ description }}</h2>
      <p>￥{{ cost }}</p>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    id:{
      type: String,
      default: ''
    },
    imgSrc:{
      type: String,
      default: ''
      },
    description:{
      type: String,
      default: ''
    },
    price:{
      type: Number,
      default: 0.00
    },

    },
    methods: {
      getDetail(){
        this.$router.push({
          path: '/detail',
          query: {
            id: this.id,
          }
        })
      }
    },
    computed: {
      cost(){
        return this.price.toFixed(2)
      }
    }
}

</script>

<style scoped>
  .item{
    position: relative;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
  }

  .item a{
    text-decoration: none;
  }

  .item img{
    width: 100%;
  }

  .item h2{
    color: #666;
    padding: 0 2.5vw;
    font-size: 4.063vw;
    word-wrap: break-word;
    margin:0 1% 1.813vw 0;
  }
  .item p{
    font-weight: 600;
    font-size: 4.375vw;
    padding: 3% 5%;
    color: rgb(231, 44, 44);
  }
</style>