const api = require('../../util/axios');

const state = {
    companies: [],

};

// getters
const getters = {};

// actions
const actions = {
    getCompanies: ({commit}) => {
        return api.makeRequest(
            'GET',
            api.routes.company.get(),
            {},
            function (response) {
                if (response.data.status === 200)
                    commit('setCompanies', response.data.data.data);
                console.log(response.data.data.data);

            },
            function (xhr) {
                console.log('Error in fetch Companies')
            });
    },

};

// mutations
const mutations = {
    setCompanies: (state, companies) => {
        state.companies = companies;
    },
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};