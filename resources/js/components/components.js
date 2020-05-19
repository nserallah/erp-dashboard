import Vue from "vue";
import paginator from '@/components/table/paginator'
import FTable from '@/components/table/FTable'
import GList from '@/components/table/GList'
import TableRow from '@/components/table/TableRow'
import Create from '@/components/create'
import vError from '@/components/validation/error'
import NestedTable from '@/components/table/nestedTable'

Vue.component('paginator', paginator);
Vue.component('FTable', FTable);
Vue.component('GList', GList);
Vue.component('FTableRow', TableRow);
Vue.component('Create', Create);
Vue.component('vError', vError);
Vue.component('NestedTable', NestedTable);
