import Vue from 'vue'
import Vuex from 'Vuex'
import itemInfos from './itemInfos'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {itemInfos}
})
