<template>
  <div class="header">
    <!--折叠按钮-->
    <div class="collapse-btn" v-on:click="collapseChage">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <!--消息中心-->
        <div class="btn-bell">
            <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
              <router-link to="/tabs">
                <i class="el-icon-bell"></i>
              </router-link>
            </el-tooltip>
            <el-badge is-dot class="btn-bell-badge" v-if="message"></el-badge>
          <!-- <span class="btn-bell-badge" v-if="message"></span> -->
        </div>
        <!--用户头像-->
        <div class="user-avator">
          <img src="../assets/img/img.jpg" />
        </div>
        <!--用户名下拉菜单-->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
// import { computed, onMounted } from 'vue';
// import { useStore } from 'vuex';
export default {
  data () {
    const username = 'admin';
    const message = 2;

    // const store = useStore();
    // const collapse = computed(() => store.state.collapse);
    // 侧边栏折叠
    // const collapseChage = () => {
    //   console.log('collapse')
    //   store.commit('handleCollapse', !collapse.value)
    //   // console.log('collapse')
    // };
    // onMounted(() => {
    //   if (document.body.clientWidth < 1500) {
    //     collapseChage();
    //   }
    // });
    // 用户名下拉菜单选择事件
    return {
      username,
      message,
      collapse: false
      // collapseChage
    }
  },
  methods: {
    collapseChage () {
      // const store = useStore();
      // const collapse = computed(() => store.state.collapse);
      // store.commit('handleCollapse', !collapse.value)
      this.collapse = !this.collapse;
      this.$emit('isCollapse', this.collapse)
    }
  }
}
</script>

<style scoped="scoped">
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
}
.collapse-btn{
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header .logo{
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-user-con{
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-bell,
.btn-bell .el-icon-bell{
  color: #FFFFFF;
}
.btn-bell-badge{
  position: absolute;
  margin-top: -5px;
  margin-left:-5px ;
  /* right: 50px;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff; */
}
.user-avator{
  margin-left: 20px;
  width: 40px;
  height: 40px;
}
.user-avator img{
  display: block;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.user-name{
  margin-left: 20px;
}
.el-dropdown-link {
    color: #ffffff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
