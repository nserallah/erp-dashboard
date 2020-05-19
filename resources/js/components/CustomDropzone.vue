<template>

    <b-form-group
            class="col-md-6 mb-3"
            :label="label"
            label-for="input-1">
        <vue-dropzone class="vue-dropzone" ref="vue2Dropzone" id="dropzone"
                      @vdropzone-max-files-exceeded="maxFilesExceeded" @vdropzone-success="onSuccess"
                      :class="className"       @vdropzone-error="onError" :options="dropzoneOptions"></vue-dropzone>

        <!--<div class="invalid-feedback" v-if="errors.has('invoice_date')">-->
            <!--{{errors.first('invoice_date') }}-->
        <!--</div>-->
    </b-form-group>

</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    import {routes} from "../util/axios";

    export default {
        name: "CustomDropzone",
        props: {
            multiple: {
                default: false
            },
            className: {
                default: ''
            },
            label : {
                default : ''
            }
        },
        components: {
            vueDropzone: vue2Dropzone
        },
        data: function () {
            return {
                dropzoneOptions: {
                    url: routes.upload.file(),
                    thumbnailWidth: 130,
                    maxFilesize: 20,
                    maxFiles: 1,
                    paramName: 'file',
                    addRemoveLinks: true,

                }
            }
        },
        mounted() {
            this.dropzoneOptions.maxFiles = this.multiple ? 20 : 1;

        },
        methods: {
            onSuccess(file, response) {
                if (response.status === 200) {
                    this.$emit('success', {file: file, response: response});
                } else {
                    this.$emit('error', {file: file, response: response});
                }
            },
            onError(file, message) {
                this.$emit('error', {file: file, response: {status: 'error', message: message}});
            },
            maxFilesExceeded(file) {
                this.$refs.vue2Dropzone.removeAllFiles();
                this.$refs.vue2Dropzone.addFile(file);
            }

        }
    }
</script>


<style scoped>
    .vue-dropzone {
        width: 100%;
    }
</style>