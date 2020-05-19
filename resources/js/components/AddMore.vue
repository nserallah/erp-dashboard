<template>
    <div>
        <div class="row" v-for="(attribute,index) in attributes">
            <b-col md="3">
                <b-form-group id="input-group-1" :label="$t('language')" label-for="input-1">
                    <multiselect v-model="attribute.language" track-by="locale" label="name" v-validate="'required'"
                                 :name="'locale['+index+']'"
                                 :class="{'input-error': errors.has('locale['+index+']')}"
                                 :placeholder="$t('Select Language')"
                                 :options="languages" :searchable="true" :allow-empty="true">
                        <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.name }}</strong>
                        </template>
                    </multiselect>
                    <div class="invalid-feedback" v-if="errors.has('locale['+index+']')">
                        {{errors.first('locale['+index+']') }}
                    </div>

                </b-form-group>
            </b-col>
            <b-col md="7">
                <b-form-group id="input-group-1" :label="label" label-for="input-1">
                    <b-form-input class="col-md-12" v-validate="{required: true}"
                                  :name="'text['+index+']'"
                                  :class="{'form-control': true, 'is-invalid': errors.has('text['+index+']')}"
                                  type="text" :placeholder="placeholder" v-model="attribute.value">
                    </b-form-input>
                    <div class="invalid-feedback" v-if="errors.has('text['+index+']')">
                        {{errors.first('text['+index+']') }}
                    </div>
                    <span v-if="vcondition" class="md-error">
                        {{vmessage}}
                    </span>
                </b-form-group>
            </b-col>
            <b-col md="2">
                <b-form-group label-for="input-1" class="button-container my-4 row">
                    <button @click="addMore" class="btn btn-outline-success btn-sm ">{{$t('add')}}</button>
                    <button @click="deleteAttribute($event,index)" class="btn btn-outline-danger btn-sm ">
                        {{$t('delete')}}
                    </button>
                </b-form-group>
            </b-col>
        </div>
    </div>
</template>
<!--<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>-->

<script>
    import Multiselect from "vue-multiselect/src/Multiselect";
    import {mapActions, mapState} from "vuex";

    export default {
        name: "AddMore",
        components: {Multiselect},
        props: ['placeholder', 'label', 'vmessage', 'vcondition', 'translations'],

        data() {
            return {
                attributes: [],
                language: {},
                options: [],
            }
        },
        created() {
            let self = this;
            self.getLanguages();
        },
        mounted() {
            let self = this;
            if (self.attributes.length === 0) {
                self.attributes.push({
                    language: (Object.keys(self.default_language).length > 0) ? self.default_language : null,
                    value: ''
                })
            }
        },
        computed: {
            ...mapState({
                languages: state => state.setting.languages,
                default_language: state => state.setting.default_language,
            }),
        },
        watch: {
            'attributes': {
                handler: function (val, oldVal) {
                    var array = [];
                    val.forEach(function (object, index) {
                            if (object.language) {
                                array[object.language.locale] = object.value;
                            }
                        }
                    );
                    this.$emit('input', Object.assign({}, array));
                },
                deep: true
            },
            'translations': {
                handler: function (val, oldVal) {
                    let self = this;
                    if (val) {
                        self.attributes = [];
                        Object.keys(val).forEach(function (key) {
                            self.attributes.push({
                                language: self.languages.filter(function (object) {
                                    return object.locale === key;
                                })[0],
                                value: val[key],
                            })
                        });
                    }
                },
                deep: true
            },
        },
        methods: {
            ...mapActions('setting', [
                'getLanguages',
            ]),
            addMore(e) {
                e.preventDefault();
                var self = this;
                self.attributes.push({
                    language: self.default_language,
                    value: ''
                });
            },
            deleteAttribute(e, index) {
                e.preventDefault();
                var _this = this;
                _this.attributes.splice(index, 1);
            },
            validate(after) {
                var self = this;
                self.$validator.validateAll().then(after);
            },
        }
    }
</script>

<style>
    /*.button-container button {*/
    /*width: 100% !important;*/
    /*}*/

    span.multiselect__placeholder {
        font-size: 13px;
    }

    .form-control {
        padding: 1.1rem 0.75rem !important;
    }
</style>