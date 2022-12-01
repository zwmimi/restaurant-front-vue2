import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restaurants: [],
  },
  getters: {
    getRestaurantById: (state) => (id) =>
      state.restaurants.find((restaurant) => restaurant.id === id),
  },
  mutations: {
    addRestaurant(state, restaurant) {
      state.restaurants.push(restaurant);
    },
  },
  actions: {
    addRestaurant({ commit }, restaurant) {
      fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurant),
      }).then((res) => {
        if (res.ok) {
          alert("登録完了");
          commit("addRestaurant", restaurant);
        } else {
          alert(`HTTP-Error : ${res.status}`);
        }
      });
    },
    fetchAllRestaurant({ commit }) {
      fetch("http://localhost:3000/restaurants")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          data.forEach((restaurant) => {
            commit("addRestaurant", restaurant);
          });
        });
    },
  },
  modules: {},
});
