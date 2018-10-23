<template>
  <div :class="[content=='获取验证码'?'button':'button2']">{{content}}</div>
</template>
<script>
export default{
  name: 'buttons',
  props: {
    content: String
  },
  data: function () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .button
    width:2rem
    height:0.8rem
    line-height:0.8rem
    text-align:center
    background:#3180FF
    border-radius:0.2rem
  .button2
    width:90%
    color:#303238
    background:$buttonBgColor
    box-sizing:border-box
    height:0.9rem
    line-height:0.7rem
    text-align:center
    margin:0.1rem auto
    border:0.1rem solid #4C5059
    border-radius:0.4rem
    margin-top:0.4rem
</style>
