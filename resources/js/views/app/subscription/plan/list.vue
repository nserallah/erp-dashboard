<template>
    <div class="main-content">
        <breadcumb :page="$t('Plans')" :folder="$t('Subscription')"/>
        <b-card class="wrapper">
            <!--<datatable :columns="columns" @sort="sortBy" :sortKey="sortKey" :source="source" ref="datatable">-->
            <!--<template slot="is_active" slot-scope="{item}">-->
            <!--<span class="center-btns">-->
            <!--<span :class="{'badge': true, 'badge-success': item.is_active , 'badge-danger' : !item.is_active}">-->
            <!--{{ item.is_active ? 'Active' : 'Inactive' }}-->
            <!--</span>-->
            <!--</span>-->
            <!--</template>-->
            <!--<template slot="actions" slot-scope="{item}">-->
            <!--<span class="center-btns">-->
            <!--<router-link :to="'/subscription/plan/'+item.id+'/edit'">-->
            <!--<a href="javascript:;">-->
            <!--<i class="i-Eraser-2 text-25 text-success mr-2"></i>-->
            <!--</a>-->
            <!--</router-link>-->
            <!--<a href="javascript:;" @click="changeStatus(item)">-->
            <!--<i :class="{'i-Close-Window text-25 text-danger':item.is_active , 'i-Restore-Window text-25 text-primary' : !item.is_active}"></i>-->
            <!--</a>-->
            <!--</span>-->
            <!--</template>-->
            <!--</datatable>-->
            <g-list resource="plan" :endPoint="route('subscription.plan.fetch')"></g-list>

        </b-card>
    </div>
</template>

<script>
    import {makeRequest, routes} from "../../../../util/axios";
    import Datatable from "../../../../components/datatable/Datatable";
    import Status from "../../../../components/datatable/Status";

    export default {
        metaInfo: {
            title: "Plans list"
        },
        components: {datatable: Datatable, status: Status},
        data() {
            return {
                sortKey: '',
                columns: [
                    {width: '10%', label: '#', name: 'id'},
                    {width: '25%', label: 'Title', name: 'title'},
                    {width: '20%', label: 'Price / Month', name: 'price_month'},
                    {width: '20%', label: 'Price / Year', name: 'price_year'},
                    {width: '15%', label: 'Currency', name: 'currency'},
                    {width: '15%', label: 'Status', name: 'is_active', class: 'vgt-left-align text-right'},
                    {width: '15%', label: 'Actions', name: 'actions', class: 'vgt-left-align text-right'}
                ],
                source: '',
            }
        },
        created() {
            this.source = routes.fetchPlans();
        },
        methods: {
            sortBy(key) {
                this.sortKey = key;
            },
            changeStatus(item) {
                let self = this;
                makeRequest(
                    'PATCH',
                    routes.changePlanStatus(item.id),
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
</style>
