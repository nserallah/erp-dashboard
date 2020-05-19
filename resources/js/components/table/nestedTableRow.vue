<template>
    <SLOT>
        <tr @click="__showOrHide"
            v-bind="properties"
            :class="{'pointer-cursor' : row.children.length > 0}"
        >
            <td>
                <i class="fa fa-plus" v-if="!showChildren && row.children.length > 0"></i>
                <i class="fa fa-minus" v-else-if="showChildren && row.children.length > 0"></i>
            </td>
            <td v-for="(column , index) in columns " :key="`data_${index}`"
                class="kt-datatable__cell kt-datatable__toggle-detail">
                <span :style="style" v-if="index == 1">
                    {{__printDate(row , column.field) }}
                </span>
                <span v-else>
                      {{__printDate(row , column.field) }}
                </span>
            </td>
        </tr>
        <nested-table-row
                v-for="(row , index ) in row.children" :key="`row_${index}`" :row="row" :columns="columns"
                :is-child="true"
                v-if="showChildren"
                :padding="padding + 25"
        />
    </SLOT>
</template>
<script>
    import NestedTableRow from './nestedTableRow'

    export default {
        name: "NestedTableRow",
        components: {NestedTableRow},
        props: {
            /**
             * table's row
             * @author Amr
             */
            row: {
                required: true,
                type: Object,
                default: {}
            },
            /**
             * table's columns
             * @author Amr
             */
            columns: {
                required: true,
                type: Array,
                default: []
            },
            /**
             * you can bind any property you
             * want by passing it here
             * @author Amr
             */
            properties: {
                required: false
            },
            /**
             * this is used for showing the levels
             * the node belongs to
             * @author Amr
             */
            padding: {
                required: false,
                default: 0
            },
            /**
             * this prop. is used to change the
             * direction of nested padding
             * @author Amr
             */
            isRtl: {
                required: false,
                default: false
            }

        },
        /**
         *  component's local data
         *  @author Amr
         */
        data() {

            return {
                paddingLeft: 0,
                showChildren: false
            }
        },
        computed: {
            /**
             * generate style according to the value of isRtl
             * @author Amr
             */
            style: function () {
                let style = {};
                style[this.isRtl ? 'padding-right' : 'padding-left'] = this.padding + 'px';
                return style;
            }
        },
        methods: {
            /**
             * this method prints the data of td
             *
             * @param row
             * @param field
             * @author Amr
             */
            __printDate(row, field) {
                this.paddingLeft = row.children.length > 0 ? 25 : 0;
                return row[field];
            },
            /**
             * show or hide the children
             * @author Amr
             */
            __showOrHide() {
                this.showChildren = !this.showChildren;
            }
        }
    }
</script>
<style lang="scss">
    .pointer-cursor {
        cursor: pointer;
    }

</style>