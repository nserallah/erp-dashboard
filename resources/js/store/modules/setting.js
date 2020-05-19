const api = require('../../util/axios');

const state = {
    languages: [],
    system_languages: [],
    default_language: {},
    current_language: 'en',
    constants: [],
    currencies: [],
    cities: [],
    countries: [],
    categories: [],
    countriesTree: []
};

// getters
const getters = {
    getLanguages: (state) => {
        return state.languages;
    },
    filterConstantsByKey: (state, params) => {
        console.log('state.constants', state.constants);
        return state.constants;
    },
    getCities: (state, params) => {
        return state.cities;
    },
    getCountries: (state) => {
        return state.countries;
    },
    getCategories: (state) => {
        return state.categories;
    },
    getCurrencies: (state) => {
        return state.currencies;
    }
};
import languages from '../../lang/languages'
// actions
const actions = {
    loadSystemLanguages : ({commit}) => {
        commit('setSystemLanguages', languages );
    },
    getLanguages: ({commit}) => {
        let self = this;
        return api.makeRequest(
            'GET',
            api.routes.fetchLanguages(),
            {},
            function (response) {
                if (response.data.status === 200) {
                    commit('setLanguages', response.data.data);
                    let language = response.data.data.filter(function (object) {
                        return object.is_default;
                    });
                    if (language.length > 0)
                        commit('setDefaultLanguage', language[0]);
                }
            },
            function (xhr) {
                console.log('Error in fetch languages')
            });
    },
    getConstants({commit}) {
        return api.makeRequest(
            'GET',
            api.routes.fetchConstants(),
            {
                params: {
                    per_page: 10000,
                    default: true,
                    is_parent: 1
                }
            },
            function (response) {
                if (response.data.status === 200)
                    commit('setConstants', response.data.data.data);
            },
            function (xhr) {
                console.log('Error in fetch Constants')
            });
    },
    getCategories({commit}) {
        return api.makeRequest(
            'GET',
            api.routes.fetchCategories(),
            {
                params: {
                    default: true,
                    is_parent: 1
                }
            },
            function (response) {
                if (response.data.status === 200)
                    commit('setCategories', response.data.data);
            },
            function (xhr) {
                console.log('Error in fetch Constants')
            });
    },
    getCurrencies: ({commit}) => {
        return api.makeRequest(
            'GET',
            api.routes.fetchCurrencies(),
            {
                params: {
                    per_page: 100,
                    is_parent: 1
                }
            },
            function (response) {
                if (response.data.status === 200)
                    commit('setCurrencies', response.data.data);
            },
            function (xhr) {
                console.log('Error in fetch Constants')
            });
    },
    getCountries: ({commit}) => {
        return api.makeRequest(
            'GET',
            api.routes.settings.countries.fetch(),
            {
                params: {
                    per_page: 300,
                    is_parent: 1
                }
            },
            function (response) {
                if (response.data.status === 200)
                    commit('setCountries', response.data.data.data);

            },
            function (xhr) {
                console.log('Error in fetch Constants')
            });
    },
    fetchCities: ({commit}, param = null) => {
        return api.makeRequest(
            'GET',
            api.routes.settings.cities.fetch(),
            {
                params: {
                    per_page: 100,
                    is_parent: 1,
                    country_id: param
                }
            },
            function (response) {
                if (response.data.status === 200) {
                    commit('setCities', response.data.data.data);
                }
            },
            function (xhr) {
                console.log('Error in fetch Constants')
            });
    },

};

// mutations
const mutations = {
    setSystemLanguages: (state, languages) => {
        state.system_languages = languages;
    },
    setLanguages: (state, languages) => {
        state.languages = languages;
    },
    setDefaultLanguage: (state, language) => {
        state.default_language = language;
    },
    setConstants: (state, constants) => {
        state.constants = constants;
    },
    setCurrencies: (state, currencies) => {
        state.currencies = currencies;
    },
    setCountries: (state, countries) => {
        state.countries = countries;
    },
    setCities: (state, cities) => {
        state.cities = cities;
    },
    setCategories: (state, categories) => {
        state.categories = categories;
    },
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};