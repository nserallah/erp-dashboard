import * as VeeValidate from '../assets/vee-validate';
import en from "../assets/vee-validate/dist/locale/en";
import ar from "../assets/vee-validate/dist/locale/ar";
import Vue from 'vue'
import i18n from "../lang/lang";
//import  {ar as arAttributes } from '../Company/lang/i18n/attributes'
//import  {en as enAttributes } from '../Company/lang/i18n/attributes'

Vue.use(VeeValidate, {
    i18n,
    dictionary: {
   
    }
});
