(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/vCalendar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/extraKits/vCalendar.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "VCalendar"
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/vCalendar.vue?vue&type=template&id=7d44c235&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/extraKits/vCalendar.vue?vue&type=template&id=7d44c235& ***!
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
      _c("breadcumb", {
        attrs: { page: "Vue Calendar", folder: "Extra Kits" }
      }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "mb-30", attrs: { lg: "6", md: "12", sm: "12" } },
            [
              _c(
                "b-card",
                { staticClass: "o-hidden" },
                [
                  _c("h5", { staticClass: "mb-2" }, [_vm._v("Basic Calendar")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted mb-30" }, [
                    _vm._v("Simple Basic Calendar")
                  ]),
                  _vm._v(" "),
                  _c("v-calendar", { attrs: { "is-expanded": "" } })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: " mb-30", attrs: { lg: "6", md: "12", sm: "12" } },
            [
              _c(
                "b-card",
                { staticClass: "o-hidden" },
                [
                  _c("h5", { staticClass: "mb-2" }, [
                    _vm._v("Basic Calendar with Full Width")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted mb-30" }, [
                    _c("code", [_vm._v("is-expanded")]),
                    _vm._v(" used for full width\n        ")
                  ]),
                  _vm._v(" "),
                  _c("v-calendar", { attrs: { "is-expanded": "" } })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "6", md: "12 mb-30" } },
            [
              _c(
                "b-card",
                { staticClass: "o-hidden" },
                [
                  _c("h5", { staticClass: "mb-4" }, [
                    _vm._v("Date Picker Calendar")
                  ]),
                  _vm._v(" "),
                  _c("v-date-picker", {
                    attrs: {
                      "is-expanded": "",
                      mode: "range",
                      value: null,
                      color: "red",
                      "is-inline": ""
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
            { attrs: { lg: "6", md: "12 mb-30" } },
            [
              _c(
                "b-card",
                { staticClass: "o-hidden" },
                [
                  _c("h5", { staticClass: "mb-4 " }, [
                    _vm._v("Dark Date Picker Calendar")
                  ]),
                  _vm._v(" "),
                  _c("v-date-picker", {
                    attrs: {
                      "is-expanded": "",
                      mode: "range",
                      value: null,
                      color: "red",
                      "is-dark": "",
                      "is-inline": ""
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
            { attrs: { lg: "6", md: "12 mb-30" } },
            [
              _c(
                "b-card",
                { staticClass: "o-hidden" },
                [
                  _c("h5", { staticClass: "mb-4 " }, [
                    _vm._v("\n          Aligned Title by using "),
                    _c("code", [_vm._v('title-position="right" or left')])
                  ]),
                  _vm._v(" "),
                  _c("v-calendar", {
                    attrs: { "title-position": "right", "is-expanded": "" }
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
            { attrs: { lg: "6", md: "12 mb-30" } },
            [
              _c(
                "b-card",
                { staticClass: "o-hidden" },
                [
                  _c("h5", { staticClass: "mb-4 " }, [
                    _vm._v("More Than One Column")
                  ]),
                  _vm._v(" "),
                  _c("v-calendar", {
                    attrs: {
                      "is-expanded": "",
                      columns: _vm.$screens({ default: 1, lg: 2 })
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
            { attrs: { lg: "12", md: "12 mb-30" } },
            [
              _c(
                "b-card",
                { staticClass: "o-hidden" },
                [
                  _c("h5", { staticClass: "mb-4 " }, [
                    _vm._v("More Than One Column")
                  ]),
                  _vm._v(" "),
                  _c("v-calendar", {
                    attrs: {
                      columns: _vm.$screens({ default: 1, lg: 2 }),
                      rows: _vm.$screens({ default: 1, lg: 2 }),
                      "is-expanded": _vm.$screens({ default: true, lg: true })
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/extraKits/vCalendar.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/app/extraKits/vCalendar.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vCalendar_vue_vue_type_template_id_7d44c235___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vCalendar.vue?vue&type=template&id=7d44c235& */ "./resources/js/views/app/extraKits/vCalendar.vue?vue&type=template&id=7d44c235&");
/* harmony import */ var _vCalendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vCalendar.vue?vue&type=script&lang=js& */ "./resources/js/views/app/extraKits/vCalendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vCalendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vCalendar_vue_vue_type_template_id_7d44c235___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vCalendar_vue_vue_type_template_id_7d44c235___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/extraKits/vCalendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/extraKits/vCalendar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/app/extraKits/vCalendar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vCalendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vCalendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/vCalendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vCalendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/extraKits/vCalendar.vue?vue&type=template&id=7d44c235&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/app/extraKits/vCalendar.vue?vue&type=template&id=7d44c235& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vCalendar_vue_vue_type_template_id_7d44c235___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vCalendar.vue?vue&type=template&id=7d44c235& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/vCalendar.vue?vue&type=template&id=7d44c235&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vCalendar_vue_vue_type_template_id_7d44c235___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vCalendar_vue_vue_type_template_id_7d44c235___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);