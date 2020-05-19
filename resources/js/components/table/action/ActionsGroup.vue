<template>
        <span class="center-btns">
                <component v-for="(action,index) in actions" :is="component(action)" :action="action"
                           :column="column" :resourceName="resourceName" :formattedRow="formattedRow" :key="index"
                           @actionClicked="onActionClicked">
                </component>
        </span>
</template>

<script>
    import Action from "./Action";
    import GActions from "./GActions";

    export default {
        name: "ActionsGroup",
        props: {
            column: {
                required: true,
            },
            actions: {
                required: true,
            },
            formattedRow: {
                required: true,
            }
            ,
            resourceName: {
                required: true,
            }
        },
        components: {
            'v-action': Action,
            'g-actions': GActions,
        }
        ,
        data() {
            return {}
        },
        methods: {
            onActionClicked(event) {
                this.$emit('actionClicked', event);
            },
            component(action) {
                return (action && action.hasOwnProperty('nested_actions')) ? 'g-actions' : 'v-action';
            }
        },
        computed: {}
    }
</script>

<style scoped>
    .btn.btn-icon.btn-icon-md [class^="fa-"], .btn.btn-icon.btn-icon-md [class*=" fa-"] {
        font-size: 1.0rem !important;
    }
</style>