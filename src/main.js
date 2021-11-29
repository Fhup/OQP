import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//js-cookie
import Cookies from 'js-cookie'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Cookies);


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})