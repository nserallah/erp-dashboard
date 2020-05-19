<template>
    <div
            class="auth-layout-wrap"
            :style="{ backgroundImage: 'url(' + bgImage + ')' }"
    >

        <b-col md="6 mb-30">
            <b-card>
                <form-wizard
                        title="Erp"
                        :subtitle="$t('Complete registeration')"
                        shape="tab"
                        color="#9b59b6"
                        @on-complete="submit"
                >

                    <tab-content :title="$t('Account Info')"
                                 icon="fa fa-arrows" :before-change="__validateAccount"
                                 key-id="account"
                                 :name="$t('Account')"
                                 :info="$t('Account')" :selected="true"
                                 route=""
                    >
                        <create-account ref="account" @submit="submitTabs"></create-account>
                    </tab-content>

                    <tab-content :title="$t('Payment info')" icon="i-Car-Coins" :key="'create_payment'"
                                 route=""
                                 name="Payment" info="payment" v-if="isTrial==0" :before-change="__validatePayment">
                        <payment-form ref="payment"
                                      @setPaid="setPaid"
                                      @setCompany="setCompany"
                                      :company="company"
                                      :isTrial="isTrial == 0">

                        </payment-form>
                    </tab-content>

                    <!-- START PAYMENT FORM @AUTHOR AMR-->
                    <tab-content :title="$t('Paypal')" icon="i-Car-Coins" v-if="isTrial == 0 && isPaid"
                                 :before-change="__pay"
                                 route="">
                        <paypal-form ref="braintree" :amount="amount" :show-pay-button="false"></paypal-form>
                    </tab-content>
                    <!-- END PAYMENT FORM @AUTHOR AMR-->
                    <button
                            class="btn btn-outline-primary btn-rounded"
                            type="primary"
                            slot="prev"
                    >
                        {{$t('Back')}}
                    </button>
                    <button
                            class="btn btn-outline-primary btn-rounded"
                            type="primary"
                            slot="next"
                    >
                        {{$t('Next')}}
                    </button>
                    <button
                            class="btn btn-outline-success btn-rounded"
                            type="primary"
                            slot="finish"
                    >
                        {{$t('Finish')}}
                    </button>
                </form-wizard>
            </b-card>
        </b-col>

        <loader ref="loader"></loader>
    </div>
</template>

