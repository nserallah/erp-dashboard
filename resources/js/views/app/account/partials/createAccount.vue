<template>
    <tab title="Basic Info" icon="ti-user" :key="'create_account'"
         name="Account" info="Account" :selected="true">
        <b-form @submit.prevent="submit">
            <b-form-group :label="$t('Email')">
                <b-form-input
                        class="form-control form-control-rounded"
                        label="Email"
                        type="text"
                        v-validate="'required|email'"
                        v-model.trim="form.email"
                        name="email"
                >
                </b-form-input>
                <span class="md-error"
                      v-if="errors.has('email') || ( validation.form.email != undefined && validation.form.email.length > 0)">
                                        {{errors.has('email') ? errors.first('email') : validation.form.email[0]}}
                </span>

            </b-form-group>

            <b-form-group :label="$t('Password')">
                <b-form-input
                        class="form-control form-control-rounded"
                        label="Password"
                        type="password"
                        v-validate="'required'"
                        name="password"
                        v-model.trim="form.password"
                        ref="password"
                >
                </b-form-input>
                <span class="md-error"
                      v-if="errors.has('password') || ( validation.form.password != undefined && validation.form.password.length > 0)">
                                        {{errors.has('password') ? errors.first('password') : validation.form.password[0]}}
                </span>

            </b-form-group>

            <b-form-group :label="$t('Confirm password')">
                <b-form-input
                        class="form-control form-control-rounded"
                        label="Confirm password"
                        type="password"
                        name="password_confirmation"
                        v-validate="'required|confirmed:password'"
                        v-model.trim="form.password_confirmation"
                >
                </b-form-input>
                <span class="md-error"
                      v-if="errors.has('password_confirmation') || ( validation.form.password_confirmation != undefined && validation.form.password_confirmation.length > 0)">
                                        {{errors.has('password_confirmation') ? errors.first('password_confirmation') : validation.form.password_confirmation[0]}}
                </span>
            </b-form-group>
            <b-button
                    type="submit"
                    block
                    variant="primary"
                    class="btn-rounded"
                    v-show="false"
            >Sign Up
            </b-button
            >
        </b-form>
    </tab>
</template>

<script>
    import tab from '../tab'

    const form = {
        password: '',
        password_confirmation: '',
        email: ''
    }
    export default {
        name: "createAccount",
        /**
         * inihirt the tab's attributes and methods
         * @author Amr
         */
        extends: tab,
        components: {tab},
        data: () => {
            return {
                form,
            }
        },
        created() {
            console.log('plan' , this.$route.params)
        }
    }
</script>

<style scoped>

</style>
