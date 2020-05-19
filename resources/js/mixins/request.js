import axios from "../util/axios";
import Constants from "../util/constants";
import {mapActions, mapState} from "vuex";

export default {
    computed: {
        ...mapState({
            countries: state => state.setting.countries,
        }),
    },
    data() {
        return {
            header: {}
        }
    },
    methods: {
        ...mapActions('loader', [
            'showLoader',
            'hideLoader',
        ]),
        request: function (end_point, data = {}, success_callback = undefined, error_callback = undefined, finally_callback = undefined, is_loader_displayed = true) {
            let _this = this;
            success_callback = success_callback || _this.onSuccess;
            error_callback = error_callback || _this.onError;
            _this.showLoader();
            let method = end_point.method.toLowerCase();
            let header = this.getRequestHeader();
            let url = end_point.url;
            console.log('datata', data)
            return axios[method](end_point.url, data, header).then(function (response) {
                _this.hideLoader();
                switch (response.data.status) {
                    case 1 :
                        return success_callback(response); // success handler
                    case Constants.SUCCESS_RESPONSE:
                        return success_callback(response); // success handler
                    case Constants.ERROR_RESPONSE :
                        return error_callback(response); // error handler
                }
            }).catch(error_callback).finally(finally_callback || this.onFinally);
        },
        onSuccess: function (response) {
            // called if success callback not exists
        },
        onError(xhr) {
            // called if error callback not exists

        },
        onFinally(data) {
            //called if finally callback not exists
            this.hideLoader();
        },
        getRequestHeader() {
            let _this = this;
            return {
                headers: _this.header
            }
        },

        downloadFile(end_point, fileName = 'File', data = {}, responseType = 'arraybuffer', success = null, error_response = null, complete = null) {
            let url = end_point.url;
            let method = end_point.method;
            let params = data.params;
            return axios.request({
                url,
                method,
                responseType,
                data,
                params
            }).then(({data}) => {
                if (success) {
                    success(data)
                    return;
                }
                const downloadUrl = window.URL.createObjectURL(new Blob([data]));

                const link = document.createElement('a');

                link.href = downloadUrl;

                link.setAttribute('download', fileName); //any other extension

                document.body.appendChild(link);

                link.click();

                link.remove();

            }).catch(error_response).finally(complete);
        }
    }
}