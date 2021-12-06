<template>
    <div class="echart-box">
        <ChartBar ref="chart_bar" :data="barData" />
        <ChartPie ref="chart_pie" :data="pieData" />
    </div>
</template>

<script>
import ChartBar from '../partChart/chartBar.vue'
import ChartPie from '../partChart/chartPie.vue'
export default {
    components: {
        ChartBar,
        ChartPie
    },
    data(){
        const barData = {
            name: '销量',
            xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            yData:[
                {
                    value: 120,
                    itemStyle: {
                        color: 'red'
                    }
                },
                {
                    value: 200,
                    itemStyle: {
                        color: 'blue'
                    }
                },
                {
                    value: 150,
                    itemStyle: {
                        color: 'lightblue'
                    }
                },
                {
                    value: 90,
                    itemStyle: {
                        color: 'green'
                    }
                },
                70,110,180
            ]
        }
        const barData2 = {
            name: 'X',
            yData: ['A', 'B', 'C', 'D', 'E'],
            xData: []
        }
        const pieData = {
            name: '环形图',
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ]
        }
        return{
            barData,
            barData2,
            pieData
        }
    },
    mounted (){
        const {barData, barData2, pieData} = this;
        this.$refs.chart_bar.initChart(barData.name,barData.xData,barData.yData)
        this.getRondomData();
        this.$refs.chart_bar.initChart2(barData2.name,barData2.xData,barData2.yData)
        this.$refs.chart_pie.initChart(pieData.name,pieData.data)
    },
    methods:{
        getRondomData(){
            for (let i = 0; i < 5; ++i) {
                this.barData2.xData.push(Math.round(Math.random() * 200));
            }
        }
    }
}
</script>

<style scoped lang="scss">
.echart-box{
    .echart-item{
    }
}
</style>