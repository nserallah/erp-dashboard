<template>
    <b-modal
            size="lg"
            v-b-modal.modal-lg
            v-model="showModal"
            :title="title"
            @hide="close"


    >
        <div class="row">
            <div class="col-md-12">
                <quill ref="paragraph" output="html" v-model="componentContent" :config="config"
                       class="paragraph-editor"
                       :content="contents"></quill>
            </div>
        </div>

        <div slot="modal-footer" class="w-100">
            <b-button
                    variant="danger"
                    size="sm"
                    class="float-right"
                    @click="close"
            >
                Close
            </b-button>

            <b-button
                    variant="success"
                    size="sm"
                    class="float-right save-button"
                    @click="submit"
            >
                Save
            </b-button>
        </div>
        <loader ref="loader"></loader>
    </b-modal>
</template>
<script>

    import toolbarOptions from '@/plugins/quill'
    import loader from '@/components/loader'

    export default {

        props: {
            show: {
                required: true,
                type: Boolean
            },
            title: {
                type: String,
                required: true
            },
            content: {
                required: false,
                default: ""
            },
            type: {
                required: true,
                default: ""
            },
            id: {
                required: true,
                type: Number
            },
            config: {
                type: Object,
                default: () => {
                    return {
                        placeholder: '',
                        theme: 'snow',
                        modules: {
                            toolbar: toolbarOptions
                        },
                        'syntax': true        // Enable with default configuration
                    }

                }
            }
        },
        components: {loader},
        data: () => {
            return {
                componentContent: {
                    ops: [],
                },
                showFlag: false,
                value: "",
                contents: ''
            };
        },
        methods: {
            close() {
                this.componentContent = {
                    ops: [],
                };
                this.$emit('close', {show: false})
            },
            submit() {
                this.$refs.loader.show();
                this.$emit('submit', {"content": this.componentContent, type: this.type, id: this.id})
                this.$refs.loader.hide();
            }
        },
        computed: {
            showModal: {
                get() {
                    this.showFlag = this.show;
                    return this.showFlag;
                },
                set(value) {
                    this.showFlag = value;
                }
            }
        },
        mounted() {
            // this.$refs.loader.show();
            this.componentContent = this.content;
            // this.$refs.loader.hide();
        }
    }
</script>
<style>
    .save-button {
        margin-left: 5px;
        margin-right: 5px;
    }

    /*.paragraph-editor {*/
    /*    height: 200px;*/
    /*}*/
</style>