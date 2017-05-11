// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    slideMenu: [{
        title: 'About',
        href: '#',
        iconFont: 'fa fa-dashboard',
        child: [{
            title: 'Company',
            href: '/Company'
        }, {
            title: 'Strategy',
            href: '/Strategy'
        }, {
            title: 'Culture',
            href: '/Culture'
        }]
    }, {
        title: 'News',
        href: '#',
        iconFont: 'fa fa-dashboard',
        child: [{
            title: 'Field',
            href: '/Field'
        }, {
            title: 'Media',
            href: '/Media'
        }, {
            title: 'Business',
            href: '/Business'
        }]
    }, {
        title: 'Product',
        href: '#',
        iconFont: 'fa fa-dashboard',
        child: [{
            title: 'TypeOne',
            href: '/TypeOne'
        }, {
            title: 'TypeTwo',
            href: '/TypeTwo'
        }, {
            title: 'TypeThree',
            href: '#',
            child: [{
                title: 'threeA',
                href: '/threeA'
            }, {
                title: 'threeB',
                href: '/threeB'
            }, {
                title: 'threeC',
                href: '/threeC'
            }]
        }]
    }, {
        title: 'Other',
        href: '/other',
        iconFont: 'fa fa-dashboard'
    }]
  },
  mutations: {

  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


