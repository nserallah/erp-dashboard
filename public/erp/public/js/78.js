(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/pagination.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/pagination.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Pagination"
  },
  data: function data() {
    return {
      rows: 100,
      currentPage: 1,
      perPage: 10
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/pagination.vue?vue&type=template&id=42792d80&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/pagination.vue?vue&type=template&id=42792d80& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Pagination", folder: "UI Kits" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-30 o-hidden",
                  attrs: { title: "Center Alignment" }
                },
                [
                  _c("b-pagination", {
                    attrs: { "total-rows": _vm.rows, align: "center" },
                    model: {
                      value: _vm.currentPage,
                      callback: function($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage"
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
            { attrs: { md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-30 o-hidden",
                  attrs: { title: "Right Alignment" }
                },
                [
                  _c("b-pagination", {
                    attrs: { "total-rows": _vm.rows, align: "right" },
                    model: {
                      value: _vm.currentPage,
                      callback: function($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage"
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
            { attrs: { md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-30 o-hidden",
                  attrs: { title: "Left Alignment" }
                },
                [
                  _c("b-pagination", {
                    attrs: { "total-rows": _vm.rows },
                    model: {
                      value: _vm.currentPage,
                      callback: function($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage"
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
            { attrs: { md: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-30 o-hidden",
                  attrs: { title: "Left Alignment" }
                },
                [
                  _c("b-pagination", {
                    attrs: { "total-rows": _vm.rows, align: "fill" },
                    model: {
                      value: _vm.currentPage,
                      callback: function($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage"
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
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-30 o-hidden",
                  attrs: { title: "Button size" }
                },
                [
                  _c("p", {}, [
                    _vm._v(
                      "\n          Optionally change from the default button size by setting the\n          "
                    ),
                    _c("code", [_vm._v("size")]),
                    _vm._v(" prop to either "),
                    _c("code", [_vm._v("'sm'")]),
                    _vm._v(" for smaller\n          buttons or "),
                    _c("code", [_vm._v("'lg'")]),
                    _vm._v(" for larger buttons.\n        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "overflow-auto" }, [
                    _c(
                      "div",
                      [
                        _c("h6", [_vm._v("Small")]),
                        _vm._v(" "),
                        _c("b-pagination", {
                          attrs: { "total-rows": _vm.rows, size: "sm" },
                          model: {
                            value: _vm.currentPage,
                            callback: function($$v) {
                              _vm.currentPage = $$v
                            },
                            expression: "currentPage"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mt-3" },
                      [
                        _c("h6", [_vm._v("Default")]),
                        _vm._v(" "),
                        _c("b-pagination", {
                          attrs: { "total-rows": _vm.rows },
                          model: {
                            value: _vm.currentPage,
                            callback: function($$v) {
                              _vm.currentPage = $$v
                            },
                            expression: "currentPage"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mt-3" },
                      [
                        _c("h6", [_vm._v("Large")]),
                        _vm._v(" "),
                        _c("b-pagination", {
                          attrs: { "total-rows": _vm.rows, size: "lg" },
                          model: {
                            value: _vm.currentPage,
                            callback: function($$v) {
                              _vm.currentPage = $$v
                            },
                            expression: "currentPage"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "mb-30 o-hidden",
                  attrs: { title: "Button Content" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "overflow-auto" },
                    [
                      _c("b-card-text", [
                        _vm._v("\n            Use text in props\n          ")
                      ]),
                      _vm._v(" "),
                      _c("b-pagination", {
                        staticClass: "mt-3",
                        attrs: {
                          "total-rows": _vm.rows,
                          "per-page": _vm.perPage,
                          "first-text": "First",
                          "prev-text": "Prev",
                          "next-text": "Next",
                          "last-text": "Last"
                        },
                        model: {
                          value: _vm.currentPage,
                          callback: function($$v) {
                            _vm.currentPage = $$v
                          },
                          expression: "currentPage"
                        }
                      }),
                      _vm._v(" "),
                      _c("b-card-text", [
                        _vm._v("\n            Use emojis in props\n          ")
                      ]),
                      _vm._v(" "),
                      _c("b-pagination", {
                        staticClass: "mt-4",
                        attrs: {
                          "total-rows": _vm.rows,
                          "per-page": _vm.perPage,
                          "first-text": "⏮",
                          "prev-text": "⏪",
                          "next-text": "⏩",
                          "last-text": "⏭"
                        },
                        model: {
                          value: _vm.currentPage,
                          callback: function($$v) {
                            _vm.currentPage = $$v
                          },
                          expression: "currentPage"
                        }
                      })
                    ],
                    1
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/ui-kits/pagination.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/app/ui-kits/pagination.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_vue_vue_type_template_id_42792d80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.vue?vue&type=template&id=42792d80& */ "./resources/js/views/app/ui-kits/pagination.vue?vue&type=template&id=42792d80&");
/* harmony import */ var _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination.vue?vue&type=script&lang=js& */ "./resources/js/views/app/ui-kits/pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pagination_vue_vue_type_template_id_42792d80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pagination_vue_vue_type_template_id_42792d80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/ui-kits/pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/ui-kits/pagination.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/pagination.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/ui-kits/pagination.vue?vue&type=template&id=42792d80&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/pagination.vue?vue&type=template&id=42792d80& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_42792d80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pagination.vue?vue&type=template&id=42792d80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/pagination.vue?vue&type=template&id=42792d80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_42792d80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_template_id_42792d80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);