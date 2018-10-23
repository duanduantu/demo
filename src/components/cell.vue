<template>
  <div class="cell-wrapper">
    <div class="cell-top">{{cellI.title}}</div>
    <div class="cell-bottom">{{cellI.content}}</div>
  </div>
</template>
<script>
export default{
  name: 'cell',
  props: {
    cellI: Object
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .cell-wrapper
    width:2.14rem
    height:1.36rem
    background:$inputBgColor
    border-radius:0.2rem
    display:flex
    flex-direction:column
    align-items:flex-start
    /*justify-content:space-around*/
    .cell-top
      color:$cellTitleColor
      font-size: 0.2rem
    .cell-top,.cell-bottom
      margin-left: 0.4rem
      margin-top:0.25rem
</style>
