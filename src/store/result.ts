import {ActionTree, GetterTree, MutationTree} from "vuex";
import {fetchTableData} from "@/api/result";

interface State {
  tableData:[],
  darkMode: boolean
}

const state: State = {
  tableData:[],
  darkMode: false
}

const mutations = <MutationTree<State>>{
  setTableData(state,payload:[]){
    state.tableData=payload
  }
};

export const actions = <ActionTree<State, any>>{
  async fetchTableData({commit, state},) {
    const data = await fetchTableData()
    commit('setTableData',data)
    console.log(data)
  }
};

const getters = <GetterTree<State, any>>{
  getTableData(state, getters) {
    return state.tableData
  },
}

const result = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default result;