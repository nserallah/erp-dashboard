<template>
  <div>
      <breadcumb :page="'Data Table'" :folder="'my table'"/>
        <b-card class="wrapper">
            <g-list resource="city" :endPoint="route('settings.cities.fetch',{country_id : this.$route.params.country_id})"/>
        </b-card>
  </div>
</template>

<script>
    import {makeRequest, routes} from "../../../util/axios";
    import Datatable from "../../../components/datatable/Datatable";
export default {
     metaInfo: {
            title: "Cities list"
        },
        components: {datatable: Datatable},
        data() {
            return {
                sortKey: '',
                columns: [
                    {width: '10%', label: '#', name: 'id'},
                    {width: '25%', label: 'Name', name: 'name'},
                    {width: '15%', label: 'Country', name: 'country'},
                    {width: '15%', label: 'Status', name: 'is_active', class: 'vgt-left-align text-right'},
                    {width: '15%', label: 'Actions', name: 'actions', class: 'vgt-left-align text-right'}
                ],
                source: '',
            }
        },
        created() {
            this.source = routes.settings.cities.fetch() + '?country_id=' + (this.$route.params.country_id !== undefined ? this.$route.params.country_id : '');
        },
        methods: {
            sortBy(key) {
                this.sortKey = key;
            },
            changeStatus(item) {
                let self = this;
                makeRequest(
                    'PATCH',
                    routes.settings.cities.activate(item.id),
                    {
                        is_active: !item.is_active
                    },
                    function (response) {
                        if (response.data.status === 200) {
                            self.$refs.datatable.fetch(self.$refs.datatable.pagination.currentPage)
                        }
                    },
                    function (xhr) {

                    }
                )
            },
            deleteItem(item) {
                let self = this;
                makeRequest(
                    'DELETE',
                    routes.settings.cities.delete(item.id),
                    {
                        is_active: !item.is_active
                    },
                    function (response) {
                        if (response.data.status === 200) {
                            self.$refs.datatable.fetch(self.$refs.datatable.pagination.currentPage);
                            self.$bvToast.toast("Successfully Deleted", {
                                title: '',
                                variant: '',
                                solid: true
                            });
                        }
                    },
                    function (xhr) {

                    }
                )
            }
        }
    }

</script>

<style>

</style>