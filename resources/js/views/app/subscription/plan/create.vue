<template>
    <div class="main-content">
        <breadcumb :page="$t('create')" :folder="$t('plans')"/>
        <b-row>
            <b-col md="12 mb-30">
                <b-card>
                    <b-form @submit.prevent="validate">
                        <b-row>
                            <div class=" col-md-12 row">
                                <add-more class="col-md-12" :label="$t('plan')"
                                          name="title" :translations="form.title_translations" ref="translate"
                                          v-model="form.title">
                                </add-more>
                            </div>
                            <div class=" col-md-10 row">

                                <b-form-group
                                        class="col-md-12  mb-3"
                                        id="input-group-1"
                                        :label="$t('planItems.features')"
                                        label-for="input-1">
                                    <multiselect v-model="form.modules"
                                                 track-by="id"
                                                 label="locale_name"
                                                 tag-placeholder="Add this as new Module"
                                                 :placeholder="$t('search')"
                                                 :options="modules" :multiple="true"
                                                 v-validate="'required'"
                                                 name="modules"
                                                 :class="{'input-error': errors.has('modules')}"
                                                 deselect-label="Can't remove this value"
                                                 :allow-empty="!is_edit" :taggable="true"
                                    >
                                    </multiselect>
                                    <div class="invalid-feedback" v-if="errors.has('modules')">
                                        {{errors.first('modules') }}
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
                                            :placeholder="$t('search')"
                                            :options="currencies"
                                            :searchable="false" :allow-empty="true">
                                        <!--<template slot="singleLabel" slot-scope="{currency}">-->
                                        <!--&lt;!&ndash;<strong>{{ currency.name }} </strong>&ndash;&gt;-->
                                        <!--&lt;!&ndash; </strong> is written in<strong> {{ currency.language }}</strong>&ndash;&gt;-->
                                        <!--</template>-->
                                    </multiselect>
                                    <div class="invalid-feedback" v-if="errors.has('currency_id')">
                                        {{errors.first('currency_id') }}
                                    </div>
                                </b-form-group>


                                <b-form-group
                                        id="input-group-1"
                                        :label="$t('planItems.planType')"
                                        label-for="input-1"
                                        class="col-md-6">
                                    <multiselect v-model="selected_level"
                                                 v-validate="'required'"
                                                 name="level_id"
                                                 :class="{'input-error': errors.has('level_id')}"
                                                 track-by="name"
                                                 label="locale_name"
                                                 :placeholder="$t('Select Plan Type')"
                                                 :options="planLevels"
                                                 :searchable="false"
                                                 :allow-empty="true">

                                    </multiselect>
                                    <div class="invalid-feedback" v-if="errors.has('level_id')">
                                        {{errors.first('level_id') }}
                                    </div>
                                </b-form-group>
                            </div>
                            <div class=" col-md-12 row">
                                <repeater name="title" :inputs="localInputs" v-model="form.intervals"
                                          :options="intervals"
                                          ref="intervals" :data="form.intervals" class="col-md-12"
                                >
                                </repeater>
                            </div>
                            <div class=" col-md-10 row">


                                <b-form-group
                                        class="col-md-6 mb-3"
                                        :label="$t('planItems.companyBranchNo')"
                                        label-for="input-1">
                                    <b-form-input v-model="form.branch_no" type="number"
                                                  data-vv-price_year v-validate="{required: true}"
                                                  name="branch_no"
                                                  :class="{'form-control': true, 'is-invalid': errors.has('branch_no')}"
                                                  :placeholder="$t('planItems.companyBranchNo')"></b-form-input>
                                    <div class="invalid-feedback" v-if="errors.has('branch_no')">
                                        {{errors.first('branch_no') }}
                                    </div>
                                </b-form-group>

                                <b-form-group
                                        class="col-md-6 mb-3"
                                        :label="$t('planItems.employeeNo')"
                                        label-for="input-1">
                                    <b-form-input v-model="form.emp_no" type="number"
                                                  v-validate="{required: true}" name="emp_no"
                                                  :class="{'form-control': true, 'is-invalid': errors.has('emp_no')}"
                                                  :placeholder="$t('planItems.employeeNo')"></b-form-input>
                                    <div class="invalid-feedback" v-if="errors.has('emp_no')">
                                        {{errors.first('emp_no') }}
                                    </div>
                                </b-form-group>

                                <b-form-group
                                        class="col-md-6 mb-3"
                                        :label="$t('planItems.posNo')"
                                        label-for="input-1">
                                    <b-form-input v-model="form.pos_no" type="number"
                                                  v-validate="{required: true}" name="pos_no"
                                                  :class="{'form-control': true, 'is-invalid': errors.has('pos_no')}"
                                                  :placeholder="$t('planItems.posNo')"></b-form-input>
                                    <div class="invalid-feedback" v-if="errors.has('pos_no')">
                                        {{errors.first('pos_no') }}
                                    </div>
                                </b-form-group>


                                <b-form-group
                                        class="col-md-6 mb-3"
                                        :label="$t('planItems.companyInventoryNo')"
                                        label-for="input-1">
                                    <b-form-input v-model="form.inventory_no" type="number"
                                                  v-validate="{required: true}" name="inventory_no"
                                                  :class="{'form-control': true, 'is-invalid': errors.has('inventory_no')}"
                                                  :placeholder="$t('planItems.companyInventoryNo')"></b-form-input>
                                    <div class="invalid-feedback" v-if="errors.has('inventory_no')">
                                        {{errors.first('inventory_no') }}
                                    </div>
                                </b-form-group>
                                <b-form-group
                                        class="col-md-6 mb-3"
                                        :label="$t('planItems.productsNo')"
                                        label-for="input-1">
                                    <b-form-input v-model="form.item_no" type="number"
                                                  v-validate="{required: true}" name="item_no"
                                                  :class="{'form-control': true, 'is-invalid': errors.has('item_no')}"
                                                  :placeholder="$t('planItems.productsNo')"></b-form-input>
                                    <div class="invalid-feedback" v-if="errors.has('item_no')">
                                        {{errors.first('item_no') }}
                                    </div>
                                </b-form-group>


                                <b-form-group
                                        class="col-md-12 mb-3"
                                        id="input-group-1"
                                        :label="$t('planItems.isTrial')"
                                        label-for="input-1">
                                    <label class="switch switch-success mr-3">
                                        <input type="checkbox" v-model="form.is_trial" value="1" checked="">
                                        <span class="slider"></span>
                                    </label>

                                </b-form-group>


                                <b-form-group v-if="form.is_trial"
                                              class="col-md-6 mb-3"
                                              :label="$t('planItems.trialInterval')"
                                              label-for="input-1">
                                    <b-form-input v-model="form.interval_trail" type="number"
                                                  name="interval_trail"
                                                  v-validate="{required: true}"
                                                  :class="{'form-control': true, 'is-invalid': errors.has('interval_trail')}"
                                                  :placeholder="$t('planItems.trialInterval')"></b-form-input>
                                    <div class="invalid-feedback" v-if="errors.has('interval_trail')">
                                        {{errors.first('interval_trail') }}
                                    </div>
                                </b-form-group>

                                <b-form-group v-if="form.is_trial"
                                              class="col-md-6 mb-3"
                                              :label="$t('planItems.maxTrailNo')"
                                              label-for="input-1">
                                    <b-form-input v-model="form.max_trail_no" type="number"
                                                  v-validate="{required: true}" name="max_trail_no"
                                                  :class="{'form-control': true, 'is-invalid': errors.has('max_trail_no')}"
                                                  :placeholder="$t('planItems.maxTrailNo')"></b-form-input>
                                    <div class="invalid-feedback" v-if="errors.has('max_trail_no')">
                                        {{ errors.first('max_trail_no') }}
                                    </div>
                                </b-form-group>

                                <b-col md="12">
                                    <b-button
                                            type="submit"
                                            variant="primary"
                                            :disabled="submitStatus === 'PENDING'">
                                        {{$t('Submit')}}
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
    import Repeater from "../../../../components/Repeater";
    import i18n from '../../../../lang/lang'

    export default {
        metaInfo: {
            title: "Plan"
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
            self.inputs = [
                {
                    name: 'interval',
                    label: 'planItems.pricePerInterval',
                    col: 5,
                    type: 'select',
                    validation: {required: true}
                },
                {
                    name: 'price',
                    label: 'planItems.pricePerInterval',
                    col: 5,
                    type: 'number',
                    validation: {required: true}
                },
            ];
            self._method = self.is_edit ? 'PUT' : 'POST';
            self._route = self.is_edit ? routes.updatePlan(self.$route.params.id) : routes.storePlan();
        },
        updated() {
            // console.log(this.constants);

        },
        components: {
            Repeater,
            AddMore,
            Multiselect,
        },
        computed: {
            ...mapState({
                constants: state => state.setting.constants,
                currencies: state => state.setting.currencies,
            }),

            localInputs() {
                let inputs_ = JSON.parse(JSON.stringify(this.inputs))
                inputs_.forEach(function (item) {
                    item.label = this.$t(item.label)
                    return item;
                }.bind(this))
                return inputs_;
            }

        },
        data() {
            return {
                submitStatus: null,
                value: [],
                inputs: [],
                form: {
                    translations_title: {},
                    title: {},
                    price_month: '',
                    price_year: '',
                    branch_no: '',
                    inventory_no: '',
                    level_id: '',
                    emp_no: '',
                    interval_trail: '',
                    pos_no: '',
                    item_no: '',
                    is_trial: 1,
                    max_trail_no: '',
                    currency_id: '',
                    modules: [],
                },
                selected_level: null,
                selected_currency: null,
                intervals: [],
                planLevels: [],
                modules: [],
                is_edit: false,
                _method: 'POST',
                _route: '',
            };
        },

        watch: {
            'constants': {
                handler: function (val, oldVal) {
                    this.modules = val.filter(function (object) {
                        return object.key === 'MODULE';
                    });
                    this.planLevels = val.filter(function (object) {
                        return object.key === 'PLAN_LEVEL';
                    });
                    this.intervals = val.filter(function (object) {
                        return object.key === 'INTERVAL_TYPE';
                    });

                    this.inputs.map(function (object) {

                    });
                    console.log(this.intervals);
                },
                deep: true
            },
            'selected_level': {
                handler: function (val, oldVal) {
                    this.form.level_id = (val !== null) ? val.id : null;
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
            ]),
            validate() {
                var self = this;
                self.$validator.validateAll().then((valid) => {
                    self.$refs.translate.validate(function (trans) {
                        self.$refs.intervals.validate(function (intervals) {
                            if (valid
                            // && trans && intervals
                            ) {
                                self.submitForm();

                            }
                        });
                    });
                    if (valid) {
                        self.submitForm();
                    }
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
                                self.$router.push('/subscription/plan/list');
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
                this.$bvToast.toast(i18n.t("Please fill the form correctly."), {
                    title: `${i18n.t(variant) || "default"}`,
                    variant: variant,
                    solid: true
                });
            },
            makeToastTwo(variant = null) {
                this.$bvToast.toast(
                    i18n.t("Successfully Submitted"), {
                        title: `${i18n.t(variant) || "default"}`,
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
                    routes.fetchPlanById(self.$route.params.id),
                    {
                        params: {
                            show_title: true
                        }
                    },
                    function (response) {
                        var result = response.data;
                        if (result.status === 200) {
                            self.form = result.data;
                            self.form.title = result.data.title_translations;
                            self.selected_currency = {
                                id: result.data.currency_id,
                                name: result.data.currency,
                            }
                            self.selected_level = {
                                id: result.data.level_id,
                                name: result.data.level,
                            };
                            self.form.intervals = result.data.intervals;
                        }
                    },
                    function (xhr) {

                    }
                )
            }
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