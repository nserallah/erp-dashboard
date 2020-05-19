const actionsConfig = {
    transfer: {
        companycheque: {
            redirect: {
                name: 'cheque.transfer',
                params: {cheque_id: 'id'}
            }
        },
    },
    show: {
        accountconfig: {
            redirect: {
                name: 'accountConfig.show',
                params: {id: 'id'}
            }
        }
    },
    create: {
        accountconfig: {
            redirect: {
                name: 'accountItem.create',
                params: {id: 'id'}
            }
        },

    },
    edit: {
        // installmentpayment: {
        //     redirect: {
        //         name: 'installment.payment.edit',
        //         // installment_id
        //         params: {id: 'installment_id', payment_id: 'id'}
        //     }
        // },
        salerequest: {
            redirect: {
                name: 'sales_order.edit',
                params: {id: 'id'}
            }
        },
        purchaserequest: {
            redirect: {
                name: 'purchase-order.edit',
                params: {id: 'id'}
            }
        },
        salequotes: {
            redirect: {
                name: 'sale_quotes.edit',
                params: {id: 'id'}
            }
        },
        installmentmain: {
            redirect: {
                name: 'installment.edit',
                params: {id: 'id'}
            }
        },
        companycheque: {
            redirect: {
                name: 'cheque.edit',
                params: {cheque_id: 'id'}
            }
        },
        savetransaction: {
            redirect: {
                name: 'transaction.save.edit',
                params: {id: 'id'}
            }
        },
        moneysafetransfer: {
            redirect: {
                name: 'transaction.safe.edit',
                params: {id: 'id'}
            }
        },
        banktransfer: {
            redirect: {
                name: 'transaction.bank.edit',
                params: {id: 'id'}
            }
        },
        userbankaccount: {
            redirect: {
                name: 'userBankAccount.edit',
                params: {id: 'id'}
            }
        },
        companybankaccount: {
            redirect: {
                name: 'companyBankAccount.edit',
                params: {id: 'id'}
            }
        },
        address: {
            redirect: {
                name: 'address.edit',
                params: {id: 'id'}
            }
        },
        generaladdress: {
            redirect: {
                name: 'address.general.edit',
                params: {id: 'id'},
                query: {
                    type: 2
                }
            }
        },
        planoffer: {
            redirect: {
                name: 'offer.edit',
                params: {id: 'id'}
            }
        },
        branch: {
            redirect: {
                name: 'branch.edit',
                params: {id: 'id'}
            }
        },
        bank: {
            redirect: {
                name: 'banks.edit',
                params: {id: 'id'}
            }
        },
        customer: {
            redirect: {
                name: 'customers.edit',
                params: {id: 'id'}
            }
        },
        store: {
            redirect: {
                name: 'stores.edit',
                params: {id: 'id'}
            }
        },
        inventory: {
            redirect: {
                name: 'inventory.edit',
                params: {id: 'id'}
            }
        },
        constant: {
            redirect: {
                name: 'constant.edit',
                params: {id: 'id'}
            }
        },
        tax: {
            redirect: {
                name: 'tax.edit',
                params: {id: 'id'}
            }
        },
        brand: {
            redirect: {
                name: 'brand.edit',
                params: {id: 'id'}
            }
        },
        unit: {
            redirect: {
                name: 'unit.edit',
                params: {id: 'id'}
            }
        },
        group: {
            redirect: {
                name: 'group.edit',
                params: {id: 'id'}
            }
        },
        vendor: {
            redirect: {
                name: 'vendor.edit',
                params: {id: 'id'}
            }
        }
    },
    delete: {
    }
};

export default actionsConfig;