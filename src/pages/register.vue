<template>
  <div class="wrapper">
    <HomeHeader title="注册"></HomeHeader>
    <inputRow title="手机号:"></inputRow>
    <inputRow class="identify" title="验证码:"></inputRow>
    <!--<inputRow class="identify"><div slot="text">验证码:</div></inputRow>-->
    <buttons class="button-right" content="获取验证码"></buttons>
    <inputRow title="设置密码:"></inputRow>
    <buttons content="注册"></buttons>
    <div class="login" @click="login">登录账号</div>
  </div>
</template>
<script>
import HomeHeader from '@/components/header'
import inputRow from '@/components/inputRow'
import buttons from '@/components/buttons'
export default{
  name: 'register',
  components: {
    HomeHeader,
    inputRow,
    buttons
  },
  methods: {
    login () {
      this.$router.push({path: 'login'})
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
.wrapper
  color:white
  .identify
    width:4rem
    margin-left:0.37rem
    & >>> .right
      display:none
  .button-right
    float:right
    margin-top: -0.9rem
    margin-right: 0.37rem
  .login
    color: $buttonBgColor
    text-align:center
    margin-top:0.4rem
</style>
