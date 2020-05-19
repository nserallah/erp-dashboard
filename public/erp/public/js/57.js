(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/sweetAlerts.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/extraKits/sweetAlerts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Sweet Alerts"
  },
  methods: {
    // basic
    basic: function basic() {
      this.$swal("Hello Vue world!!!");
    },
    //title
    title: function title() {
      this.$swal({
        title: "Oops...",
        text: "That thing is still around?"
      });
    },
    // html
    html: function html() {
      this.$swal({
        html: "You can use <b>bold text</b>, " + '<a href="//github.com">links</a> ' + "and other HTML tags"
      });
    },
    // customImage
    customImage: function customImage() {
      this.$swal({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        animation: false
      });
    },
    // sweetLaert-2
    // hello-world
    showAlert: function showAlert() {
      // Use sweetalert2
      this.$swal("Hello Vue world!!!");
    },
    // wrong-alert
    wrongAlert: function wrongAlert() {
      this.$swal({
        type: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href>Why do I have this issue?</a>"
      });
    },
    // success-message-alert
    successMessage: function successMessage() {
      this.$swal({
        position: "top-end",
        type: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    },
    // confirm-message-alert
    confirmMessage: function confirmMessage() {
      var _this = this;

      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          _this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    // question-alert
    questionAlert: function questionAlert() {
      this.$swal("The Internet?", "That thing is still around?", "question");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/sweetAlerts.vue?vue&type=template&id=18171248&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/extraKits/sweetAlerts.vue?vue&type=template&id=18171248& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "main-content" },
    [
      _c("breadcumb", { attrs: { page: "Alerts", folder: "Extra Kits" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "6 mb-30" } },
            [
              _c(
                "b-card",
                { staticClass: "h-100", attrs: { title: "Basic Alerts" } },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "m-2",
                      attrs: { block: "", variant: "primary" },
                      on: { click: _vm.basic }
                    },
                    [_vm._v("Basic")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "m-2",
                      attrs: { block: "", variant: "primary" },
                      on: { click: _vm.title }
                    },
                    [_vm._v("With Title")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "m-2",
                      attrs: { block: "", variant: "primary" },
                      on: { click: _vm.html }
                    },
                    [_vm._v("With Html")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "h-100",
                  attrs: { title: "Custom Alert 2 Toast" }
                },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "m-2",
                      attrs: { variant: "primary" },
                      on: { click: _vm.showAlert }
                    },
                    [_vm._v("Hello World")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "m-2",
                      attrs: { variant: "danger" },
                      on: { click: _vm.wrongAlert }
                    },
                    [_vm._v("Wrong Alert")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "m-2",
                      attrs: { variant: "success" },
                      on: { click: _vm.successMessage }
                    },
                    [_vm._v("Success Message Alert")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "m-2",
                      attrs: { variant: "info" },
                      on: { click: _vm.confirmMessage }
                    },
                    [_vm._v("Confirm Message Alert")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "m-2",
                      attrs: { variant: "warning" },
                      on: { click: _vm.questionAlert }
                    },
                    [_vm._v("Question Alert")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "m-2",
                      attrs: { block: "", variant: "primary" },
                      on: { click: _vm.customImage }
                    },
                    [_vm._v("Custom Image")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/extraKits/sweetAlerts.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/app/extraKits/sweetAlerts.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sweetAlerts_vue_vue_type_template_id_18171248___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sweetAlerts.vue?vue&type=template&id=18171248& */ "./resources/js/views/app/extraKits/sweetAlerts.vue?vue&type=template&id=18171248&");
/* harmony import */ var _sweetAlerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sweetAlerts.vue?vue&type=script&lang=js& */ "./resources/js/views/app/extraKits/sweetAlerts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sweetAlerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sweetAlerts_vue_vue_type_template_id_18171248___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sweetAlerts_vue_vue_type_template_id_18171248___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/extraKits/sweetAlerts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/extraKits/sweetAlerts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/extraKits/sweetAlerts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetAlerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./sweetAlerts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/sweetAlerts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetAlerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/extraKits/sweetAlerts.vue?vue&type=template&id=18171248&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/app/extraKits/sweetAlerts.vue?vue&type=template&id=18171248& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetAlerts_vue_vue_type_template_id_18171248___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./sweetAlerts.vue?vue&type=template&id=18171248& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/sweetAlerts.vue?vue&type=template&id=18171248&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetAlerts_vue_vue_type_template_id_18171248___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetAlerts_vue_vue_type_template_id_18171248___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);