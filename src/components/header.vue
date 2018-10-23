<template>
  <section class="header">
    <div @click="comeBack" class="left">
      <span class="iconfont">&#xe61a;</span>
    </div>
    <div class="middle">{{selfTitle}}</div>
    <div class="right"></div>
  </section>
</template>
<script>
export default{
  name: 'HomeHeader',
  props: {
    title: String
  },
  data: function () {
    return {
      selfTitle: this.title
    }
  },
  methods: {
    comeBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    display:flex
    align-items:center
    justify-content:center
    height:1.04rem
    .left
      margin-left:0.3rem
      width: 0.48rem
      height: 0.48rem
    .middle
      flex:1
      color: #ffffff
      font-size: 0.36rem
      text-align:center
    .right
      margin-right:0.3rem
      width: 0.48rem
      height: 0.48rem
</style>
