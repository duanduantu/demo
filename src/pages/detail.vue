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
      options: [{title: '合约', content: '美黄金'}, {title: '期数', content: 'CL1808'}, {title: '最新价', content: '1241.05'}, {title: '涨跌额', content: '4.5'}, {title: '涨跌幅', content: '0.26%'}, {title: '当前手数', content: '1241.05'}, {title: '买价', content: '1241.05'}, {title: '卖价', content: '1241.05'}, {title: '买量', content: '1241.05'}, {title: '成交量', content: '1241.05'}, {title: '持仓量', content: '1241.05'}, {title: '卖量', content: '1241.05'}, {title: '开盘价', content: '1241.05'}, {title: '昨结价', content: '1241.05'}, {title: '最高价', content: '1241.05'}, {title: '最低价', content: '1241.05'}, {title: '平均价', content: '1241.05'}, {title: '更多数据', content: '正在计算'}]
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
    },
    websocketonmessage (e) { // 数据接收
      //      console.log(e)
      var productinfos = JSON.parse(e.data)
      //  console.log(productinfos)
      if (productinfos.req_id === '1231' && productinfos.error_code === 0) {
        this.queryList()
      } else if (productinfos.req_id === '1232' && productinfos.error_code === 0) {
        var contractList = productinfos.data.commodity_list[2].contract_no_list
        this.options[5].content = productinfos.data.commodity_list[2].contract_size
        this.options[0].content = productinfos.data.commodity_list[2].commodity_name
        this.suscribeList(contractList)
      } else if (productinfos.method === 'on_rtn_quote') {
        console.log(productinfos)
        var data = productinfos.data
        var bidList = data.bid
        var askList = data.ask
        var sum1 = 0
        var sum2 = 0
        for (var i = 0; i < bidList.length; i++) {
          sum1 += bidList[i][1]
        }
        for (var j = 0; j < askList.length; j++) {
          sum2 += askList[j][1]
        }
        var contractInfo = data.contract_info
        this.options[1].content = contractInfo.commodity_no + contractInfo.contract_no
        this.options[2].content = data.last
        this.options[3].content = data.change_value
        this.options[4].content = data.change_rate.toFixed(2) + '%'
        this.options[6].content = bidList[0][0]
        this.options[7].content = askList[0][0]
        this.options[8].content = sum1
        this.options[9].content = data.volume
        this.options[10].content = data.position
        this.options[11].content = sum2
        this.options[12].content = data.open
        this.options[13].content = data.pre_settle
        this.options[14].content = data.high
        this.options[15].content = data.low
        this.options[16].content = (data.high + data.low) / 2
      }
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
          'user_name': 'chenlin',
          'password': 'a123456',
          'protoc_version': '1.1'
        }
      }
      this.websocketsend(JSON.stringify(loginData))
    },
    queryList () {
      var queryData = {
        'method': 'req_commodity_list',
        'req_id': '1232',
        'data': {}
      }
      this.websocketsend(JSON.stringify(queryData))
    },
    suscribeList (list) {
      var subscribeData = {
        'method': 'req_subscribe',
        'req_id': '1233',
        'data': {
          'commodity_no': 'ZN',
          'exchange_no': 'LME',
          'security_type': 'FUT_OUT',
          'contract_no': '3M',
          'contract_list': list
        }
      }
      this.websocketsend(JSON.stringify(subscribeData))
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
