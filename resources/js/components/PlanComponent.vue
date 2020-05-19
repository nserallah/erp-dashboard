<template>
    <div class="row">

        <div v-for="(plan , index) in computedPlans" :class="`m-0 p-0 col-lg-${columnsNo} col-xl-${columnsNo}`">
            <div class="ul-pricing__table-2">
                <div class="ul-pricing__header">
                    <div :class="`ul-pricing__image text-${color(index)} m-0`">
                        <i :class="icon(plan)"></i>
                    </div>
                    <div v-for="interval in intervals(plan)" class="ul-pricing__main-number m-0">
                        <h1 :class="`heading text-${color(index)} t-font-boldest interval-price`">
                            {{`${interval.price}`}}
                            <span class="pricing-currency">{{plan.currency_symbol}}</span>
                            <span class="pricing-name">  / {{interval.name}} </span>
                        </h1>
                    </div>
                </div>
                <div class="ul-pricing__title"><h2 :class="`heading text-${color(index)}`">{{plan.title}}</h2></div>
                <div class="ul-pricing__table-listing mb-4">
                    <ul>
                        <li class="t-font-bolder">{{`${$t('planItems.companyBranchNo')} : ${plan.branch_no}`}}</li>
                        <li class="t-font-bolder">{{`${$t('planItems.companyInventoryNo')} : ${plan.inventory_no}`}}
                        </li>
                        <li class="t-font-bolder">{{`${$t('planItems.employeeNo')} : ${plan.emp_no}`}}</li>
                        <li class="t-font-bolder">{{`${$t('planItems.posNo')} : ${plan.pos_no}`}}</li>
                        <li class="t-font-bolder">{{`${$t('planItems.productsNo')} : ${plan.item_no}`}}</li>
                        <li v-if="isTrial(plan)" class="t-font-bolder">{{`${$t('planItems.trialInterval')} :
                            ${plan.interval_trail}`}}
                        </li>
                    </ul>
                </div>
                <button type="button" :class="`btn btn-lg btn-${color(index)}  btn-rounded m-1`"
                        @click="requestPlan(plan)">
                    {{$t('purchase')}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PlanComponent",
        data() {
            return {
                plans: []
            };
        },
        mounted() {
            let _this = this;
            _this.request(
                _this.route('subscription.plan.get'),
                {
                    params: {}
                },
                function ({data}) {
                    _this.plans = data.data;
                    console.log('subscription', data);
                },
                function (response) {
                    console.log('subscription', response);
                }
            )
        },
        methods: {
            requestPlan(plan) {
                this.$emit('request', plan);
            },
            icon(plan) {
                return this.isTrial(plan) ? 'i-Medal-3' : 'i-Medal-2';
            },
            intervals(plan) {
                return plan.hasOwnProperty('intervals') ? plan.intervals : [];
            },
            isTrial(plan) {
                return plan.is_trial;
            },
            color(index) {
                switch (index) {
                    case 0:
                        return 'success';
                    case 1 :
                        return 'warning';
                    case 3 :
                        return 'danger';
                    default :
                        return 'primary';
                }
            }
        },
        computed: {
            computedPlans: function () {
                return _.take(this.plans, 4);
            },
            columnsNo() {
                return this.computedPlans.length === 3 ? 4 : 3;
            },

        }
    }
</script>

<style>
    @media (min-width: 1024px) {
        .auth-layout-wrap .auth-content {
            min-width: 1000px !important;
        }
    }

    .ul-pricing__image i {
        font-size: 5rem;
    }

    .interval-price {
        direction: ltr;
        font-size: 23px !important;
    }

    .interval-price span.pricing-currency {
        font-size: 13px !important;
    }

    .interval-price span.pricing-name {
        color: #808080 !important;
        font-size: 15px !important;
        font-weight: 600 !important;
    }

    .ul-pricing__header {
        padding-top: 30px;
    }

    @import url('https://fonts.googleapis.com/css?family=Cairo:300&display=swap');
    body * {
        font-family: 'Cairo', serif !important;
    }
</style>