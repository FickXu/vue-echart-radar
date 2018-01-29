// 引入 Echarts 主模块
import * as echarts from 'echarts/lib/echarts'
// 引入配置项
import { SERIESTYPE, EVENTS } from './config'

let Echart = (el, setOption) => {
  // 初始化图表
  _init(el, setOption)
}

// 初始化图表
let _init = (el, setOption) => {
  // console.log(el, setOption, SERIESTYPE, echarts)
  let _series = setOption.series
  _series.length > 0 ? _series.forEach(item => {
    // 检测传入的图表类型是否存在
    let _type = SERIESTYPE.some((item1) => {
      return item1 === item.type
    })
    // 按需载入图表系列
    if (_type) {
      require(`echarts/lib/chart/${item.type}`)
      echarts.init(el).setOption(setOption)
    } else {
      console.warn('series type更多细节请参考：http://echarts.baidu.com/option.html#series-line')
      throw Error('[series type] does not support the type', item.type)
    }
  }) : console.warn('ex: setOption.series.type')
}

export default Echart
