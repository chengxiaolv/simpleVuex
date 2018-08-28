import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 简单的应用
// state (全局变量的数据)
// getters (用来获取数据的方法)
// actions (跟后台接口打交道的方法)
// mutations (存储数据的方法)

// vueComponent(组件) -> actions 
// -> mutations -> state -> vueComponent(组件)

// vueComponent(组件) -> getters -> state

let store = new Vuex.Store({
    state: {
        city: ""
    },
    getters: {
        getCityFn(state) {
            return state.city
        }
    },
    actions: {
        setCityName({ commit, state }, name) {
            commit("setCity", name);
        }
    },
    mutations: {
        setCity(state, name) {
            state.city = name;
            localStorage.setItem("state", state.city);
        }
    }
})

export default store;