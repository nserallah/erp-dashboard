<template>
     <span class="md-error invalid-content" v-if="checkValidation">
                {{message}}
     </span>
</template>
<script>
    export default {
        /**
         * get parent's $validator object
         *
         * @desc: we want to get the $validator object to
         * perform the validation operation on parent's elements
         *
         * @author Amr
         */
        inject: ['$validator'],
        props: {
            keyName: {
                required: true
            },

        },
        data() {
            return {
                validationErrors: null
            }
        },
        computed: {
            checkValidation() {
                return (this.validationErrors != null && this.validationErrors.has(this.keyName))
                    || (this.validation != undefined && this.validation.form[this.keyName] != undefined && this.validation.form[this.keyName].length > 0)
            },
            message() {
                return this.validationErrors != null && this.validationErrors.has(this.keyName) ? this.validationErrors.first(this.keyName) : this.validation.form[this.keyName][0]
            }
        },
        created() {
            let _this = this;
            this.$root.$on('validation-errors', function (error) {
                _this.validationErrors = error.validationErrors;
                _this.validation = error.validation
                console.log(' _this.validation', _this.validation)
            })
        }
    }
</script>
<style lang="css" scoped>
    .invalid-content {
        color: #fd397a;
    }
</style>