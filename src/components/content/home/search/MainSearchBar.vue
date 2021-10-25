<template>
  <div class="main-search-bar">
    <search-bar>
      <div slot="left" class="left"  @click="handleSearchClick">
        <span></span>
      </div>

      <div slot="middle" class="middle">
        <form action="">
          <div class="search-form-box">
            <div class="search-form-icon"></div>
            <input type="text" class="search-form-text">
          </div>
        </form>
      </div>

      <div slot="right" class="right" @click="handleRightClick">我的</div>
    </search-bar>
  </div>
</template>

<script>
import SearchBar from 'components/common/navbar/navBar'

export default {
  name: 'main-search-bar',
  methods: {
    handleSearchClick(){
      this.$router.replace('/category')
    },
    handleRightClick(){
      this.$router.replace('/profile')
    }
  },
  components: {
    SearchBar
  }
}
</script>

<style scoped>
.main-search-bar{
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  height: 13.75vw;
  width: 100%;
}

.left{
  width: 12.5vw;
  height: 100%;
}
.left span{
  display: inline-block;
  margin: 3.75vw 0 0 3.125vw;

  box-sizing: border-box;
  width: 6.25vw;
  height: 5.625vw;
  background: url(~assets/img/SearchBar/more.png) no-repeat;
  background-size: cover;
}

.middle{
  flex: 1;
}

.middle form{
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.search-form-box{
  position: relative;
  background-color: #fff;
  border: 0.313vw transparent solid;
  border-radius: 9.375vw;
  width: 100%;
  height: 60%;
}

.search-form-icon{
  position: absolute;
  width: 13%;
  height: 100%;
  left: 3.125vw;
  background: url(~assets/img/SearchBar/search.svg) no-repeat;
  background-size: 9.375vw;
  background-position: 0 -0.313vw;
}

.search-form-box input{
  position: absolute;
  top: 0;
  right: 3.125vw;

  border: none;
  outline: none;

  margin: 0.313vw 0;
  width: 80%;
  height: 90%;
}
.right{
  color: #fff;
  font-size: 5vw;
  width: 12.5vw;
  height: 100%;
  text-align: center;
  line-height: 2.5;
}
</style>