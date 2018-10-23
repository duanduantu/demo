<template>
  <div class="wrapper">
    <HomeHeader title="详细数据"></HomeHeader>
    <ul class="cells">
      <li v-for="item in options" :key="item.id">
        <cell :cellI="item"></cell>
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
      options: [{title: '合约', content: '美黄金'}, {title: '期数', content: 'CL1808'}, {title: '最新价', content: '1241.05'}, {title: '涨跌额', content: '美黄金'}, {title: '涨跌幅', content: 'CL1808'}, {title: '当前手数', content: '1241.05'}]
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
