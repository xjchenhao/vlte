import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI);

import {
    header,
    sidebar,
    main,
    footer
}from './layout';

export let Layout={
    header,
    sidebar,
    main,
    footer
};