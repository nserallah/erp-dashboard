<template>
    <div>
        <slot>
            <v-actions v-if="column.field === 'actions'" :actions="rowActions" :column="column"
                      :resourceName="resourceName"    @actionClicked="onActionClicked" :formattedRow="formattedRow"></v-actions>
            <span v-if="column.field !== 'actions'"> {{formattedRow[column.field]}} </span>
        </slot>
    </div>
</template>

<script>
    import ActionsGroup from "./action/ActionsGroup";

    export default {
        name: "TableRow",
        props: {
            formattedRow: {
                required: true
            },
            resourceName: {
                required: false,
            },
            column: {
                required: true
            },
            rowActions: {
                required: false,
            },
        },
        components: {
            'v-actions': ActionsGroup
        },
        methods: {
            onActionClicked(event) {
                this.$emit(event.action.slug, event);
                if (event.action.callback instanceof Function) {
                    // if (event.action.confirmation) {
                    //     confirm('are you sure ?')
                    // }
                    return (event.action.callback)(event);
                }
            }
        }
    }
</script>

<style scoped>

</style>