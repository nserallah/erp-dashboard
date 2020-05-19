<template>
    <div
            class="auth-layout-wrap"
            :style="{ backgroundImage: 'url(' + bgImage + ')' }"
    >
        <div class="auth-content">
            <div class="card o-hidden">
                <div class="row">
                    <div class="col-md-12">
                        <div class="p-4">
                            <div class="auth-logo text-center mb-30">
                                <img :src="logo"/>
                            </div>
                            <h1 class="mb-3 text-18">{{$t('Sign In')}}</h1>
                            <b-form @submit.prevent="formSubmit">
                                <b-form-group
                                        :label="$t('Email Address')"
                                        class="text-12">
                                    <b-form-input
                                            class="form-control-rounded"
                                            type="text"
                                            v-model="email"
                                            email
                                            required
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group :label="$t('Password')" class="text-12">
                                    <b-form-input
                                            class="form-control-rounded"
                                            type="password"
                                            v-model="password"
                                    ></b-form-input>
                                </b-form-group>

                                <!-- <b-button block to="/" variant="primary btn-rounded mt-2"
                                  >Sign In</b-button
                                > -->
                                <b-button
                                        type="submit"
                                        tag="button"
                                        class="btn-rounded btn-block mt-2"
                                        variant="primary mt-2"
                                        :disabled="loading"
                                >
                                    {{$t('SignIn')}}
                                </b-button>
                                <div v-once class="typo__p" v-if="loading">
                                    <div class="spinner sm spinner-primary mt-3"></div>
                                </div>
                            </b-form>

                            <div class="mt-3 text-center" style="display:none">
                                <router-link to="forgot" tag="a" class="text-muted">
                                    <u>Forgot Password?</u>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from "vuex";

    export default {
        metaInfo: {
            // if no subcomponents specify a metaInfo.title, this title will be used
            title: "SignIn"
        },
        data() {
            return {
                email: "",
                password: "",
                // // password: "vue006",
                userId: "",
                bgImage: require("@/assets/images/photo-wide-4.jpg"),
                logo: require("@/assets/images/logo.png"),
                signInImage: require("@/assets/images/photo-long-3.jpg")
            };
        },
        computed: {
            validation() {
                return this.userId.length > 4 && this.userId.length < 13;
            },
            ...mapGetters(["loggedInUser", "loading", "error"])
        },

        methods: {
            ...mapActions(["login"]),
            ...mapGetters(["getNavigator"]),
            formSubmit() {
                let navigator = this.getNavigator();
                this.login({email: this.email, password: this.password, navigator: navigator});
            },
            makeToast(variant = null, msg) {
                this.$bvToast.toast(msg, {
                    title: ` ${variant || "default"}`,
                    variant: variant,
                    solid: true
                });
            },
        },
        watch: {
            loggedInUser(val) {
                if (val && val.uid && val.uid.length > 0) {
                    this.makeToast("success", "Successfully Logged In");
                    setTimeout(() => {
                        this.$router.push("/");
                    }, 200);
                }
            },
            error(val) {
                if (val != null) {
                    this.makeToast("warning", val.message);
                }
            }
        }
    };
</script>

<style>
    .spinner.sm {
        height: 2em;
        width: 2em;
    }
</style>
