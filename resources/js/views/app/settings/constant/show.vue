<template>
    <div class="main-content">
        <breadcumb :page="$t('constants')" :folder="$t('show')"/>
        <b-card class="wrapper">

            <g-list
                    :resource="`constant`"
                    :end-point="endPoint"
            />
        </b-card>
    </div>
</template>

<script>
    import instance, {routes} from "@/util/axios"
    import tableRow from './tableRow'

    export default {
        metaInfo: {
            // if no subcomponents specify a metaInfo.title, this title will be used
            title: "Paging Table"
        },
        data() {
            return {
                endPoint: '',
                search: {
                    key: "",
                    value: "",
                    name: "",
                    is_active: 1
                },
                tableRow: '',

            };
        },
        // components: {tableRow},
        methods: {
            addFile() {
            },
            onSearch() {
                let ref = this;
                let param = {
                    params: ref.search
                }
                this.request(this.route('settings.constants.search'), param, function ({data}) {
                    ref.rows = data.data.data
                    ref.pagination = data.data.paginator;
                }, null, function (response) {
                    // ref.$refs.loader.hide();                                                            // hide loader after fetching data @author Amr

                });

            },
            onReset() {
                for (let item in this.search)
                    this.search[item] = ""
                this.fetch();
            }
        },
        created() {
            this.endPoint = this.route('settings.constants.fetch');
        }
    }
    ;
</script>
<style>
</style>
