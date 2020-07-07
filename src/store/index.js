import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

const state = {
	drawer: null,
  isSm: false
}

const actions = {}

const mutations = {
  SET_DRAWER: () => {},
  SET_IS_SM: () => {}
}

export default new Vuex.Store({
  strict: debug,
	state,
	actions,
	mutations,
	modules: {}
});