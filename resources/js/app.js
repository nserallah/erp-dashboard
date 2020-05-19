// import "babel-polyfill";
/**
 * publish mixins globally
 * @author Amr
 */
require('./mixins/index.js');
require('./components/components');
require('./plugins/lodash');
require('./plugins/validate');

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import VueRouter from "vue-router";
import GullKit from "./plugins/gull.kit";
// import "babel-polyfill";
// import es6Promise from "es6-promise";
// es6Promise.polyfill();
import store from "./store";
import Breadcumb from "./components/breadcumb";
import firebase from "firebase/app";
import "firebase/auth";
import {firebaseSettings} from "@/data/config";
import i18n from "./lang/lang";
import Constants from '@/util/constants';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
window.Constants = Constants;

Vue.component("breadcumb", Breadcumb);
//
// // Vue.use(VueRouter);
// toastr.options = {
//     "closeButton": true,
//     "debug": false,
//     "newestOnTop": false,
//     "progressBar": true,
//     "positionClass": "toast-top-right",
//     "preventDuplicates": false,
//     "showDuration": "300",
//     "hideDuration": "1000",
//     "timeOut": "5000",
//     "extendedTimeOut": "1000",
//     "showEasing": "swing",
//     "hideEasing": "linear",
//     "showMethod": "fadeIn",
//     "hideMethod": "fadeOut"
// };

Vue.use(GullKit);
firebase.initializeApp(firebaseSettings);
Vue.config.productionTip = false;



window.$v = new Vue({
    store,
    router,
    i18n,
    render: h => h(App)
}).$mount("#app");


