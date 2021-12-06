<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
      text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template #title>{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                  {{ threeItem.title }}
                </el-menu-item>
              </el-submenu>
             <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../components/bus';
// import { computed } from 'vue';
// import { useStore } from 'vuex';
// import { useRoute } from 'vue-router';

export default {
  data () {
    const items = [
      {
        icon: 'el-icon-s-home',
        index: '/dashboard',
        title: '系统首页'
      },
      {
        icon: 'el-icon-menu',
        index: '/table',
        title: '综合表格'
      },
      {
        icon: 'el-icon-document-copy',
        index: '/tabs',
        title: 'tab选项卡'
      },
      {
        icon: 'el-icon-document',
        index: '3',
        title: '表单相关',
        subs: [
          {
            index: '/form',
            title: '基本表单'
          },
          {
            index: '/upload',
            title: '文件上传'
          },
          {
            index: '4',
            title: '三级菜单',
            subs: [
              {
                index: '/editor',
                title: '富文本编辑器'
              }
            ]
          }
        ]
      },
      {
        icon: 'el-icon-s-data',
        index: '/chart',
        title: '图表'
      },
      {
        icon: 'el-icon-sunny',
        index: '/environment',
        title: '环境实时数据'
      },
    ];
    // const route = useRoute();
    // const onRoutes = computed(() => {
    //   console.log(route.path);
    //   return route.path;
    // });
    // const store = useStore();
    // const collapse = computed(() => store.state.collapse);
    return {
      items,
      // onRoutes,
      collapse: false
    }
  },
  methods: {
  },
  computed: {
    // 监听当前激活菜单的 index
    onRoutes () {
      return this.$route.path;
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg
      bus.$emit('collapse-content', msg)
    })
  }
}
</script>

<style scoped="scoped" >
.sidebar{
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse){
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
