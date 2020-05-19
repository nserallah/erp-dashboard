<template>
    <tab>
        <braintree ref="braintree" :amount="amount" :show-pay-button="showPayButton"></braintree>
    </tab>
</template>

<script>
    import braintree from '@/components/payment/braintree'
    import tab from '../tab'

    export default {
        name: "Paypal.vue",
        props: ['amount', 'showPayButton'],
        extends: tab,
        components: {braintree, tab},
        methods: {
            pay(success, error) {
                this.$refs.braintree.payWithCreditCard(success, error);
            }
        }
    }
</script>

<style scoped>

</style>