<template>
  <div class="ecahrts">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Echart from '../js/index'
export default {
  name: 'Echarts',
  props: {
    setOption: Object
  },
  data () {
    return {
      msg: 'Welcome to Your Echarts',
      echart: null
    }
  },
  mounted () {
    // 创建实例
    this.init();
  },
  methods: {
    // 创建实例
    init() {
      Echart(this.$el, this.setOption)
    },
    // 销毁实例
    dispose() {
      this.echart.dispose()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ecahrts {
    width: 100%;
    height: 50vh;
    /* background-color: #e87d7d26!important; */
}
</style>
