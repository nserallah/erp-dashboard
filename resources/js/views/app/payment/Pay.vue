<template>
    <div class="main-content">
        <breadcumb :page="'Pay'" :folder="'Payment'"/>
        <b-row>
            <b-col md="12 mb-30">
                <b-card title="Form Inputs">
                    <b-form @submit.prevent="validate">
                        <b-row>
                            <!--<div class=" col-md-12 row">-->
                            <!--<add-more class="col-md-12" :label="$t('settings.city.name')"-->
                            <!--name="name" :translations="form.name_translations"-->
                            <!--ref="translate" v-model="form.name"></add-more>-->

                            <!--</div>-->
                            <div class=" col-md-10 row">

                                <b-form-group
                                        id="input-group-1"
                                        :label="$t('company.name')"
                                        label-for="input-1"
                                        class="col-md-12">
                                    <multiselect v-model="form.company"
                                                 v-validate="'required'"
                                                 name="company"
                                                 :class="{'input-error': errors.has('company')}"
                                                 track-by="id" label="name"
                                                 placeholder="Select Company" :options="companies"
                                                 :searchable="false" :allow-empty="true">

                                    </multiselect>
                                    <div class="invalid-feedback" v-if="errors.has('company')">
                                        {{errors.first('company') }}
                                    </div>
                                </b-form-group>


                                <b-form-group
                                        id="input-group-1"
                                        :label="$t('payment.interval')"
                                        label-for="input-1"
                                        class="col-md-12">
                                    <multiselect v-model="form.interval"
                                                 v-validate="'required'"
                                                 name="interval"
                                                 :class="{'input-error': errors.has('interval')}"
                                                 track-by="id" label="name"
                                                 placeholder="Select Interval" :options="intervals"
                                                 :searchable="false" :allow-empty="true">

                                    </multiselect>
                                    <div class="invalid-feedback" v-if="errors.has('interval')">
                                        {{errors.first('interval') }}
                                    </div>
                                </b-form-group>

                                <b-form-group
                                        id="input-group-1"
                                        :label="$t('payment.type')"
                                        label-for="input-1"
                                        class="col-md-12">
                                    <multiselect v-model="form.type"
                                                 v-validate="'required'"
                                                 name="type"
                                                 :class="{'input-error': errors.has('type')}"
                                                 track-by="id" label="name"
                                                 placeholder="Select Payment Type" :options="paymentTypes"
                                                 :searchable="false" :allow-empty="true">

                                    </multiselect>
                                    <div class="invalid-feedback" v-if="errors.has('type')">
                                        {{errors.first('type') }}
                                    </div>
                                </b-form-group>
                                <b-form-group
                                        id="input-group-1"
                                        :label="$t('payment.method')"
                                        label-for="input-1"
                                        class="col-md-12">
                                    <multiselect v-model="form.method"
                                                 v-validate="'required'"
                                                 name="method"
                                                 :class="{'input-error': errors.has('method')}"
                                                 track-by="id" label="name"
                                                 placeholder="Select Payment Method" :options="paymentMethods"
                                                 :searchable="false" :allow-empty="true">

                                    </multiselect>
                                    <div class="invalid-feedback" v-if="errors.has('method')">
                                        {{errors.first('method') }}
                                    </div>
                                </b-form-group>
                            </div>

                            <component v-if="component" :is="component" ref="component" :form="form"></component>


                            <b-col md="12">
                                <b-button
                                        type="submit"
                                        variant="primary"
                                        :disabled="submitStatus === 'PENDING'">Submit
                                </b-button>
                            </b-col>


                            <p v-once class="typo__p" v-if="submitStatus === 'OK'">
                                {{ makeToastTwo("success") }}
                            </p>
                            <p class="typo__p" v-if="submitStatus === 'ERROR'">
                                {{ makeToast("danger") }}
                            </p>
                            <div class="typo__p" v-if="submitStatus === 'PENDING'">
                                <div class="spinner sm spinner-primary mt-3"></div>
                            </div>
                        </b-row>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<style>
    /*label.checkbox-outline-primary {*/
    /*margin-right: 15px;*/
    /*}*/
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>

    import Multiselect from 'vue-multiselect'
    import {mapActions, mapState} from "vuex";
    import AddMore from "../../../components/AddMore";
    import {makeRequest, routes} from "../../../util/axios";
    import CashForm from "../../../components/payment/CashForm";

    export default {
        metaInfo: {
            title: "Pay"
        },
        created() {
            let self = this;

        },
        mounted() {
            let self = this;
            self.getCompanies();
            self.getConstants();
            console.log(this.constants);
            self._method = self.is_edit ? 'PUT' : 'POST';
            self._route = routes.payment.pay();
        },
        components: {
            AddMore,
            Multiselect,
            CashForm
        },
        computed: {
            ...mapState({
                companies: state => state.company.companies,
                constants: state => state.setting.constants,
            }),
        },
        watch: {
            'constants': {
                handler: function (val, oldVal) {
                    this.intervals = val.filter(function (object) {
                        return object.key === 'INTERVAL_TYPE';
                    });
                    console.log('intervals', val);
                    this.paymentTypes = val.filter(function (object) {
                        return object.key === 'PAYMENT_PROCESS_TYPE';
                    });
                    this.paymentMethods = val.filter(function (object) {
                        return object.key === 'PAYMENT_METHOD';
                    });
                },
                deep: true
            },
            'form': {
                handler: function (val, oldVal) {
                    // console.log('form console', ((val.method)  ? val.method.value.component : ''));

                    this.component = (val.method) ? val.method.value.component : undefined;
                },
                deep: true
            },
        },
        data() {
            return {
                submitStatus: null,
                value: [],
                form: {
                    company: null,
                    interval: null,
                    method: null,
                    type: null,
                    is_active: 1,
                },
                intervals: [],
                paymentMethods: [],
                paymentTypes: [],
                is_edit: false,
                _method: 'POST',
                _route: '',
                component: undefined

            };
        },

        methods: {
            ...mapActions('company', [
                'getCompanies',
            ]),
            ...mapActions('setting', [
                'getConstants',
            ]),
            validationPassed() {
                let self = this;
                self.submitForm();
            },
            validationFailed(result) {
                let self = this;
                console.log('error' , result);
                self.submitStatus = "ERROR";
            },
            // validate() {
            //     var self = this;
            //     console.log(self.form);
            //     self.$validator.validateAll().then((valid) => {
            //         self.$refs.component.validateAll().then((component) => {
            //             if (valid && component) {
            //                 self.submitForm();
            //             }
            //         });
            //     }).catch(() => {
            //         self.submitStatus = "ERROR";
            //     });
            // },
            submitForm() {
                let self = this;
                self.submitStatus = "PENDING";
                makeRequest(
                    self._method,
                    self._route,
                    self.form,
                    function (response) {
                        if (response.data.status === 200) {
                            self.submitStatus = "OK";
                            setTimeout(function () {
                                self.$router.push({ name : 'companies.list'});
                            }, 2000);
                        }
                        if (response.data.status === 'error') {
                            self.submitStatus = "ERROR";
                            console.log(self.submitStatus);
                            Object.keys(response.data.data).forEach(function (key) {
                                self.$validator.errors.add({
                                    field: key,
                                    msg: response.data.data[key][0],
                                });
                            });
                        }
                    },
                    function (xhr) {
                        console.log('catch');
                        console.log(xhr);
                    }
                )
            },
            makeToast(variant = null) {
                this.$bvToast.toast("Please fill the form correctly.", {
                    title: `Variant ${variant || "default"}`,
                    variant: variant,
                    solid: true
                });
            },
            makeToastTwo(variant = null) {
                this.$bvToast.toast("Successfully Submitted", {
                    title: `Variant ${variant || "default"}`,
                    variant: variant,
                    solid: true
                });
            },
            getConstantsByKey(key) {
                return this.constants.filter(function (index) {
                    return state.constants[index].key === key;
                });
            },
            fetchInfo() {
                let self = this;
                makeRequest(
                    'GET',
                    routes.settings.cities.find(self.$route.params.city_id),
                    {
                        params: {
                            show_title: true
                        }
                    },
                    function (response) {
                        var result = response.data;
                        if (result.status === 200) {
                            self.form = result.data;
                            self.form.name = result.data.name_translations;
                            self.selected_country = {
                                id: result.data.country_id,
                                name: result.data.country,
                            }
                        }
                    },
                    function (xhr) {

                    }
                )
            }
        },
        updated() {

        },

    }
</script>
<style>
    .input-error {
        border: 0.8px solid red;
        border-radius: 5px;
    }

    .invalid-feedback {
        display: block !important;
    }
</style>