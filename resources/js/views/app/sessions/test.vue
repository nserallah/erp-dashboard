<template>
    <div class="auth-layout-wrap" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
        <div class="auth-content">
            <div class="card o-hidden">
                <div class="row">
                    <b-col md="12">
                        <plan-component @request="onRequest"/>
                    </b-col>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {required, sameAs, minLength} from "vuelidate/lib/validators";
    import {mapGetters, mapActions} from "vuex";
    import PlanComponent from "../../../components/PlanComponent";

    export default {
        components: {PlanComponent},
        metaInfo: {
            // if no subcomponents specify a metaInfo.title, this title will be used
            title: "SignUp"
        },

        data() {
            return {
                fName: "",
                email: "",
                bgImage: require("@/assets/images/photo-wide-4.jpg"),
                logo: require("@/assets/images/logo.png"),
                signInImage: require("@/assets/images/photo-long-3.jpg"),
                password: "",
                repeatPassword: "",
                submitStatus: null
            };
        },

        methods: {
            onRequest: function (plan) {
                console.log(plan)
                this.$router.push({name: 'company.register', query: {planId: plan.id}})
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


