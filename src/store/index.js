import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restaurants: [],
  },
  getters: {},
  mutations: {
    addRestaurant(state, restaurant) {
      state.restaurants.push(restaurant);
    },
  },
  actions: {
    addRestaurant({ commit }, restaurant) {
      commit("addRestaurant", restaurant);
    },
  },
  modules: {},
});
