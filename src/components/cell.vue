<template>
  <div class="cell-wrapper">
    <div class="cell-top" :class="{yellow: index==17}">{{cellI.title}}</div>
    <div class="cell-bottom" :class="{pink: pinkShow, green: greenShow, yellow: index==17}">{{cellI.content}}</div>
  </div>
</template>
<script>
export default{
  name: 'cell',
  props: {
    cellI: Object,
    index: Number
  },
  data: function () {
    return {
      pinkList: [2, 3, 4, 12, 14, 16],
      greenList: [6, 7, 15],
      pinkShow: false,
      greenShow: false
    }
  },
  created () {
    this.pinkShow = this.changeColor(this.pinkList, this.pinkShow)
    this.greenShow = this.changeColor(this.greenList, this.greenShow)
  },
  methods: {
    changeColor (list, show) {
      for (var i = 0; i < list.length; i++) {
        if (this.index === list[i]) {
          show = true
        }
      }
      return show
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .cell-wrapper
    width:2.14rem
    height:1.26rem
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
    .pink
      color:#FF4A80
    .green
      color:#64FF68
    .yellow
      color:#fde24b
</style>
