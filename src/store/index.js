import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Lily',
    age: 20
  },
  getters: {
    getName(state) {
      return state.name + 'is'
    },
    getAge(state) {
      return state.age
    }
  },
  mutations: {
    addAge(state, payLoad) {
      state.age += payLoad.number
    }
  },
  actions: {
    getUserInfo() {
      return {
        name: 'Lily',
        age: 20
      }
    }
  },
  modules: {
  }
})
