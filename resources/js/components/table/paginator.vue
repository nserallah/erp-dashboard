<template>
    <b-col md="12" v-if="currentPaginator != null">
        <b-pagination
                v-model="currentPaginator.current_page"
                :total-rows="currentPaginator.total"
                :per-page="currentPaginator.per_page"
                align="right"
        ></b-pagination>
    </b-col>
</template>
<script>
    import Route from '@/mixins/Route'

    export default {
        mixins: [Route],
        /**
         * comopnents props
         * @author Amr
         */
        props: {
            paginator: {
                required: true

            }
        },
        /**
         * component's data
         * @author Amr
         */
        data() {
            return {
                currentPaginator: null
            }
        },
        /**
         * component's methods
         * @author Amr
         */
        methods: {
            /**
             * this method is optional
             * if user want to listen to paginator changes
             *
             * @author Amr
             */
            publish(newValue) {
                this.$emit('pagination-update', newValue);
            }
        },
        /**
         * component's watchers
         * @author Amr
         */
        watch: {
            /**
             * listen to current_page changes,
             * change the url page number
             * if the new value equals to current one
             * skip the change
             *
             * @param newValue
             * @author Amr
             */
            'currentPaginator.current_page': function (newValue) {
                let currentPage = this.$route.query.page;
                if (currentPage == newValue)
                    return;

                let query = this.$route.query;
                query = {
                    ...query,
                    page: newValue
                }
                this.$router.push({query: query})
                // this.$router.replace({query: {page: newValue}})
                // this.$router.replace({query: Object.assign(this.$route.query, {page: newValue})})
                // this.pushQuery({page: newValue});
                this.publish(newValue)
            },
            /**
             * if paginator changed, update the local copy of it
             * which is currentPaginator
             *
             * @param newValue
             * @author Amr
             */
            paginator: function (newValue) {
                this.currentPaginator = Object.assign({}, newValue)
            }
        }
    }
</script>