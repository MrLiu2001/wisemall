<template>
  <div class="detail">详情页</div>
</template>

<script>
export default {
  name: "Detail",
  created() {
    console.log(this.$route.query.id);
  }
}
</script>

<style scoped>

</style>