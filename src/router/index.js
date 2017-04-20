import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import hello from '@/components/hello'
import tables from '@/components/tables'
import pagination from '@/components/pagination'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/hello',
            name: 'hello',
            component: hello
        },
        {
            path: '/tables',
            name: 'tables',
            component: tables
        },
        {
            path: '/pagination',
            name: 'pagination',
            component: pagination
        }
    ]
})
