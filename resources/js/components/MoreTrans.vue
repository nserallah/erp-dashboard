<template>
    <b-form-group
            class="col-md-6 mb-3"
            id="input-group-1"
            :label="label"
            label-for="input-1"
    >
        <b-form-input
                class="form-control-rounded"
                id="input-1"
                v-model.trim=""
                type="text"
                :placeholder="placeholder"
        ></b-form-input>
        <span v-if="$v.form.key.$error " class="md-error">
                                    {{$t("validation.field_required")}}
                                </span>
    </b-form-group>
</template>
<script>
    export default {
        props: ['label', 'placeholder', 'validationMessage']
    }
</script>
<style></style>