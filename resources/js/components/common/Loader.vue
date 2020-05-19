<template>
    <div v-if="show" class="spinner spinner-primary mr-3 spinner-center"></div>
</template>

<script>
    export default {
        name: "Loader",
        props: ['show'],

    }
</script>

<style scoped>
    .spinner-center {
        position: absolute;
        height: 60px;
        width: 60px;
        top: 50%;
        left: 50%;
        margin-left: -50px;
        margin-top: -50px;
        background-size: 100%;
    }
</style>