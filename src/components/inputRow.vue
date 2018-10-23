<template>
  <div class="container">
    <input type="text" :placeholder="title" />
    <!--<div class="left"><slot name="text"></slot></div>-->
    <div class="right">
      <span class="iconfont">&#xe61c;</span>
    </div>
  </div>
</template>
<script>
export default{
  name: 'inputRow',
  props: {
    title: String
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .container
    width:90%
    background:$inputBgColor
    margin:0.1rem auto
    border-radius:0.2rem
    display:flex
    align-items:center
    input[type="text"]
      width:90%
      box-sizing: border-box
      height:0.8rem
      text-align:left
      border-radius:0.2rem
      background:$inputBgColor
      color:#BFC0C1
      -webkit-appearance:none
      -moz-appearance: none
      outline:none
      padding:0 1em
      text-decoration:none
    .right
      margin-right:0.2rem
      width: 0.48rem
      height: 0.48rem
</style>
