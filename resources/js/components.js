import Vue from 'vue'

import Error403 from '@/views/Error403'
import Error404 from '@/views/Error404'

import Loader from '@/components/Icons/Loader'
import LoadingView from '@/components/LoadingView'
import Modal from '@/components/Modal'
import AddMore from '@/components/AddMore'
import paginator from '@/components/table/paginator'
import MultiSelect from 'vue-multiselect'
import vLoader from "@/components/common/Loader";


// register globally
Vue.component('add-more', AddMore)
Vue.component('error-403', Error403)
Vue.component('error-404', Error404)

Vue.component('loader', Loader);
Vue.component('v-loader', vLoader);
Vue.component('loading-view', LoadingView)
Vue.component('modal', Modal)
Vue.component('paginator', paginator)
