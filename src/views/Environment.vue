<template>
<div class="wrap">
    <div class="top-line">环境实时数据</div>
    <div class="item">
        <div class="item-list">
            <span style="display:block;font-size:11px;margin:10px 0 10px 10px">项目列表</span>
            <el-input size="mini" placeholder="项目名称" style="width:70%;margin:0 0 10px 10px"></el-input>
            <el-button size="mini" type="primary" style="margin-left:10px;width:60px;">搜索</el-button>
            <el-tree
              :data="data"
              :props="defaultProps"
              >
            </el-tree>
        </div>
        <div class="item-datas">
            <div style="font-size:11px;margin-bottom:11px;"><span>更新时间:{{updateTime}}</span></div>
            <div>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-card shadow="hover" class="mgb20" style="height: 252px;">
                            <div class="grid-content-pm">
                                <div class="grid-content-data">
                                    <div>PM2.5</div>
                                    <div class="grid-num" style="color:rgb(242, 94, 67);">{{EnvironmentDatas.PM25}}</div>
                                </div>
                                <div class="grid-chart">
                                    <ChartLine class="chart-line" ref="chart_line_one" :data="data2" />
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card shadow="hover" class="mgb20" style="height: 252px;">
                            <div class="grid-content-pm">
                                <div class="grid-content-data">
                                    <div>PM10</div>
                                    <div class="grid-num" style="color:rgb(242, 94, 67);">{{EnvironmentDatas.PM10}}</div>
                                </div>
                                <div class="grid-chart">
                                    <ChartLine class="chart-line" ref="chart_line_one2" :data="data2" />
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-card shadow="hover" class="mgb20" style="height: 500px;">
                            <div class="grid-content">
                                <div>温度/湿度</div>
                                <div class="grid-content-name">
                                    <div>设备状态</div>
                                    <div>温度</div>
                                    <div>湿度</div>
                                </div>
                                <div class="grid-content-data">
                                    <div class="grid-img"><img class="image" src="../assets/logo.png"/></div>
                                    <div class="grid-num">{{EnvironmentDatas.temperature}}<span>℃</span></div>
                                    <div class="grid-num">{{EnvironmentDatas.humidity}}<span>%</span></div>
                                </div>
                                <div class="grid-content-data">
                                    <div class="grid-img"><img class="image" src="../assets/logo.png"/></div>
                                    <div class="grid-num">{{EnvironmentDatas.temperature}}<span>℃</span></div>
                                    <div class="grid-num">{{EnvironmentDatas.humidity}}<span>%</span></div>
                                </div>
                                <div class="grid-content-data">
                                    <div class="grid-img"><img class="image" src="../assets/logo.png"/></div>
                                    <div class="grid-num">{{EnvironmentDatas.temperature}}<span>℃</span></div>
                                    <div class="grid-num">{{EnvironmentDatas.humidity}}<span>%</span></div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <!-- <el-col :span="8">
                        <el-card shadow="hover" class="mgb20" style="height: 240px;">
                            <div class="grid-content">
                                <div class="grid-content-left">
                                    <div>湿度</div>
                                    <div class="grid-num">{{EnvironmentDatas.humidity}}<span>%</span></div>
                                </div>
                                <img src="../assets/logo.png"/>
                            </div>
                        </el-card>
                    </el-col> -->
                    <el-col :span="8">
                        <el-card shadow="hover" style="height: 500px;">
                            <div class="grid-content">
                                <div>风向/风力</div>
                                <div class="grid-content-name">
                                    <div>设备状态</div>
                                    <div>风向</div>
                                    <div>风力</div>
                                </div>
                                <div class="grid-content-data">
                                    <div class="grid-img"><img class="image" src="../assets/logo.png"/></div>
                                    <div class="grid-num" style="font-size: 20px;">{{EnvironmentDatas.windDirection}}</div>
                                    <div class="grid-num">{{EnvironmentDatas.windPower}}<span>级</span></div>
                                </div>
                                <div class="grid-content-data">
                                    <div class="grid-img"><img class="image" src="../assets/logo.png"/></div>
                                    <div class="grid-num" style="font-size: 20px;">{{EnvironmentDatas.windDirection}}</div>
                                    <div class="grid-num">{{EnvironmentDatas.windPower}}<span>级</span></div>
                                </div>
                                <div class="grid-content-data">
                                    <div class="grid-img"><img class="image" src="../assets/logo.png"/></div>
                                    <div class="grid-num" style="font-size: 20px;">{{EnvironmentDatas.windDirection}}</div>
                                    <div class="grid-num">{{EnvironmentDatas.windPower}}<span>级</span></div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" class="mgb20" style="height: 240px;">
                            <div class="grid-content-rn">
                                <div>雨量</div>
                                <div class="grid-content-data">
                                    <div class="grid-num">{{EnvironmentDatas.rainfall}}<span>mm</span></div>
                                    <div class="grid-img"><img class="image" src="../assets/logo.png"/></div>
                                </div>
                            </div>
                        </el-card>
                        <el-card shadow="hover" class="mgb20" style="height: 240px;">
                            <div class="grid-content-rn">
                                <div>噪音</div>
                                <div class="grid-content-data">
                                    <div class="grid-num">{{EnvironmentDatas.noise}}<span>bd</span></div>
                                    <div class="grid-img"><img class="image" src="../assets/logo.png"/></div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <!-- <el-row :gutter="20">
                    <el-col :span="8">
                        <el-card shadow="hover" style="height: 240px;">
                            <div class="grid-content">
                                <div class="grid-content-left">
                                    <div>雨量</div>
                                    <div class="grid-num">{{EnvironmentDatas.rainfall}}<span>mm</span></div>
                                </div>
                                <img src="../assets/logo.png"/>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" style="height: 240px;">
                            <div class="grid-content">
                                <div class="grid-content-left">
                                    <div>风力</div>
                                    <div class="grid-num">{{EnvironmentDatas.windPower}}<span>级</span></div>
                                </div>
                                <img src="../assets/logo.png"/>
                            </div>
                        </el-card>
                    </el-col>
                </el-row> -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ChartLine from '../partChart/chartLine.vue'
