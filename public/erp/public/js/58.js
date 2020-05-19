(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/toasts.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/extraKits/toasts.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Toasts"
  },
  data: function data() {
    return {
      // toast-target
      counter: 0,
      // advanced-usage
      count: 0
    };
  },
  methods: {
    // variant-toast
    makeVariantToast: function makeVariantToast() {
      var variant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.$bvToast.toast("Toast body content", {
        title: "Variant ".concat(variant || "default"),
        variant: variant,
        solid: true
      });
    },
    //   toast-target
    toastTarget: function toastTarget(toaster) {
      var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.counter++;
      this.$bvToast.toast("Toast ".concat(this.counter, " body content"), {
        title: "Toaster ".concat(toaster),
        toaster: toaster,
        solid: true,
        appendToast: append
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/toasts.vue?vue&type=template&id=a7d1ceca&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/extraKits/toasts.vue?vue&type=template&id=a7d1ceca& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Toast", folder: "Extra Kits" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "12 mb-30" } },
            [
              _c("b-card", { attrs: { title: "Variants Toast" } }, [
                _c(
                  "div",
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        on: {
                          click: function($event) {
                            return _vm.makeVariantToast()
                          }
                        }
                      },
                      [_vm._v("Default")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        attrs: { variant: "primary" },
                        on: {
                          click: function($event) {
                            return _vm.makeVariantToast("primary")
                          }
                        }
                      },
                      [_vm._v("Primary")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        attrs: { variant: "secondary" },
                        on: {
                          click: function($event) {
                            return _vm.makeVariantToast("secondary")
                          }
                        }
                      },
                      [_vm._v("Secondary")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        attrs: { variant: "danger" },
                        on: {
                          click: function($event) {
                            return _vm.makeVariantToast("danger")
                          }
                        }
                      },
                      [_vm._v("Danger")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        attrs: { variant: "warning" },
                        on: {
                          click: function($event) {
                            return _vm.makeVariantToast("warning")
                          }
                        }
                      },
                      [_vm._v("Warning")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        attrs: { variant: "success" },
                        on: {
                          click: function($event) {
                            return _vm.makeVariantToast("success")
                          }
                        }
                      },
                      [_vm._v("Success")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        attrs: { variant: "info" },
                        on: {
                          click: function($event) {
                            return _vm.makeVariantToast("info")
                          }
                        }
                      },
                      [_vm._v("Info")]
                    )
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "12 mb-30" } },
            [
              _c("b-card", { attrs: { title: "Toaster Target" } }, [
                _c(
                  "div",
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        attrs: { variant: "outline-danger" },
                        on: {
                          click: function($event) {
                            return _vm.toastTarget("b-toaster-top-right")
                          }
                        }
                      },
                      [_vm._v("Top Right")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        attrs: { variant: "outline-primary" },
                        on: {
                          click: function($event) {
                            return _vm.toastTarget("b-toaster-top-left")
                          }
                        }
                      },
                      [_vm._v("Top Left")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        attrs: { variant: "outline-info" },
                        on: {
                          click: function($event) {
                            return _vm.toastTarget("b-toaster-top-center")
                          }
                        }
                      },
                      [_vm._v("Top Center")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        attrs: { variant: "outline-success" },
                        on: {
                          click: function($event) {
                            return _vm.toastTarget("b-toaster-top-full")
                          }
                        }
                      },
                      [_vm._v("Top Full")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        attrs: { variant: "outline-danger" },
                        on: {
                          click: function($event) {
                            return _vm.toastTarget(
                              "b-toaster-bottom-right",
                              true
                            )
                          }
                        }
                      },
                      [_vm._v("Bottom Right")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        attrs: { variant: "outline-primary" },
                        on: {
                          click: function($event) {
                            return _vm.toastTarget(
                              "b-toaster-bottom-left",
                              true
                            )
                          }
                        }
                      },
                      [_vm._v("Bottom Left")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        attrs: { variant: "outline-dark" },
                        on: {
                          click: function($event) {
                            return _vm.toastTarget(
                              "b-toaster-bottom-center",
                              true
                            )
                          }
                        }
                      },
                      [_vm._v("Bottom Center")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2 m-1",
                        attrs: { variant: "outline-warning" },
                        on: {
                          click: function($event) {
                            return _vm.toastTarget(
                              "b-toaster-bottom-full",
                              true
                            )
                          }
                        }
                      },
                      [_vm._v("Bottom Full")]
                    )
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6 mb-30" } },
            [
              _c("b-card", { attrs: { title: "Custom component" } }, [
                _c(
                  "div",
                  [
                    _c(
                      "b-button",
                      {
                        on: {
                          click: function($event) {
                            return _vm.$bvToast.show("my-toast")
                          }
                        }
                      },
                      [_vm._v("Show toast")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-toast",
                      {
                        attrs: { id: "my-toast", variant: "warning", solid: "" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-grow-1 align-items-baseline",
                            attrs: { slot: "toast-title" },
                            slot: "toast-title"
                          },
                          [
                            _c("b-img", {
                              staticClass: "mr-2",
                              attrs: {
                                blank: "",
                                "blank-color": "#ff5555",
                                width: "12",
                                height: "12"
                              }
                            }),
                            _vm._v(" "),
                            _c("strong", { staticClass: "mr-auto" }, [
                              _vm._v("Notice!")
                            ]),
                            _vm._v(" "),
                            _c("small", { staticClass: "text-muted mr-2" }, [
                              _vm._v("42 seconds ago")
                            ])
                          ],
                          1
                        ),
                        _vm._v(
                          "\n            This is the content of the toast. It is short and to the point.\n          "
                        )
                      ]
                    )
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

/***/ "./resources/js/views/app/extraKits/toasts.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/app/extraKits/toasts.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toasts_vue_vue_type_template_id_a7d1ceca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toasts.vue?vue&type=template&id=a7d1ceca& */ "./resources/js/views/app/extraKits/toasts.vue?vue&type=template&id=a7d1ceca&");
/* harmony import */ var _toasts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toasts.vue?vue&type=script&lang=js& */ "./resources/js/views/app/extraKits/toasts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _toasts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _toasts_vue_vue_type_template_id_a7d1ceca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _toasts_vue_vue_type_template_id_a7d1ceca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/extraKits/toasts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/extraKits/toasts.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/app/extraKits/toasts.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toasts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./toasts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/toasts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toasts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/extraKits/toasts.vue?vue&type=template&id=a7d1ceca&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/app/extraKits/toasts.vue?vue&type=template&id=a7d1ceca& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_toasts_vue_vue_type_template_id_a7d1ceca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./toasts.vue?vue&type=template&id=a7d1ceca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/toasts.vue?vue&type=template&id=a7d1ceca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_toasts_vue_vue_type_template_id_a7d1ceca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_toasts_vue_vue_type_template_id_a7d1ceca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);