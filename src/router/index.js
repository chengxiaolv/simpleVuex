import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import changeCity from "../components/changeCity.vue"

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/changeCity',
            name: 'changeCity',
            component: changeCity
        }
    ]
})