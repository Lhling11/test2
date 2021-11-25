<template>
  <div class="echart" ref="echartLine" :style="{float:'left',width: '100%', height: '230px'}"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  methods: {
    initChart(name, xData, yData) {
      // let getchart = echarts.getInstanceByDom(document.getElementById('echart-line'));
      let getchart = echarts.init(this.$refs.echartLine);
      if (getchart == null) {
        getchart = echarts.init(this.$refs.echartLine);
        // getchart = echarts.init(document.getElementById('echart-line'));
      // const getchart = echarts.init(this.$refs.echartline);
      }
      var option = {

        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [name],
          bottom: '0%'
        },
        grid: { // 调整图表上下左右位置
          top: '10%',
          left: '3%',
          right: '8%',
          bottom: '11%',
          containLabel: true
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: name,
            type: 'line',
            stack: '总量',
            data: yData
          }
        ]
      };

      getchart.setOption(option);
      // 随着屏幕大小调节图表
      window.addEventListener('resize', () => {
        getchart.resize();
      });
    }

  }

}
</script>


<style>
</style>
