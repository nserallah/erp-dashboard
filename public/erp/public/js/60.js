(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/basicActionBar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/form/basicActionBar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Basic Action Bar"
  },
  data: function data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      show: true
    };
  },
  methods: {
    onSubmit: function onSubmit(el) {
      var x = el.preventDefault();
      this.$swal({
        position: "top-end",
        type: "success",
        title: "Your File Has Been Submitted",
        showConfirmButton: false,
        timer: 1500
      });
    },
    onReset: function onReset(evt) {
      var _this = this;

      evt.preventDefault(); // Reset our form values

      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = []; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/basicActionBar.vue?vue&type=template&id=6c1fa57d&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/form/basicActionBar.vue?vue&type=template&id=6c1fa57d& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Basic Action Bar", folder: "Forms" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "mb-3", attrs: { lg: "6" } },
            [
              _c("b-card", { attrs: { title: "Default Action Bar" } }, [
                _c(
                  "div",
                  [
                    _vm.show
                      ? _c(
                          "b-form",
                          { on: { submit: _vm.onSubmit, reset: _vm.onReset } },
                          [
                            _c(
                              "b-form-group",
                              {
                                staticClass: " mb-30",
                                attrs: {
                                  id: "input-group-1",
                                  label: "Email address:",
                                  "label-for": "input-1",
                                  description:
                                    "We'll never share your email with anyone else."
                                }
                              },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    id: "input-1",
                                    type: "email",
                                    required: "",
                                    placeholder: "Enter email"
                                  },
                                  model: {
                                    value: _vm.form.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "email", $$v)
                                    },
                                    expression: "form.email"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-2",
                                  label: "Your Name:",
                                  "label-for": "input-2"
                                }
                              },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    id: "input-2",
                                    required: "",
                                    placeholder: "Enter name"
                                  },
                                  model: {
                                    value: _vm.form.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "name", $$v)
                                    },
                                    expression: "form.name"
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "custom-separator" })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-title" }, [
                              _vm._v("Communication")
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              {
                                staticClass: "mt-4",
                                attrs: { id: "input-group-4" },
                                model: {
                                  value: _vm.form.checked,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "checked", $$v)
                                  },
                                  expression: "form.checked"
                                }
                              },
                              [
                                _c(
                                  "b-form-checkbox-group",
                                  { attrs: { id: "checkboxes-4" } },
                                  [
                                    _c(
                                      "b-form-checkbox",
                                      { attrs: { value: "me" } },
                                      [_vm._v("Email")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-checkbox-group",
                                  { attrs: { id: "checkboxes-4" } },
                                  [
                                    _c(
                                      "b-form-checkbox",
                                      { attrs: { value: "me" } },
                                      [_vm._v("SMS")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-checkbox-group",
                                  { attrs: { id: "checkboxes-4" } },
                                  [
                                    _c(
                                      "b-form-checkbox",
                                      { attrs: { value: "me" } },
                                      [_vm._v("Phone")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-4" },
                              [
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "m-1",
                                    attrs: {
                                      type: "submit",
                                      variant: "primary"
                                    }
                                  },
                                  [_vm._v("Submit")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-button",
                                  {
                                    attrs: { type: "reset", variant: "danger" }
                                  },
                                  [_vm._v("Reset")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  1
                )
              ])
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

/***/ "./resources/js/views/app/form/basicActionBar.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/app/form/basicActionBar.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basicActionBar_vue_vue_type_template_id_6c1fa57d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicActionBar.vue?vue&type=template&id=6c1fa57d& */ "./resources/js/views/app/form/basicActionBar.vue?vue&type=template&id=6c1fa57d&");
/* harmony import */ var _basicActionBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basicActionBar.vue?vue&type=script&lang=js& */ "./resources/js/views/app/form/basicActionBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _basicActionBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _basicActionBar_vue_vue_type_template_id_6c1fa57d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _basicActionBar_vue_vue_type_template_id_6c1fa57d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/form/basicActionBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/form/basicActionBar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/app/form/basicActionBar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basicActionBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./basicActionBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/basicActionBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basicActionBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/form/basicActionBar.vue?vue&type=template&id=6c1fa57d&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/app/form/basicActionBar.vue?vue&type=template&id=6c1fa57d& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basicActionBar_vue_vue_type_template_id_6c1fa57d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./basicActionBar.vue?vue&type=template&id=6c1fa57d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/basicActionBar.vue?vue&type=template&id=6c1fa57d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basicActionBar_vue_vue_type_template_id_6c1fa57d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basicActionBar_vue_vue_type_template_id_6c1fa57d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);