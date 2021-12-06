<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-menu"></i>综合表格
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button
                  type="primary"
                  icon="el-icon-delete"
                  class="handle-del"
                  @click="delAllSelection"
                  >批量删除
                </el-button>
                <el-input v-model="name" placeholder="用户名" class="handle-input"></el-input>
                <el-select v-model="type" placeholder="类型" class="handle-select"></el-select>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                <el-button type="primary"  @click="handleAdd">添加</el-button>
                <el-button type="primary"  @click="handlePush">导出</el-button>
                <el-checkbox v-model="showUserName" style="margin-left:15px;">
                    用户名</el-checkbox>
            </div>
            <el-table
              :data="tableData"
              border
              class="table"
              ref="multipleTable"
              header-cell-class-name="table-header"
              @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55" align="center"></el-table-column>
              <el-table-column type="index" label="ID" width="55" align="center"></el-table-column>
              <el-table-column label="标题" min-width="100px">
                  <template slot-scope="scope">
                      <span>{{scope.row.title}}</span>
                      <el-tag>{{scope.row.type}}</el-tag>
                  </template>
              </el-table-column>
              <el-table-column label="头像(查看大图)" align="center">
                  <template slot-scope="scope">
                      <el-image 
                        class="table-td-thumb" 
                        :src="scope.row.thumb" 
                        :preview-src-list="[scope.row.thumb]">
                      </el-image>
                  </template>
              </el-table-column>
              <el-table-column v-if="showUserName"  label="用户名" align="center">
                  <template slot-scope="scope">
                      <span style="color:red;">{{scope.row.name}}</span>
                  </template>
              </el-table-column>
              <el-table-column label="备注" min-width="150px">
                  <template slot-scope="scope">
                      <template v-if="scope.row.edit">
                          <el-input v-model="scope.row.notes" class="edit-input" size="small"></el-input>
                          <el-button
                            class="cancel-btn"
                            size="small"
                            icon="el-icon-refresh"
                            type="warning"
                            @click="cancelEdit(scope.row)">
                          取消</el-button>
                      </template>
                      <span v-else>{{scope.row.notes}}</span>
                  </template>
              </el-table-column>
              <el-table-column label="操作" width="180" align="center">
                  <template slot-scope="scope">
                      <el-button v-if="scope.row.edit" type="text" icon="el-icon-circle-check" @click="comfirmEdit(scope.$index,scope.row)">
                      OK</el-button>
                      <el-button v-else type="text" icon="el-icon-edit" @click="scope.row.edit = !scope.row.edit ">
                      编辑</el-button>
                      <el-button type="text" icon="el-icon-delete" @click="handleDelete(scope.$index,scope.row)">
                      删除</el-button>
                  </template>
              </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
        name: '',
        type: '',
        showUserName: false,
        tableData:[
            {
                title:'ZBSGBSFBSCJBSBC',
                type:'福建',
                name: '张三',
                thumb: '../assets/img/img.jpg',
                originalNaotes: 'HOJKHVFXESGFBVBVV',
                notes: 'HOJKHVFXESGFBVBVV',
                edit: false,
            },
            {
                title:'ZBSGBSFBSCJBSBC',
                type:'广东',
                name: '李四',
                thumb: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                originalNaotes: 'HOJKHVFXESGFBVBVV',
                notes: 'HOJKHVFXESGFBVBVV',
                edit: false,
            }
        ],
        //tableKey: 0,
    }
  },
  created(){
  },
  mounted(){},
  computed:{},
  methods:{
      comfirmEdit(index,row){
          row.edit = false
          row.originalNaotes = row.notes
      },
      cancelEdit(row){
          row.edit = false;
          row.notes = row.originalNaotes
      }
  }
}
</script>

<style scoped lang="scss">
.container{
    .handle-box{
        margin-bottom: 20px;
        .handle-del{
            margin-right: 10px;
        }
        .handle-input{
            width: 300px;
            display: inline-block;
            margin-right: 10px;
        }
        .handle-select{
            margin-right: 10px;
        }
    }
    .table{
        width: 100%;
        font-size: 14px;
        .edit-input{
            padding-right: 100px;
        }
        .cancel-btn{
            position: absolute;
            right: 15px;
            top: 10px;
        }
        .table-td-thumb{
            display: block;
            margin: auto;
            width: 40px;
            height: 40px;
        }
    }
}
</style>