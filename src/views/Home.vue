<template>
  <div class="home">
    <!-- <v-header /> -->
    <!-- <v-sidebar /> -->
    <vHeader v-on:isCollapse="collapse"></vHeader>
    <vSidebar v-bind:collapse="isCollapse"></vSidebar>
    <div class="content-box" :class="{ 'content-collapse': isCollapse }">
      <div class="content">
        <router-view v-slot="{ Component }">
         <!-- <transition name="move" mode="out-in"> -->
           <!-- <keep-alive :include="tagsList"> -->
              <component :is="Component" />
            <!-- </keep-alive> -->
          <!-- </transition> -->
        </router-view>
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

export default {
  name: 'Home',
  components: {
    vHeader,
    vSidebar
  },
  // props: ['isCollapse'],
  data () {
    // const store = useStore();
    // const collapse = computed(() => store.state.collapse);
    return {
      // collapse
      isCollapse: false
    }
  },
  methods: {
    collapse: function(isCollapse) {
      this.isCollapse = isCollapse;
    }
  },
  computed: {
    // showLeftAside: function() {
    //   console.log('showLeftAside');
    //   return this.isCollapse;
    // }
  }
}
</script>
