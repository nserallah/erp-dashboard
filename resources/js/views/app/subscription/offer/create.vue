<template>
    <div class="main-content">
        <breadcumb :page="'Create'" :folder="'Offers'"/>
        <b-row>
            <b-col md="12 mb-30">
                <b-card>
                    <b-form @submit.prevent="validate">
                        <b-row>
                            <div class=" col-md-12 row">
                                <add-more class="col-md-12" :label="$t('offerItems.title')"
                                          name="title" :translations="form.title_translations"
                                          ref="translate" v-model="form.title">
                                </add-more>
                            </div>
                            <div class=" col-md-10 row">

                                <b-form-group :label="$t('plan')" class="col-md-12">
                                    <multiselect v-model="selected_plan" track-by="id" label="title"
                                                 name="plan_id" placeholder="Select Plan"
                                                 v-validate="'required'"
                                                 :class="{'input-error': errors.has('plan_id')}"
                                                 :options="plans" :searchable="false" :allow-empty="true">
                                        <template slot="singleLabel" slot-scope="{ option }"><strong>{{
                                            option.title }}</strong>
                                        </template>
                                    </multiselect>
                                    <div class="invalid-feedback" v-if="errors.has('plan_id')">
                                        {{errors.first('plan_id') }}
                                    </div>
                                </b-form-group>


                                <b-form-group
                                        class="col-md-6 mb-3"
                                        :label="$t('offerItems.startsAt')"
                                        label-for="input-1">
                                    <datepicker v-model="form.starts_at" name="starts_at"
                                                :bootstrap-styling="true" type="date"
                                                format="yyyy-MM-dd" v-validate="{required: true}"
                                                :class="{'new-form-control': true, 'input-errors': errors.has('starts_at')}"></datepicker>
                                    <div class="invalid-feedback" v-if="errors.has('starts_at')">
                                        {{errors.first('starts_at') }}
                                    </div>
                                </b-form-group>

                                <b-form-group
                                        class="col-md-6 mb-3"
                                        :label="$t('offerItems.endsAt')"
                                        label-for="input-1">
                                    <datepicker v-model="form.ends_at" name="ends_at"
                                                type="date"
                                                :bootstrap-styling="true"
                                                format="yyyy-MM-dd" v-validate="{required: true}"
                                                :class="{'new-form-control': true, 'input-errors': errors.has('ends_at')}"></datepicker>
                                    <div class="invalid-feedback" v-if="errors.has('ends_at')">
                                        {{errors.first('ends_at') }}
                                    </div>
                                </b-form-group>


                                <b-form-group
                                        class="col-md-6 mb-3"
                                        :label="$t('offerItems.discountPercentagePerMonth')"
                                        label-for="input-1">
                                    <b-form-input v-model="form.discount_percentage_per_month" type="number"
                                                  data-vv-price_year v-validate="{required: true}"
                                                  name="discount_percentage_per_month"
                                                  :class="{'form-control': true, 'is-invalid': errors.has('discount_percentage_per_month')}"
                                                  :placeholder="$t('offerItems.discountPercentagePerMonth')"></b-form-input>
                                    <div class="invalid-feedback"
                                         v-if="errors.has('discount_percentage_per_month')">
                                        {{errors.first('discount_percentage_per_month') }}
                                    </div>
                                </b-form-group>

                                <b-form-group
                                        class="col-md-6 mb-3"
                                        :label="$t('offerItems.discountPercentagePerYear')"
                                        label-for="input-1">
                                    <b-form-input v-model="form.discount_percentage_per_year" type="number"
                                                  data-vv-price_year v-validate="{required: true}"
                                                  name="discount_percentage_per_year"
                                                  :class="{'form-control': true, 'is-invalid': errors.has('discount_percentage_per_year')}"
                                                  :placeholder="$t('offerItems.discountPercentagePerYear')"></b-form-input>
                                    <div class="invalid-feedback"
                                         v-if="errors.has('discount_percentage_per_year')">
                                        {{errors.first('discount_percentage_per_year') }}
                                    </div>
                                </b-form-group>


                                <b-form-group
                                        class="col-md-12 mb-3"
                                        id="input-group-1"
                                        :label="$t('offerItems.isActive')"
                                        label-for="input-1">
                                    <label class="switch switch-success mr-3">
                                        <input type="checkbox" v-model="form.is_active" value="1" checked="">
                                        <span class="slider"></span>
                                    </label>
                                </b-form-group>


                                <b-col md="12">
                                    <b-button
                                            type="submit"
                                            variant="primary" @click="validate"
                                            :disabled="submitStatus === 'PENDING'">
                                        {{$t('submit')}}
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

    import AddMore from "../../../../components/AddMore";
    import {makeRequest, routes} from "../../../../util/axios";
    import Multiselect from 'vue-multiselect'
    import moment from "moment";
    import Datepicker from 'vuejs-datepicker';

    export default {
        metaInfo: {
            title: "Offer"
        },
        created() {
            this.fetchPlans();
            this.fetchOffer();
        },
        mounted() {
            let self = this;
            self.is_edit = self.$route.params.id !== undefined;
            self._method = self.is_edit ? 'PUT' : 'POST';
            self._route = self.is_edit ? routes.updateOffer(self.$route.params.id) : routes.storeOffer();


            // console.log(self.route('settings.countries.update', {country_id: 1}));
            self.request(self.route('settings.countries.update', {country_id: 1}), {},
                function (response) {
                    console.log(response);
                },
                function (xhr) {
                    console.log('Error in fetch response')
                }
            );

        }
        ,
        components: {
            AddMore,
            Multiselect,
            Datepicker
        }
        ,
        data() {
            return {
                submitStatus: null,
                value: [],

                form: {
                    title_translations: {},
                    title: {},
                    starts_at: '',
                    ends_at: '',
                    discount_percentage_per_month: '',
                    discount_percentage_per_year: '',
                    is_active: 1,
                },
                modules: [],
                selected_plan: null,
                plans: [],
                is_edit: false,
                _method: 'POST',
                _route: '',

            };
        }
        ,

        watch: {
            'selected_plan':
                {
                    handler: function (val, oldVal) {
                        console.log(val);
                        this.form.plan_id = (val !== null) ? val.id : null;
                    }
                    ,
                    deep: true
                }
            ,
        }
        ,
        methods: {
            submitForm(e) {
                let self = this;
                self.submitStatus = "PENDING";
                makeRequest(
                    self._method,
                    self._route,
                    self.form,
                    function (response) {
                        if (response.data.status === 200) {
                            self.submitStatus = "OK";
                            self.$router.push('/subscription/offer/list');
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
            }
            ,
            validate() {
                var self = this;
                console.log(self.form);
                self.$validator.validateAll().then((valid) => {
                    self.$refs.translate.validate(function (trans) {
                        if (valid && trans) {
                            self.submitForm();
                        }
                    });
                }).catch(() => {
                    self.submitStatus = "ERROR";
                });
            }
            ,
            updated() {

            }
            ,
            fetchPlans() {
                let self = this;
                makeRequest(
                    'GET',
                    routes.fetchPlans(),
                    {
                        params: {
                            is_active: 1,
                            per_page: 100,
                        }
                    },
                    function (response) {
                        var result = response.data;
                        if (result.status === 200) {
                            self.plans = result.data.data;
                        }
                    },
                    function (xhr) {

                    }
                )
            }
            ,
            makeToast(variant = null) {
                this.$bvToast.toast("Please fill the form correctly.", {
                    title: `Variant ${variant || "default"}`,
                    variant: variant,
                    solid: true
                });
            }
            ,
            makeToastTwo(variant = null) {
                this.$bvToast.toast("Successfully Submitted", {
                    title: `Variant ${variant || "default"}`,
                    variant: variant,
                    solid: true
                });
            }
            ,
            inputSubmit() {
                console.log("submitted");
            }
            ,
            formatDate(date) {
                return moment(date).format('yyyy-MM-dd')
            }
            ,
            fetchOffer() {
                var self = this;
                if (self.$route.params.id) {
                    makeRequest(
                        'GET',
                        routes.findOffer(self.$route.params.id),
                        {params: {show_title: true}},
                        function (response) {
                            var result = response.data;
                            if (result.status === 200) {
                                self.form = result.data;
                                self.form.title = result.data.title_translations;
                                self.modules = result.data.modules;
                                self.selected_plan = {
                                    id: result.data.plan_id,
                                    title: result.data.plan_title,
                                };
                            }
                        },
                        function (xhr) {

                        }
                    );
                }
            }

        }
    }
</script>
<style>
    .input-error {
        border: 0.8px solid red;
        border-radius: 5px;
    }

    .input-errors div input {
        border: 0.8px solid red;
        border-radius: 5px;
    }

    .invalid-feedback {
        display: block !important;
    }

    .new-form-control input {
        border: initial;
        outline: initial !important;
        background: #f8f9fa;
        border: 1px solid #ced4da;
        color: #47404f;
    }

    .new-form-control input {
        display: block;
        width: 100%;
        height: calc(1.9695rem + 2px);
        padding: 0.375rem 0.75rem;
        font-size: 0.813rem;
        line-height: 1.5;
        color: #665c70;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
</style>