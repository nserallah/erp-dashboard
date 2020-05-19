import request from './request'

export default {
    /**
     * component's mixins
     * @author Amr
     */
    mixins: [request],

    computed: {
        /**
         * this computed property is used
         * as data source for the functions
         * down there.
         *
         * it will be changed by the sub-class
         *
         * this is the default one.
         * @author Amr
         */
        formData() {
        }
    },
    methods: {
        /**
         * _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
         *
         *                        Save
         * _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
         *
         *  this function is used to
         *  update and store resource
         *
         * @param method
         * @param url
         * @param success
         * @param error
         * @param final
         * @private
         * @author Amr
         */
        __save(method, url, success, error, final) {
            this.request(method, url, this.formData, success, error, final);
        },
        /**
         * _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
         *
         *                        Store
         * _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
         *
         *  this function is used to
         *  store resource
         *
         *
         * @param url
         * @param success
         * @param error
         * @param final
         * @private
         * @author Amr
         */
        // store(url, success, error = null, final = null) {
        //     this.__save('POST', success, error, final);
        // },
        /**
         * _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
         *
         *                       Update
         * _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
         *
         *  this function is used to
         *  store resource
         *
         *
         * @param url
         * @param success
         * @param error
         * @param final
         * @private
         * @author Amr
         */
        update(url, success, error = null, final = null) {
            this.__save('PUT', success, error, final);
        },
        delete() {

        },
        get(end_point, params = {}, success, error = null, final = null) {
            this.request(
                end_point,
                {params: params},
                function (response) {

                }
            )
        }
    }
}