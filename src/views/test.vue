<template>
  <div>
  <div class="analysisTask">
    {{getName}}
   </div>
   <div>
     <button @click="addAge({number:5})">test</button>
   </div>
   <div>{{getAge}}</div>
   </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  created() {
    var res = this.getUserInfo()
    console.log(res)
  },
  computed: {
    // age() {
    //   return this.$store.state.age;
    // },
    ...mapGetters(['getName', 'getAge'])
  },
  methods: {
    ...mapMutations(['addAge']),
    ...mapActions(['getUserInfo'])
  }
}
</script>

<style>
</style>
