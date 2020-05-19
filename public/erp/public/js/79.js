(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/popover.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/popover.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Popover"
  },
  data: function data() {
    return {
      //   exampleTwo
      show: false,
      // component-basic-usage
      placements: ["topright", "top", "topleft", "bottomright", "bottom", "bottomleft", "righttop", "right", "lefttop", "rightbottom", "left", "leftbottom"]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/popover.vue?vue&type=template&id=7faef522&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/popover.vue?vue&type=template&id=7faef522& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Popover", folder: "UI Kits" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: " mb-30", attrs: { md: "6" } },
            [
              _c("b-card", { attrs: { title: "Example" } }, [
                _c(
                  "div",
                  { staticClass: " my-3" },
                  [
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-popover",
                            rawName: "v-b-popover.hover",
                            value: "I am popover content!",
                            expression: "'I am popover content!'",
                            modifiers: { hover: true }
                          }
                        ],
                        attrs: { variant: "danger", title: "Popover Title" }
                      },
                      [_vm._v("Hover Me")]
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
            { staticClass: " mb-30", attrs: { md: "6" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Example Two" } },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "mb-4 ",
                      attrs: { id: "popover-button-sync", variant: "success" }
                    },
                    [_vm._v("I have a popover")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "p-2 mb-4",
                      on: {
                        click: function($event) {
                          _vm.show = !_vm.show
                        }
                      }
                    },
                    [_vm._v("Toggle Popover")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-popover",
                    {
                      attrs: {
                        show: _vm.show,
                        target: "popover-button-sync",
                        title: "Popover"
                      },
                      on: {
                        "update:show": function($event) {
                          _vm.show = $event
                        }
                      }
                    },
                    [
                      _vm._v("\n          Hello "),
                      _c("strong", [_vm._v("World!")])
                    ]
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
              _c(
                "b-card",
                { attrs: { title: "Four Directions (HOVER)" } },
                [
                  _c(
                    "b-row",
                    { staticClass: "text-left" },
                    [
                      _c(
                        "b-col",
                        { staticClass: "mb-4", attrs: { md: "2", sm: "6" } },
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-popover",
                                  rawName: "v-b-popover.hover.top",
                                  value: "Popover!",
                                  expression: "'Popover!'",
                                  modifiers: { hover: true, top: true }
                                }
                              ],
                              attrs: { variant: "primary" }
                            },
                            [_vm._v("Top")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-4", attrs: { md: "2", sm: "6" } },
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-popover",
                                  rawName: "v-b-popover.hover.right",
                                  value: "Popover!",
                                  expression: "'Popover!'",
                                  modifiers: { hover: true, right: true }
                                }
                              ],
                              attrs: { variant: "success" }
                            },
                            [_vm._v("Right")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-4", attrs: { md: "2", sm: "6" } },
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-popover",
                                  rawName: "v-b-popover.hover.left",
                                  value: "Popover!",
                                  expression: "'Popover!'",
                                  modifiers: { hover: true, left: true }
                                }
                              ],
                              attrs: { variant: "danger" }
                            },
                            [_vm._v("Left")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-4", attrs: { md: "2", sm: "6" } },
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-popover",
                                  rawName: "v-b-popover.hover.bottom",
                                  value: "ToolTip!",
                                  expression: "'ToolTip!'",
                                  modifiers: { hover: true, bottom: true }
                                }
                              ],
                              attrs: { variant: "warning" }
                            },
                            [_vm._v("Bottom")]
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
            { staticClass: " mb-30", attrs: { md: "12" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Placement" } },
                [
                  _c(
                    "b-row",
                    _vm._l(_vm.placements, function(placement) {
                      return _c(
                        "b-col",
                        {
                          key: placement,
                          staticClass: "mb-4 text-left",
                          attrs: { md: "2", sm: "6" }
                        },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                id: "popover-1-" + placement,
                                variant: "primary"
                              }
                            },
                            [_vm._v(_vm._s(placement))]
                          ),
                          _vm._v(" "),
                          _c("b-popover", {
                            attrs: {
                              target: "popover-1-" + placement,
                              placement: placement,
                              title: "Popover!",
                              triggers: "hover focus",
                              content: "Placement " + placement
                            }
                          })
                        ],
                        1
                      )
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c("h5", { staticClass: "my-3" }, [
                    _vm._v("Content via properties or slots")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        {
                          staticClass: "mb-4 text-left",
                          attrs: { md: "2", sm: "6" }
                        },
                        [
                          _c(
                            "b-button",
                            { attrs: { id: "popover-2", variant: "primary" } },
                            [_vm._v("Using properties")]
                          ),
                          _vm._v(" "),
                          _c("b-popover", {
                            attrs: {
                              target: "popover-2",
                              title: "Prop Examples",
                              triggers: "hover focus",
                              content:
                                "Embedding content using properties is easy"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        {
                          staticClass: "mb-4 text-left",
                          attrs: { md: "2", sm: "6" }
                        },
                        [
                          _c(
                            "b-button",
                            { attrs: { id: "popover-3", variant: "primary" } },
                            [_vm._v("Using slots")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-popover",
                            {
                              attrs: {
                                target: "popover-3",
                                triggers: "hover focus"
                              }
                            },
                            [
                              _c("template", { slot: "title" }, [
                                _vm._v("Content via Slots")
                              ]),
                              _vm._v(
                                "\n              Embedding content\n              "
                              ),
                              _c("span", { staticClass: "text-danger" }, [
                                _vm._v("using slots")
                              ]),
                              _vm._v(" affords you\n              "),
                              _c("em", [
                                _vm._v("greater "),
                                _c("strong", [_vm._v("control.")])
                              ]),
                              _vm._v(
                                " and basic HTML\n              support.\n            "
                              )
                            ],
                            2
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

/***/ "./resources/js/views/app/ui-kits/popover.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/app/ui-kits/popover.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popover_vue_vue_type_template_id_7faef522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.vue?vue&type=template&id=7faef522& */ "./resources/js/views/app/ui-kits/popover.vue?vue&type=template&id=7faef522&");
/* harmony import */ var _popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.vue?vue&type=script&lang=js& */ "./resources/js/views/app/ui-kits/popover.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _popover_vue_vue_type_template_id_7faef522___WEBPACK_IMPORTED_MODULE_0__["render"],
  _popover_vue_vue_type_template_id_7faef522___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/ui-kits/popover.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/ui-kits/popover.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/popover.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./popover.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/popover.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/ui-kits/popover.vue?vue&type=template&id=7faef522&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/popover.vue?vue&type=template&id=7faef522& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_template_id_7faef522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./popover.vue?vue&type=template&id=7faef522& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/popover.vue?vue&type=template&id=7faef522&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_template_id_7faef522___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_template_id_7faef522___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);