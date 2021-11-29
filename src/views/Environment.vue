<template>
<div class="wrap">
    <div class="top-line">环境实时数据</div>
    <div class="item">
        <div class="item-list">
            <span style="display:block;font-size:11px;">项目列表</span>
            <el-input size="mini" placeholder="项目名称" style="width:70%"></el-input>
            <el-button size="mini" type="primary" style="margin-left:10px;width:60px;">搜索</el-button>
            <el-tree
              :data="data"
              :props="defaultProps"
              >
            </el-tree>
        </div>
        <div class="item-datas">
            <div style="font-size:11px;"><span>更新时间:{{updateTime}}</span></div>
            <div>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-card shadow="hover" class="mgb20" style="height: 252px;">
                            <div>
                                <div>
                                    <div>PM2.5</div>
                                    <div class="grid-num">65</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card shadow="hover" class="" style="height: 252px;">
                            <div>
                                <div>
                                    <div>PM10</div>
                                    <div class="grid-num">65</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="9">
                        <el-card>
                            <div>
                                <div>
                                    <div>温度</div>
                                    <div>34</div>
                                </div>
                                <img src="../assets/logo.png"/>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="9">
                        <el-card>
                            <div>
                                <div>
                                    <div>湿度</div>
                                    <div>50%</div>
                                </div>
                                <img src="../assets/logo.png"/>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="9">
                        <el-card>
                            <div>
                                <div>
                                    <div>噪音</div>
                                    <div>80bd</div>
                                </div>
                                <img src="../assets/logo.png"/>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="9">
                        <el-card>
                            <div>
                                <div>
                                    <div>雨量</div>
                                    <div>100mm</div>
                                </div>
                                <img src="../assets/logo.png"/>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="9">
                        <el-card>
                            <div>
                                <div>
                                    <div>风向</div>
                                    <div>西南风</div>
                                </div>
                                <img src="../assets/logo.png"/>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="9">
                        <el-card>
                            <div>
                                <div>
                                    <div>风力</div>
                                    <div>12级</div>
                                </div>
                                <img src="../assets/logo.png"/>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
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
    }
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
            height: 800px;
            background-color: #fff;
        }
        .item-datas{
            padding: 10px;
            background-color: royalblue;
        }
    }
}

</style>