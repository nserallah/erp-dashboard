const state = {
    is_loading: false,
};

// getters
const getters = {};

// actions
const actions = {
    showLoader: ({commit}) => {
        return commit('setLoader', true); // show loader
    },
    hideLoader: ({commit}) => {
        return commit('setLoader', false); // hide loader
    },
};

// mutations
const mutations = {
    setLoader: (state, is_loading) => {
        state.is_loading = is_loading;
    },
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};