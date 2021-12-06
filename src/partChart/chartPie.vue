<template>
<div>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="echart" ref="echartPie" :style="{width: '100%', height: '230px'}"></div>
        </el-col>
        <!-- <el-col :span="12">
            <div class="echart" ref="echartBar2" :style="{width: '100%', height: '230px'}"></div>
        </el-col> -->
    </el-row>
</div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    methods: {
        initChart(name,data){
            let getchart = echarts.init(this.$refs.echartPie)
            if (getchart === null) {
                getchart = echarts.init(this.$refs.echartPie)
            }
            const option = {
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: name,
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        // itemStyle: {     //圆角环形图
                        //     borderRadius: 10,
                        //     borderColor: '#fff',
                        //     borderWidth: 2
                        // },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: data
                    }
                ]
            }

            getchart.setOption(option)
        },
        // 动态排序柱状图
        initChart2(name,xData,yData){}
    }
}
</script>