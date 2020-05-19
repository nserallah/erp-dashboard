<template>
    <div>

        <!--<v-filter resource="company"></v-filter>-->

        <!--<div class="tableFilters row">-->
        <!--<b-form-group class="col-md-4 mb-3" label="Search" label-for="input-1">-->
        <!--<b-form-input type="text" v-model="tableData.search" placeholder="Search Table"-->
        <!--@input="fetch()"></b-form-input>-->
        <!--</b-form-group>-->
        <!--<b-form-group class="col-md-4 mb-3" label="Per Page" label-for="input-1">-->
        <!--<select class="form-control" v-model="pagination.perPage" @change="fetch()">-->
        <!--<option v-for="(records, index) in perPage" :key="index" :value="records">{{records}}</option>-->
        <!--</select>-->
        <!--</b-form-group>-->
        <!--<b-form-group class="col-md-4 mb-3" label="Active" label-for="input-1">-->
        <!--<select class="form-control" v-model="tableData.is_active" @change="fetch()">-->
        <!--<option selected value="">All</option>-->
        <!--<option value="1">Active</option>-->
        <!--<option value="0">InActive</option>-->
        <!--</select>-->
        <!--</b-form-group>-->
        <!--</div>-->



        <f-table :rows="rows" :columns="columns" @fetch="fetch" :table-row="tableRow"></f-table>
        <paginator :paginator="pagination" @pagination-update="paginationUpdate"></paginator>


        <!--<table class="table is-bordered data-table order-table vgt-table">-->
        <!--<thead>-->
        <!--<tr>-->
        <!--<th v-for="column in columns" :key="column.name" @click="$emit('sort', column.name)"-->
        <!--:class="sortKey === column.name ? (sortOrders[column.name] > 0 ? 'sorting_asc' : 'sorting_desc') : 'sorting'"-->
        <!--:style="'width:'+column.width+';'+'cursor:pointer;'">-->
        <!--{{column.label}}-->
        <!--</th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--<tbody>-->
        <!--<tr v-for="item in filteredItems" :key="item.id">-->
        <!--<td v-for="(column,index) in columns" :class="{'vgt-left-align text-left':true}">-->
        <!--<slot :name="column.name" :item="item">-->
        <!--{{ item[column.name] }}-->
        <!--</slot>-->
        <!--</td>-->
        <!--</tr>-->
        <!--<tr v-if="items.length === 0">-->
        <!--<td>{{$t('noRecords')}}</td>-->
        <!--</tr>-->
        <!--</tbody>-->
        <!--</table>-->
        <!--<b-col md="12" class="mt-4" style="display: flex;justify-content: center">-->
        <!--<b-pagination @change="fetch" :total-rows="pagination.total" :per-page="pagination.perPage"-->
        <!--v-model="pagination.currentPage"-->
        <!--class="my-0 gull-pagination  align-items-center" align="center" first-text=""-->
        <!--last-text="">-->
        <!--<p class="list-arrow m-0" slot="prev-text">-->
        <!--<i class="i-Arrow-Left text-40"></i>-->
        <!--</p>-->
        <!--<p class="list-arrow m-0" slot="next-text">-->
        <!--<i class="i-Arrow-Right text-40"></i>-->
        <!--</p>-->
        <!--</b-pagination>-->
        <!--</b-col>-->
    </div>

</template>

<script>
    import {makeRequest} from "../../util/axios";
    import Pagination from "./Pagination";
    import vLoader from "../common/Loader";
    import vFilter from "./Filter";
    import FTable from "../table/FTable";

    export default {
        name: "Datatable",
        props: ['columns', 'sortKey', 'source', 'params'],
        data() {
            return {
                tableRow: null,
                sortOrders: [],
                rows: [],
                is_loading: false,
                tableData: {
                    page: 1,
                    per_page: 10,
                    draw: 0,
                    length: 10,
                    search: '',
                    column: 0,
                    dir: 'desc',
                },
                pagination: {
                    lastPage: '',
                    currentPage: '',
                    total: '',
                    lastPageUrl: '',
                    nextPageUrl: '',
                    prevPageUrl: '',
                    from: '',
                    to: '',
                    perPage: 10
                },
                perPage: [10, 20, 30],
            }
        },
        components: {pagination: Pagination, vLoader, vFilter, 'f-table': FTable},
        mounted() {
            let self = this;
            self.columns.forEach((column) => {
                self.sortOrders[column.name] = -1;
            });
            self.fetch();
        },
        methods: {
            paginationUpdate(current) {
                // let current = this.$route.query.page;
                if (current != null)
                    this.fetch(current);
            },
            getIndex(array, key, value) {
                return array.findIndex(i => i[key] == value)
            },
            fetch(page) {
                var self = this;
                self.tableData.draw++;
                self.is_loading = true;
                self.tableData.page = (page || 1);
                self.tableData.per_page = self.pagination.perPage;
                makeRequest(
                    'GET',
                    self.source,
                    {params: self.tableData},
                    function (response) {
                        let data = response.data;
                        self.rows = data.data.data;
                        self.is_loading = false;
                        // self.configPagination(data.data, (page || 1));
                        self.pagination = data.data.paginator;

                    },
                    function (xhr) {
                        self.is_loading = false;
                    }
                );
            },
            configPagination(data, page) {
                this.pagination.prevPage = page > 1 ? page : '';
                this.pagination.nextPage = data.total > this.pagination.to ? page + 1 : '';
                this.pagination.lastPage = data.last_page;
                this.pagination.currentPage = data.current_page;
                this.pagination.total = data.total;
                this.pagination.from = data.from;
                this.pagination.to = data.to;
            },
        },
        computed: {
            filteredItems() {
                let items = this.items;
                if (this.search) {
                    items = items.filter((row) => {
                        return Object.keys(row).some((key) => {
                            return String(row[key]).toLowerCase().indexOf(this.search.toLowerCase()) > -1;
                        })
                    });
                }
                let sortKey = this.sortKey;
                let order = this.sortOrders[sortKey] || 1;
                if (sortKey) {
                    items = items.slice().sort((a, b) => {
                        let index = this.getIndex(this.columns, 'name', sortKey);
                        a = String(a[sortKey]).toLowerCase();
                        b = String(b[sortKey]).toLowerCase();
                        if (this.columns[index].type && this.columns[index].type === 'date') {
                            return (a === b ? 0 : new Date(a).getTime() > new Date(b).getTime() ? 1 : -1) * order;
                        } else if (this.columns[index].type && this.columns[index].type === 'number') {
                            return (+a === +b ? 0 : +a > +b ? 1 : -1) * order;
                        } else {
                            return (a === b ? 0 : a > b ? 1 : -1) * order;
                        }
                    });
                }
                return items;
            },

        },
        watch: {
            'sortKey': {
                handler: function (val, oldVal) {
                    this.sortOrders[val] = this.sortOrders[val] * -1;
                    this.tableData.column = this.getIndex(this.columns, 'name', val);
                    this.tableData.dir = this.sortOrders[val] === 1 ? 'asc' : 'desc';
                    this.fetch();
                },
                deep: true
            },
        }
    }
</script>

<style scoped>

</style>