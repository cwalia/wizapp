import Vue from 'vue'
import Vuex from 'vuex'
import result from "@/store/result";

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    result,
  }
})

export default store