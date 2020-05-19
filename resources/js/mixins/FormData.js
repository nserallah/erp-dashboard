/**
 * this module composes all form data
 * operations
 * @author Amr
 */
export default {
    methods: {
        /**
         * this function is used to convert json to
         * form data
         *
         * @param item
         * @return {FormData}
         * @author Amr
         */
        jsonToForm(item) {
            console.log('item', item)
            let formData = new FormData();
            for (let key in item) {
                if (item.hasOwnProperty(key)) {
                    formData.append(key, item[key]);
                }
            }
            return formData;
        },
        /**
         * this function is used to convert
         * the given Form data to json
         *
         * @param formData
         * @return {FormData}
         * @author Amr
         */
        formToJson(formData) {
            let object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });
            return object;
        }
    }
}