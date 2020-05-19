<template>
    <!-- ===== Search UI Start ====== -->
    <div class="search-ui" :class="{'open':isSearchOpen}">
        <div class="search-header">
            <img src="@/assets/images/logo.png" alt="" class="logo">
            <button @click="closeSearch" class="search-close btn btn-icon bg-transparent float-right mt-2">
                <i class="i-Close-Window text-22 text-muted"></i>
            </button>
        </div>

        <input type="text" placeholder="Type here" class="search-input" autofocus>

        <div class="search-title">
            <span class="text-muted">Search results</span>
        </div>

        <div class="search-results list-horizontal">

        </div>
        <!-- PAGINATION CONTROL -->
        <div class="col-md-12 mt-5 text-center">
            <nav aria-label="Page navigation example">
                <ul class="pagination d-inline-flex">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <!-- ===== Search UI End ====== -->
</template>

<script>
    export default {
        props: [
            'isSearchOpen'
        ],
        data() {
            return {
                issearchClose: false,

            }
        },
        methods: {
            closeSearch() {
                // this.issearchClose= !this.issearchClose;
                this.$emit('closeSearch', {
                    isSearchOpen: false,
                });
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>