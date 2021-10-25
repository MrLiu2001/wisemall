<template>
  <div class="tab-bar-item" @click="handleClick">
      <div>
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <div :style="{color: isActive ? Color : defaultColor}"><slot name="item-text"></slot></div> 
      </div>
      
  </div>
</template>

<script>
export default {
    name: 'tab-bar-item',
    props: {
        path: String,
        Color: {
            type: String,
            default: '#fb3d13'
        },
        defaultColor: {
            type: String,
            default: '#8b8b8b'
        }
    },
    computed: {
        isActive() {
                return this.$route.path.indexOf(this.path) !== -1
        }
    },
    data(){
      return {
        // isActive: true
      }
    },
    methods: {
        handleClick(){
            this.$router.replace(this.path).catch(e => {})
        }
    }
}
</script>

<style scoped>
    .tab-bar-item {
        padding: 0.938vw;
        flex: 1;
        align-items: center;
        text-align: center;
    }

    .tab-bar-item div img{
        width: 7vw;
        height: 7vw;
        vertical-align: middle;
    }

    p{
        margin: 0;
        line-height: 1;
        font-size: 3vw;
    }
</style>