<script>
    import loader from "@/components/loader"
    import instance, {routes} from '@/util/axios'
    import createAccount from './partials/createAccount'
    import paymentForm from './partials/paymentForm'
    import PaypalForm from "./partials/PaypalForm"


    let form = {}

    export default {
        data: function () {
            return {
                form,
                isPaid: false,
                isTrial: -1,
                company: {},
                account: {},
                amount: "",
                bgImage: require("@/assets/images/photo-wide-4.jpg"),
                logo: require("@/assets/images/logo.png"),
                signInImage: require("@/assets/images/photo-long-3.jpg"),
                validation: {
                    form: {}
                }
            }
        },
        components: {loader, createAccount, paymentForm, PaypalForm},
        methods: {
            /**
             * submit the form by sending the data
             * in the following form:
             * [
             *  'account' : {},
             *  'payment' : {},
             *  'braintree' : {}
             * ]
             * @author Amr
             */
            submit() {
                let param = this.form;
                param.company_id = this.company_id;
                // param.plan_id = this.company.plan.id
                let ref = this;
                // alert('ss')
                instance.post(routes.account.create(), param).then(({data}) => {
                    console.log(data, data.error_code = 0 && (data.status == 200 || data.status == 'success'))
                    console.log('data from back', data)

                    if (data.error_code == 0 && (data.status == 200 || data.status == 'success')) {
                        ref.form.password = ''
                        ref.form.password_confirmation = ''
                        ref.form.email = ''
                        // ref.showAlert('success', data.message)
                        ref.$router.push({
                            name: "company.register",
                            params: {
                                message: data.message,
                                'type': 'success'
                            }
                        });

                        // return;
                    }
                    // ref.showAlert('danger', data.message)
                })
            },
            /**
             * perform the action of paying
             *
             * @author Amr
             **/
            __pay() {
                this.$refs.loader.show();
                return new Promise((resolve, reject) => {
                    this.$refs.braintree.pay((result, form) => {
                        this.form.braintree = result
                        this.form.braintree.status = 'success'
                        resolve(true)
                        this.$refs.loader.hide();
                    }, (error, form) => {
                        this.form.braintree = error;
                        this.form.braintree.status = 'error'
                        resolve(true)
                        this.$refs.loader.hide();
                    })
                })

            },
            /**
             * validate account form
             * @author Amr
             **/
            __validateAccount() {
                return this.validate('account')
            },
            /**
             * validate payment form
             * @author Amr
             **/
            __validatePayment() {
                return this.validate('payment')
            },
            /**
             * master function that calls the children's validation
             * methods according to the passed refs
             * @author Amr
             **/
            validate(e) {
                return this.$refs[e].validateForm((result, resolve) => {
                    console.log('validation resolve', result, resolve)
                    resolve(result)
                }, e);
            },
            /**
             * change the state of paid attribute
             * according to payment method selection
             * @author Amr
             */
            setPaid(isPaid, amount) {
                this.isPaid = isPaid;
                this.amount = amount
            },
            /**
             * set the company's data
             * after fetching it from the
             * payment component
             *
             * @param company
             * @author Amr
             */
            setCompany(company) {
                this.company = company;
                this.isTrial = company.plan.is_trial
                console.log("company", company)
            },
            /**
             * set account data from
             * the account component
             *
             * @param account
             * @author Amr
             */
            setAccount(account) {
                this.account = account;

            },
            /**
             * listen to the events came
             * from tabs' parent
             *
             * @param forms
             * @param name
             * @author Amr
             */
            listenToTabs(forms, name) {
                this.form[name] = forms;

            },
            getCompany(id) {
                let ref = this;
                // this.$refs.loader.show();
                /**
                 * fetch the data then push it to the parent
                 */
                instance.get(routes.company.get() + '/' + id).then(({data}) => {
                    if (data.status == '200' || data.status == 'success' || data.status == 200) {
                        if (data.data.account != null || data.data.temp_account != null) {
                            ref.$router.push({
                                name: "company.register",
                                params: {
                                    message: 'You already have account, please contact with admin to active it',
                                    'type': 'danger'
                                }
                            });
                        }
                        ref.company = data.data;
                        ref.isTrial = ref.company.plan.is_trial;
                        ref.form.plan_id = ref.company.plan.id
                        ref.stepIndex = 0;
                        // ref.$refs.loader.hide();
                    }

                });

            },
            submitTabs(result, objectData) {
                return new Promise((resolve, reject) => {
                    resolve(result)
                    return true;
                })
            }
        },
        created() {
            console.log('route', this.$route, this.$router)
            let ref = this;
            this.company_id = this.$route.params.companyId
            this.getCompany(this.company_id);
            let alert = this.$route.params.type;
            let message = this.$route.params.message;
            if (alert != undefined && message != undefined) {
                this.showAlert(alert, message)
            }
            console.log('shere ')
            /**
             * after getting signal from the event called
             * "submit-form", pass the content to listenToTabs
             * to handel the operations
             * @author Amr
             */
            this.$root.$on('submit-form', (forms, name) => {
                this.listenToTabs(forms, name)
            })
        },
        watch: {
            isTrial: function (oldValue, newValue) {
                // this.$refs.loader.show();
                this.stepIndex = this.isTrial == 0 ? 1 : 0
                // this.$refs.loader.hide();
            }
        }

    }
</script>

<style lang="scss">
    [v-cloak] {
        display: none;
    }
</style>
