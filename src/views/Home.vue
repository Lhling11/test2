<template>
  <div class="home">
    <!-- <v-header /> -->
    <!-- <v-sidebar /> -->
    <vHeader></vHeader>
    <vSidebar></vSidebar>
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <vTags></vTags>
      <div class="content">
        <!-- <router-view v-slot="{ Component }"> -->
         <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
              <router-view></router-view>
              <!-- <component :is="Component" /> -->
            </keep-alive>
          </transition>
          <el-backtop target=".content"></el-backtop>
        <!-- </router-view> -->
        <!-- <router-view @isCollapse="collapse"></router-view> -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { computed } from 'vue'
// import { useStore } from 'vuex';
import vHeader from '../components/Header.vue';
import vSidebar from '../components/Sidebar.vue';
import vTags from '../components/Tags.vue';
import bus from '../components/bus';

export default {
  name: 'Home',
  components: {
    vHeader,
    vSidebar,
    vTags
  },
  data () {
    return {
      tagsList: [],
      collapse: false
    }
  },
  methods: {
  },
  computed: {
  },
  created() {
    bus.$on('collapse-content', msg => {
      this.collapse = msg;
    })
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on('tags',msg => {
      let arr = [];
      for(let i =0, len = msg.length; i<len; i++) {
        msg[i].name && arr.push(msg[i].name)
      }
      this.tagsList = arr
    })
  }
}
</script>
