<template>
    <div>
        <picture-input ref="pictureInput"
                       :width="width"
                       :height="height"
                       :margin="margin"
                       accept="image/jpeg,image/png"
                       size="10"
                       button-class="btn btn-success"
                       :custom-strings="html" @change="onChange">
        </picture-input>
    </div>
</template>

<script>
    import PictureInput from 'vue-picture-input'
    import {makeRequest} from "../util/axios";

    export default {
        name: "ImageUploader",
        props: ['width', 'height', 'margin', 'html', 'server_side'],
        data() {
            return {}
        },
        components: {
            PictureInput
        },
        methods: {
            onChange(image) {
                let self = this;
                if (image) {
                    if (self.server_side) {
                        makeRequest(
                            'POST',
                            '',
                            {image: image},
                            function (response) {

                            },
                            function (response) {

                            },
                        )
                    } else {
                        // self.$emit('input', self.$refs.pictureInput.file);
                        self.$emit('input', image);
                    }
                } else {
                    console.log('FileReader API not supported: use the <form>, Luke!')
                }
            }
        }
    }
</script>

<style scoped>

</style>