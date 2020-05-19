(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/progressbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/progressbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "ProgressBar"
  },
  data: function data() {
    var _ref;

    return _ref = {
      animatedValue: 75,
      //   animated-background
      animate: true,
      //   basic-progressbar value
      value: 75
    }, _defineProperty(_ref, "value", 33.333333333), _defineProperty(_ref, "max", 50), _defineProperty(_ref, "key", 1), _defineProperty(_ref, "bars", [{
      variant: "success",
      value: 75
    }, {
      variant: "info",
      value: 75
    }, {
      variant: "warning",
      value: 75
    }, {
      variant: "danger",
      value: 75
    }, {
      variant: "primary",
      value: 75
    }, {
      variant: "secondary",
      value: 75
    }, {
      variant: "dark",
      value: 75
    }]), _defineProperty(_ref, "timer", null), _defineProperty(_ref, "changeValue", 45), _defineProperty(_ref, "changeMax", 100), _defineProperty(_ref, "multipleValues", [15, 30, 20]), _defineProperty(_ref, "multipleMax", 100), _ref;
  },
  methods: {
    rendomValue: function rendomValue() {
      this.changeValue = Math.random() * this.max;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.timer = setInterval(function () {
      _this.bars.forEach(function (bar) {
        return bar.value = 25 + Math.random() * 75;
      });
    }, 2000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/progressbar.vue?vue&type=template&id=3b167410&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/progressbar.vue?vue&type=template&id=3b167410& ***!
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
      _c("breadcumb", { attrs: { page: "Progress Bar", folder: "UI Kits" } }),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: " mb-30" },
        [
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { staticClass: " mb-30", attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        { attrs: { title: "Basic Progress Bar" } },
                        [
                          _c("h5", [_vm._v("Default width")]),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "mb-3",
                            attrs: { value: _vm.value }
                          }),
                          _vm._v(" "),
                          _c("h5", [_vm._v("Custom widths")]),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "w-75 mb-2",
                            attrs: { value: _vm.value }
                          }),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "w-50 mb-2",
                            attrs: { value: _vm.value }
                          }),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "w-25",
                            attrs: { value: _vm.value }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: " mb-30", attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          attrs: {
                            title: "Basic Progress Bar With diff. Background"
                          }
                        },
                        [
                          _c("b-progress", {
                            staticClass: "mb-3",
                            attrs: { variant: "success", value: _vm.value }
                          }),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "w-75 mb-2",
                            attrs: { variant: "primary", value: _vm.value }
                          }),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "w-50 mb-2",
                            attrs: { variant: "danger", value: _vm.value }
                          }),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "w-25",
                            attrs: { variant: "warning", value: _vm.value }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: " mb-30", attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        { attrs: { title: "Custom progress label" } },
                        [
                          _c("h6", [_vm._v("Custom label via default slot")]),
                          _vm._v(" "),
                          _c(
                            "b-progress",
                            { attrs: { max: _vm.max, height: "2rem" } },
                            [
                              _c(
                                "b-progress-bar",
                                {
                                  attrs: { variant: "danger", value: _vm.value }
                                },
                                [
                                  _vm._v("\n                Progress: "),
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(_vm.value.toFixed(2)) +
                                        " / " +
                                        _vm._s(_vm.max)
                                    )
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("h6", { staticClass: "mt-3" }, [
                            _vm._v("Custom label via property")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-progress",
                            { attrs: { max: _vm.max } },
                            [
                              _c("b-progress-bar", {
                                attrs: {
                                  variant: "success",
                                  value: _vm.value,
                                  label:
                                    ((_vm.value / _vm.max) * 100).toFixed(2) +
                                    "%"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("h6", { staticClass: "mt-3" }, [
                            _vm._v("Custom label via property (HTML support)")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-progress",
                            { attrs: { max: _vm.max } },
                            [
                              _c("b-progress-bar", {
                                attrs: {
                                  value: _vm.value,
                                  "label-html": "<del>" + _vm.value + "</del>"
                                }
                              })
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
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { staticClass: " mb-30", attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        { attrs: { title: "Progres Bar Animated" } },
                        [
                          _c("b-progress", {
                            attrs: {
                              value: _vm.changeValue,
                              max: _vm.max,
                              "show-progress": "",
                              animated: ""
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-progress",
                            {
                              staticClass: "mt-2",
                              attrs: { max: _vm.changeMax, "show-value": "" }
                            },
                            [
                              _c("b-progress-bar", {
                                attrs: {
                                  value: _vm.changeValue * (6 / 10),
                                  variant: "success"
                                }
                              }),
                              _vm._v(" "),
                              _c("b-progress-bar", {
                                attrs: {
                                  value: _vm.changeValue * (2.5 / 10),
                                  variant: "warning"
                                }
                              }),
                              _vm._v(" "),
                              _c("b-progress-bar", {
                                attrs: {
                                  value: _vm.changeValue * (1.5 / 10),
                                  variant: "danger"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              staticClass: "mt-3",
                              on: { click: _vm.rendomValue }
                            },
                            [_vm._v("Click me")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { staticClass: " mb-30", attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        { attrs: { title: "Animated backgrounds" } },
                        [
                          _c("b-progress", {
                            attrs: {
                              value: _vm.animatedValue,
                              variant: "success",
                              striped: "",
                              animated: _vm.animate
                            }
                          }),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "mt-2",
                            attrs: {
                              value: _vm.animatedValue,
                              variant: "info",
                              striped: "",
                              animated: _vm.animate
                            }
                          }),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "mt-2",
                            attrs: {
                              value: _vm.animatedValue,
                              variant: "warning",
                              striped: "",
                              animated: _vm.animate
                            }
                          }),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "mt-3",
                            attrs: {
                              value: _vm.animatedValue,
                              variant: "danger",
                              animated: _vm.animate
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              staticClass: "mt-3",
                              attrs: { variant: "secondary" },
                              on: {
                                click: function($event) {
                                  _vm.animate = !_vm.animate
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.animate ? "Stop" : "Start") +
                                  " Animation\n            "
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { staticClass: " mb-30", attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        { attrs: { title: "Basic Progress Bar With Labels" } },
                        [
                          _c("h6", [_vm._v("No label")]),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "mb-3",
                            attrs: { value: _vm.value, max: _vm.max }
                          }),
                          _vm._v(" "),
                          _c("h6", [_vm._v("Value label")]),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "mb-3",
                            attrs: {
                              value: _vm.value,
                              max: _vm.max,
                              "show-value": ""
                            }
                          }),
                          _vm._v(" "),
                          _c("h6", [_vm._v("Progress label")]),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "mb-3",
                            attrs: {
                              value: _vm.value,
                              max: _vm.max,
                              "show-progress": ""
                            }
                          }),
                          _vm._v(" "),
                          _c("h6", [_vm._v("Value label with precision")]),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "mb-3",
                            attrs: {
                              value: _vm.value,
                              max: _vm.max,
                              precision: 2,
                              "show-value": ""
                            }
                          }),
                          _vm._v(" "),
                          _c("h6", [_vm._v("Progress label with precision")]),
                          _vm._v(" "),
                          _c("b-progress", {
                            staticClass: "mb-3",
                            attrs: {
                              value: _vm.value,
                              max: _vm.max,
                              precision: 2,
                              "show-progress": ""
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: " mb-30", attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        { attrs: { title: "Solid background variants" } },
                        _vm._l(_vm.bars, function(bar, key) {
                          return _c(
                            "div",
                            { key: key, staticClass: "row mb-1" },
                            [
                              _c("div", { staticClass: "col-sm-3" }, [
                                _vm._v(_vm._s(bar.variant) + ":")
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-sm-9 pt-1" },
                                [
                                  _c("b-progress", {
                                    key: bar.variant,
                                    attrs: {
                                      value: bar.value,
                                      variant: bar.variant
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: " mb-30", attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        { attrs: { title: "Multiple bars" } },
                        [
                          _c(
                            "b-progress",
                            {
                              staticClass: "mb-3",
                              attrs: { max: _vm.multipleMax }
                            },
                            [
                              _c("b-progress-bar", {
                                attrs: {
                                  variant: "primary",
                                  value: _vm.multipleValues[0]
                                }
                              }),
                              _vm._v(" "),
                              _c("b-progress-bar", {
                                attrs: {
                                  variant: "danger",
                                  value: _vm.multipleValues[1]
                                }
                              }),
                              _vm._v(" "),
                              _c("b-progress-bar", {
                                attrs: {
                                  variant: "warning",
                                  value: _vm.multipleValues[2]
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-progress",
                            {
                              staticClass: "mb-3",
                              attrs: {
                                "show-progress": "",
                                max: _vm.multipleMax
                              }
                            },
                            [
                              _c("b-progress-bar", {
                                attrs: {
                                  variant: "danger",
                                  value: _vm.multipleValues[0]
                                }
                              }),
                              _vm._v(" "),
                              _c("b-progress-bar", {
                                attrs: {
                                  variant: "success",
                                  value: _vm.multipleValues[1]
                                }
                              }),
                              _vm._v(" "),
                              _c("b-progress-bar", {
                                attrs: {
                                  variant: "dark",
                                  value: _vm.multipleValues[2]
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-progress",
                            {
                              staticClass: "mb-3",
                              attrs: {
                                "show-value": "",
                                striped: "",
                                max: _vm.multipleMax
                              }
                            },
                            [
                              _c("b-progress-bar", {
                                attrs: {
                                  variant: "info",
                                  value: _vm.multipleValues[0]
                                }
                              }),
                              _vm._v(" "),
                              _c("b-progress-bar", {
                                attrs: {
                                  variant: "success",
                                  value: _vm.multipleValues[1]
                                }
                              }),
                              _vm._v(" "),
                              _c("b-progress-bar", {
                                attrs: {
                                  variant: "danger",
                                  value: _vm.multipleValues[2]
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-progress",
                            { attrs: { max: _vm.multipleMax } },
                            [
                              _c("b-progress-bar", {
                                attrs: {
                                  variant: "primary",
                                  value: _vm.multipleValues[0],
                                  "show-progress": ""
                                }
                              }),
                              _vm._v(" "),
                              _c("b-progress-bar", {
                                attrs: {
                                  variant: "warning",
                                  value: _vm.multipleValues[1],
                                  animated: "",
                                  "show-progress": ""
                                }
                              }),
                              _vm._v(" "),
                              _c("b-progress-bar", {
                                attrs: {
                                  variant: "info",
                                  value: _vm.multipleValues[2],
                                  striped: "",
                                  "show-progress": ""
                                }
                              })
                            ],
                            1
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
                    { staticClass: " mb-30", attrs: { md: "12" } },
                    [
                      _c("b-card", { attrs: { title: "Progressbar Height" } }, [
                        _c(
                          "div",
                          [
                            _c("h5", [_vm._v("Default height")]),
                            _vm._v(" "),
                            _c("b-progress", {
                              staticClass: "mb-3",
                              attrs: { value: _vm.value, "show-progress": "" }
                            }),
                            _vm._v(" "),
                            _c("h5", [_vm._v("Custom heights")]),
                            _vm._v(" "),
                            _c("b-progress", {
                              staticClass: "mb-2",
                              attrs: {
                                variant: "success",
                                striped: "",
                                height: "2rem",
                                value: _vm.value,
                                "show-progress": ""
                              }
                            }),
                            _vm._v(" "),
                            _c("b-progress", {
                              staticClass: "mb-2",
                              attrs: {
                                variant: "danger",
                                animated: "",
                                height: "20px",
                                value: _vm.value,
                                "show-progress": ""
                              }
                            }),
                            _vm._v(" "),
                            _c("b-progress", {
                              attrs: {
                                variant: "warning",
                                height: "2px",
                                value: _vm.value
                              }
                            })
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

/***/ "./resources/js/views/app/ui-kits/progressbar.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/app/ui-kits/progressbar.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progressbar_vue_vue_type_template_id_3b167410___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progressbar.vue?vue&type=template&id=3b167410& */ "./resources/js/views/app/ui-kits/progressbar.vue?vue&type=template&id=3b167410&");
/* harmony import */ var _progressbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressbar.vue?vue&type=script&lang=js& */ "./resources/js/views/app/ui-kits/progressbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _progressbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _progressbar_vue_vue_type_template_id_3b167410___WEBPACK_IMPORTED_MODULE_0__["render"],
  _progressbar_vue_vue_type_template_id_3b167410___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/ui-kits/progressbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/ui-kits/progressbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/progressbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progressbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./progressbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/progressbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_progressbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/ui-kits/progressbar.vue?vue&type=template&id=3b167410&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/progressbar.vue?vue&type=template&id=3b167410& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_progressbar_vue_vue_type_template_id_3b167410___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./progressbar.vue?vue&type=template&id=3b167410& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/progressbar.vue?vue&type=template&id=3b167410&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_progressbar_vue_vue_type_template_id_3b167410___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_progressbar_vue_vue_type_template_id_3b167410___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);