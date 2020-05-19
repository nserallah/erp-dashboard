<template>
    <div>
        <router-view></router-view>

        <customizer></customizer>

        <v-loader :show="is_loading"></v-loader>
    </div>
</template>


<script>
    import {mapGetters, mapState} from "vuex";
    import vLoader from "@/components/common/Loader";

    export default {
        components: {
            'v-loader': vLoader
        },
        data() {
            return {};
        },
        computed: {
            ...mapState({
                is_loading: state => state.loader.is_loading,
            }),
            ...mapGetters(["getThemeMode"]),
            themeName() {
                return this.getThemeMode.dark ? "dark-theme" : " ";
            },
            rtl() {
                return this.getThemeMode.rtl ? "rtl" : " ";
            }
        },
        created() {
            let lang = localStorage.getItem('super-lang')
            if (!lang)
                return;
            this.$i18n.locale = lang;
            if (lang == 'ar') {
                this.$store.commit('setRtl')
            } else {
                this.$store.commit('setLtr')
            }
        },
        metaInfo() {
            return {
                // if no subcomponents specify a metaInfo.title, this title will be used
                title: "Erp",
                // all titles will be injected into this template
                titleTemplate: "Erp Super admin dashboard",
                bodyAttrs: {
                    class: [this.themeName]
                },
                htmlAttrs: {
                    dir: this.rtl
                }
            };
        }
    };
</script>

<style>
    .md-error {
        color: red;
    }
</style>


