import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    styles: [],
    tids: [],
    justTids: [],
  },
  mutations: {
    SET_STYLES(state, styles) {
      state.styles = styles;
    },

    SET_TIDS(state, tids) {
      state.tids = tids;
    },

    SET_JUST_TIDS(state, justTids) {
      state.justTids = justTids;
    },
  },
  actions: {
    getStyles({ commit }) {
      axios.get("http://localhost:5000/dc_inventory").then((res) => {
        commit("SET_STYLES", res.data);
        console.log(res.data);
      }),
        (error) => {
          console.log(error);
        };
    },

    getTids({ commit }) {
      axios.get("http://localhost:5000/dc_tags").then((res) => {
        // commit("SET_TIDS", res.data);
        const justTids = [];

        for (const tid of res.data) {
          justTids.push(tid.tid);
        }

        commit("SET_JUST_TIDS", justTids);
        commit("SET_TIDS", res.data);

        console.log(justTids);
        console.log(res.data);
      }),
        (error) => {
          console.log(error);
        };
    },
  },

  getters: {
    allStyles: (state) => {
      return state.styles;
    },

    allTids: (state) => {
      return state.tids;
    },

    justTids: (state) => {
      return state.justTids;
    },
  },

  modules: {},
});
