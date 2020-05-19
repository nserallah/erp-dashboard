<template>
    <div class="main-content">
        <breadcumb :page="$t('countries')" :folder="$t('settings.show')"/>
        <b-row>
            <b-col md="12 mb-30">

                <b-card title="">
                    <b-form @submit.prevent="validate">
                        <b-row>
                            <div class=" col-md-12 row">
                                <add-more class="col-md-12" :label="$t('country')"
                                          name="name" :translations="form.name_translations"
                                          ref="translate1" v-model="form.name"></add-more>

                                <add-more class="col-md-12" :label="$t('nationality')"
                                          name="nationality" :translations="form.nationality_translations"
                                          ref="translate2" v-model="form.nationality"></add-more>
                            </div>
                            <div class=" col-md-10 row">

                                <b-form-group
                                        id="input-group-1"
                                        :label="$t('language')"
                                        label-for="input-1"
                                        class="col-md-6">
                                    <multiselect v-model="selected_language"
                                                 v-validate="'required'"
                                                 name="language_id"
                                                 :class="{'input-error': errors.has('language_id')}"
                                                 track-by="name" label="name"
                                                 placeholder="Select Language Type" :options="languages"
                                                 :searchable="false" :allow-empty="true">

                                    </multiselect>
                                    <div class="invalid-feedback" v-if="errors.has('language_id')">
                                        {{errors.first('language_id') }}
                                    </div>
                                </b-form-group>


                                <b-form-group
                                        id="input-group-1"
                                        :label="$t('currency')"
                                        label-for="input-1"
                                        class="col-md-6">
                                    <multiselect
                                            v-validate="'required'"
                                            track-by="name" label="name"
                                            name="currency_id"
                                            :class="{'input-error': errors.has('currency_id')}"
                                            v-model="selected_currency"
                                            placeholder="Select Currency" :options="currencies"
                                            :searchable="false" :allow-empty="true">
                                    </multiselect>
                                    <div class="invalid-feedback" v-if="errors.has('currency_id')">
                                        {{errors.first('currency_id') }}
                                    </div>
                                </b-form-group>


                                <b-form-group
                                        class="col-md-6 mb-3"
                                        :label="$t('settings.country.mobilePrefix')"
                                        label-for="input-1">
                                    <b-form-input v-model="form.mobile_prefix" type="text"
                                                  v-validate="{required: true}" name="mobile_prefix"
                                                  data-vv-price_month
                                                  :class="{'form-control': true, 'is-invalid': errors.has('mobile_prefix')}"
                                                  :placeholder="$t('settings.country.mobilePrefix')"></b-form-input>
                                    <div class="invalid-feedback" v-if="errors.has('mobile_prefix')">
                                        {{errors.first('mobile_prefix') }}
                                    </div>
                                </b-form-group>

                                <b-form-group
                                        class="col-md-6 mb-3"
                                        :label="$t('settings.country.postalCode')"
                                        label-for="input-1">
                                    <b-form-input v-model="form.postal_code" type="text"
                                                  data-vv-price_year v-validate="{required: true}"
                                                  name="postal_code"
                                                  :class="{'form-control': true, 'is-invalid': errors.has('postal_code')}"
                                                  :placeholder="$t('settings.country.postalCode')"></b-form-input>
                                    <div class="invalid-feedback" v-if="errors.has('postal_code')">
                                        {{errors.first('postal_code') }}
                                    </div>
                                </b-form-group>

                                <b-form-group class="col-md-6 mb-3" :label="$t('settings.country.flag')"
                                              label-for="input-1">
                                    <image-uploader width="200" height="100" :html="uploader_html" v-model="form.flag">

                                    </image-uploader>
                                    <div class="invalid-feedback" v-if="errors.has('postal_code')">
                                        {{errors.first('postal_code') }}
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
                                            variant="primary"
                                            :disabled="submitStatus === 'PENDING'">Submit
                                    </b-button>
                                    <!--<b-button @click="submitForm" class="mt-3" type="submit"-->
                                    <!--variant="primary">-->
                                    <!--Submit-->
                                    <!--</b-button>-->
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
    import {mapActions, mapState} from "vuex";
    import ImageUploader from "../../../../components/ImageUploader";

    export default {
        metaInfo: {
            title: "Country"
        },
        created() {
            let self = this;
            self.is_edit = self.$route.params.id !== undefined;
            if (self.is_edit)
                self.fetchPlan();
        },
        mounted() {
            let self = this;
            self.getConstants();
            self.getCurrencies();
            self.getLanguages();
            self._method = self.is_edit ? 'PUT' : 'POST';
            self._route = self.is_edit ? routes.settings.countries.update(self.$route.params.id) : routes.settings.countries.store();
        },
        components: {
            ImageUploader,
            AddMore,
            Multiselect,
        },
        computed: {
            ...mapState({
                constants: state => state.setting.constants,
                currencies: state => state.setting.currencies,
                languages: state => state.setting.languages,
            }),
        },
        data() {
            return {
                submitStatus: null,
                value: [],
                form: {
                    name: {},
                    nationality: {},
                    name_translations: {},
                    nationality_translations: {},
                    language_id: null,
                    currency_id: null,
                    postal_code: '',
                    mobile_prefix: '',
                    flag: null,
                },
                selected_language: null,
                selected_currency: null,
                planLevels: [],
                modules: [],
                is_edit: false,
                _method: 'POST',
                _route: '',
                uploader_html: {
                    upload: '<h1>Bummer!</h1>',
                    drag: 'Drag a 😺 GIF or GTFO'
                },
            };
        },

        watch: {
            'constants': {
                handler: function (val, oldVal) {
                    this.modules = val.filter(function (object) {
                        return object.key === 'modules';
                    });
                    this.planLevels = val.filter(function (object) {
                        return object.key === 'plan_level';
                    });
                },
                deep: true
            },
            'selected_language': {
                handler: function (val, oldVal) {
                    this.form.language_id = (val !== null) ? val.id : null;
                },
                deep: true
            },
            'selected_currency': {
                handler: function (val, oldVal) {
                    this.form.currency_id = (val !== null) ? val.id : null;
                },
                deep: true
            },
        },
        methods: {
            ...mapActions('setting', [
                'getConstants',
                'getCurrencies',
                'getLanguages',

            ]),
            validate() {
                var self = this;
                console.log(self.form);
                self.$validator.validateAll().then((valid) => {
                    self.$refs.translate1.validate(function (trans1) {
                        self.$refs.translate2.validate(function (trans2) {
                            if (valid && trans1 && trans2) {
                                self.submitForm();
                            }
                        });
                    });
                }).catch(() => {
                    self.submitStatus = "ERROR";
                });
            },
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
                                self.$router.push('/settings/countries/list');
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
            fetchPlan() {
                let self = this;
                makeRequest(
                    'GET',
                    routes.settings.countries.find(self.$route.params.id),
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
                            self.form.nationality = result.data.nationality_translations;
                            self.selected_currency = {
                                id: result.data.currency_id,
                                name: result.data.currency,
                            }
                            self.selected_language = {
                                id: result.data.language_id,
                                name: result.data.language,
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