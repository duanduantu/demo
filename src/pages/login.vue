<template>
  <div class="wrapper">
    <HomeHeader title="登录"></HomeHeader>
    <inputRow title="手机号:"></inputRow>
    <inputRow title="密码:"></inputRow>
    <buttons content="登录"></buttons>
    <div class="login" @click="register">注册账号</div>
  </div>
</template>
<script>
import HomeHeader from '@/components/header'
import inputRow from '@/components/inputRow'
import buttons from '@/components/buttons'
export default{
  name: 'login',
  components: {
    HomeHeader,
    inputRow,
    buttons
  },
  methods: {
    register () {
      this.$router.push({path: '/'})
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .wrapper
    color:white
    .login
      color:$buttonBgColor
      text-align:center
      margin-top:0.4rem
</style>
