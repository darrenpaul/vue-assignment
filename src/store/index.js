import { createStore } from "vuex";

import apis from "./modules/apis";

const state = {};
const actions = {};
const mutations = {};
const getters = {};

const modules = {
  apis: apis,
};

export default createStore({
  state,
  actions,
  mutations,
  getters,
  modules,
});
