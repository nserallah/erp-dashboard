let methods = {
    route($routeName, $params = {}) {
        let self = this;
        let currentChild = self.endPoints();  // get route function from end points object
        $routeName.split('.').forEach(function ($uri) {
            if (currentChild[$uri] !== undefined)
                currentChild = currentChild[$uri];  // set child node ( if current node isn't undefined )
        });
        if (currentChild instanceof Function) // check if last node is a function
            return currentChild($params); // execute node function

        return {
            url: self.api_base_link,
            method: 'get',
        };
    },
    endPoints() {
        let self = this;
        return {
            file: {
                upload: 'upload'
            },
            subscription: {
                plan: {
                    offer: {
                        fetch: ($params) => {
                            return self.prepareEndPoint('get', $params, self.subscription_uri, self.plans_uri, self.offers_uri, self.crud.get)
                        },
                    },
                    fetch: ($params) => {
                        return self.prepareEndPoint('get', $params, self.subscription_uri, self.plans_uri, self.crud.get)
                    },
                    get: ($params) => {
                        return self.prepareEndPoint('get', $params, self.subscription_uri, self.plans_uri, 'get')
                    },
                    delete: ($params) => {
                        return self.prepareEndPoint('delete', $params, self.subscription_uri, self.plans_uri, 'id', self.crud.delete)
                    }
                }
            },
            settings: {
                countries: {
                    store: ($params) => {
                        return self.prepareEndPoint('post', $params, self.settings_uri, self.countries_uri, self.crud.store)
                    },
                    fetch: ($params) => {
                        return self.prepareEndPoint('get', $params, self.settings_uri, self.countries_uri, self.crud.get)
                    },
                    activate: ($params) => {
                        return self.prepareEndPoint('patch', $params, self.settings_uri, self.countries_uri, self.crud.activate)
                    },
                    find: ($params) => {
                        return self.prepareEndPoint('get', $params, self.settings_uri, self.countries_uri, 'country_id', self.crud.find)
                    },
                    update: ($params) => {
                        return self.prepareEndPoint('put', $params, self.settings_uri, self.countries_uri, 'country_id', self.crud.update)
                    },
                    delete: ($params) => {
                        return self.prepareEndPoint('delete', $params, self.settings_uri, self.countries_uri, 'country_id', self.crud.delete)
                    },
                    all: ($params) => {
                        return self.prepareEndPoint('get', $params, self.settings_uri, self.countries_uri)
                    },
                    cities: ($params) => {
                        return self.prepareEndPoint('get', $params, self.settings_uri, self.countries_uri, $params, 'cities')
                    }
                },
                cities: {
                    store: ($params) => {
                        return self.prepareEndPoint('post', $params, self.settings_uri, self.cities_uri, self.crud.store)
                    },
                    fetch: ($params) => {
                        return self.prepareEndPoint('get', $params, self.settings_uri, self.cities_uri, self.crud.get)
                    },
                    activate: ($params) => {
                        return self.prepareEndPoint('patch', $params, self.settings_uri, self.cities_uri, self.crud.activate)
                    },
                    find: ($params) => {
                        return self.prepareEndPoint('get', $params, self.settings_uri, self.cities_uri, 'city_id', self.crud.find)
                    },
                    update: ($params) => {
                        return self.prepareEndPoint('put', $params, self.settings_uri, self.cities_uri, 'city_id', self.crud.update)
                    },
                    delete: ($params) => {
                        return self.prepareEndPoint('delete', $params, self.settings_uri, self.cities_uri, 'city_id', self.crud.delete)
                    },
                    all: ($params) => {
                        return self.prepareEndPoint('get', $params, self.settings_uri, self.cities_uri)
                    },
                },
                constants: {
                    store: ($params) => {
                        return self.prepareEndPoint('post', $params, self.constants_uri)
                    },
                    fetch: ($params) => {
                        return self.prepareEndPoint('get', $params, self.constants_uri)
                    },
                    search: ($params) => {
                        return self.prepareEndPoint('get', $params, self.constants_uri, self.crud.search)
                    },
                    activate: ($params) => {
                        return self.prepareEndPoint('patch', $params, self.settings_uri, self.constants_uri, self.crud.activate)
                    },
                    find: ($params) => {
                        return self.prepareEndPoint('get', $params, self.settings_uri, self.constants_uri, 'constant_id', self.crud.find)
                    },
                    update: ($params) => {
                        return self.prepareEndPoint('put', $params, self.settings_uri, self.constants_uri, 'constant_id', self.crud.update)
                    },
                    delete: ($params) => {
                        return self.prepareEndPoint('delete', $params, self.settings_uri, self.constants_uri, 'constant_id', self.crud.delete)
                    },
                }
            },
            company: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, 'companies')
                },
                update: ($params) => {
                    return self.prepareEndPoint('put', $params, 'company', 'company_id')
                },
                uploadImage: ($params) => {
                    return self.prepareEndPoint('post', {}, 'company', $params, 'image')
                },
            },
            branch: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, 'branch', 'get')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, 'branch', 'branch_id', self.crud.find)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.company_uri, 'branch', 'create')
                },
                update: ($params) => {
                    return self.prepareEndPoint('put', $params, self.company_uri, 'branch', 'branch_id', self.crud.update)
                },
                activate: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.company_uri, 'branch', 'branch_id', self.crud.activate)
                },
                delete: ($params) => {
                    return self.prepareEndPoint('delete', $params, self.company_uri, 'branch', 'branch_id', self.crud.delete)
                },
            },
            inventory: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, 'inventory', 'get')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, 'inventory', 'inventory_id', self.crud.find)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.company_uri, 'inventory', 'create')
                },
                update: ($params) => {
                    return self.prepareEndPoint('put', $params, self.company_uri, 'inventory', 'inventory_id', self.crud.update)
                },
                activate: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.company_uri, 'inventory', 'inventory_id', self.crud.activate)
                },
                delete: ($params) => {
                    return self.prepareEndPoint('delete', $params, self.company_uri, 'inventory', 'inventory_id', self.crud.delete)
                },
            },
            vendor: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.supplier_uri, 'vendor', 'get')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.supplier_uri, 'vendor', 'vendor_id', self.crud.find)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.supplier_uri, 'vendor', 'create')
                },
                update: ($params) => {
                    return self.prepareEndPoint('put', $params, self.supplier_uri, 'vendor', 'vendor_id', self.crud.update)
                },
                activate: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.supplier_uri, 'vendor', 'vendor_id', self.crud.activate)
                },
                delete: ($params) => {
                    return self.prepareEndPoint('delete', $params, self.supplier_uri, 'vendor', 'vendor_id', self.crud.delete)
                },
                csv: (param) => {
                    return self.prepareEndPoint('get', param, self.supplier_uri, 'vendors', 'excel')
                },
                xlsx: (param) => {
                    return self.prepareEndPoint('get', param, self.supplier_uri, 'vendors', 'excel')
                },
                pdf: (param) => {
                    return self.prepareEndPoint('get', param, self.supplier_uri, 'vendors', 'pdf')
                },
            },
            cheque: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.finance_uri, 'cheque', 'get')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.finance_uri, 'cheque', 'cheque_id', self.crud.find)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.finance_uri, 'cheque', 'create')
                },
                update: ($params) => {
                    return self.prepareEndPoint('post', $params, self.finance_uri, 'cheque', 'cheque_id', self.crud.update)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.finance_uri, 'cheque', 'id', 'slug')
                },
                transfer: ($params) => {
                    return self.prepareEndPoint('post', $params, self.finance_uri, 'cheque', 'cheque_id', 'transfer')
                },
                transfer_list: ($params) => {
                    return self.prepareEndPoint('get', $params, self.finance_uri, 'cheque', 'transfers')
                },
                transfer_info: ($params) => {
                    return self.prepareEndPoint('get', {}, self.finance_uri, 'cheque', 'transfers', $params)
                },
                delete: ($params) => {
                    return self.prepareEndPoint('delete', $params, self.finance_uri, 'cheque', 'cheque_id', self.crud.delete)
                },
            },
            installment: {
                payment: {
                    fetch: ($params) => {
                        return self.prepareEndPoint('get', $params, self.finance_uri, 'installment', 'installment_id', 'payment', 'get')
                    },
                    find: ($params) => {
                        return self.prepareEndPoint('get', $params, self.finance_uri, 'installment', 'installment_id', 'payment', 'id', self.crud.find)
                    },
                    store: ($params) => {
                        return self.prepareEndPoint('post', $params, self.finance_uri, 'installment', 'installment_id', 'payment', 'create')
                    },
                    update: ($params) => {
                        return self.prepareEndPoint('post', $params, self.finance_uri, 'installment', 'installment_id', 'payment', 'id', self.crud.update)
                    },
                    status: ($params) => {
                        return self.prepareEndPoint('patch', $params, self.finance_uri, 'installment', 'installment_id', 'payment', 'id', 'slug')
                    },
                    payOff: ($params) => {
                        return self.prepareEndPoint('post', $params, self.finance_uri, 'installment', 'installment_id', 'payment', 'id', 'pay-off', 'type')
                    },
                },
                payOff: ($params) => {
                    return self.prepareEndPoint('post', $params, self.finance_uri, 'installment', 'installment_id', 'pay-off')
                },
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.finance_uri, 'installment', 'get')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.finance_uri, 'installment', 'id', self.crud.find)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.finance_uri, 'installment', 'create')
                },
                update: ($params) => {
                    return self.prepareEndPoint('post', $params, self.finance_uri, 'installment', 'id', self.crud.update)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.finance_uri, 'installment', 'id', 'slug')
                },

            },
            bankAccount: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.finance_uri, 'bankAccount', 'account_type', 'get')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.finance_uri, 'bankAccount', 'account_type', 'id', self.crud.find)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.finance_uri, 'bankAccount', 'account_type', 'create')
                },
                update: ($params) => {
                    return self.prepareEndPoint('put', $params, self.finance_uri, 'bankAccount', 'account_type', 'id', self.crud.update)
                },
                activate: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.finance_uri, 'bankAccount', 'account_type', 'id', self.crud.activate)
                },
                default_acc: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.finance_uri, 'bankAccount', 'account_type', 'id', 'default')
                },
                delete: ($params) => {
                    return self.prepareEndPoint('delete', $params, self.finance_uri, 'bankAccount', 'account_type', 'id', self.crud.delete)
                },
            },
            category: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, self.category_uri, 'get')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, self.category_uri, 'category_id', self.crud.find)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.company_uri, self.category_uri, 'create')
                },
                update: ($params) => {
                    return self.prepareEndPoint('put', $params, self.company_uri, self.category_uri, 'category_id', self.crud.update)
                },
                activate: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.company_uri, self.category_uri, 'category_id', self.crud.activate)
                },
                delete: ($params) => {
                    return self.prepareEndPoint('delete', $params, self.company_uri, self.category_uri, 'category_id', self.crud.delete)
                },
            },
            tax: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, self.tax_uri, 'get')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, self.tax_uri, 'tax_id', self.crud.find)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.company_uri, self.tax_uri, 'create')
                },
                update: ($params) => {
                    return self.prepareEndPoint('put', $params, self.company_uri, self.tax_uri, 'tax_id', self.crud.update)
                },
                activate: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.company_uri, self.tax_uri, 'tax_id', self.crud.activate)
                },
                delete: ($params) => {
                    return self.prepareEndPoint('delete', $params, self.company_uri, self.tax_uri, 'tax_id', self.crud.delete)
                },
            },
            brand: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, self.brands_uri, 'get')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, self.brands_uri, 'brand_id', self.crud.find)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.company_uri, self.brands_uri, 'create')
                },
                update: ($params) => {
                    return self.prepareEndPoint('put', $params, self.company_uri, self.brands_uri, 'brand_id', self.crud.update)
                },
                activate: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.company_uri, self.brands_uri, 'brand_id', self.crud.activate)
                },
                delete: ($params) => {
                    return self.prepareEndPoint('delete', $params, self.company_uri, self.brands_uri, 'brand_id', self.crud.delete)
                },
            },
            unit: {
                fetch: ($params) => {
                    // console.log(self.prepareEndPoint('get', $params, self.company_uri, self.units_uri, 'get'),$params,'units');
                    // return self.prepareEndPoint('get', $params, self.company_uri, self.units_uri, 'get');
                    return {
                        method: 'get', // set method from end point object
                        url: '/api/company/unit/get'
                    }
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, self.units_uri, 'unit_id', self.crud.find)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.company_uri, self.units_uri, 'create')
                },
                update: ($params) => {
                    return self.prepareEndPoint('put', $params, self.company_uri, self.units_uri, 'unit_id', self.crud.update)
                },
                activate: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.company_uri, self.units_uri, 'unit_id', self.crud.activate)
                },
                delete: ($params) => {
                    return self.prepareEndPoint('delete', $params, self.company_uri, self.units_uri, 'unit_id', self.crud.delete)
                },
            },
            group: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, self.groups_uri, 'get')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, self.groups_uri, 'group_id', self.crud.find)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.company_uri, self.groups_uri, 'create')
                },
                update: ($params) => {
                    return self.prepareEndPoint('put', $params, self.company_uri, self.groups_uri, 'group_id', self.crud.update)
                },
                activate: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.company_uri, self.groups_uri, 'group_id', self.crud.activate)
                },
                delete: ($params) => {
                    return self.prepareEndPoint('delete', $params, self.company_uri, self.groups_uri, 'group_id', self.crud.delete)
                },
            },
            address: {
                users: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, self.addresses_uri, 'users', 'id')
                },
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, self.addresses_uri, 'get')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_uri, self.addresses_uri, 'address_id', self.crud.find)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.company_uri, self.addresses_uri, 'create')
                },
                update: ($params) => {
                    return self.prepareEndPoint('put', $params, self.company_uri, self.addresses_uri, 'address_id', self.crud.update)
                },
                activate: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.company_uri, self.addresses_uri, 'address_id', self.crud.activate)
                },
                delete: ($params) => {
                    return self.prepareEndPoint('delete', $params, self.company_uri, self.addresses_uri, 'address_id', self.crud.delete)
                },
                general: {
                    fetch: ($params) => {
                        return self.prepareEndPoint('get', $params, self.company_uri, self.addresses_general_uri, 'get')
                    },
                    find: ($params) => {
                        return self.prepareEndPoint('get', $params, self.company_uri, self.addresses_general_uri, 'address_id', self.crud.find)
                    },
                }
            },
            generaladdress: {
                delete: ($params) => {
                    return self.prepareEndPoint('delete', $params, self.company_uri, self.addresses_general_uri, 'id', self.crud.delete)
                },
            },
            constant: {
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.constants_uri)
                },
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.constants_uri)
                },
                search: ($params) => {
                    return self.prepareEndPoint('get', $params, self.constants_uri, self.crud.search)
                },
                activate: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.settings_uri, self.constants_uri, self.crud.activate)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.constants_uri, 'constant_id')
                },
                update: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.constants_uri, 'constant_id')
                },
                delete: ($params) => {
                    return self.prepareEndPoint('delete', $params, self.constants_uri, $params.id)
                },
            },

            companyBase: {
                login: ($params) => {
                    return self.prepareEndPoint('post', $params, 'login')
                },
                account: {
                    company: () => {
                        return self.prepareEndPoint('get', {}, 'account/company')

                    }
                },
                logout: () => {
                    return self.prepareEndPoint('get', {}, 'logout')
                }

            },
            account_config: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.account_config_uri)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.account_config_uri, $params)
                },
                tree: ($params) => {
                    return self.prepareEndPoint('get', {}, self.account_config_uri, $params, 'tree')
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.account_config_uri)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.account_config_uri, 'accountConfigId', 'status')
                },
                opened: ($params) => {
                    return self.prepareEndPoint('get', $params, self.account_config_uri, 'opened')
                },
            },
            account_item: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.account_item_uri)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.account_item_uri, 'category_id', self.crud.find)
                },

                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.account_item_uri)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.account_item_uri, 'parents')
                },
                update: ($params) => {
                    return self.prepareEndPoint('put', {}, self.account_item_uri, $params)
                },
                active: ($params) => {
                    return self.prepareEndPoint('get', $params, self.account_item_uri, 'active')
                },
            },
            banks: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.finance_uri, self.banks_uri)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.finance_uri, self.banks_uri, $params)
                },

                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.finance_uri, self.banks_uri)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.finance_uri, self.banks_uri, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('put', {}, self.finance_uri, self.banks_uri, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.finance_uri, self.banks_uri, 'status', 'banksId')
                },
            },
            stores: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.finance_uri, self.stores_uri)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.finance_uri, self.stores_uri, $params)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.finance_uri, self.stores_uri)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.finance_uri, self.stores_uri, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('put', {}, self.finance_uri, self.stores_uri, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.finance_uri, self.stores_uri, 'storeId', 'status')
                },
            },
            currencies: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, 'settings', self.currencies_uri, 'fetch')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.currencies_uri, $params)
                },

                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.currencies_uri)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.currencies_uri, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('put', {}, self.currencies_uri, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.currencies_uri, 'storeId', 'status')
                },
            },
            safe_transaction: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.safe_transaction)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.safe_transaction, $params)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.safe_transaction)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.safe_transaction, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('post', {}, self.safe_transaction, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.safe_transaction, 'id', 'status', 'slug')
                },
            },
            save_transaction: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.save_transaction)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.save_transaction, $params)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.save_transaction)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.save_transaction, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('post', {}, self.save_transaction, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.save_transaction, 'id', 'status', 'slug')
                },
                canceled: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.save_transaction, 'id', 'status', 'cancel')
                },
            },
            bank_transaction: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.bank_transaction)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.bank_transaction, $params)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.bank_transaction)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.safe_transaction, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('post', {}, self.bank_transaction, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.bank_transaction, 'id', 'status', 'slug')
                },
            },
            customers: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.customers_uri)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.customers_uri, $params)
                },
                store: {
                    personal: ($params) => {
                        return self.prepareEndPoint('post', {}, self.customers_uri)
                    },
                    contact: ($params) => {
                        return self.prepareEndPoint('post', {}, self.customers_uri, $params, 'contact')
                    },
                    financial: ($params) => {
                        return self.prepareEndPoint('post', {}, self.customers_uri, $params, 'financial')
                    },
                    address: ($params) => {
                        return self.prepareEndPoint('post', {}, self.customers_uri, $params, 'address')
                    },
                },
                csv: (param) => {
                    return self.prepareEndPoint('get', param, self.customers_uri, 'excel')
                },
                xlsx: (param) => {
                    return self.prepareEndPoint('get', param, self.customers_uri, 'excel')
                },
                pdf: (param) => {
                    return self.prepareEndPoint('get', param, self.customers_uri, 'pdf')
                },
                update: (id) => {
                    return self.prepareEndPoint('put', {}, self.customers_uri, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.customers_uri, 'customerId', 'status')
                },
            },
            company_bank_account: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.company_bank_account, 'get')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.safe_transaction, $params)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.safe_transaction)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.safe_transaction, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('post', {}, self.safe_transaction, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.safe_transaction, 'storeId', 'status')
                },
            },

            user_bank_account: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.user_bank_account, 'get')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.safe_transaction, $params)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.safe_transaction)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.safe_transaction, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('post', {}, self.safe_transaction, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.safe_transaction, 'storeId', 'status')
                },
            },
            purchase_request: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.purchase_requests)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.purchase_requests, $params)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.purchase_requests)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.purchase_requests, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('post', {}, self.purchase_requests, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.purchase_requests, 'id', 'status', 'slug')
                },
                users: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.purchase_requests, 'id', 'users')
                },
            },
            sale_requests: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.sales_requests)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.sales_requests, $params)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.sales_requests)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.sales_requests, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('post', {}, self.sales_requests, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.sales_requests, 'id', 'status', 'slug')
                },
            },
            sale_quotes: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.sale_quotes)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.sale_quotes, $params)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.sale_quotes)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.sale_quotes, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('post', {}, self.sale_quotes, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.sale_quotes, 'id', 'status', 'slug')
                },
            },
            purchase_quote: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.purchase_quote)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.purchase_quote, $params)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.purchase_quote)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.purchase_quote, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('post', {}, self.purchase_quote, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.purchase_quote, 'id', 'status', 'slug')
                },
            },
            purchase_quote_request: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.purchase_quote_request)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.purchase_quote_request, $params)
                },
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.purchase_quote_request)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.purchase_quote_request, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('post', {}, self.purchase_quote_request, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.purchase_quote_request, 'id', 'status', 'slug')
                },
            },
            shipping_request_sales: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.shipping_request_sales)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.shipping_request_sales, $params)
                },
                store: () => {
                    return self.prepareEndPoint('post', {}, self.shipping_request_sales)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.shipping_request_sales, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('post', {}, self.shipping_request_sales, id)
                },
                status: ($params) => {
                    return self.prepareEndPoint('patch', $params, self.shipping_request_sales, 'storeId', 'status')
                },
            },
            shipping_address: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.shipping_address)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.shipping_address, $params)
                },
                store: (type = '') => {
                    return self.prepareEndPoint('post', {}, self.shipping_address,type)
                },
                parents: ($params) => {
                    return self.prepareEndPoint('get', $params, self.shipping_address, 'parents')
                },
                update: (id) => {
                    return self.prepareEndPoint('post', {}, self.shipping_address, id)
                },
            },
            sale_order_items: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.sale_order_items)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.sale_order_items, $params)
                },
                store: () => {
                    return self.prepareEndPoint('post', {}, self.sale_order_items)
                },
                update: (id) => {
                    return self.prepareEndPoint('put', {}, self.sale_order_items, id)
                },
                "delete": (id) => {
                    return self.prepareEndPoint('delete', {}, self.sale_order_items, id)
                },
            },
            purchase_order_items: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.purchase_order_items)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.purchase_order_items, $params)
                },
                store: () => {
                    return self.prepareEndPoint('post', {}, self.purchase_order_items)
                },
                "delete": () => {
                    return self.prepareEndPoint('delete', {}, self.purchase_order_items, 'id')
                }
            },
            sale_quotes_items: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.sale_quotes_items)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.sale_quotes_items, $params)
                },
                store: () => {
                    return self.prepareEndPoint('post', {}, self.sale_quotes_items)
                },
                update: (id) => {
                    return self.prepareEndPoint('put', {}, self.sale_quotes_items, id)
                },
                "delete": (id) => {
                    return self.prepareEndPoint('delete', {}, self.sale_quotes_items, id)
                },
            },
            purchase_quote_items: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.purchase_quote_items, 'items')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.purchase_quote_items, 'items', $params)
                },
                store: () => {
                    return self.prepareEndPoint('post', {}, self.purchase_quote_items, 'items')
                },
                update: (id) => {
                    return self.prepareEndPoint('put', {}, self.purchase_quote_items, 'items', id)
                },
                "delete": (id) => {
                    return self.prepareEndPoint('delete', {}, self.purchase_quote_items, 'items', id)
                },
            },
            purchase_quote_request_items: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.purchase_quote_request, 'items')
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', {}, self.purchase_quote_request, 'items', $params)
                },
                store: () => {
                    return self.prepareEndPoint('post', {}, self.purchase_quote_request, 'items')
                },
                update: (id) => {
                    return self.prepareEndPoint('put', {}, self.purchase_quote_request, 'items', id)
                },
                "delete": (id) => {
                    return self.prepareEndPoint('delete', {}, self.purchase_quote_request, 'items', id)
                },
            },
            initial_fund: {
                store: ($params) => {
                    return self.prepareEndPoint('post', $params, self.initial_fund)
                },
            },
            items: {
                fetch: ($params) => {
                    return self.prepareEndPoint('get', $params, self.items)
                },
                find: ($params) => {
                    return self.prepareEndPoint('get', $params, self.items, self.items, $params)
                }
            },
            prepareEndPoint($method, $params, ...args) {
                let url = this.api_base_link;
                args.forEach(function (object) {  // for each on dynamic parameters
                    Object.keys($params).forEach(function (item) {
                        if (object === item)
                            object = $params[item];    // replace route params by keys from the end point
                    });
                    url += '/' + object; // concatenate new uri
                });
                return {
                    method: $method, // set method from end point object
                    url: url
                };
            }
            ,
        }
    },
    prepareEndPoint($method, $params, ...args) {
        let url = this.api_base_link;
        args.forEach(function (object) {  // for each on dynamic parameters
            Object.keys($params).forEach(function (item) {
                if (object === item)
                    object = $params[item];    // replace route params by keys from the end point
            });
            url += '/' + object; // concatenate new uri
        });
        return {
            method: $method, // set method from end point object
            url: url
        };
    },
}


