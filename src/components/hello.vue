<template>
  <div class='hello'>
    <h1>{{ msg }}</h1>
    <Echarts
    :setOption='setOption'
    ></Echarts>
  </div>
</template>

<script>
import Echarts from './Echarts'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Echarts',
      setOption: {
        events: ['mouseup'],
        backgroundColor: '#161627',
        title: { text: 'Line Chart' },
        tooltip: {},
        toolbox: {
          feature: {
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            },
            restore: {}
          }
        },
        // xAxis: {},
        // yAxis: {},
        radar: {
          indicator: [
            { name: 'AQI', max: 300 },
            { name: 'PM2.5', max: 250 },
            { name: 'PM10', max: 300 },
            { name: 'CO', max: 5 },
            { name: 'NO2', max: 200 },
            { name: 'SO2', max: 100 }
          ],
          shape: 'circle',
          splitNumber: 5,
          name: {
            textStyle: {
              color: 'rgb(238, 197, 102)'
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                'rgba(238, 197, 102, 0.1)',
                'rgba(238, 197, 102, 0.2)',
                'rgba(238, 197, 102, 0.4)',
                'rgba(238, 197, 102, 0.6)',
                'rgba(238, 197, 102, 0.8)',
                'rgba(238, 197, 102, 1)'
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(238, 197, 102, 0.5)'
            }
          }
        },
        series: [
          {
            name: '北京',
            type: 'radar',
            lineStyle: {
              normal: {
                width: 1,
                opacity: 0.5
              }
            },
            data: [
              [267, 216, 280, 4.8, 108, 64, 9],
              [186, 142, 192, 3.88, 93, 79, 18],
              [234, 185, 230, 4.09, 123, 69, 27],
              [160, 120, 186, 2.77, 91, 50, 28]
            ],
            symbol: 'none',
            itemStyle: {
              normal: {
                color: '#F9713C'
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.1
              }
            }
          }
        ]
      }
    }
  },
  components: {
    Echarts
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
</style>
