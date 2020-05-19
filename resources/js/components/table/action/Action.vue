<template>
    <router-link :to="action.route" @click.native="onClick" class=" btn btn-sm btn-clean btn-icon btn-icon-md ">
        <i @click.native="onClick" :class="classArr"></i>
    </router-link>
</template>

<script>
    export default {
        name: "Action",
        // inject: ['resourceName'],
        props: {
            action: {
                required: true
            },
            formattedRow: {
                required: true
            },
            resourceName : {
                required: true
            }
        },
        computed: {
            classArr: function () {
                return [this.action.icon ,  this.action.class ]
                    //,'text-25  mr-2'
            },
        },
        mounted() {
          console.log('this.action',this.action)
          
        },
        methods: {
            onClick() {
                this.$emit('actionClicked', {
                    action: this.action,
                    row: this.formattedRow,
                    resource: this.resourceName,
                    context : this
                })
            }
        }
    }
</script>

<style scoped>
    .btn.btn-icon.btn-icon-md i {
        font-size: 1.1rem !important;
    }
</style>