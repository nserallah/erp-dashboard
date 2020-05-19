<template>
    <div class="main-content">
        <breadcumb :page="$t('cities')" :folder="$t('settings.show')"/>
        <b-card class="wrapper">
            <g-list resource="city" :endPoint="route('settings.cities.fetch',{country_id : this.$route.params.country_id})"/>

            <!--<datatable :columns="columns" @sort="sortBy" :sortKey="sortKey" :source="source"-->
                       <!--:params="{country_id : $route.params.country_id}" ref="datatable">-->
                <!--<template slot="is_active" slot-scope="{item}">-->
                    <!--<span class="center-btns">-->
                        <!--<span :class="{'badge': true, 'badge-success': item.is_active , 'badge-danger' : !item.is_active}">-->
                            <!--{{item.is_active ? 'Active' : 'Inactive' }}-->
                        <!--</span>-->
                    <!--</span>-->
                <!--</template>-->
                <!--<template slot="actions" slot-scope="{item}">-->
                    <!--<b-dropdown variant="primary  btn-sm" id="dropdown-1" offset="-25" text="Options" class="mb-2">-->
                        <!--<b-dropdown-item>-->
                            <!--<router-link :to="'/settings/cities/edit/'+item.id">-->
                                <!--<i class="i-Eraser-2 text-15 text-success mr-2"></i>-->
                                <!--Edit-->
                            <!--</router-link>-->
                        <!--</b-dropdown-item>-->
                        <!--<b-dropdown-item @click="changeStatus(item)">-->
                            <!--<i :class="{'i-Block-Window text-15 text-warning':item.is_active , 'i-Yes text-15 text-primary' : !item.is_active}"></i>-->
                            <!--{{item.is_active ? 'Deactivate' : 'Activate' }}-->
                        <!--</b-dropdown-item>-->
                        <!--<b-dropdown-item @click="deleteItem(item)">-->
                            <!--<i class="i-Close-Window text-15 text-danger"></i>-->
                            <!--Delete-->
                        <!--</b-dropdown-item>-->

                    <!--</b-dropdown>-->
                    <!--&lt;!&ndash;<span class="center-btns">&ndash;&gt;-->
                    <!--&lt;!&ndash;<router-link :to="'/settings/countries/edit/'+item.id">&ndash;&gt;-->
                    <!--&lt;!&ndash;<a href="javascript:;">&ndash;&gt;-->
                    <!--&lt;!&ndash;<i class="i-Eraser-2 text-25 text-success mr-2"></i>&ndash;&gt;-->
                    <!--&lt;!&ndash;</a>&ndash;&gt;-->
                    <!--&lt;!&ndash;</router-link>&ndash;&gt;-->
                    <!--&lt;!&ndash;<a href="javascript:;" @click="changeStatus(item)">&ndash;&gt;-->
                    <!--&lt;!&ndash;<i :class="{'i-Close-Window text-25 text-danger':item.is_active , 'i-Restore-Window text-25 text-primary' : !item.is_active}"></i>&ndash;&gt;-->
                    <!--&lt;!&ndash;</a>&ndash;&gt;-->
                    <!--&lt;!&ndash;</span>&ndash;&gt;-->
                <!--</template>-->
            <!--</datatable>-->
        </b-card>
    </div>
</template>

<script>
    import {makeRequest, routes} from "../../../../util/axios";
    import Datatable from "../../../../components/datatable/Datatable";

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
    };
</script>
<style>
    ul.gull-pagination li {
        margin: 0 12px;
    }

    ul.gull-pagination li .page-link {
        border-radius: 50% !important;
        border-color: #fff !important;
    }

    .page-link:hover {
        background-color: #fff;
    }

    .page-link:focus {
        box-shadow: 0 0 0 0.2rem rgb(255, 255, 255);
    }

    .page-item.disabled .page-link {
        color: #d5d0d9;
    }

    .list-enter-active,
    .list-leave-active,
    .list-move {
        transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
        transition-property: opacity, transform;
    }

    .list-enter {
        opacity: 0;
        transform: translateX(50px) scaleY(0.5);
    }

    .list-enter-to {
        opacity: 1;
        transform: translateX(0) scaleY(1);
    }

    .list-leave-active {
        position: absolute;
    }

    .list-leave-to {
        opacity: 0;
        transform: scaleY(0);
        transform-origin: center top;
    }

    .fade-transition {
        opacity: 1;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.5s ease-in-out;
    }

    .fade-enter,
    .fade-leave-active {
        transform: translate(100%);
        opacity: 0;
    }

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

    .center-btns {
        justify-content: center;
        display: flex;
    }

    .flag img {
        width: 40px;
        height: 25px;
        border-radius: 5px;
    }
</style>
