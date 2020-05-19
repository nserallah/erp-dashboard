<template>
    <b-form>
        <div class="form-group">
            <div class="alert alert-success" v-if="nonce">
                Successfully generated nonce.
            </div>
            <div class="alert alert-danger" v-if="error">
                {{ error }}
            </div>
            <label for="amount">Amount</label>
            <div class="input-group">
                <div class="input-group-prepend"><span class="input-group-text">$</span></div>
                <input type="number" id="amount" class="form-control" placeholder="Enter Amount" v-model="amount"
                       disabled="disabled">
            </div>
        </div>
        <hr/>
        <div class="form-group">
            <label>Credit Card Number</label>
            <div id="creditCardNumber" class="form-control"></div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-6">
                    <label>Expire Date</label>
                    <div id="expireDate" class="form-control" ref="expireDate"></div>
                </div>
                <div class="col-6">
                    <label>CVV</label>
                    <div id="cvv" class="form-control"></div>
                </div>
            </div>
        </div>

        <button class="btn btn-primary btn-block" @click.prevent="payWithCreditCard" v-show="showPayButton">Pay with
            Credit
            Card
        </button>

    </b-form>
</template>
<script>
    import braintree from 'braintree-web';
    import braintreeCredentials from '../../data/braintree'


    export default {
        props: {
            amount: {
                type: Number,
            },
            showPayButton: {
                default: true
            }

        },
        data: () => {
            return {
                hostedFieldInstance: false,
                nonce: "",
                error: ""
            }
        },
        methods: {
            payWithCreditCard(paymentResult = undefined, errorResult = undefined) {
                let ref = this
                if (this.hostedFieldInstance) {
                    this.hostedFieldInstance.tokenize()
                        .then(payload => {
                            if (paymentResult != undefined) {
                                paymentResult(payload, this.amount)
                            }
                            console.log(payload);
                        }).catch(err => {
                        if (paymentResult != undefined) {
                            errorResult(err, this.amount)
                        }
                        ref.showAlert(ref.alerts.type.error, err.message, ref.alerts.titles.payment)
                    })
                }
            }
        },
        mounted() {
            braintree.client.create(braintreeCredentials)
                .then(clientInstance => {
                    let options = {
                        client: clientInstance,
                        styles: {
                            input: {
                                'font-size': '14px',
                                'font-family': 'Open Sans'
                            }
                        },
                        fields: {
                            number: {
                                selector: '#creditCardNumber',
                                placeholder: 'Enter Credit Card'
                            },
                            cvv: {
                                selector: '#cvv',
                                placeholder: 'Enter CVV'
                            },
                            expirationDate: {
                                selector: '#expireDate',
                                placeholder: '00 / 0000'
                            }
                        }
                    }
                    return braintree.hostedFields.create(options)
                })
                .then(hostedFieldInstance => {
                    this.hostedFieldInstance = hostedFieldInstance;

                    // @TODO - Use hostedFieldInstance to send data to Braintree
                })
                .catch(err => {
                    this.error = err.message;

                    console.log('err', err)
                });
        }

    }
</script>