<template>
  <div class="wrapper">
    <HomeHeader title="注册"></HomeHeader>
    <inputRow title="手机号:" ref="mobile" @fromData="fromData"></inputRow>
    <inputRow class="identify" title="验证码:" ref="verify" @fromData="fromData"></inputRow>
    <buttons v-show="codeShow" class="button-right" content="获取验证码" @click.native="showImage"></buttons>
    <img v-show="imageShow" class="verifyImage button-right" :src="codeImg" alt="图片加载失败" @click="changeImage" />
    <inputRow title="设置密码:" ref="password" @fromData="fromData"></inputRow>
    <buttons content="注册" @click.native="getRegisterInfo"></buttons>
    <div class="login" @click="login">登录账号</div>
  </div>
</template>
<script>
import HomeHeader from '@/components/header'
import inputRow from '@/components/inputRow'
import buttons from '@/components/buttons'
import qs from 'qs'
export default{
  name: 'register',
  components: {
    HomeHeader,
    inputRow,
    buttons
  },
  data: function () {
    return {
      codeImg: '',
      imageShow: false,
      codeShow: true
    }
  },
  methods: {
    login () {
      this.$router.push({path: 'login'})
    },
    fromData () {
      this.codeImg = 'http://platform-trade.dktai.cn/loginAndRegister/getImgCode.html?mobile=' + this.$refs.mobile.value
    },
    showImage () {
      this.imageShow = true
      this.codeShow = false
    },
    changeImage () {
      var num = Math.ceil(Math.random() * 10)// 生成一个随机数（防止缓存）
      this.codeImg = this.codeImg + '?' + num
    },
    getRegisterInfo () {
      var data = qs.stringify({
        mobile: this.$refs.mobile.value,
        code: this.$refs.verify.value,
        password: this.$refs.password.value,
        resource: '134111'
      })
      this.$axios({
        method: 'post',
        url: 'http://platform-trade.dktai.cn/loginAndRegister/register',
        data: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((res) => {
        console.log(res.data.message)
        this.$toast.center(res.data.message)
      })
    }
  },
  mounted () {
  //    this.getRegisterInfo()
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
  .verifyImage
    width: 2rem
    height: 0.8rem
  .login
    color: $buttonBgColor
    text-align:center
    margin-top:0.4rem
</style>
