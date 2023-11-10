// store.js
import Vue from 'vue';
import Vuex from 'vuex';
import pluginProjectStore from '../node_modules/dynamic-tree-plugin/store/store'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pluginProjectStore,
  },
});

export default store;