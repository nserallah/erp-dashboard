<template>
    <tab title="Payment info" icon="i-Car-Coins" :key="'create_payment'"
         name="Payment" info="payment">
        <b-form>
            <b-row>
                <b-form-group label="Payment method:"
                              label-for="input-1"
                              class="col-md-12">
                    <multiselect track-by="name"
                                 id="payment_type"
                                 label="name" :options="payment_methods"
                                 v-model="form.payment_method"
                                 v-validate="'required'"
                                 :allow-empty="false"
                                 :placeholder="$t('settings.constants.select_parent')">
                    </multiselect>

                </b-form-group>

                <span class="md-error"
                      v-if="errors.has('form.payment_method') || ( validation.form.payment_method != undefined && validation.form.payment_method.length > 0)">
                                        {{errors.has('form.payment_method') ? errors.first('payment_method') : validation.form.payment_method[0]}}
                </span>


                <!--                <b-form-group label="Yeallry or Monthly" class="col-md-12" :disabled="isDisabled">-->
                <!--                    <label class="radio radio-primary" v-for="type in price_type">-->
                <!--                        <input type="radio" name="activity_type_id"-->
                <!--                               :value="type"-->
                <!--                               v-validate="'required'"-->
                <!--                               v-model="price_type_selection">-->
                <!--                        <span>{{type.name}}</span>-->
                <!--                        <span class="checkmark"></span>-->
                <!--                    </label>-->
                <!--                    <span class="md-error"-->
                <!--                          v-if="errors.has('price_type_selection') || ( validation.price_type_selection != undefined && validation.price_type_selection.length > 0)">-->
                <!--                                        {{errors.has('price_type_selection') ? errors.first('price_type_selection') : validation.price_type_selection[0]}}-->
                <!--                </span>-->
                <!--                </b-form-group>-->

                <b-form-group label="Payment Interval:"
                              label-for="input-1"
                              class="col-md-12">
                    <multiselect track-by="name" label="name" :options="intervals"
                                 v-model="form.interval"
                                 v-validate="'required'"
                                 :allow-empty="false"
                                 :placeholder="$t('settings.constants.select_interval')">
                    </multiselect>

                    <span class="md-error"
                          v-if="errors.has('form.interval') || ( validation.form.interval != undefined && validation.form.interval.length > 0)">
                                        {{errors.has('interval') ? errors.first('interval') : validation.form.interval[0]}}
                </span>
                </b-form-group>


                <b-form-group
                        id="input-group-1"
                        label="Price:"
                        label-for="input-1"
                        class="col-md-12"
                >
                    <b-form-input
                            id="input-1"
                            type="text"
                            v-validate="'required'"
                            v-model.trim="form.price"
                            disabled=""
                            required
                    ></b-form-input>
                    <span class="md-error"
                          v-if="errors.has('price') || ( validation.form.price != undefined && validation.form.price.length > 0)">
                                        {{errors.has('price') ? errors.first('price') : validation.form.price[0]}}
                </span>
                </b-form-group>
            </b-row>
        </b-form>
    </tab>
</template>

<script>
    import instance, {routes} from '@/util/axios'
    import Multiselect from "vue-multiselect/src/Multiselect";
    import paypalCredentioal from '@/data/paypal'
    import tab from '../tab'

    const form = {
        payment_method: '',
        price: '',
        currency: '',
        yearly_monthly: '',
        plan_id: 0,
        interval: ''
    }
    export default {
        name: "paymentForm",
        props: ['disabledContent', 'isTrial', 'company'],
        extends: tab,
        data: () => {
            return {
                paypalCredentioal,
                form,
                payment_methods: [],
                currencies: [],
                price_type_selection: 1,
                isDisabled: true,
                paypalId: 0,
                intervals: [],
                price_type: [
                    {
                        id: 1,
                        type: 'price_year',
                        name: 'Yearly price',
                        price: 0,
                    },
                    {
                        id: 2,
                        type: 'monthly_price',
                        name: 'Monthly price',
                        price: 0,
                    }
                ]
            };
        },
        components: {Multiselect, tab},
        mounted() {
            this.fetch();

        },
        methods: {
            fetch() {
                let param = {
                    'key': 'PAYMENT_METHOD'
                }
                let ref = this;
                instance.get(routes.constants.search(param)).then(({data}) => {
                    if (data.status == 200 || data.status == 'success') {
                        ref.payment_methods = data.data.data;
                    }
                    this.form.payment_method = ref.payment_methods[0];
                    data.data.data.map((item) => {
                        console.log('item', item.name)
                        if (item.name == "Paypal")
                            ref.paypalId = item;
                    })
                });
            }
        },
        watch: {
            price_type_selection: function (newValue, oldValue) {
                this.form.price = this.price_type_selection.price;
            },
            'form.payment_method': function (newValue, oldValue) {
                let isPaid = false;
                let amount = null;
                if (this.form.payment_method == this.paypalId) {
                    isPaid = true;
                    amount = this.form.price;
                }

                this.$emit('setPaid', isPaid, amount);
            },
            'form.interval': function (newValue, oldValue) {

                if (newValue && newValue.value)
                    this.form.price = newValue.value;
                // console.log(this.form.interval);
            }
        },
        created() {
            let plan = this.company.plan;
            let intervals = this.company.plan.plan_intervals;
            let customInterval = [];
            intervals.map((interval) => {
                this.intervals.push({
                    name: interval.interval.locale_name,
                    value: interval.price,
                    plane_interval: interval.id,
                    interval_id: interval.interval_id
                })
            })
            this.form.interval = this.intervals[0]
            // this.intervals = customInterval;
            this.price_type[0].price = plan.price_year
            this.price_type[1].price = plan.price_month
            if (plan.price_month != 0 && plan.price_year != 0) {
                this.isDisabled = false;
            }
            if (plan.price_month != 0) {
                this.price_type_selection = this.price_type[1];
            } else {
                this.price_type_selection = this.price_type[0];
            }
        }
    }
</script>

<style scoped>

</style>