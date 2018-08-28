// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/store.js"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',

    created() { //刷新重新赋值。
        var val = this.$store.getters.getCityFn;
        if (!val) {
            var num = localStorage.getItem("state");
            this.$store.dispatch("setCityName", num)
        }
    }

})