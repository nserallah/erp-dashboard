const api = require('../../util/axios');

const state = {
    activeItems: [],
    active_chart: 0,

};

// getters
const getters = {
    getActiveAccountingItems: (state) => {
        return state.activeItems;
    },
    getActiveChart: (state) => {
        return state.active_chart;
    },
};

// actions
const actions = {
    getActiveAccountingItems({commit}) {
        // alert('getActiveAccountingItems');
        return api.makeRequest(
            'GET',
            api.routes.items.active(),
            {
                // params: {
                //     leaf_children: true
                // }
            },
            function (response) {
                if (response.data.status === 200) {
                    commit('setActiveAccountingItems', response.data.data.tree);
                    commit('setActiveChart', response.data.data.chart_id);
                }

            },
            function (xhr) {
                console.log('Error in  setActiveAccountingItems')
            });
    },
};

// mutations
const mutations = {
    setActiveAccountingItems: (state, activeItems) => {
        state.activeItems = activeItems;
    },
    setActiveChart: (state, active_chart) => {
        state.active_chart = active_chart;
    },
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};