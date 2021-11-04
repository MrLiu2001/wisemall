<template>
  <div class="focus">
    <div class="background"></div>
    <swiper ref="mySwiper" :options="swiperOptions" class="main-focus">
        <swiper-slide v-for="i in item" :key="i.name"><img :src="i.src" alt=""></swiper-slide>
    </swiper>
  </div>
   
</template>

<script>
    // Import Swiper Vue.js components
  import { swiper, swiperSlide } from 'vue-awesome-swiper';

  // Import Swiper styles
  import 'swiper/css/swiper.css';

  let vm = null
    export default {
        name: 'focus',
        components: {
          swiper, 
          swiperSlide
        },

        data() {
            return {
              item: [{
                name: 'photo1',
                src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/208366/22/2173/329671/614f9a36Efe88da0e/90d937f44ec69753.jpg!cr_1125x449_0_166!q70.jpg.dpg'
              },{
                name: 'photo2',
                src: 'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/172985/20/11254/250873/60ab712bE2cfd0e52/f184257039a404d1.png!cr_1053x420_4_0!q70.jpg.dpg'
              }],
              swiperOptions: {
                autoplay: {
                  delay: 3000,
                  disableOnInteraction: false,
                },   
                speed: 300,
                loop: true,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper

                on: {
                  click() {
                    vm.$router.replace('/focus')
                  }
                }
              }
          }
      },
      created() {
          vm = this
      },
      computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },      
    }
</script> 

<style scoped>
  .focus{
    position: relative;
    top: 13.75vw;
    left: 0;
    text-align: center;
    padding-bottom: 0.938vw;
    height: 46.88vw;
    overflow: hidden;
  }

  .focus .background{
    position: absolute;
    left: -10%;
    top: -25%;
    height: 100%;
    z-index: -999;
    width: 120%;
    border-radius: 60%;
    background-color: #42b983;
  }
  .main-focus{
    margin-top: 2.5vw;
  }

  .focus img{
    border-radius: 2.5vw;
    width: 93%;
  }
</style>