export default {
  components: {
    ChartLine
  },
  data(){
    return{
      data: [
        {
          label: '某某某公司',
          children: [{
            label: '某某某项目'
          },{
            label: '某某某项目'
          }]
        },
        {
          label: '某某某公司',
          children: [{
            label: '某某某项目'
          },{
            label: '某某某项目',
          },{
            label: '某某某项目'
          }]
        }
      ],
      updateTime: '2021-12-12 00:00:00',
      EnvironmentDatas: {
        PM25: '80',
        PM10: '100',
        temperature: '25',
        humidity: '50', //湿度
        noise: '50',
        rainfall: '100',
        windDirection: '西南风',
        windPower: '12'
      },
      data2: {
        cname: '张雪',
        xData: ['2020-02', '2020-03', '2020-04', '2020-05'],
        yData: [30, 132, 80, 134]
      },
    }
  },
  mounted(){
    const{data2} = this
    this.$refs.chart_line_one.initChart(data2.cname,data2.xData,data2.yData)
    this.$refs.chart_line_one2.initChart(data2.cname,data2.xData,data2.yData)
  }
}
</script>

<style scoped lang="scss">
.wrap{
    .top-line{
        border-bottom: 1px solid;
    }
    .item{
        display: flex;
        .item-list{
            position: relative;
            float: left;
            width: 20%;
            height: 815px;
            background-color: #fff;
        }
        .item-datas{
            padding: 10px;
            width: 80%;
            .grid-content-pm{
                display: flex;
                .grid-content-data{
                    width: 30%;
                    .grid-num{
                        font-size: 50px;
                        font-weight: bold;
                        text-align: center;
                        padding-top: 50px;
                        // padding: 50px 20px 0 20px;
                        span{
                            font-size: 15px;
                        }
                    }
                }
                .grid-chart{
                    width: 70%;
                    padding: 0;
                    & .chart-line{
                        display: inline-block;
                        margin:0;
                        padding: 0;
                    }
                }
            }
            .grid-content{
                // display: flex;
                // justify-content: space-between;
                .grid-content-name{
                    display:flex;
                    justify-content: space-between;
                    margin: 10px 0 10px 0;
                    //text-align: center;
                    //border: 1px solid;
                    div{
                        width: 33%;
                        text-align: center;
                        border: 1px solid;
                        padding: 5px;
                        font-size: 11px;
                    }
                }
                .grid-content-data{
                    display:flex;
                    justify-content: space-between;
                    border: 1px solid;
                    height: 80px;
                    margin-bottom: 10px;
                    div{
                        width:33%;
                        text-align: center;
                    }
                    .grid-img{
                        & .image {
                            display: inline-block;
                            width:50px;
                            height:50px;
                            margin-right: 15px;
                            margin-top: 15px;
                        }
                        
                    }
                    .grid-num{
                        font-size: 25px;
                        font-weight: bold;
                        padding-top: 25px;
                        span{
                            font-size: 15px;
                        }
                    }
                }
                // .grid-content-left{
                //     float: left;
                //     width: 40%;
                //     .grid-num{
                //         font-size: 50px;
                //         font-weight: bold;
                //         margin: 30% 0 0 30%;
                //         span{
                //             font-size: 25px;
                //         }
                //     }
                // }
            }
            .grid-content-rn{
                .grid-content-data{
                    display: flex;
                    justify-content: space-between;
                    div{
                        width:50%;
                        text-align: center;
                    }
                    .grid-img{
                        & .image {
                            display: inline-block;
                            width:150px;
                            height:150px;
                            margin-right: 15px;
                            margin-top: 15px;
                        }
                    }
                    .grid-num{
                        font-size: 45px;
                        font-weight: bold;
                        padding-top: 50px;
                        span{
                            font-size: 25px;
                        }
                    }
                }
            }
            .mgb20{
                margin-bottom: 20px;
            }
        }
    }
}

</style>