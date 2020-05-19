<template>

</template>

<script>
    export default {
        name: "customPagination",
        props: {
            pageChanged: {
                type: Function,
            },
            perPageChanged: {
                type: Function,
            },
        },
        methods: {
            customPageChange(customCurrentPage) {
                this.pageChanged({currentPage: customCurrentPage});
            },
            customPerPageChange(customPerPage) {
                this.perPageChanged({currentPerPage: customPerPage});
            }
        }
    }
</script>

<style scoped>

</style>