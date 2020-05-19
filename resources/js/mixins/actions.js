import request from './request'
import crud from './crud'
import actionsConfig from "../util/actions";

import i18n from '../lang/lang'

export default {
    mixins: [request, crud],
    data() {
        return {
            editAction: {},
            deleteAction: {}
        }
    },
    computed: {},
    methods: {
        setAction(slug, label, icon, btnClass, callback, route = {}, confirmation = true) {
            return {
                slug: slug,
                label: label,
                icon: icon,
                class: btnClass,
                route: {},
                callback: callback,
                confirmation: confirmation,
            }
        },
        getAction: (slug, object) => {
            let _this = this;
            switch (slug) {
                case 'transfer_info' :
                    return {
                        object: object,
                        slug: 'transfer',
                        label: 'transfer',
                        icon: 'i-Eraser-2 fa fa-user-edit',
                        class: 'text-warning',
                        route: {},
                        callback: function (event) {
                            event.context.$router.push({
                                name: object.route,
                                params: {
                                    id: event.row.id
                                }
                            });
                            return true;
                        },
                        confirmation: false,
                    };
                case 'transfer' :
                    return {
                        object: object,
                        slug: 'transfer',
                        label: 'transfer',
                        icon: 'i-Eraser-2 fa fa-user-edit',
                        class: 'text-warning',
                        route: {},
                        callback: function (event) {
                            let redirect = actionsConfig[event.action.slug][event.resource].redirect;
                            let params = {};
                            Object.keys(redirect.params).forEach(function (item) {
                                params[redirect.params[item]] = event.row[redirect.params[item]];
                            });
                            event.context.$router.push({
                                name: redirect.name,
                                params: params
                            });
                            return true;
                        },
                        confirmation: false,
                    };
                case 'show' :
                    return {
                        object: object,
                        slug: 'show',
                        label: 'show',
                        icon: 'i-Eraser-2 fa fa-info',
                        class: 'text-info',
                        route: {},
                        callback: function (event) {
                            if (object.route) {
                                if (!object.params)
                                    object.params = {id: event.row.id};
                                event.context.$router.push({
                                    name: object.route,
                                    params: object.params
                                });
                                return true;
                            }
                            let redirect = actionsConfig[event.action.slug][event.resource].redirect;
                            let params = {};
                            Object.keys(redirect.params).forEach(function (item) {
                                params[redirect.params[item]] = event.row[redirect.params[item]];
                            });
                            event.context.$router.push({
                                name: redirect.name,
                                params: params
                            });
                            return true;
                        },
                        confirmation: false,
                    };
                case 'redirect' :
                    return {
                        object: object,
                        slug: 'show',
                        label: 'show',
                        icon: 'i-Eraser-2 fa fa-dollar-sign',
                        class: 'text-info',
                        route: {},
                        callback: function (event) {
                            if (object.route) {
                                let params = {};
                                Object.keys(object.params).forEach(function (item) {
                                    params[item] = event.row[object.params[item]];
                                });
                                // if (object.params)
                                //     object.params = {id: event.row.id};
                                console.log({
                                    name: object.route,
                                    params: params
                                })
                                event.context.$router.push({
                                    name: object.route,
                                    params: params
                                });
                                return true;
                            }
                            // let redirect = actionsConfig[event.action.slug][event.resource].redirect;
                            // let params = {};
                            // Object.keys(redirect.params).forEach(function (item) {
                            //     params[redirect.params[item]] = event.row[redirect.params[item]];
                            // });
                            // event.context.$router.push({
                            //     name: redirect.name,
                            //     params: params
                            // });
                            // return true;
                        },
                        confirmation: false,
                    };
                case 'create' :
                    return {
                        object: object,
                        slug: 'create',
                        label: 'Create',
                        icon: 'i-Eraser-2 fa fa-plus',
                        class: 'text-success',
                        route: {},
                        callback: function (event) {
                            console.log('redirect', actionsConfig[event.action.slug][event.resource])
                            //
                            let redirect = actionsConfig[event.action.slug][event.resource].redirect;
                            let params = {};
                            Object.keys(redirect.params).forEach(function (item) {
                                params[redirect.params[item]] = event.row[redirect.params[item]];
                            });
                            event.context.$router.push({
                                name: redirect.name,
                                params: params
                            });
                            return true;
                        },
                        confirmation: false,
                    };
                case 'edit' :
                    return {
                        object: object,
                        slug: 'edit',
                        label: 'Edit',
                        icon: 'i-Eraser-2 fa fa-edit',
                        class: 'text-success',
                        route: {},
                        callback: function (event) {
                            if (actionsConfig[event.action.slug][event.resource])
                                var redirect = actionsConfig[event.action.slug][event.resource].redirect;
                            if (redirect) {
                                let params = {};
                                Object.keys(redirect.params).forEach(function (item) {
                                    params[redirect.params[item]] = event.row[redirect.params[item]];
                                });
                                event.context.$router.push({
                                    name: redirect.name,
                                    params: params
                                });
                            } else if (event.action.object.route) {
                                let params = {};
                                Object.keys(event.action.object.params).forEach(function (item) {
                                    params[item] = event.row[event.action.object.params[item]];
                                });
                                console.log(event.action.object.params, {
                                    name: event.action.object.route,
                                    params: params
                                });
                                event.context.$router.push({
                                    name: event.action.object.route,
                                    params: params
                                });
                            }
                            return true;
                        },
                        confirmation: false,
                    };
                case 'delete' :
                    return {
                        object: object,
                        slug: 'delete',
                        label: 'Delete',
                        icon: 'i-Close-Window  fa fa-trash',
                        class: 'text-danger',
                        route: {},
                        callback: function (event) {
                            var end_point = {};
                            let context = event.context
                            if (object.route) {
                                var params = {};
                                if (object.params){
                                    Object.keys(object.params).forEach(function (item) {
                                        params[item] = event.row[event.action.object[item]];
                                    });
                                }
                                object.params = {id: event.row.id, country_id: event.row.id, city_id: event.row.id};
                                end_point = context.route(object.route, {...params, ...object.params});
                            } else {
                                let params = [];
                                params[event.resource + '_id'] = event.row.id;
                                end_point = context.route(`${event.resource}.delete`, object.params);
                            }
                            console.log('end_point', end_point)
                            context.$swal({
                                title: i18n.t("Are you sure?"),
                                text: i18n.t("You won't be able to revert this!"),
                                type: "warning",
                                showCancelButton: true,
                                confirmButtonText: i18n.t("Delete"),
                                cancelButtonText: i18n.t("Cancel"),
                            }).then(result => {
                                if (result.value) {

                                    context.request(end_point, {},
                                        function ({data}) {
                                            context.$swal("", data ? data.message : '', "success");
                                            context.$root.$emit('table-reload', event);
                                        },
                                        function ({data}) {
                                            context.$swal("", data ? data.message : '', "error");
                                        });
                                }
                            });
                        },
                        confirmation: true,
                    };
                case 'status' :
                    return {
                        object: object,
                        slug: 'status',
                        vuex: {
                            module: 'setting',
                            getter: 'filterConstantsByKey',
                            params: {key: object.key},
                            filter: function (options) {
                                return _.filter(options, function (option) {
                                    return (option.key === object.key);
                                });
                            },
                        },
                        nested_actions: [],
                        callback: function (event) {
                            let context = event.context;
                            context.$swal({
                                title: i18n.t("Are you sure?"),
                                text: "",
                                type: "warning",
                                showCancelButton: true,
                                confirmButtonText: "OK"
                            }).then(result => {
                                if (result.value) {
                                    let endPoint = context.route(event.action.object.route,
                                        {id: event.row.id, slug: event.nestedAction.slug});
                                    context.request(
                                        endPoint,
                                        {},
                                        function ({data}) {
                                            context.$swal("", data.message, "success");
                                            context.$root.$emit('table-reload', event);
                                        },
                                        function ({data}) {
                                            context.$swal("", data.message, "error");
                                        }
                                    );
                                }
                            });
                        },
                    }
                case 'pay-off' :
                    return {
                        object: object,
                        slug: 'pay-off',
                        nested_actions: [
                            {
                                icon: "la la-check-square-o",
                                slug: "total",
                                class: "success",
                                label: "Total Payment",
                            },
                            {
                                icon: "la la-check-square-o",
                                slug: "partial",
                                class: "success",
                                label: "Partial Payment",
                            }
                        ],
                        callback: function (event) {
                            let context = event.context;
                            let params = {
                                payment_id: event.row.id,
                                id: event.row.installment_id,
                                type: event.nestedAction.slug ? event.nestedAction.slug : 'total'
                            };
                            context.$router.push({name: event.action.object.route, params: params});
                            return true;
                        },
                    };
            }
        }
    }
}