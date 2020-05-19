<template>
    <div>
        <div class="row" v-for="(item,index) in items" :key="`items-${index}`">
            <b-col v-for="(input) in inputs" :md="input.col" :key="input.name">
                <slot :name="input.name" :input="input" :item="item">
                    <b-form-group id="input-group-1" :label="$t(input.label)">
                        <b-form-input class="col-md-12" v-validate="input.validation" v-if="input.type !== 'select'"
                                      :name="input.name+'['+index+']'"
                                      :class="{'form-control': true, 'is-invalid': errors.has(input.name+'['+index+']')}"
                                      :type="input.type" :placeholder="input.label" v-model="item[input.name]">
                        </b-form-input>

                        <multiselect v-model="item[input.name]" v-if="input.type === 'select'"
                                     track-by="id" label="locale_name" v-validate="input.validation"
                                     :name="input.name+ '['+index+']'"
                                     :class="{'input-error': errors.has(input.name+'['+index+']')}"
                                     :placeholder="$t(input.label)"
                                     :options="options" :searchable="true" :allow-empty="true">

                            <template slot="singleLabel" slot-scope="{ option }">
                                <strong>{{ option.name.en ? option.name.en :option.name}}</strong>
                            </template>
                        </multiselect>

                        <div class="invalid-feedback" v-if="errors.has(input.name+'['+index+']')">
                            {{errors.first(input.name+'['+index+']') }}
                        </div>
                    </b-form-group>
                </slot>
            </b-col>
            <b-col md="2">
                <b-form-group label-for="input-1" class="button-container my-4 row">
                    <button @click="appendRow" class="btn btn-outline-success btn-sm ">{{$t('add')}}</button>
                    <button @click="deleteRow($event,index)" class="btn btn-outline-danger btn-sm ">
                        {{$t('delete')}}
                    </button>
                </b-form-group>
            </b-col>
        </div>
    </div>
</template>

<script>
    import Multiselect from "vue-multiselect/src/Multiselect";

    export default {
        name: "Repeater",
        components: {Multiselect},
        props: ['inputs', 'options', 'data'],
        data() {
            return {
                items: [
                    {}
                ],
            }
        },
        created() {
            let self = this;

        },
        mounted() {
            let self = this;

        },
        updated() {
        },
        watch: {
            'items': {
                handler: function (val, oldVal) {
                    this.$emit('input', val);
                },
                deep: true
            },
            'data': {
                handler: function (val, oldVal) {
                    this.items = val;
                },
                deep: true
            },

        },
        methods: {
            appendRow(e) {
                e.preventDefault();
                let self = this;
                self.items.push({});
            },
            deleteRow(e, index) {
                e.preventDefault();
                let _this = this;
                _this.items.splice(index, 1);
            },
            // validate(after) {
            //     let self = this;
            //     self.$validator.validateAll().then(after);
            // },
        }

    }
</script>

<style scoped>

</style>