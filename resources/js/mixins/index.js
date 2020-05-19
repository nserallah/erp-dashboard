import Vue from 'vue'
import validate from '@/mixins/validate'
import alerts from '@/mixins/alerts'
import request from '@/mixins/request'
import InteractsWithQueryString from './InteractsWithQueryString'
import crud from './crud';
import endPoints from './endPoints';
import actions from './actions';
import FormData from './FormData';
import Route from './Route';
import utils from './utils';


/**
 * _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _  _ _ _ _  _ _ _
 *
 *                      MIXINS
 * _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _  _ _ _ _  _ _ _
 *
 * register mixin globally
 * @author Amr
 */
Vue.mixin(validate)
Vue.mixin(alerts)
Vue.mixin(request)
Vue.mixin(endPoints)
Vue.mixin(actions)
Vue.mixin(FormData)
Vue.mixin(Route)
Vue.mixin(utils)
/**
 * this mixins composes all curd operations
 * in the system
 *
 * @author Amr
 */
Vue.mixin(crud)

export {
    InteractsWithQueryString
}
