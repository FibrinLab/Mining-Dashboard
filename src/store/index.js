import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth.module'
import Setting from './Setting/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    Setting
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  strict: debug
})
