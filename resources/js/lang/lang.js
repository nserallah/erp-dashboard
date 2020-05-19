import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

let lang = localStorage.getItem('lang');
// console.log('localStorage' , lang)
let defaultLang = 'en'
if (lang != null) {
    defaultLang = lang;
} else {
    localStorage.setItem('lang', defaultLang)
}
const DEFAULT_LANG = defaultLang; //library default lang
const locales = {
  ar: require("./i18n/ar.json"),
  en: require("./i18n/en.json"),
  // de: require("./i18n/de.json")
};
const i18n = new VueI18n({
    locale: DEFAULT_LANG,
    messages: locales
});

export default i18n;
