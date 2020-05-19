(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav */ "./resources/js/containers/layouts/largeSidebar/TopNav.vue");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Topnav: _TopNav__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isDisplay: true,
      isMenuOver: false,
      isStyle: true,
      selectedParentMenu: "",
      isMobile: mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__["isMobile"]
    };
  },
  mounted: function mounted() {
    this.toggleSelectedParentMenu();
    window.addEventListener("resize", this.handleWindowResize);
    document.addEventListener("click", this.returnSelectedParentMenu);
    this.handleWindowResize();
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('click', this.returnSelectedParentMenu);
    window.removeEventListener('resize', this.handleWindowResize);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(["getSideBarToggleProperties"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(["changeSecondarySidebarProperties", "changeSecondarySidebarPropertiesViaMenuItem", "changeSecondarySidebarPropertiesViaOverlay", "changeSidebarProperties"]), {
    handleWindowResize: function handleWindowResize() {
      //  console.log('not working is Mobile');
      if (window.innerWidth <= 1200) {
        if (this.getSideBarToggleProperties.isSideNavOpen) {
          this.changeSidebarProperties();
        }

        if (this.getSideBarToggleProperties.isSecondarySideNavOpen) {
          this.changeSecondarySidebarProperties();
        }
      } else {
        if (!this.getSideBarToggleProperties.isSideNavOpen) {
          this.changeSidebarProperties();
        }
      }
    },
    toggleSelectedParentMenu: function toggleSelectedParentMenu() {
      var currentParentUrl = this.$route.path.split("/").filter(function (x) {
        return x !== "";
      })[1];

      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "dashboards";
      }
    },
    toggleSubMenu: function toggleSubMenu(e) {
      var childrens = this.$refs.sidebarChild.children;
      var parent = e.target.dataset.item;
      this.selectedParentMenu = parent;
      this.changeSecondarySidebarPropertiesViaMenuItem(true);
    },
    removeOverlay: function removeOverlay() {
      this.changeSecondarySidebarPropertiesViaOverlay();

      if (window.innerWidth <= 1200) {
        this.changeSidebarProperties();
      }

      this.toggleSelectedParentMenu();
    },
    returnSelectedParentMenu: function returnSelectedParentMenu() {
      if (!this.isMenuOver) {
        this.toggleSelectedParentMenu();
      }
    },
    toggleSidebarDropdwon: function toggleSidebarDropdwon(event) {
      var dropdownMenus = this.$el.querySelectorAll(".dropdown-sidemenu.open");
      event.currentTarget.classList.toggle("open");
      dropdownMenus.forEach(function (dropdown) {
        dropdown.classList.remove("open");
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./resources/js/utils/index.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar */ "./resources/js/containers/layouts/largeSidebar/Sidebar.vue");
/* harmony import */ var _common_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/search */ "./resources/js/containers/layouts/common/search.vue");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Sidebar: _Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    searchComponent: _common_search__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isDisplay: true,
      isStyle: true,
      isSearchOpen: false,
      isMouseOnMegaMenu: true,
      isMegaMenuOpen: false
    };
  },
  mounted: function mounted() {// document.addEventListener("click", this.closeMegaMenu);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(["getSideBarToggleProperties"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])(["changeSecondarySidebarProperties", "changeSidebarProperties", "changeThemeMode", "signOut"]), {
    handleFullScreen: function handleFullScreen() {
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].toggleFullScreen();
    },
    logoutUser: function logoutUser() {
      this.signOut();
      this.$router.push("/app/sessions/signIn");
    },
    closeMegaMenu: function closeMegaMenu() {
      // console.log(this.isMouseOnMegaMenu);
      if (!this.isMouseOnMegaMenu) {
        this.isMegaMenuOpen = !this.isMegaMenuOpen;
      }
    },
    toggleMegaMenu: function toggleMegaMenu() {
      this.isMegaMenuOpen = !this.isMegaMenuOpen;
    },
    toggleSearch: function toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },
    sideBarToggle: function sideBarToggle(el) {
      if (this.getSideBarToggleProperties.isSideNavOpen && this.getSideBarToggleProperties.isSecondarySideNavOpen && mobile_device_detect__WEBPACK_IMPORTED_MODULE_3__["isMobile"]) {
        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
      } else if (this.getSideBarToggleProperties.isSideNavOpen && this.getSideBarToggleProperties.isSecondarySideNavOpen) {
        this.changeSecondarySidebarProperties();
      } else if (this.getSideBarToggleProperties.isSideNavOpen) {
        this.changeSidebarProperties();
      } else if (!this.getSideBarToggleProperties.isSideNavOpen && !this.getSideBarToggleProperties.isSecondarySideNavOpen && !this.getSideBarToggleProperties.isActiveSecondarySideNav) {
        this.changeSidebarProperties();
      } else if (!this.getSideBarToggleProperties.isSideNavOpen && !this.getSideBarToggleProperties.isSecondarySideNavOpen) {
        // console.log("4");
        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties(); // console.log("4");
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./resources/js/containers/layouts/largeSidebar/Sidebar.vue");
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNav */ "./resources/js/containers/layouts/largeSidebar/TopNav.vue");
/* harmony import */ var _common_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/footer */ "./resources/js/containers/layouts/common/footer.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Sidebar: _Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    TopNav: _TopNav__WEBPACK_IMPORTED_MODULE_1__["default"],
    appFooter: _common_footer__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(["getSideBarToggleProperties"])),
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=7d8ca4e3&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=7d8ca4e3&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "side-content-wrap",
      on: {
        mouseenter: function($event) {
          _vm.isMenuOver = true
        },
        mouseleave: function($event) {
          _vm.isMenuOver = false
        },
        touchstart: function($event) {
          _vm.isMenuOver = true
        }
      }
    },
    [
      _c(
        "vue-perfect-scrollbar",
        {
          ref: "myData",
          staticClass: "sidebar-left rtl-ps-none ps scroll",
          class: { open: _vm.getSideBarToggleProperties.isSideNavOpen },
          attrs: {
            settings: { suppressScrollX: true, wheelPropagation: false }
          }
        },
        [
          _c("div", [
            _c("ul", { staticClass: "navigation-left" }, [
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "dashboards" },
                  attrs: { "data-item": "dashboards" },
                  on: { mouseenter: _vm.toggleSubMenu }
                },
                [
                  _c(
                    "a",
                    { staticClass: "nav-item-hold", attrs: { href: "#" } },
                    [
                      _c("i", { staticClass: "nav-icon i-Bar-Chart" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [
                        _vm._v(_vm._s(_vm.$t("dashboard")))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" })
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "ui-kits" },
                  attrs: { "data-item": "ui-kits" },
                  on: { mouseenter: _vm.toggleSubMenu }
                },
                [
                  _c(
                    "a",
                    { staticClass: "nav-item-hold", attrs: { href: "#" } },
                    [
                      _c("i", { staticClass: "nav-icon i-Library" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [
                        _vm._v("UI kits")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" })
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "extrakits" },
                  attrs: { "data-item": "extrakits" },
                  on: { mouseenter: _vm.toggleSubMenu }
                },
                [
                  _c(
                    "a",
                    { staticClass: "nav-item-hold", attrs: { href: "#" } },
                    [
                      _c("i", { staticClass: "nav-icon i-Suitcase" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [
                        _vm._v("Extra kits")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" })
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "apps" },
                  attrs: { "data-item": "apps" },
                  on: { mouseenter: _vm.toggleSubMenu }
                },
                [
                  _c(
                    "a",
                    { staticClass: "nav-item-hold", attrs: { href: "#" } },
                    [
                      _c("i", { staticClass: "nav-icon i-Computer-Secure" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [_vm._v("Apps")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" })
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "charts" },
                  attrs: { "data-item": "charts" },
                  on: { mouseenter: _vm.toggleSubMenu }
                },
                [
                  _c(
                    "a",
                    { staticClass: "nav-item-hold", attrs: { href: "#" } },
                    [
                      _c("i", { staticClass: "nav-icon i-Pie-Chart-2" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [
                        _vm._v("Charts")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" })
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "widgets" },
                  attrs: { "data-item": "widgets" },
                  on: { mouseenter: _vm.toggleSubMenu }
                },
                [
                  _c(
                    "a",
                    { staticClass: "nav-item-hold", attrs: { href: "#" } },
                    [
                      _c("i", { staticClass: "nav-icon i-Windows-2" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [
                        _vm._v("Widgets")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" })
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "forms" },
                  attrs: { "data-item": "forms" },
                  on: { mouseenter: _vm.toggleSubMenu }
                },
                [
                  _c(
                    "a",
                    { staticClass: "nav-item-hold", attrs: { href: "#" } },
                    [
                      _c("i", {
                        staticClass: "nav-icon i-File-Clipboard-File--Text"
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [_vm._v("Forms")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" })
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "datatables" },
                  attrs: { "data-item": "datatables" },
                  on: { mouseenter: _vm.toggleSubMenu }
                },
                [
                  _c(
                    "a",
                    { staticClass: "nav-item-hold", attrs: { href: "#" } },
                    [
                      _c("i", {
                        staticClass: "nav-icon i-File-Horizontal-Text"
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [
                        _vm._v("Datatables")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" })
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "sessions" },
                  attrs: { "data-item": "sessions" },
                  on: { mouseenter: _vm.toggleSubMenu }
                },
                [
                  _c(
                    "a",
                    { staticClass: "nav-item-hold", attrs: { href: "#" } },
                    [
                      _c("i", { staticClass: "nav-icon i-Administrator" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [
                        _vm._v("Sessions")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" })
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "pages" },
                  attrs: { "data-item": "pages" },
                  on: { mouseenter: _vm.toggleSubMenu }
                },
                [
                  _c(
                    "a",
                    { staticClass: "nav-item-hold", attrs: { href: "#" } },
                    [
                      _c("i", { staticClass: "nav-icon i-Double-Tap" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [_vm._v("Pages")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" })
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "doc" },
                  on: {
                    mouseenter: function($event) {
                      _vm.selectedParentMenu = "doc"
                    }
                  }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "nav-item-hold",
                      attrs: {
                        href: "http://demos.ui-lib.com/gull-vue-doc/",
                        target: "_blank"
                      }
                    },
                    [
                      _c("i", { staticClass: "nav-icon i-Safe-Box1" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "nav-text" }, [_vm._v("Doc")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "triangle" })
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "sidebar-left-secondary ps rtl-ps-none",
          class: {
            open: _vm.getSideBarToggleProperties.isSecondarySideNavOpen
          },
          attrs: {
            settings: { suppressScrollX: true, wheelPropagation: false }
          }
        },
        [
          _c("div", { ref: "sidebarChild" }, [
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "dashboards" },
                attrs: { "data-parent": "dashboards" }
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: { tag: "a", to: "/app/dashboards/dashboard.v1" }
                      },
                      [
                        _c("i", { staticClass: "nav-icon i-Clock-3" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v(_vm._s(_vm.$t("dashboardItems.versionOne")))
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: { tag: "a", to: "/app/dashboards/dashboard.v2" }
                      },
                      [
                        _c("i", { staticClass: "nav-icon i-Clock-4" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v(_vm._s(_vm.$t("dashboardItems.versionTwo")))
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: { tag: "a", to: "/app/dashboards/dashboard.v3" }
                      },
                      [
                        _c("i", { staticClass: "nav-icon i-Over-Time" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v(_vm._s(_vm.$t("dashboardItems.versionThree")))
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: { tag: "a", to: "/app/dashboards/dashboard.v4" }
                      },
                      [
                        _c("i", { staticClass: "nav-icon i-Clock" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v(_vm._s(_vm.$t("dashboardItems.versionFour")))
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "forms" },
                attrs: { "data-parent": "forms" }
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/forms/basicForms" } },
                      [
                        _c("i", {
                          staticClass: "nav-icon i-File-Clipboard-Text--Image"
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Basic Elements")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/forms/formLayouts" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Split-Vertical" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Form Layouts")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/forms/basicActionBar" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Receipt-4" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Basic Action Bar")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/forms/formComponent" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Close-Window" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Form Validation")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/forms/formWizard" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Width-Window" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Form Wizard")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/forms/tagInput" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Tag-2" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Tag Input")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/forms/mask" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Pen-2" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Form Mask")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "datatables" },
                attrs: { "data-parent": "forms" }
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/datatables/paging" } },
                      [
                        _c("i", {
                          staticClass: "nav-icon i-Split-Four-Square-Window"
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Paging")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/datatables/filter" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Split-Vertical" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Filter")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/datatables/list" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Split-Vertical" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("List")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          tag: "a",
                          to: "/app/datatables/vue-good-table"
                        }
                      },
                      [
                        _c("i", { staticClass: "nav-icon i-Split-Horizontal" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Vue Good Table")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "apps" },
                attrs: { "data-parent": "apps" }
              },
              [
                _c(
                  "li",
                  {
                    staticClass: "nav-item dropdown-sidemenu",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.toggleSidebarDropdwon($event)
                      }
                    }
                  },
                  [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "nav-icon i-File" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "item-name" }, [
                        _vm._v("Invoice")
                      ]),
                      _vm._v(" "),
                      _c("i", { staticClass: "dd-arrow i-Arrow-Down" })
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "submenu" }, [
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            { attrs: { tag: "a", to: "/app/apps/invoice" } },
                            [
                              _c("i", { staticClass: "nav-icon i-Files" }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Invoice List")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: { tag: "a", to: "/app/apps/createInvoice" }
                            },
                            [
                              _c("i", { staticClass: "nav-icon i-Add-File" }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Create Invoice")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: { tag: "a", to: "/app/apps/printInvoice" }
                            },
                            [
                              _c("i", { staticClass: "nav-icon i-File-JPG" }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Print Invoice")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "nav-item dropdown-sidemenu",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.toggleSidebarDropdwon($event)
                      }
                    }
                  },
                  [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "nav-icon i-File-CSV" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "item-name" }, [
                        _vm._v("Contacts"),
                        _c(
                          "span",
                          {
                            staticClass: " ml-2 badge badge-pill badge-danger"
                          },
                          [_vm._v("New")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("i", { staticClass: "dd-arrow i-Arrow-Down" })
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "submenu" }, [
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: { tag: "a", to: "/app/apps/contact-list" }
                            },
                            [
                              _c("i", { staticClass: "nav-icon i-File-CSV" }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Contact Lists")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: { tag: "a", to: "/app/apps/contact-grid" }
                            },
                            [
                              _c("i", { staticClass: "nav-icon i-File-CSV" }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Contact Grid")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                tag: "a",
                                to: "/app/apps/contact-details"
                              }
                            },
                            [
                              _c("i", { staticClass: "nav-icon i-File-CSV" }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Contact Details")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/apps/taskManager" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Add-File" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Task Manager")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/apps/calendar" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Calendar-3" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Calendar")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/apps/inbox" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Email" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Inbox")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/apps/chat" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Speach-Bubble-3" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Chat")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "extrakits" },
                attrs: { "data-parent": "extrakits" }
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/extraKits/dropdown" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Arrow-Down" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Dropdown")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: { tag: "a", to: "/app/extraKits/imageCropper" }
                      },
                      [
                        _c("i", { staticClass: "nav-icon i-Crop-2" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Image Cropper")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/extraKits/loaders" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Loading-3" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Loaders")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/extraKits/toasts" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Bell" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Toastr")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/extraKits/sweetAlerts" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Approved-Window" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Sweet Alerts")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/extraKits/tour" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Plane" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("User Tour")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/extraKits/vCalendar" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Calendar-4" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("V-Calendar")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "ui-kits" },
                attrs: { "data-parent": "ui-kits" }
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/ui-kits/alerts" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Bell1" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Alerts")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/ui-kits/accordion" } },
                      [
                        _c("i", {
                          staticClass: "nav-icon i-Split-Horizontal-2-Window"
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Accordion")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/ui-kits/badges" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Medal-2" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Badges")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/ui-kits/buttons" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Cursor-Click" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Buttons")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/ui-kits/cards" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Line-Chart-2" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Cards")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/ui-kits/carousel" } },
                      [
                        _c("i", {
                          staticClass: "nav-icon i-Video-Photographer"
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Carousels")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/ui-kits/list" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Belt-3" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Lists")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/ui-kits/pagination" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Arrow-Next" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Paginations")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/ui-kits/popover" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Speach-Bubble-2" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Popover")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/ui-kits/progressbar" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Loading" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Progressbar")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/ui-kits/bootstrap-tab" } },
                      [
                        _c("i", { staticClass: "nav-icon i-New-Tab" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Tabs")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/ui-kits/modals" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Duplicate-Window" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Modals")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/ui-kits/collapsible" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Width-Window" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Collapsible")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/ui-kits/typography" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Width-Window" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Typography")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "charts" },
                attrs: { "data-parent": "charts" }
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/charts/eChart" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Line-Chart-2" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Echart")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "nav-item dropdown-sidemenu",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.toggleSidebarDropdwon($event)
                      }
                    }
                  },
                  [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "nav-icon i-Line-Chart" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "item-name" }, [
                        _vm._v("Apex Charts")
                      ]),
                      _vm._v(" "),
                      _c("i", { staticClass: "dd-arrow i-Arrow-Down" })
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "submenu" }, [
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                tag: "a",
                                to: "/app/charts/apexAreaChart"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-icon i-Line-Chart-2"
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Area Chart")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                tag: "a",
                                to: "/app/charts/apexBarChart"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-icon i-Line-Chart-2"
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Bar Chart")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                tag: "a",
                                to: "/app/charts/apexLineChart"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-icon i-Line-Chart-2"
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Line Chart")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                tag: "a",
                                to: "/app/charts/apexMixChart"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-icon i-Line-Chart-2"
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Mix Chart")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                tag: "a",
                                to: "/app/charts/apexColumnChart"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-icon i-Line-Chart-2"
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Column Chart")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                tag: "a",
                                to: "/app/charts/apexPieDonutsChart"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-icon i-Line-Chart-2"
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Pie Donut Chart")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                tag: "a",
                                to: "/app/charts/apexRadarChart"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-icon i-Line-Chart-2"
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Radar Chart")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                tag: "a",
                                to: "/app/charts/apexRadialBarChart"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-icon i-Line-Chart-2"
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Radial Bar Chart")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                tag: "a",
                                to: "/app/charts/apexScatterChart"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-icon i-Line-Chart-2"
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Scatter Chart")
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                tag: "a",
                                to: "/app/charts/apexSparklineChart"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-icon i-Line-Chart-2"
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Sparkline Chart")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              attrs: {
                                tag: "a",
                                to: "/app/charts/apexAreaChart"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "nav-icon i-Line-Chart-2"
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "item-name" }, [
                                _vm._v("Apex Area Chart")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "widgets" },
                attrs: { "data-parent": "widgets" }
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/widgets/widgetCard" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Two-Windows" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Widget Card")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: { tag: "a", to: "/app/widgets/widgetStatistics" }
                      },
                      [
                        _c("i", { staticClass: "nav-icon i-Windows-2" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Widget Statistics")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/widgets/weatherApp" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Windows-2" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Weather App")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/widgets/widgetApp" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Windows-2" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("App Widgets")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/widgets/widgetList" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Windows-2" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Widget List")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "sessions" },
                attrs: { "data-parent": "sessions" }
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/sessions/signIn" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Checked-User" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Sign in")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/sessions/signUp" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Add-User" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Sign up")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/sessions/forgot" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Find-User" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Forgot")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "pages" },
                attrs: { "data-parent": "others" }
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/pages/error" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Error-404-Window" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("Not Found")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/pages/profile" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Male" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("User Profile")
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/pages/icons" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Male" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v("icons")
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "sidebar-overlay",
        class: { open: _vm.getSideBarToggleProperties.isSecondarySideNavOpen },
        on: {
          click: function($event) {
            return _vm.removeOverlay()
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=1345e057&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=1345e057& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main-header" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "menu-toggle", on: { click: _vm.sideBarToggle } },
        [_c("div"), _vm._v(" "), _c("div"), _vm._v(" "), _c("div")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex align-items-center" }, [
        _c(
          "div",
          {
            staticClass: "dropdown mega-menu d-none d-md-block",
            class: { show: _vm.isMegaMenuOpen }
          },
          [
            _c(
              "a",
              {
                staticClass: "btn text-muted dropdown-toggle mr-3",
                attrs: {
                  href: "#",
                  id: "dropdownMegaMenuButton",
                  "data-toggle": "dropdown",
                  "aria-haspopup": "true",
                  "aria-expanded": "false"
                },
                on: { click: _vm.toggleMegaMenu }
              },
              [_vm._v("Mega Menu")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "dropdown-menu text-left",
                class: { show: _vm.isMegaMenuOpen },
                attrs: { "aria-labelledby": "dropdownMenuButton" }
              },
              [_vm._m(1)]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "search-bar", on: { click: _vm.toggleSearch } },
          [
            _c("input", { attrs: { type: "text", placeholder: "Search" } }),
            _vm._v(" "),
            _c("i", { staticClass: "search-icon text-muted i-Magnifi-Glass1" })
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticStyle: { margin: "auto" } }),
      _vm._v(" "),
      _c("div", { staticClass: "header-part-right" }, [
        _c("i", {
          staticClass: "i-Full-Screen header-icon d-none d-sm-inline-block",
          on: { click: _vm.handleFullScreen }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "dropdown" },
          [
            _c(
              "b-dropdown",
              {
                staticClass: "m-md-2",
                attrs: {
                  id: "dropdown",
                  text: "Dropdown Button",
                  "toggle-class": "text-decoration-none",
                  "no-caret": "",
                  variant: "link"
                }
              },
              [
                _c("template", { slot: "button-content" }, [
                  _c("i", {
                    staticClass: "i-Safe-Box text-muted header-icon",
                    attrs: {
                      role: "button",
                      id: "dropdownMenuButton",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "menu-icon-grid" }, [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "i-Shop-4" }),
                    _vm._v(" Home ")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "i-Library" }),
                    _vm._v(" UI Kits ")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "i-Drop" }),
                    _vm._v(" Apps ")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "i-File-Clipboard-File--Text" }),
                    _vm._v(" Forms ")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "i-Checked-User" }),
                    _vm._v(" Sessions ")
                  ]),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "i-Ambulance" }),
                    _vm._v(" Support ")
                  ])
                ])
              ],
              2
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "dropdown" },
          [
            _c(
              "b-dropdown",
              {
                staticClass: "m-md-2  badge-top-container",
                attrs: {
                  id: "dropdown-1",
                  text: "Dropdown Button",
                  "toggle-class": "text-decoration-none",
                  "no-caret": "",
                  variant: "link"
                }
              },
              [
                _c("template", { slot: "button-content" }, [
                  _c("span", { staticClass: "badge badge-primary" }, [
                    _vm._v("3")
                  ]),
                  _vm._v(" "),
                  _c("i", { staticClass: "i-Bell text-muted header-icon" })
                ]),
                _vm._v(" "),
                _c(
                  "vue-perfect-scrollbar",
                  {
                    ref: "myData",
                    staticClass:
                      "dropdown-menu-right rtl-ps-none notification-dropdown  ps scroll",
                    class: {
                      open: _vm.getSideBarToggleProperties.isSideNavOpen
                    },
                    attrs: {
                      settings: {
                        suppressScrollX: true,
                        wheelPropagation: false
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "dropdown-item d-flex" }, [
                      _c("div", { staticClass: "notification-icon" }, [
                        _c("i", {
                          staticClass: "i-Speach-Bubble-6 text-primary mr-1"
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "notification-details flex-grow-1" },
                        [
                          _c(
                            "p",
                            { staticClass: "m-0 d-flex align-items-center" },
                            [
                              _c("span", [_vm._v("New message")]),
                              _vm._v(" "),
                              _c("span", { staticClass: "flex-grow-1" }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "text-small text-muted ml-auto"
                                },
                                [_vm._v("10 sec ago")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "text-small text-muted m-0" },
                            [
                              _vm._v(
                                "\n                James: Hey! are you busy?\n              "
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-item d-flex" }, [
                      _c("div", { staticClass: "notification-icon" }, [
                        _c("i", {
                          staticClass: "i-Receipt-3 text-success mr-1"
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "notification-details flex-grow-1" },
                        [
                          _c(
                            "p",
                            { staticClass: "m-0 d-flex align-items-center" },
                            [
                              _c("span", [_vm._v("New order received")]),
                              _vm._v(" "),
                              _c("span", { staticClass: "flex-grow-1" }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "text-small text-muted ml-auto"
                                },
                                [_vm._v("2 hours ago")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "text-small text-muted m-0" },
                            [_vm._v("1 Headphone, 3 iPhone x")]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-item d-flex" }, [
                      _c("div", { staticClass: "notification-icon" }, [
                        _c("i", { staticClass: "i-Empty-Box text-danger mr-1" })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "notification-details flex-grow-1" },
                        [
                          _c(
                            "p",
                            { staticClass: "m-0 d-flex align-items-center" },
                            [
                              _c("span", [_vm._v("Product out of stock")]),
                              _vm._v(" "),
                              _c("span", { staticClass: "flex-grow-1" }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "text-small text-muted ml-auto"
                                },
                                [_vm._v("10 hours ago")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "text-small text-muted m-0" },
                            [
                              _vm._v(
                                "\n                Headphone E67, R98, XL90, Q77\n              "
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-item d-flex" }, [
                      _c("div", { staticClass: "notification-icon" }, [
                        _c("i", {
                          staticClass: "i-Data-Power text-success mr-1"
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "notification-details flex-grow-1" },
                        [
                          _c(
                            "p",
                            { staticClass: "m-0 d-flex align-items-center" },
                            [
                              _c("span", [_vm._v("Server Up!")]),
                              _vm._v(" "),
                              _c("span", { staticClass: "flex-grow-1" }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "text-small text-muted ml-auto"
                                },
                                [_vm._v("14 hours ago")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "text-small text-muted m-0" },
                            [
                              _vm._v(
                                "\n                Server rebooted successfully\n              "
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ]
                )
              ],
              2
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "dropdown" },
          [
            _c(
              "b-dropdown",
              {
                staticClass: "m-md-2 user col align-self-end",
                attrs: {
                  id: "dropdown-1",
                  text: "Dropdown Button",
                  "toggle-class": "text-decoration-none",
                  "no-caret": "",
                  variant: "link"
                }
              },
              [
                _c("template", { slot: "button-content" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                      id: "userDropdown",
                      alt: "",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false"
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "dropdown-menu-right",
                    attrs: { "aria-labelledby": "userDropdown" }
                  },
                  [
                    _c("div", { staticClass: "dropdown-header" }, [
                      _c("i", { staticClass: "i-Lock-User mr-1" }),
                      _vm._v(" Timothy Carlson\n          ")
                    ]),
                    _vm._v(" "),
                    _c("a", { staticClass: "dropdown-item" }, [
                      _vm._v("Account settings")
                    ]),
                    _vm._v(" "),
                    _c("a", { staticClass: "dropdown-item" }, [
                      _vm._v("Billing history")
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.logoutUser($event)
                          }
                        }
                      },
                      [_vm._v("Sign out")]
                    )
                  ]
                )
              ],
              2
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("search-component", {
        attrs: { isSearchOpen: _vm.isSearchOpen },
        on: {
          "update:isSearchOpen": function($event) {
            _vm.isSearchOpen = $event
          },
          "update:is-search-open": function($event) {
            _vm.isSearchOpen = $event
          },
          closeSearch: _vm.toggleSearch
        }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! @/assets/images/logo.png */ "./resources/js/assets/images/logo.png"), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row m-0" }, [
      _c("div", { staticClass: "col-md-4 p-4 text-left bg-img" }, [
        _c("h2", { staticClass: "title" }, [
          _vm._v("\n              Mega Menu\n              "),
          _c("br"),
          _vm._v("Sidebar\n            ")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n              Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n              Asperiores natus laboriosam fugit, consequatur.\n            "
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: " mb-30" }, [
          _vm._v(
            "\n              Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n              Exercitationem odio amet eos dolore suscipit placeat.\n            "
          )
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-lg btn-rounded btn-outline-warning" },
          [_vm._v("\n              Learn More\n            ")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 p-4 text-left" }, [
        _c(
          "p",
          {
            staticClass:
              "text-primary text--cap border-bottom-primary d-inline-block"
          },
          [_vm._v("\n              Features\n            ")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "menu-icon-grid w-auto p-0" }, [
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "i-Shop-4" }),
            _vm._v(" Home ")
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "i-Library" }),
            _vm._v(" UI Kits ")
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "i-Drop" }),
            _vm._v(" Apps ")
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "i-File-Clipboard-File--Text" }),
            _vm._v(" Forms\n              ")
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "i-Checked-User" }),
            _vm._v(" Sessions ")
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "i-Ambulance" }),
            _vm._v(" Support ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4 p-4 text-left" }, [
        _c(
          "p",
          {
            staticClass:
              "text-primary text--cap border-bottom-primary d-inline-block"
          },
          [_vm._v("\n              Components\n            ")]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "links" }, [
          _c("li", [
            _c("a", { attrs: { href: "accordion.html" } }, [
              _vm._v("Accordion")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "alerts.html" } }, [_vm._v("Alerts")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "buttons.html" } }, [_vm._v("Buttons")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "badges.html" } }, [_vm._v("Badges")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "carousel.html" } }, [_vm._v("Carousels")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "lists.html" } }, [_vm._v("Lists")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "popover.html" } }, [_vm._v("Popover")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "tables.html" } }, [_vm._v("Tables")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "datatables.html" } }, [
              _vm._v("Datatables")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "modals.html" } }, [_vm._v("Modals")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "nouislider.html" } }, [_vm._v("Sliders")])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "tabs.html" } }, [_vm._v("Tabs")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/layouts/largeSidebar/index.vue?vue&type=template&id=ee8b318e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/layouts/largeSidebar/index.vue?vue&type=template&id=ee8b318e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-admin-wrap layout-sidebar-large clearfix" },
    [
      _c("top-nav"),
      _vm._v(" "),
      _c("sidebar"),
      _vm._v(" "),
      _c("main", [
        _c(
          "div",
          {
            staticClass: "main-content-wrap d-flex flex-column",
            class: {
              "sidenav-open": _vm.getSideBarToggleProperties.isSideNavOpen
            }
          },
          [
            _c(
              "transition",
              { attrs: { name: "page", mode: "out-in" } },
              [_c("router-view")],
              1
            ),
            _vm._v(" "),
            _c("appFooter")
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/containers/layouts/largeSidebar/Sidebar.vue":
/*!******************************************************************!*\
  !*** ./resources/js/containers/layouts/largeSidebar/Sidebar.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_7d8ca4e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=7d8ca4e3&scoped=true& */ "./resources/js/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=7d8ca4e3&scoped=true&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_7d8ca4e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_7d8ca4e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d8ca4e3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/layouts/largeSidebar/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=7d8ca4e3&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=7d8ca4e3&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7d8ca4e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=7d8ca4e3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=7d8ca4e3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7d8ca4e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7d8ca4e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/containers/layouts/largeSidebar/TopNav.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/containers/layouts/largeSidebar/TopNav.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNav_vue_vue_type_template_id_1345e057___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav.vue?vue&type=template&id=1345e057& */ "./resources/js/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=1345e057&");
/* harmony import */ var _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNav.vue?vue&type=script&lang=js& */ "./resources/js/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNav_vue_vue_type_template_id_1345e057___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopNav_vue_vue_type_template_id_1345e057___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/layouts/largeSidebar/TopNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=1345e057&":
/*!************************************************************************************************!*\
  !*** ./resources/js/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=1345e057& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_1345e057___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=template&id=1345e057& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=1345e057&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_1345e057___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_1345e057___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/containers/layouts/largeSidebar/index.vue":
/*!****************************************************************!*\
  !*** ./resources/js/containers/layouts/largeSidebar/index.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_ee8b318e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ee8b318e& */ "./resources/js/containers/layouts/largeSidebar/index.vue?vue&type=template&id=ee8b318e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_ee8b318e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_ee8b318e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/layouts/largeSidebar/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/layouts/largeSidebar/index.vue?vue&type=template&id=ee8b318e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/containers/layouts/largeSidebar/index.vue?vue&type=template&id=ee8b318e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ee8b318e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=ee8b318e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/layouts/largeSidebar/index.vue?vue&type=template&id=ee8b318e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ee8b318e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ee8b318e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);