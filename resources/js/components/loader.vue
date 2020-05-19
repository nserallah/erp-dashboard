<template>
    <div :class="{'bar-container': ( containerStyle == 1) }" v-show="shown">
        <div :class="loaderClass"></div>
    </div>

</template>

<script>
    export default {
        name: "loader",
        props: {
            containerStyle: {
                default: 1
            }
        },
        data: function () {
            return {
                shown: false,
                loaderClass: 'spinner-bubble spinner-bubble-info m-5'
            };
        },
        methods: {
            show() {
                this.shown = true;
            },
            hide() {
                this.shown = false;
            },
            toggle() {
                this.shown = !this.shown;
            }
        },
        created() {
            if (this.containerStyle != 1) {
                this.loaderClass = 'spinner-glow spinner-glow-primary mr-5';
            }
        }
    }
</script>

<style scoped>
    .bar-container {
        width: 100%;
        position: absolute;
        height: 100%;
        top: 0;
        text-align: center;
        padding: 21%;
    }
</style>