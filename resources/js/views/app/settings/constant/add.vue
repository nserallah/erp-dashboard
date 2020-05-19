<template>
    <div class="main-content">
        <create :form-attributes="form" @success-submit="successSubmit" :link="link">
            <template :slot-scope="{form , validation , errors}">
                <b-row>
                    <b-form-group
                            class="col-md-6 mb-3"
                            id="input-group-1"
                            :label="$t('key')"
                            label-for="input-1">
                        <b-form-input
                                class="form-control"
                                id="input-1"
                                v-model.trim="form.key"
                                type="text"
                                :placeholder="$t('key')"
                                v-validate="'required'"
                                name="key"></b-form-input>
                        <v-error :key-name="'key'"></v-error>
                    </b-form-group>

                    <b-col md="6">
                        <b-form-group id="input-group-1" :label="$t('settings.constants.parent')"
                                      label-for="input-1">
                            <multiselect track-by="name"
                                         name="parent_id"
                                         label="name" :options="categories"
                                         v-model="form.parent_id"

                                         :placeholder="$t('settings.constants.select_parent')"></multiselect>

                        </b-form-group>
                        <v-error :key-name="'parent_id'"></v-error>
                    </b-col>
                    <add-more class="col-md-12"
                              v-model="form.name"
                              :label="$t('name')"
                              ref="translate"
                              :translations="translations"

                    />
                    <add-more class="col-md-12"
                              v-model="form.value"
                              :label="$t('value')"
                              :translations="translatedValues"

                    />
                    <b-form-group
                            id="input-group-1"
                            :label="$t('Is Active ?')"
                            label-for="input-1"
                            class="col-md-6"
                    >
                        <label class="switch switch-success mr-3">
                            <span>{{$t('active')}}</span>
                            <input type="checkbox" checked=""
                                   v-model="form.is_active">
                            <span class="slider"></span>
                        </label>
                    </b-form-group>
                </b-row>
            </template>
        </create>
        <loader ref="loader"></loader>
    </div>
</template>

<script>
    import {required} from "vuelidate/lib/validators";
    import instance from "@/util/axios"
    import {routes} from "@/util/axios"
    import Multiselect from "vue-multiselect/src/Multiselect";

    import AddMore from "../../../../components/AddMore";
    import loader from '@/components/loader'

    const form = {
        name: {
            en: "",
        },
        value: {
            en: "",
        },
        key: "",
        is_active: 1,
        user_id: 0,
        parent_id: "",

    };


    export default {
        metaInfo: {
            // if no subcomponents specify a metaInfo.title, this title will be used
            title: "Paging Table"
        },
        data() {
            return {
                link: '',
                rows: [],
                id: null,
                submitStatus: null,
                form: {
                    name: {
                        en: "",
                    },
                    value: {
                        en: "",
                    },
                    key: "",
                    is_active: 1,
                    user_id: 0,
                    parent_id: "",

                },
                categories: [],
                options: [],
                validation: {form: form},
                translations: {},
                translatedValues: {}
            }
        },
        validations: {},

        components: {
            AddMore,
            Multiselect,
            loader

        },
        methods: {
            successSubmit() {
                this.$router.push({
                    name: 'constants.list',
                    params: {message: 'Constant saved successfully', type: 'success'}
                })
            },
        },
        created() {
            this.link = this.route('settings.constants.store');
            this.id = this.$route.params.id;
            if (this.id != null) {
                this.link = this.route('constant.update', {constant_id: this.id});
                let self = this;
                instance.get(routes.constants.get() + '/' + this.id + '?default=true').then(({data}) => {
                    // console.log("response", data)
                    this.form = data.data;
                    self.translations = self.form.name;
                    this.translatedValues = self.form.value;

                })
            }

        },
        mounted() {
            this.$refs.loader.show();
            let ref = this;
            let param = {
                is_active: 1,
                not_paginate: 1
            }
            instance.get(routes.constants.get(param)).then(({status, data}) => {
                let selectedObject = '';
                ref.options = data.data;
                console.log('data', data.data.data)
                ref.categories = data.data.data.map(constant => {
                    let option = constant;
                    if (ref.form.parent_id != undefined && ref.form.parent_id == constant.id) {
                        selectedObject = option;
                    }
                    return option
                })
                ref.form.parent_id = selectedObject;
                ref.$refs.loader.hide();

            })
        },

    };
</script>
<style>
    .multiselect__tags {
        min-height: 29px;
        height: 36px;
        padding-top: 5px;
    }

    .md-error {
        color: red;
    }
</style>
