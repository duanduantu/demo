<template>
  <div class="wrapper">
    <HomeHeader title="登录"></HomeHeader>
    <inputRow title="手机号:" ref="mobile"></inputRow>
    <inputRow title="密码:" ref="password"></inputRow>
    <buttons content="登录" @click.native="getLoginInfo"></buttons>
    <div class="login" @click="register">注册账号</div>
  </div>
</template>
<script>
import HomeHeader from '@/components/header'
import inputRow from '@/components/inputRow'
import buttons from '@/components/buttons'
import qs from 'qs'
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
    },
    getLoginInfo () {
      var data = qs.stringify({
        mobile: this.$refs.mobile.value,
        password: this.$refs.password.value,
        clientId: '11111'
      })
      this.$axios({
        method: 'post',
        url: 'http://platform-trade.dktai.cn/loginAndRegister/mobileLogin',
        data: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((res) => {
        console.log(res.data)
        this.$toast.center(res.data.message)
      })
      this.$router.push({path: 'detail'})
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
