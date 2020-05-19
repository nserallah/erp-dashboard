<template>
    <div>

        <table class="table is-bordered data-table order-table vgt-table">
            <thead>
            <slot name="table-header">
                <tr>
                    <td></td>
                    <th v-for="(column , index) in tableColumn" :key="`column_${index}`">
                        {{column.label}}
                    </th>
                </tr>
            </slot>
            </thead>
            <tbody>
            <slot name="table-body">
                <nested-table-row
                        v-for="(row , index ) in rows"
                        :key="`row_${index}`"
                        :row="row" :columns="columns"
                />
            </slot>
            </tbody>
            <tfoot>
            <slot name="table-foot"/>
            </tfoot>
        </table>
    </div>
</template>
<script>
    import NestedTableRow from './nestedTableRow'

    export default {
        components: {NestedTableRow},
        props: {
            rows: {
                required: true,
                type: Array
            },
            columns: {
                required: true,
                type: Array
            }
        },
        computed: {
            tableColumn: function () {
                return this.columns;
            },
            tableRows: function () {
                return this.rows;
            }
        }
    }
</script>