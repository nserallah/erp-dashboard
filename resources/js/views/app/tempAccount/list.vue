<template>
    <div class="main-content" :key="$i18n.locale">
        <breadcumb :page="$t('Company requests')" :folder="$t('Subscription')"/>
        <b-col md="12  mb-30">
            <vue-good-table
                    :key="$i18n.locale"
                    :columns="localColumn"
                    styleClass="tableOne vgt-table"
                    :rows="rows"
            >
                <table-row
                        slot-scope="props"
                        slot="table-row"
                        :column="props.column"
                        :formattedRow="props.formattedRow"
                        :rtl="$i18n.locale == 'ar'"
                >
                </table-row>

            </vue-good-table>
        </b-col>

        <b-col md="12">
            <b-pagination
                    v-model="pagination.current_page"
                    :total-rows="pagination.total"
                    :per-page="pagination.per_page"
                    align="right"
            ></b-pagination>
        </b-col>

        <loader ref="loader"></loader>
    </div>

</template>
<script>

    import instance, {routes} from "@/util/axios"
    import tableRow from "./partials/tableRow"
    import loader from '@/components/loader'

    export default {
        components: {tableRow, loader},
        data: () => {
            return {
                columns: [
                    {
                        label: "Company name",
                        field: "company.name"
                    },
                    {
                        label: "Activity type",
                        field: "company.activity.name"
                    }
                    ,
                    {
                        label: "Company mobile",
                        field: "company.mobile"
                    },
                    {
                        label: "Plan level",
                        field: "company.plan.plan_level.name"
                    },
                    {
                        label: "Operations",
                        field: "operations",
                        html: true,

                    }
                ],
                rows: [],
                pagination: {}


            }
        },
        mounted() {
            this.$refs.loader.show();
            instance.get(routes.tempAccount.get()).then(({data}) => {
                if (data.status == 200 || data.status == 'success') {
                    let rows = data.data.data;
                    rows = rows.map((item) => {
                        if (item.company.plan.is_trial == '1') {
                            item.payment_type = 'Trial'
                        }
                        item.operations = item.id
                        return item;
                    })
                    console.log(rows)
                    this.rows = rows;
                    console.log("data.paginator", data.data.paginator)
                    this.pagination = data.data.paginator;
                }
            }).catch((err) => {

            }).finally(() => {
                this.$refs.loader.hide();
            })
        },
        computed: {
            localColumn() {
                let columns_ = JSON.parse(JSON.stringify(this.columns))
                columns_.forEach(function (item) {
                    item.label = this.$t(item.label)
                    return item;
                }.bind(this));
                return columns_;
            }
        }

    }
</script>