<template>
    <div>
        <slot></slot>
    </div>
</template>


<script>
    export default {
        name: 'tab',
        data: () => {
            return {
                /**
                 * initialize componten's attributes
                 * @author Amr
                 */
                validation: {
                    form: {}
                }
            }
        },
        methods: {
            /**
             * this common function is used to
             * validate tabs' form
             * each tab inhirts this method using
             * Vue extend's keyword
             *
             * @param validationResult
             * @param childName
             * @return {Promise<any>}
             */
            validateForm(validationResult, childName) {
                return new Promise((resolve, reject) => {
                    /**
                     * validate the form according to
                     * sub's forms and rules
                     * @author Amr
                     */
                    this.validate((result) => {
                        if (result)
                            this.$root.$emit('submit-form', this.form, childName)
                        /**
                         * send the result of validation
                         * back to wizard to change steps
                         * according to it
                         * @author Amr
                         */
                         validationResult(result, resolve)
                         /**
                         * if result is true, send form content to
                         * the wizard to submit changes
                         * @author Amr
                         */

                    });
                    return true;
                })
            }
        }
    }
</script>


<style>
</style>
