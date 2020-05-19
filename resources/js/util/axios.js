import router from '@/router'
import i18n from "@/lang/lang";
import * as axios from "axios";

export const API_URL = '/api/';

const SUPER_URI = 'super';
const SETTINGS_URI = 'settings';
const CONSTANTS_URI = 'constants';
const CURRENCY_URI = 'currencies';
const SUBSCRIPTION_URI = 'subscription';
const COMPANIES_URI = 'companies';
const CODE = 'code';
const ACCOUNT = 'accounts'
const TEMP_ACCOUNT = 'temp-accounts'
export const SUPER_ADMIN_LOGIN_URL = API_URL + SUPER_URI + '/login';

/**
 * this function is used to create paramQuery
 *
 * @param param
 * @return {string}
 * @author Amr
 */
const getParam = (param = undefined) => {
    let queryParam = '';
    if (param != undefined && typeof param == 'object') {
        for (let name in param) {
            queryParam += `${name}=${param[name]}&`
        }
        queryParam = queryParam.substring(0, queryParam.length - 1);
        queryParam = '?' + queryParam
    }
    return queryParam;
    return API_URL + CONSTANTS_URI + '' + queryParam;
}
export const routes = {
    upload: {
        file: () => {
            return API_URL + 'upload/file'
        }
    },
    payment: {
        pay: () => {
            return API_URL + 'payment/pay'
        }
    },
    login: function () {
        return API_URL + SUPER_URI + '/login';
    },
    logout: function () {
        return API_URL + SUPER_URI + '/logout';
    },
    fetchLanguages: function () {
        return API_URL + SETTINGS_URI + '/language/fetch';
    },
    fetchConstants: function () {
        return API_URL + CONSTANTS_URI;
        // return API_URL + CONSTANTS_URI + '/search';
    },
    fetchCategories: function () {
        return API_URL + 'company/category/get';
    },
    fetchCurrencies: function () {
        return API_URL + SETTINGS_URI + '/' + CURRENCY_URI + '/fetch';
    },
    storePlan: function () {
        return API_URL + SUBSCRIPTION_URI + '/plan/store';
    },
    updatePlan: function (id) {
        return API_URL + SUBSCRIPTION_URI + '/plan/' + id + '/update';
    },
    changePlanStatus: function (id) {
        return API_URL + SUBSCRIPTION_URI + '/plan/' + id + '/active';
    },
    changeOfferStatus: function (plan_id, offer_id) {
        return API_URL + SUBSCRIPTION_URI + '/plan/' + plan_id + '/offer/' + offer_id + '/active';
    },
    fetchPlans: function () {
        return API_URL + SUBSCRIPTION_URI + '/plan/fetch';
    },
    fetchPlanById: function (id) {
        return API_URL + SUBSCRIPTION_URI + '/plan/' + id + '/fetch';
    },
    findOffer: function (id) {
        return API_URL + SUBSCRIPTION_URI + '/plan/offer/' + id + '/find';
    },
    storeOffer: function () {
        return API_URL + SUBSCRIPTION_URI + '/plan/offer/store';
    },
    updateOffer: function (id) {
        return API_URL + SUBSCRIPTION_URI + '/plan/offer/' + id + '/update';
    },
    fetchOffer: function () {
        return API_URL + SUBSCRIPTION_URI + '/plan/offer/fetch';
    },
    settings: {
        countries: {
            store: function () {
                return API_URL + SETTINGS_URI + '/countries/store'
            },
            fetch: function () {
                return API_URL + SETTINGS_URI + '/countries/fetch'
            },
            activate: function (id) {
                return API_URL + SETTINGS_URI + '/countries/' + id + '/active'
            },
            find: function (id) {
                return API_URL + SETTINGS_URI + '/countries/' + id + '/find'
            },
            update: function (id) {
                return API_URL + SETTINGS_URI + '/countries/' + id + '/update'
            },
            delete: function (id) {
                return API_URL + SETTINGS_URI + '/countries/' + id + '/delete'
            },
        },
        cities: {
            store: function () {
                return API_URL + SETTINGS_URI + '/cities/store'
            },
            fetch: function () {
                return API_URL + SETTINGS_URI + '/cities/fetch'
            },
            activate: function (id) {
                return API_URL + SETTINGS_URI + '/cities/' + id + '/active'
            },
            find: function (id) {
                return API_URL + SETTINGS_URI + '/cities/' + id + '/find'
            },
            update: function (id) {
                return API_URL + SETTINGS_URI + '/cities/' + id + '/update'
            },
            delete: function (id) {
                return API_URL + SETTINGS_URI + '/cities/' + id + '/delete'
            },
        }

    },
    items: {
        active: () => {
            return API_URL + 'account-item/active'
        }
    },
    constants: {
        get: (param = undefined) => {
            let queryParam = getParam(param);
            return API_URL + CONSTANTS_URI + '' + queryParam;
        },
        store: () => API_URL + CONSTANTS_URI,
        delete: () => API_URL + CONSTANTS_URI,
        search: (param = undefined) => {
            let queryParam = getParam(param);
            return API_URL + CONSTANTS_URI + '/search' + queryParam;
        },
        update: function (id) {
            return API_URL + CONSTANTS_URI + '/' + id;
        },

    },
    company: {
        register: () => API_URL + COMPANIES_URI,
        checkToken: () => API_URL + COMPANIES_URI + '/check-token',
        checkMobile: () => API_URL + COMPANIES_URI + '/check-mobile',
        get: (param = undefined) => {
            let queryParam = getParam(param);
            return API_URL + COMPANIES_URI + '' + queryParam;
        },
    },
    accessCode: {
        check: () => API_URL + CODE + '/check',
        create: () => API_URL + CODE
    },
    account: {
        create: () => API_URL + ACCOUNT,
    },
    tempAccount: {
        get: () => API_URL + TEMP_ACCOUNT
    }
    // storeOffer: function (plan_id) {
    //     return API_URL + SUBSCRIPTION_URI + '/plan/' + plan_id + '/offer/store';
    // },
    // updateOffer: function (plan_id, offer_id) {
    //     return API_URL + SUBSCRIPTION_URI + '/plan/' + plan_id + '/plan/offer/' + offer_id + '/update';
    // },
    //
    // fetchOfferById: function (id) {
    //     return API_URL + SUBSCRIPTION_URI + '/plan/' + id + '/fetch';
    // }
}

// instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// instance.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector(
//     'meta[name="csrf-token"]'
// ).content;

// axios.interceptors.request.use(config => {
//     if (localStorage.getItem("userInfo")) {
//         let userInfo = JSON.parse(localStorage.getItem("userInfo"));
//         config.headers = Object.assign({
//             Authorization: `${userInfo.token_type} ${userInfo.access_token}`,
//         }, config.headers);
//     }
// })

const getHeader = () => {
    let userInfo = localStorage.getItem('userInfo');                                                             // get user's Info form the local storage if there is any @author Amr
    if (userInfo == null) {                                                                                             // if there is no user's info return the config without any updates @author Amr
        return null;
    }
    userInfo = JSON.parse(userInfo);                                                                                  // parse the json object to get the access_token and token_type @author Amr
    let header = {
        "Authorization": `${userInfo.token_type} ${userInfo.access_token}`,
        "lang": i18n.locale
    }
    return header;

}

axios.interceptors.request.use(function (config) {

        let userInfo = localStorage.getItem('userInfo');                                                             // get user's Info form the local storage if there is any @author Amr
        if (userInfo == null) {                                                                                             // if there is no user's info return the config without any updates @author Amr
            return config;
        }
        if (config.headers.common.Authorization == undefined) {
            userInfo = JSON.parse(userInfo);                                                                                  // parse the json object to get the access_token and token_type @author Amr
            config.headers.common.Authorization = `${userInfo.token_type} ${userInfo.access_token}`;
            config.headers.common['Authorization'] = `${userInfo.token_type} ${userInfo.access_token}`;
            config.headers.Authorization = `${userInfo.token_type} ${userInfo.access_token}`;
        }
        // appeand the token with request's header @author Amr
        config.headers.lang = i18n.locale;

        return config;
    }
    // ,
    // error => Promise.reject(error)
);

axios.interceptors.response.use(
    response => {
        const {status, message} = response.data;
        if (response.data.status === 'error') {

            switch (response.data.error_code) {
                case 102 :
                    break;
                case 106 :
                    window.location.href = '/' + SUPER_URI;
                    break;
                default :
                    break;
            }
            return response;
        }
        return response;
    },
    error => {
        console.log('error', error)
        const {status} = error.response;
        console.error('error.response', error.response);
        // console.error("response", status)
        // Show the user a 500 error
        if (status >= 500) {
            Brilliant.$emit('error', error.response.data.message)
        }

        // Handle Session Timeouts
        if (status === 401) {
            window.location.href = Brilliant.config.base
        }

        // Handle Forbidden
        if (status === 403) {
            router.push({name: '403'})
        }

        // Handle Token Timeouts
        if (status === 419) {
            Brilliant.$emit('token-expired')
        }

        return Promise.reject(error)
    }
)

const instance = axios;
// instance.defaults.headers.common = getHeader()
export default instance

export const makeRequest = (method, url, data, then_function, catch_function) => {
    switch (method) {
        case 'POST':
            return axios.post(url, data).then(then_function).catch(catch_function);
        case 'PUT':
            return axios.put(url, data).then(then_function).catch(catch_function);
        case 'PATCH':
            return axios.patch(url, data).then(then_function).catch(catch_function);
        case 'DELETE':
            return axios.delete(url, data).then(then_function).catch(catch_function);
        default :
            return axios.get(url, data).then(then_function).catch(catch_function);
    }
};

export const getAPI = (url, data) => {
    return axios.get(url, data);
};
export const postAPI = (url, data) => {
    return axios.post(url, data);
};
export const putAPI = (url, data) => {
    return axios.put(url, data);
};
export const patchAPI = (url, data) => {
    return axios.patch(url, data);
};