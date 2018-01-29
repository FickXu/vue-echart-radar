/* 
 * Echarts 配置
 * setOption更多细节参考：http://echarts.baidu.com/option.html#title
*/

/*
 * Echarts 支持的图表类型
 * 更多细节参考：http://echarts.baidu.com/option.html#series-line 
*/
const SERIESTYPE = [
  /* 折线/面积图 */
  'line',
  /* 柱状/条形图 */
  'bar',
  /* 饼图 */
  'pie',
  /* 散点（气泡）图 */
  'scatter',
  /* 带有涟漪特效动画的散点（气泡）图 */
  'effectScatter',
  /* 雷达图 */
  'radar',
  /* 树图 */
  'tree',
  /* Treemap 是一种常见的表达『层级数据』『树状数据』的可视化形式 */
  'treemap',
  /* 旭日图（Sunburst）由多层的环形图组成，在数据结构上，内圈是外圈的父节点 */
  'sunburst',
  /* 箱形图，是一种用作显示一组数据分散情况资料的统计图 */
  'boxplot',
  /* K线图 */
  'candlestick',
  /* 热力图 */
  'heatmap',
  /* 地图 */
  'map',
  /* 平行坐标系 */
  'parallel',
  /* 线图，路线可视化。主要用于地图上的航线 */
  'lines',
  /* 关系图，用于展现节点以及节点之间的关系数据 */
  'graph',
  /* 桑基图 */
  'sankey',
  /* 漏斗图 */
  'funnel',
  /* 仪表盘 */
  'gauge',
  /* 象形柱图 */
  'pictorialBar',
  /* 主题河流 */
  'themeRiver',
  /* 自定义系列 */
  'custom'
]

const VML = 'vml'

const SVG = 'svg'

/* 
 * Echarts 支持的事件类型
 * 更多细节参考：http://echarts.baidu.com/api.html#events
*/
const EVENTS = [
  /* 鼠标事件 */
  'click',
  /* 鼠标事件 */
  'dblclick',
  /* 鼠标事件 */
  'mousedown',
  /* 鼠标事件 */
  'mouseup',
  /* 鼠标事件 */
  'mouseover',
  /* 鼠标事件 */
  'mouseout',
  /* 鼠标事件 */
  'globalout',
  /* 鼠标事件 */
  'contextmenu',
  /* ACTION: legendToggleSelect 切换图例选中状态后的事件 */
  'legendselectchanged',
  /* ACTION: legendSelect 图例选中后的事件 */
  'legendselected',
  /* ACTION: legendUnSelect 图例取消选中后的事件 */
  'legendunselected',
  /* ACTION: legendscroll 图例滚动事件 */
  'legendscroll',
  /* ACTION: 数据区域缩放后的事件 */
  'datazoom',
  /* ACTION: selectDataRange 视觉映射组件中，range 值改变后触发的事件 */
  'datarangeselected',
  /* ACTION: timelineChange 时间轴中的时间点改变后的事件 */
  'timelinechanged',
  /* ACTION: timelinePlayChange 时间轴中播放状态的切换事件 */
  'timelineplaychanged',
  /* ACTION: restore 重置 option 事件 */
  'restore',
  /* ACTION: 工具栏中数据视图的修改事件 */
  'dataviewchanged',
  /* ACTION: 工具栏中动态类型切换的切换事件 */
  'magictypechanged',
  /* ACTION: geo 中地图区域切换选中状态的事件 */
  'geoselectchanged',
  /* ACTION: geo 中地图区域选中后的事件 */
  'geoselected',
  /* ACTION: geo 中地图区域取消选中后的事件 */
  'geounselected',
  /* ACTION: series-pie 中饼图扇形切换选中状态的事件 */
  'pieselectchanged',
  /* ACTION: series-pie 中饼图扇形选中后的事件 */
  'pieselected',
  /* ACTION: series-pie 中饼图扇形取消选中后的事件 */
  'pieunselected',
  /* ACTION: series-map 中地图区域切换选中状态的事件 */
  'mapselectchanged',
  /* ACTION: series-map 中地图区域选中后的事件 */
  'mapselected',
  /* ACTION: series-map 中地图区域取消选中后的事件 */
  'mapunselected',
  /* ACTION: 平行坐标轴 (Parallel)范围选取事件 */
  'axisareaselected',
  /* ACTION: graph的邻接节点高亮事件 */
  'focusnodeadjacency',
  /* ACTION: graph的邻接节点取消高亮事件 */
  'unfocusnodeadjacency',
  /* ACTION: 选框添加事件。即发出 brush action 得到的事件 */
  'brush',
  /* ACTION: 对外通知当前选中了什么 */
  'brushselected',
]

export {
  COMPONENT,
  SERIESTYPE,
  VML,
  SVG,
  EVENTS
}
