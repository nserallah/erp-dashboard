(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/alerts.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/alerts.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Alerts"
  },
  data: function data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  methods: {
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert: function showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/alerts.vue?vue&type=template&id=ec937686&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/alerts.vue?vue&type=template&id=ec937686& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Alerts", folder: "UI Kits" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "12" } },
            [
              _c(
                "b-alert",
                {
                  attrs: {
                    show: "",
                    variant: "alert alert-card alert-warning text-center",
                    dismissible: ""
                  }
                },
                [
                  _vm._v(
                    "\n        Gull makes development life easier!\n        "
                  ),
                  _c(
                    "b-button",
                    { attrs: { pill: "", variant: "warning ml-3" } },
                    [_vm._v("Buy Now")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-alert",
                {
                  attrs: {
                    show: "",
                    variant: "alert alert-card alert-success",
                    dismissible: ""
                  }
                },
                [
                  _c("strong", { staticClass: "text-capitalize" }, [
                    _vm._v("Success!")
                  ]),
                  _vm._v(" Lorem ipsum dolor\n        sit amet.\n      ")
                ]
              ),
              _vm._v(" "),
              _c(
                "b-alert",
                {
                  attrs: {
                    show: "",
                    variant: "alert alert-card alert-danger",
                    dismissible: ""
                  }
                },
                [
                  _c("strong", { staticClass: "text-capitalize" }, [
                    _vm._v("Danger!")
                  ]),
                  _vm._v(" Lorem ipsum dolor sit\n        amet.\n      ")
                ]
              ),
              _vm._v(" "),
              _c(
                "b-alert",
                {
                  attrs: {
                    show: "",
                    variant: "alert alert-card alert-info",
                    dismissible: ""
                  }
                },
                [
                  _c("strong", { staticClass: "text-capitalize" }, [
                    _vm._v("Info!")
                  ]),
                  _vm._v(" Lorem ipsum dolor sit\n        amet.\n      ")
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "12" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { title: "Bootstrap Alerts" } },
                [
                  _c(
                    "b-alert",
                    {
                      attrs: { show: "", variant: "primary", dismissible: "" }
                    },
                    [
                      _c("strong", { staticClass: "text-capitalize" }, [
                        _vm._v("Primary!")
                      ]),
                      _vm._v(
                        "\n          Lorem ipsum dolor sit amet.\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      attrs: { show: "", variant: "success", dismissible: "" }
                    },
                    [
                      _c("strong", { staticClass: "text-capitalize" }, [
                        _vm._v("Success!")
                      ]),
                      _vm._v(
                        "\n          Lorem ipsum dolor sit amet.\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    { attrs: { show: "", variant: "info", dismissible: "" } },
                    [
                      _c("strong", { staticClass: "text-capitalize" }, [
                        _vm._v("Info!")
                      ]),
                      _vm._v(
                        "\n          Lorem ipsum dolor sit amet.\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      attrs: { show: "", variant: "warning", dismissible: "" }
                    },
                    [
                      _c("strong", { staticClass: "text-capitalize" }, [
                        _vm._v("Warning!")
                      ]),
                      _vm._v(
                        "\n          Lorem ipsum dolor sit amet.\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    { attrs: { show: "", variant: "danger", dismissible: "" } },
                    [
                      _c("strong", { staticClass: "text-capitalize" }, [
                        _vm._v("Danger!")
                      ]),
                      _vm._v(
                        "\n          Lorem ipsum dolor sit amet.\n        "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card",
                { staticClass: "mt-4" },
                [
                  _c(
                    "b-alert",
                    {
                      attrs: {
                        show: _vm.dismissCountDown,
                        dismissible: "",
                        variant: "success"
                      },
                      on: {
                        dismissed: function($event) {
                          _vm.dismissCountDown = 0
                        },
                        "dismiss-count-down": _vm.countDownChanged
                      }
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n            This alert will dismiss after " +
                            _vm._s(_vm.dismissCountDown) +
                            " seconds...\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-progress", {
                        attrs: {
                          variant: "success",
                          max: _vm.dismissSecs,
                          value: _vm.dismissCountDown,
                          height: "4px"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "m-1",
                      attrs: { variant: "primary" },
                      on: { click: _vm.showAlert }
                    },
                    [
                      _vm._v(
                        "\n          Show alert with count-down timer\n        "
                      )
                    ]
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

/***/ "./resources/js/views/app/ui-kits/alerts.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/app/ui-kits/alerts.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alerts_vue_vue_type_template_id_ec937686___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerts.vue?vue&type=template&id=ec937686& */ "./resources/js/views/app/ui-kits/alerts.vue?vue&type=template&id=ec937686&");
/* harmony import */ var _alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts.vue?vue&type=script&lang=js& */ "./resources/js/views/app/ui-kits/alerts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _alerts_vue_vue_type_template_id_ec937686___WEBPACK_IMPORTED_MODULE_0__["render"],
  _alerts_vue_vue_type_template_id_ec937686___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/ui-kits/alerts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/ui-kits/alerts.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/alerts.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./alerts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/alerts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/ui-kits/alerts.vue?vue&type=template&id=ec937686&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/alerts.vue?vue&type=template&id=ec937686& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_alerts_vue_vue_type_template_id_ec937686___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./alerts.vue?vue&type=template&id=ec937686& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/alerts.vue?vue&type=template&id=ec937686&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_alerts_vue_vue_type_template_id_ec937686___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_alerts_vue_vue_type_template_id_ec937686___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);