/**
 * this module composes all encryption
 * operations
 * @author Amr
 */
export default {
    methods: {
        /**
         * encrypt the passed data
         *
         * @param data
         * @return {string}
         * @author Amr
         */
        encryptBase64(data) {
            return btoa(unescape(encodeURIComponent(JSON.stringify(data))))
        },
        /**
         * decrypt the Base 64 hash
         * @param data
         * @return {string|Array}
         */
        decryptBase64(data) {
            try {
                return JSON.parse(atob(data))
            } catch (e) {
                return [];
            }
        },

    }
}