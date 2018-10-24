<template>
  <div class="wrapper">
    <HomeHeader title="详细数据"></HomeHeader>
    <ul class="cells">
      <li v-for="(item, index) in options" :key="item.id">
        <cell :cellI="item" :index="index"></cell>
      </li>
    </ul>
  </div>
</template>
<script>
import HomeHeader from '@/components/header'
import cell from '@/components/cell'
export default{
  name: 'detail',
  components: {
    HomeHeader,
    cell
  },
  data: function () {
    return {
      options: [{title: '合约', content: '美黄金'}, {title: '期数', content: 'CL1808'}, {title: '最新价', content: '1241.05'}, {title: '涨跌额', content: '4.5'}, {title: '涨跌幅', content: 'CL1808'}, {title: '当前手数', content: '1241.05'}, {title: '买价', content: '1241.05'}, {title: '卖价', content: '1241.05'}, {title: '买量', content: '1241.05'}, {title: '成交量', content: '1241.05'}, {title: '持仓量', content: '1241.05'}, {title: '卖量', content: '1241.05'}, {title: '开盘价', content: '1241.05'}, {title: '昨结价', content: '1241.05'}, {title: '最高价', content: '1241.05'}, {title: '最低价', content: '1241.05'}, {title: '平均价', content: '1241.05'}, {title: '更多数据', content: '正在计算'}]
    }
  },
  created () {
    // 页面刚进入时开启长连接
    this.initWebSocket()
  },
  destroyed () {
    // 页面销毁时关闭长连接
    this.websocketclose()
  },
  methods: {
    initWebSocket () { // 初始化websocket
      const wsuri = 'ws://quote.vs.com:9102'
      this.websock = new WebSocket(wsuri)
      this.websock.onopen = this.websocketopen
      this.websock.onmessage = this.websocketonmessage
      this.websock.onclose = this.websocketclose
      this.websock.onerror = this.websocketerror
    },
    websocketopen () { // 打开
      console.log('websocket连接成功')
      this.getLoginInfo()
      this.queryList()
    },
    websocketonmessage (e) { // 数据接收
      console.log(e)
      this.productinfos = JSON.parse(e.data)
    },
    websocketsend (agentData) { // 数据发送
      this.websock.send(agentData)
    },
    websocketclose () { // 关闭
      console.log('websocket关闭')
    },
    websocketerror () { // 失败
      console.log('websocket连接失败')
    },
    getLoginInfo () {
      var loginData = {
        'method': 'req_login',
        'req_id': '1231',
        'data': {
          'user_name': '13201125564',
          'password': '123456',
          'protoc_version': '1.1'
        }
      }
      this.websocketsend(JSON.stringify(loginData))
    },
    queryList () {
      var queryData = {
        'method': 'req_commodity_list',
        'req_id': '1231',
        'data': {}
      }
      this.websocketsend(JSON.stringify(queryData))
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .wrapper
    color:white
    .cells
      display:flex
      align-items:center
      justify-content:space-around
      flex-wrap:wrap
      & li
        margin-top: 0.3rem
</style>