export default {
    data() {
        return {
            api_base_link: '/api',
            super_uri: 'super',
            company_uri: 'company',
            offers_uri: 'offer',
            settings_uri: 'settings',
            plans_uri: 'plan',
            countries_uri: 'countries',
            cities_uri: 'cities',
            constants_uri: 'constants',
            currencies_uri: 'currencies',
            subscription_uri: 'subscription',
            companies_uri: 'companies',
            code_uri: 'code',
            temp_account_uri: 'temp-accounts',
            accounts_uri: 'accounts',
            category_uri: 'category',
            account_config_uri: "account-config",
            account_item_uri: "account-item",
            tax_uri: "tax",
            brands_uri: "brand",
            units_uri: "unit",
            groups_uri: "group",
            banks_uri: 'banks',
            stores_uri: 'stores',
            addresses_uri: 'address',
            addresses_general_uri: 'address-general',
            finance_uri: 'finance-api',
            supplier_uri: 'supplier-relationship',
            customers_uri: 'customer-relationship/customers',
            safe_transaction: 'finance-api/money-safe-transfer',
            save_transaction: 'finance-api/save-transfer',
            bank_transaction: 'finance-api/bank-transfer',
            company_bank_account: 'finance-api/bankAccount/company',
            user_bank_account: 'finance-api/bankAccount/user',
            initial_fund: 'finance-api/initial-fund',
            sales_requests: 'sales-requests',
            purchase_requests: 'purchase-request',
            shipping_request_sales: 'sales-requests/shipping-request-sales',
            shipping_address: 'purchase-request/shipping-address',
            sale_order_items: 'sales-requests/request-items',
            purchase_order_items: 'purchase-request/request-items',
            sale_quotes: 'sales-requests/sale-quote',
            purchase_quote: 'purchase-request/purchase-quote',
            purchase_quote_request: 'purchase-request/purchase-quote-request',
            sale_quotes_items: 'sales-requests/sale-quote-items',
            purchase_quote_items: 'purchase-request/purchase-quote',
            items: 'sales-requests/items',
            crud: {
                find: 'find',
                get: 'fetch',
                store: 'store',
                edit: 'edit',
                update: 'update',
                delete: 'delete',
                activate: 'active',
                search: 'search'
            }
        }
    },

    beforeCreate() {
        /**
         * check if component has route variable as prop.
         * if so, remove the route function 'cause that's not necessary to be attached
         * @author Amr
         */
        if (this.$options.props && this.$options.props.route != undefined) {
            delete methods['route']
        }
        /**
         * inject mixins' methods inside the current object
         * to be published over all called vue components
         * @author Amr
         */
        this.$options.methods = {
            ...this.$options.methods,
            ...methods
        }
    },
}
