/**
 * this component is used to validate form's
 * inputs
 *
 * @type {{methods: {validate(): void}}}
 * @author Amr
 */
const validateMixins = {
    data() {
        return {
            mixinsValidator: null,
            localValidationErrors: null
        }
    },
    provide() {
        return {
            $validator: this.$validator
        }
    },
    methods: {
        /**
         * this function is used to validate any form
         * in the system
         * if validation passed, validationPassed will be fired
         * otherwise
         * validationFailed will take the control
         *
         * @param validateResult
         * @author Amr
         */
        validate(validateResult = null) {
            let _this = this;
            // console.log('this.validator', this.$validator)
    
            if (this.$validator !== undefined)
                this.$validator.validateAll().then(async result => {
                    if (validateResult != null)
                        result = await validateResult(result);
                    if (result)
                        _this.validationPassed(true);
                    else {
                        _this.validationFailed(result);
                        _this.getValidationErrors(this.errors);
                    }
                    return result;
                });
            else
                _this.validationPassed(true);

        },
        /**
         * this function is fired when validation passed
         *
         * @param result
         * @author Amr
         */
        validationPassed(result) {
            /* @Todo, you can override the method then customize it as you want */
        },
        /**
         * this function is fired when validation failed
         *
         * @param result
         * @author Amr
         */
        validationFailed(result) {
            /* @Todo, you can override the method then customize it as you want */
        },
        /**
         * publish the errors
         *
         * @param errors
         * @author Amr
         */
        getValidationErrors(errors) {
            this.$root.$emit('validation-errors', {validationErrors: errors})

        }

    }
}

export default validateMixins;
