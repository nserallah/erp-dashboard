<template>
    <b-col md="12 mb-30">
        <vue-good-table
                :key="$i18n.locale"
                :columns="columns"
                styleClass="table is-bordered data-table order-table vgt-table"
                :rows="rows"
                :line-numbers="true"
                :rtl="$i18n.locale == 'ar'">
            <template slot="emptystate" class="text-center">
                <span> {{$t('no_results')}}</span>
            </template>
            <component :is="tableRow"
                       slot-scope="props"
                       slot="table-row"
                       :column="props.column"
                       :rowActions="rowActions"
                       :row="props.row"
                       :resourceName="resourceName"
                       :formattedRow="props.formattedRow"></component>
        </vue-good-table>
    </b-col>
</template>
<script>
    export default {
        props: {
            rows: {
                required: true
            },
            columns: {
                required: true
            },
            tableRow: {
                required: false,
                default: 'f-table-row'
            },
            rowActions: {
                required: true
            },
            resourceName: {
                required: true
            }
        },
        data() {
            return {}
        }

    }
</script>