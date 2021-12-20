<template>
  <div class="main-profile">
    <div class="profile-header">
      <div class="profile-header-icon"><img src="" alt=""></div>
      <span class="profile-header-text">我的</span>
    </div>

    <div class="profile-list">
      <ul>
        <li><i></i>我的订单</li>
        <li><i></i>我的收藏</li>
        <li><i></i>收货地址</li>
        <li><i></i>我的消息</li>
      </ul>
    </div>

    <div class="profile-button">
      <button>退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainProfile"
}
</script>

<style scoped>
.profile-header{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(50, 139, 98);
  width: 100%;
  height: 39.5vw;
}
.profile-header-icon{
  margin-top: 6.25vw;
  width: 16.625vw;
  height: 16.625vw;
  background-color: red;
  border-radius: 50%;
  overflow: hidden;
}
.profile-header-icon img{
  width: 100%;
  height: 100%;
}
.profile-header-text{
  margin: 1.125vw;
  display: inline-block;
}

.profile-list{
  width: 100%;
  background-color: #fff;
  margin-top: 4.6875vw;
}

.profile-list li{
  vertical-align: middle;
  height: 12.5vw;
  line-height: 12.5vw;
}

.profile-button{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
}
.profile-button button{
  width: 80%;
  height: 30px;
  border: none;
  background-color: rgb(50, 139, 98);
}

li i{
  display: inline-block;
  width: 20px;
  height: 20px;
}

i:nth-of-type(1){
  background: url("~assets/img/Profile/order-form.svg") no-repeat 0 0;
  background-size: cover;
}
</style>