<template>
    <span class="dropdown" v-if="hasVisibleNestedActions">
        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown"
           aria-expanded="false">
            <i class="la la-ellipsis-h"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
            <a v-if="hasAction(nestedAction)" v-for="nestedAction in actions" class="dropdown-item"
               @click="clicked(nestedAction)"
               href="javascript:;">
                <i :class="icon(nestedAction)"></i> {{label(nestedAction)}}
            </a>
        </div>
    </span>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "GActions",
        props: {
            action: {
                required: true
            },
            formattedRow: {
                required: true
            },
            resourceName: {
                required: true
            },
            column: {
                required: true
            }
        },
        data() {
            return {}
        },
        computed: {
            actions: function () {
                if (this.action.hasOwnProperty('vuex')) {
                    if (this.action.vuex.filter instanceof Function)
                        return this.action.vuex.filter(this.$store.getters[this.getterPath]);

                    else
                        return this.$store.getters[this.getterPath];
                }
                return (this.action.nested_actions) ? this.action.nested_actions : [];
            },
            option_name: function () {
                return (this.action.option_name !== undefined) ? this.action.option_name : 'name';
            },
            option_value: function () {
                return (this.action.option_value !== undefined) ? this.action.option_value : 'id';
            },
            getterPath: function () {
                if (this.action.vuex)
                    return `${this.action.vuex.module}/${this.action.vuex.getter}`;

                return '';
            },
            currentItem: function () {
                return this.formattedRow[this.action.slug];
            },
            hasVisibleNestedActions: function () {
                let _this = this;
                if (this.actions.length === 0)
                    return false;

                let nestedActions = _.map(this.actions, function (action) {
                    return _this.hasAction(action)
                });
                // console.log('nestedActions', nestedActions);
                return !nestedActions.includes(false) || this.hasActions;

            },
            hasActions: function () {
                return this.action.nested_actions && this.action.nested_actions.length > 0;
            }
        },
        methods: {
            hasAction(nestedAction) {
                return this.hasActions || (this.checkHasAttribute(nestedAction, 'visible') && this.isVisible(nestedAction));
            },
            isVisible(nestedAction) {
                if (this.currentItem &&
                    this.currentItem.value &&
                    this.currentItem.value.slug)
                    return (nestedAction.value.visible).includes(this.currentItem.value.slug);

                return false;
            },
            icon(nestedAction) {
                return this.checkHasAttribute(nestedAction, 'icon') ? nestedAction.value.icon : nestedAction.icon;
            },
            label(nestedAction) {
                return this.checkHasAttribute(nestedAction, 'label') ? nestedAction.value.label : nestedAction.label;
            },
            checkHasAttribute(nestedAction, attr) {
                return this.action.hasOwnProperty('vuex') && nestedAction.hasOwnProperty('value') && nestedAction.value[attr]
            },
            clicked(nestedAction) {
                this.$emit('actionClicked', {
                    action: this.action,
                    nestedAction: this.checkHasAttribute(nestedAction, 'slug') ? nestedAction.value : nestedAction,
                    row: this.formattedRow,
                    resource: this.resourceName,
                    context: this
                })
            }
        }

    }
</script>

<style scoped>
    .btn.btn-icon.btn-icon-md [class^="fa-"], .btn.btn-icon.btn-icon-md [class*=" fa-"] {
        font-size: 1.0rem !important;
    }
</style>