<template>
    <div>
        <div class="row" v-for="(item,index) in items">
            <b-col md="5">
                <slot name="select" :item="item" :index="index" :options="options" :select_label="select_label" >
                    <b-form-group id="input-group-1" label="Select Interval" label-for="input-1">
                        <multiselect v-model="item.option" track-by="locale" label="name" v-validate="'required'"
                                     :name="'locale['+index+']'"
                                     :class="{'input-error': errors.has('locale['+index+']')}" :placeholder="select_label"
                                     :options="options" :searchable="true" :allow-empty="true">
                            <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.name }}</strong></template>
                        </multiselect>
                        <div class="invalid-feedback" v-if="errors.has('locale['+index+']')">
                            {{errors.first('locale['+index+']') }}
                        </div>
                    </b-form-group>
                </slot>
            </b-col>
            <b-col md="5">
                <b-form-group id="input-group-1" :label="input_label">
                    <b-form-input class="col-md-12" v-validate="{required: true}"
                                  :name="'text['+index+']'"
                                  :class="{'form-control': true, 'is-invalid': errors.has('text['+index+']')}"
                                  type="number" :placeholder="input_label" v-model="item.value">
                    </b-form-input>
                    <div class="invalid-feedback" v-if="errors.has('text['+index+']')">
                        {{errors.first('text['+index+']') }}
                    </div>
                </b-form-group>
            </b-col>
            <b-col md="2">
                <b-form-group label-for="input-1" class="button-container my-4 row">
                    <button @click="appendNew" class="btn btn-outline-success btn-sm ">Add</button>
                    <button @click="deleteAttribute($event,index)" class="btn btn-outline-danger btn-sm ">Delete
                    </button>
                </b-form-group>
            </b-col>
        </div>
    </div>
</template>

<script>
    import Multiselect from "vue-multiselect/src/Multiselect";

    export default {
        name: "MoreInterval",
        components: {Multiselect},
        props: ['options', 'select_label', 'input_label'],

        data() {
            return {
                items: [{}],
            }
        },
        created() {
            let self = this;

        },
        mounted() {
            let self = this;
            // if (self.attributes.length === 0) {
            //     self.attributes.push({
            //         language: (Object.keys(self.default_language).length > 0) ? self.default_language : null,
            //         value: ''
            //     })
            // }
        },
        watch: {
            'items': {
                handler: function (val, oldVal) {
                    this.$emit('input', val);
                },
                deep: true
            },
        },
        methods: {
            appendNew(e) {
                e.preventDefault();
                var self = this;
                self.items.push({});
            },
            deleteAttribute(e, index) {
                e.preventDefault();
                var _this = this;
                _this.items.splice(index, 1);
            },
            validate(after) {
                var self = this;
                self.$validator.validateAll().then(after);
            },
        }

    }
</script>

<style scoped>

</style>