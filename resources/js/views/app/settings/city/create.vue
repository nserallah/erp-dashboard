<template>
    <div class="main-content">
        <breadcumb :page="$t('cities')" :folder="$t('settings.show')"/>
        <b-row>
            <b-col md="12 mb-30">
                <b-card title="">
                    <b-form @submit.prevent="validate">
                        <b-row>
                            <div class=" col-md-12 row">
                                <add-more class="col-md-12" :label="$t('settings.city.name')"
                                          name="name" :translations="form.name_translations"
                                          ref="translate" v-model="form.name"></add-more>

                            </div>
                            <div class=" col-md-10 row">

                                <b-form-group
                                        id="input-group-1"
                                        :label="$t('country')"
                                        label-for="input-1"
                                        class="col-md-12">
                                    <multiselect v-model="selected_country"
                                                 v-validate="'required'"
                                                 name="country_id"
                                                 :class="{'input-error': errors.has('country_id')}"
                                                 track-by="name" label="name"
                                                 :placeholder="$t('country')" :options="countries"
                                                 :searchable="false" :allow-empty="true">

                                    </multiselect>
                                    <div class="invalid-feedback" v-if="errors.has('country_id')">
                                        {{errors.first('country_id') }}
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

    export default {
        metaInfo: {
            title: "City"
        },
        created() {
            let self = this;
            self.is_edit = self.$route.params.city_id !== undefined;
            if (self.is_edit)
                self.fetchInfo();
        },
        mounted() {
            let self = this;
            self.getCountries();
            self._method = self.is_edit ? 'PUT' : 'POST';
            self._route = self.is_edit ? routes.settings.cities.update(self.$route.params.city_id) : routes.settings.cities.store();
        },
        components: {
            AddMore,
            Multiselect,
        },
        computed: {
            ...mapState({
                countries: state => state.setting.countries,
            }),
        },
        data() {
            return {
                submitStatus: null,
                value: [],
                form: {
                    name: {},
                    name_translations: {},
                    country_id: null,
                    is_active: 1,
                },
                selected_country: null,
                is_edit: false,
                _method: 'POST',
                _route: '',

            };
        },

        watch: {
            'selected_country': {
                handler: function (val, oldVal) {
                    this.form.country_id = (val !== null) ? val.id : null;
                },
                deep: true
            },
        },
        methods: {
            ...mapActions('setting', [
                'getCountries',
            ]),
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
                                self.$router.push('/settings/cities/list');
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