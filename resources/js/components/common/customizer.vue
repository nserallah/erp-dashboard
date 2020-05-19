<template>
    <div>
        <div class="customizer" :class="{ open: isOpen }">
            <div class="handle" @click="isOpen = !isOpen">
                <i class="i-Gear spin"></i>
            </div>

            <vue-perfect-scrollbar
                    :settings="{ suppressScrollX: true, wheelPropagation: false }"
                    class="customizer-body ps rtl-ps-none"
            >
                <div class="">
                    <div class="card-header" id="headingOne">
                        <p class="mb-0">
                            {{$t('direction')}}
                        </p>
                    </div>

                    <div class="card-body">
                        <label class="checkbox checkbox-primary">
                            <input
                                    type="checkbox"
                                    id="rtl-checkbox"
                                    @change="changeThemeRtl"
                            />
                            <span>{{$t('RTL')}}</span>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>

                <!--                <div class="">-->
                <!--                    <div class="card-header">-->
                <!--                        <p class="mb-0">-->
                <!--                            Dark Mode-->
                <!--                        </p>-->
                <!--                    </div>-->

                <!--                    &lt;!&ndash;                    <div class="card-body">&ndash;&gt;-->
                <!--                    &lt;!&ndash;                        <label class="switch switch-primary mr-3 mt-2"&ndash;&gt;-->
                <!--                    &lt;!&ndash;                               v-b-popover.hover.left="'Dark Mode'">&ndash;&gt;-->
                <!--                    &lt;!&ndash;                            <input type="checkbox" @click="changeThemeMode"/>&ndash;&gt;-->
                <!--                    &lt;!&ndash;                            <span class="slider"></span>&ndash;&gt;-->
                <!--                    &lt;!&ndash;                        </label>&ndash;&gt;-->
                <!--                    &lt;!&ndash;                    </div>&ndash;&gt;-->
                <!--                </div>-->
                <div class="">
                    <div class="card-header">
                        <p class="mb-0">
                            {{$t('Language')}}
                        </p>
                    </div>
                    <div class="card-body">
                        <b-button variant="default m-1" @click="changeLang('en')">
                            <flag iso="US"/>
                        </b-button>
                        <b-button variant="default m-1" @click="changeLang('ar')">
                            <flag iso="eg"/>
                        </b-button>
                    </div>
                </div>
            </vue-perfect-scrollbar>
        </div>
    </div>
</template>

<script>
    import store, {mapActions, mapGetters} from "vuex";

    export default {
        data() {
            return {
                isOpen: false
            };
        },

        computed: {
            ...mapGetters(["getThemeMode", "getcompactLeftSideBarBgColor"])
        },

        methods: {
            ...mapActions([
                "changeThemeRtl",
                "changeThemeLayout",
                "changeThemeMode",
                "changecompactLeftSideBarBgColor"
            ]),
            changeLang(lang) {
                this.$i18n.locale = lang;
                localStorage.setItem('super-lang', lang)
                if (lang == 'ar') {
                    this.$store.commit('setRtl')
                } else {
                    this.$store.commit('setLtr')
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
</style>