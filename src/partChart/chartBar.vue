<template>
<div>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="echart" ref="echartBar" :style="{width: '100%', height: '230px'}"></div>
        </el-col>
        <el-col :span="12">
            <div class="echart" ref="echartBar2" :style="{width: '100%', height: '230px'}"></div>
        </el-col>
    </el-row>
</div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    methods: {
        initChart(name,xData,yData){
            let getchart = echarts.init(this.$refs.echartBar)
            if (getchart === null) {
                getchart = echarts.init(this.$refs.echartBar)
            }
            const option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: [name],
                    bottom: '0%'
                },
                xAxis: {
                    type: 'category',
                    data: xData
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: name,
                        type: 'bar',
                        barWidth:'60%',
                        data: yData
                    }
                ]
            }

            getchart.setOption(option)
        },
        // 动态排序柱状图
        initChart2(name,xData,yData){
            let getchart = echarts.init(this.$refs.echartBar2)
            if(getchart === null) {
                getchart = echarts.init(this.$refs.echartBar2)
            }
            const option = {
                legend: {
                    show: true
                },
                xAxis: {
                    max: 'dataMax'
                },
                yAxis: {
                    type: 'category',
                    data: yData,
                    inverse: true,
                    animationDuration: 300,
                    animationDurationUpdate: 300,
                   // max: 2 // only the largest 3 bars will be displayed
                },
                series: [
                    {
                        name: name,
                        type: 'bar',
                        data: xData,
                        realtimeSort: true,
                        label: {
                            show: true,
                            position: 'right',
                            valueAnimation: true
                        }
                    }
                ],
                animationDuration: 0,
                animationDurationUpdate: 3000,
                animationEasing: 'linear',
                animationEasingUpdate: 'linear'
            }
            function run (){
                for (var i = 0; i < xData.length; ++i) {
                    if (Math.random() > 0.9) {
                        xData[i] += Math.round(Math.random() * 2000);
                    } else {
                        xData[i] += Math.round(Math.random() * 200);
                    }
                }
                getchart.setOption({
                    series: [
                        {
                            type: 'bar',
                            data: xData
                        }
                    ]
                });
            }
            setTimeout(function(){
                run()
            },0)
            setInterval(function(){
                run()
            },3000)
            getchart.setOption(option)
        }
    }
}
</script>