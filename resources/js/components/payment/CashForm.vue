<template>
    <div class="col-md-10 row">
        <b-form-group
                class="col-md-6 mb-3"
                :label="$t('username')"
                label-for="input-1">
            <b-form-input type="text" v-model="form.username"
                          v-validate="{required: true}" name="username"
                          :class="{'form-control': true, 'is-invalid': errors.has('username')}"
                          :placeholder="$t('username')"></b-form-input>
            <div class="invalid-feedback" v-if="errors.has('username')">
                {{errors.first('username') }}
            </div>
        </b-form-group>
        <b-form-group
                class="col-md-6 mb-3"
                :label="$t('invoice.no')"
                label-for="input-1">
            <b-form-input type="text" v-model="form.invoice_no"
                          v-validate="{required: true}" name="invoice_no"
                          :class="{'form-control': true, 'is-invalid': errors.has('invoice_no')}"
                          :placeholder="$t('invoice.no')"></b-form-input>
            <div class="invalid-feedback" v-if="errors.has('invoice_no')">
                {{errors.first('invoice_no') }}
            </div>
        </b-form-group>

        <b-form-group
                class="col-md-6 mb-3"
                :label="$t('invoice.invoice_date')"
                label-for="input-1">
            <datepicker v-model="form.invoice_date" name="invoice_date"
                        type="date"
                        :bootstrap-styling="true"
                        format="yyyy-MM-dd" v-validate="{required: true}"
                        :class="{'new-form-control': true, 'input-errors': errors.has('invoice_date')}"></datepicker>
            <div class="invalid-feedback" v-if="errors.has('invoice_date')">
                {{errors.first('invoice_date') }}
            </div>
        </b-form-group>

        <custom-dropzone @success="onSuccess" @error="onError" :label="$t('invoice.invoice_doc')"  :multiple="false"></custom-dropzone>
    </div>
</template>

<script>
    import Datepicker from "vuejs-datepicker";
    import CustomDropzone from "../CustomDropzone";

    export default {
        name: "CashForm",
        props: ["form"],
        components: {
            CustomDropzone,
            Datepicker
        },
        data() {
            return {}
        },
        methods: {
            onInput() {
                this.$emit('input', this.form);
                console.log();
            },
            onSuccess(data) {
                this.form.invoice_doc = data.response.data.file_name;
            },
            onError(data) {
                alert(data.response.message);
            },

        },
    }
</script>

<style scoped>

</style>