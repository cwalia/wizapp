import {ActionTree, GetterTree, MutationTree} from "vuex";
import {sample} from "@/api/result";

interface State {
  sample:string
}

const state: State = {
  sample:''
}

const mutations = <MutationTree<State>>{
  sample(state,payload:string){
    state.sample=payload
  }
};

export const actions = <ActionTree<State, any>>{
  async sample({commit, state},) {
    const data = await sample()
  }
};

const getters = <GetterTree<State, any>>{
  getSample(state, getters) {
    return state.sample
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