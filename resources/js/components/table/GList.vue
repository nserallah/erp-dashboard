<template>
    <div>
        <filters v-if="filters && filters.length > 0"
                 :filters="filters" :resource-name="resourceName" @filter-resource="filterResource"></filters>
        <f-table :rows="rows"
                 :columns="translatedColumns"
                 :table-row="tableRow"
                 :rowActions="actions"
                 :resourceName="resourceName"
                 @edit="edit"
                 v-if="type == 1"

        ></f-table>
        <nested-table :rows="rows" :columns="translatedColumns" v-if="type == 2"></nested-table>
        <paginator :paginator="paginator" @pagination-update="paginationUpdate"></paginator>
    </div>
</template>
<script>
    import GActions from "./action/GActions";
    import Filters from "./filters";

    export default {
        /**
         * component's props
         *
         * @author Amr
         */
        components: {GActions, Filters},

        provide: {
            resourceName: ''
        },
        props: {
            endPoint: {
                required: true,
            },
            tableRow: {
                required: false
            },
            resource: {
                required: false,
                default: ''
            },
            type: {
                required: false,
                default: 1
            },
            optionalColumns: {
                required: false
            }
        },

        /**
         * component's data
         *
         * @author Amr
         */
        data() {
            return {
                rows: [],
                columns: this.optionalColumns,
                actions: [],
                filters: [],
                paginator: null,
                resourceName: '',
                filterHash: null,
            }
        }
        ,
        /**
         * component's methods
         *
         * @author Amr
         */
        methods: {
            edit() {
                alert('edit');
            },
            /**
             * this method is optional
             * if user want to listen to paginator changes
             *
             * @author Amr
             */

            paginationUpdate(current) {
                this.$emit('pagination-update', current);
            },

            /**
             * fetch resource
             *
             * @author Amr
             */
            fetch(page) {
                let _this = this;
                let _hashedFilter = this.filterHash;
                let param = {params: {page, filter: _hashedFilter}};

                if (_this.showbBlock)
                    _this.showbBlock();
                   
                console.log('_hashedFilter', param)
                this.request(this.endPoint, param, function ({data}) {
                    
                        if (_this.type == 2) {
                            _this.rows = data.data
                        } else {
                            _this.rows = data.data.data;
                        }
                        
                        
                        _this.paginator = Object.assign({}, data.data.paginator);
                        if (data.data.columns)
                            _this.columns = data.data.columns;
                        _this.filters = data.data.filters;
                        _this.resourceName = data.data.resource;
                        if (data.data.actions) {
                            _this.actions = [];
                            (data.data.actions).forEach(function (object) {
                                _this.actions.push(_this.getAction(object.slug, object))
                            });
                        }
                    },
                    function (xhr) {

                    },
                    function (data) {
                        if (_this.hideBlock)
                            _this.hideBlock();
                    }
                );
            }
            ,
            /**
             * this method handls the filter fetching operation
             * 1. assign the came filter to this.filterHash
             * 2. call fetch operation which send filterHash automatically
             * to the back end
             * @author Amr
             */
            filterResource(hashedFilter) {
                this.filterHash = hashedFilter;
                this.fetch(null)

            }
        }
        ,
        /**
         * fetch the resource once component created
         *
         * @author Amr
         */
        created() {
            this.fetch(this.$route.query.page);
        },
        mounted() {
            let _this = this;
            this.$root.$on('table-reload', function (event) {
                _this.fetch(_this.$route.query.page); // Get page number
                   
            })
            
            
            // this.resourceName = this.resource;
        },

        /**
         * component's watcher
         * @author Amr
         */
        watch: {
            '$route.query.page':
                function (value) {
                    this.fetch(value);
                }
        },
        computed: {
            translatedColumns: function () {
                let _this = this;
                return (_this.columns) ? _.map(_this.columns, function (object) {
                    object.label = _this.$tn(`${_this.resource}.${object.field}`, _this.$tn(`${object.field}`, object.label));
                    return object;
                }) : [];
            },


        },
    }

</script>
<style>
    .vgt-center-align.vgt-text-disabled {
        text-align: center;
    }
</style>