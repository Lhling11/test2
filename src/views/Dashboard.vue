<template>
  <div class="wrap">
    <el-row :gutter="20">     <!-- gutter栅格间隔 -->
      <el-col :span="8">  <!-- span 栅格占据列数 -->
        <el-card shadow="hover" class="mgb20" style="height: 252px;">   <!-- shadow设置阴影显示时机 -->
          <div class="user-info">
            <img src="../assets/img/img.jpg" class="user-avator" alt />  <!-- alt原生 -->
            <div class="user-info-cont">
              <div class="user-info-name">{{name}}</div>
              <div>{{role}}</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登陆时间：
            <span>2019-11-01</span>
          </div>
          <div class="user-info-list">
            上次登陆地点：
            <span>东莞</span>
          </div>
        </el-card>
        <el-card shadow="hover" style="height: 252px;">
          <template #header>
            <div class="clearfix">
              <span>语言详情</span>
            </div>
          </template>
          Vue
          <el-progress :percentage="71.3" color="#42b983"></el-progress>JavaScript
          <el-progress :percentage="24.4" color="#f1e05a"></el-progress>CSS
          <el-progress :percentage="13.7"></el-progress>HTML
          <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px'}">
              <div class="grid-content grid-con-1">
                <i class="el-icon-user-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px'}">
              <div class="grid-content grid-con-2">
                <i class="el-icon-message-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px'}">
              <div class="grid-content grid-con-3">
                <i class="el-icon-s-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover" style="height: 403px;">
          <template #header>
            <div class="clearfix">
              <span>待办事项</span>
              <el-button style="float:right;padding:3px 0;" type="text">添加</el-button>
            </div>
          </template>
          <el-table :show-header="false" :data="todoList" style="width:100%">
            <el-table-column width="40">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <div class="todo-item" :class="{'todo-item-del': scope.row.status,}">
                  {{scope.row.title}}
                </div>
              </template>
            </el-table-column>
            <el-table-column width="60">
              <template>
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <ChartLine ref="chart_line_one" :data="data" />
          <!-- <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart> -->
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <ChartLine ref="chart_line_one2" :data="data2"/>
          <!-- <schart ref="line" class="schart" canvasId="line" :options="options2"></schart> -->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import Schart from 'vue-schart';
// import echarts from 'echarts'
import ChartLine from '../partChart/chartLine.vue'

export default {
  name: 'dashboard',
  // components: { Schart },
  data () {
    const name = localStorage.getItem('ms_username');
    const role = '超级管理';
    const data = {
      cname: '张雪',
      xData: ['2020-02', '2020-03', '2020-04', '2020-05'],
      yData: [30, 132, 80, 134]
    };
    const data2 = {
      cname: '李梅',
      xData: ['2020-02', '2020-03', '2020-04', '2020-05'],
      yData: [90, 100, 50, 145]
    };
    return {
      name,
      role,
      data,
      data2,
      todoList: [
        {
          title: 'AAA',
          status: false
        },
        {
          title: 'BBB',
          status: true
        },
        {
          title: 'CCC',
          status: true
        },
        {
          title: 'DDD',
          status: false
        }
      ]
    }
  },
  mounted () {
    // const { cname, xData, yData } = this
    const { data, data2 } = this;
    this.$refs.chart_line_one.initChart(data.cname, data.xData, data.yData);
    this.$refs.chart_line_one2.initChart(data2.cname, data2.xData, data2.yData);
  },
  components: {
    ChartLine
  }
}
</script>

<style scoped lang="scss">
.wrap{
  .el-row{
    margin-bottom: 20px;
  }
  .mgb20{
    margin-bottom: 20px;
    .user-info{
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 2px solid #ccc;
      margin-bottom: 20px;
      .user-info-cont{
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
        div:first-child{
          font-size: 30px;
          color: #222;
        }
      }
    }
    .user-info-list{
      font-size: 14px;
      color: #999;
      line-height: 25px;
      span{
        margin-left: 70px;
      }
    }
    .grid-content{
      display: flex;
      align-items: center;
      height: 100px;
      .grid-cont-right{
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
        .grid-num{
          font-size: 30px;
          font-weight: bold;
        }
      }
      .grid-con-icon{
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
      }
    }
    .grid-con-1 .grid-con-icon{
      background: rgb(45,140,240);
    }
    .grid-con-1 .grid-num{
      color: rgb(45,140,240);
    }
    .grid-con-2 .grid-con-icon {
      background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
      color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
      background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
      color: rgb(242, 94, 67);
    }
    .todo-item{
      font-size: 14px;
    }
    .todo-item-del{
      text-decoration: line-through;
      color: #999;
    }
  }
.user-avator{
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
}
</style>
