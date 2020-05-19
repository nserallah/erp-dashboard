<template>
    <b-row class="col-md-12">
        <b-col md="3" v-for="(filter , index) in updatedFilters" :key="index">
            <div :id="`input-group-${index}`" role="group" class="form-group">
                <label :id="`input-group-${index}__BV_label_`" :for="`input-${index}`"
                       class="d-block">{{filter.label ? $tn(filter.label.toLowerCase(), $t(filter.filter_name)) : ''}}:</label>
                <div>
                    <component
                            :is="`b-form-${filter.field_type}`"
                            :key="index"
                            class="form-control"
                            :placeholder="filter.attributes.placeholder ? $t(filter.attributes.placeholder.toLowerCase()) : ''"
                            v-bind="filter.attributes"
                            :attributes="filter"
                            @input="input($event,filter)">
                    </component>

                    <!----><!----><!---->
                </div>
            </div>
        </b-col>
    </b-row>
</template>
<script>
    import Hash from '@/mixins/Hash'
    import Route from '@/mixins/Route'
    import _ from 'lodash'

    export default {
        mixins: [Hash, Route],
        props: {
            filters: {
                required: false,
                default: []
            },
            resourceName: {
                required: true,
                type: String,
                default: ''
            }

        },
        data() {
            return {
                localFilters: [],
                filterHash: ''
            }
        },
        computed: {
            updatedFilters() {
                // let queryFilters = this.queryFilters();
                // if (queryFilters.length == 0)
                //     this.filters;
                this.filters = this.filters.map((item) => {
                    if (item.attributes.options) {
                        item.attributes.options.map((option) => {
                            option.text = this.$t(option.text.toLowerCase())
                            return option;
                        })
                    }
                    return item;
                })
                return this.filters;
            }
        },
        methods: {
            /**
             * this method returns the standard name of
             * filter's hash in the url
             * @author Amr
             */
            getFilterName() {
                return `${this.resourceName}_filter`
            },
            /**
             * this method pushes the generated hash
             * to the link
             */
            pushHashToLink(hash) {
                let filterName = this.getFilterName()
                let routeQuery = [];
                routeQuery[filterName] = hash;
                this.pushQuery(routeQuery);
            },
            /**
             * this method creates filter's hash
             * base on Base64 algorithm
             *
             * @author Amr
             */
            createHash() {
                let hashedFilter = this.encryptBase64(this.localFilters);
                /*
                 * push the hash to the link
                 * @author Amr
                 */
                this.pushHashToLink(hashedFilter);
                return hashedFilter;
            },
            /**
             * this method is used to save the used filters
             * into localFilter
             *
             * @param filter
             * @author Amr
             */
            saveFilter(filter) {
                // if the filter is existed in the localFilters, remove it
                // then push the new one that owns the new value
                // remove the duplication that may occur
                _.remove(this.localFilters, function (item) {
                    return item.filter_name == filter.filter_name;
                })
                // push the filter once it has a valid value
                if (filter.value != '')
                    this.localFilters.push(filter)
                // if localfilters has no value, reset it
                if (this.localFilters.length == 0) {
                    this.filterHash = null
                    return;
                }
                /*
                * generate filter's hash
                *
                * @author Amr
                */
                this.filterHash = this.createHash();
            },
            input: _.debounce(function (value, filter) {
                console.log('filter', filter)
                filter.value = value;
                /*
               * save the used filters
               *
               * @author Amr
               */
                this.saveFilter(filter);
            }, 500),
            /**
             * this method gets the url filter's hash
             * @author Amr
             */
            queryFilters() {
                try {
                    let urlData = this.$route.query[this.getFilterName()];
                    let urlFilters = this.decryptBase64(urlData);
                    return urlFilters;
                } catch (e) {
                    return [];
                }
            }
        },
        watch: {
            /**
             * listen to filter hash changes
             *
             * @param newValue
             * @author Amr
             */
            filterHash: function (newValue) {
                this.$emit('filter-resource', newValue)
            }
        }
    }
</script>
<style scoped>
    .filter {
        float: left;
        margin-left: 10px;
    }


    .b-calendar.b-form-date-calendar > div {
        width: 292px !important;
    }


</style>