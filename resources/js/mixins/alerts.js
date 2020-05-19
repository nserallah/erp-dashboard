let alerts = {
    data: () => {
        return {
            /**
             * components constants
             * @author Amr
             */
            alerts: {
                /**
                 * type of messages
                 * @author Amr
                 */
                type: {
                    error: 'danger',
                    success: 'success'
                },
                /**
                 * titles may user use
                 * @author Amr
                 */
                titles: {
                    default: 'Alert!',
                    success: 'Success!',
                    validation: 'Validation hint!',
                    payment: 'Payment hint!'
                }

            },
            tosatr: {
                success: 's',
                error: 'e',
                warning: 'w'
            }
        }
    },
    methods: {
        /**
         * this method is used to show alerts
         * in all app's components
         *
         * you can customize it as you want
         * @param variant
         * @param content
         * @param title
         */
        showAlert(variant = 'success', content = "Default title", title = undefined, customization = null) {

            /**
             * default alert's specification
             * @author Amr
             */
            let alertSpecifications = {
                title: `${title || this.alerts.titles.default}`,
                variant: variant,
                solid: true
            };
            /**
             * check  if user has sent a full cunstom object
             * to build alert as he wants
             * @author Amr
             */
            if (customization != null && typeof customization == 'object' || typeof customization == 'Object') {
                alertSpecifications = customization;
            }
            this.$bvToast.toast(content, alertSpecifications);
        },
        /**
         * show toast message using
         * the toastr library
         *
         * @note: this method is used in the
         * company's dashboard
         *
         * @param type
         * @param title
         * @param msg
         * @author Amr
         */
        toastr(type, title, msg) {
            this.$toastr.Add({
                type,
                title,
                msg
            })
        }
    }
}

export default alerts;