(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexSparklineChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/chart/apexSparklineChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_apexChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/data/apexChart */ "./resources/js/data/apexChart.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Apex- Sparkline Charts"
  },
  data: function data() {
    return {
      spark1: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["spark1"],
      spark2: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["spark2"],
      spark3: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["spark3"],
      spark4: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["spark4"],
      spark5: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["spark5"],
      spark6: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["spark6"],
      spark7: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["spark7"],
      spark8: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["spark8"],
      spark9: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["spark9"],
      spark10: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["spark10"]
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexSparklineChart.vue?vue&type=template&id=7f2acd66&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/chart/apexSparklineChart.vue?vue&type=template&id=7f2acd66& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "ApexSparkline", folder: "Chart" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "3" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30 o-hidden",
                  attrs: { "no-body": "", title: "" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "mt-2", attrs: { id: "basicArea-chart" } },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "area",
                          height: "160",
                          options: _vm.spark1.chartOptions,
                          series: _vm.spark1.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "3" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30 o-hidden",
                  attrs: { "no-body": "", title: "" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "mt-2", attrs: { id: "basicArea-chart" } },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "area",
                          height: "160",
                          options: _vm.spark2.chartOptions,
                          series: _vm.spark2.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "3" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30 o-hidden",
                  attrs: { "no-body": "", title: "" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "mt-2", attrs: { id: "basicArea-chart" } },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "area",
                          height: "160",
                          options: _vm.spark3.chartOptions,
                          series: _vm.spark3.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "3" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30 o-hidden",
                  attrs: { "no-body": "", title: "" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "mt-2", attrs: { id: "basicArea-chart" } },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "line",
                          height: "160",
                          options: _vm.spark4.chartOptions,
                          series: _vm.spark4.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "3" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30 o-hidden",
                  attrs: { "no-body": "", title: "" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "mt-2", attrs: { id: "basicArea-chart" } },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "line",
                          height: "160",
                          options: _vm.spark5.chartOptions,
                          series: _vm.spark5.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "3" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { "no-body": "", title: "" } },
                [
                  _c(
                    "div",
                    { staticClass: "mt-2", attrs: { id: "basicArea-chart" } },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "line",
                          height: "160",
                          options: _vm.spark6.chartOptions,
                          series: _vm.spark6.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "3" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { "no-body": "", title: "" } },
                [
                  _c(
                    "div",
                    { staticClass: "mt-2", attrs: { id: "basicArea-chart" } },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "line",
                          height: "160",
                          options: _vm.spark7.chartOptions,
                          series: _vm.spark7.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "3" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { "no-body": "", title: "" } },
                [
                  _c(
                    "div",
                    { staticClass: "mt-2", attrs: { id: "basicArea-chart" } },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "bar",
                          height: "160",
                          options: _vm.spark7.chartOptions,
                          series: _vm.spark7.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "3" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { "no-body": "", title: "" } },
                [
                  _c(
                    "div",
                    { staticClass: "mt-2", attrs: { id: "basicArea-chart" } },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "bar",
                          height: "160",
                          options: _vm.spark8.chartOptions,
                          series: _vm.spark8.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "3" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { "no-body": "", title: "" } },
                [
                  _c(
                    "div",
                    { staticClass: "mt-2", attrs: { id: "basicArea-chart" } },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "bar",
                          height: "160",
                          options: _vm.spark9.chartOptions,
                          series: _vm.spark9.series
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "3" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { "no-body": "", title: "" } },
                [
                  _c(
                    "div",
                    { staticClass: "mt-2", attrs: { id: "basicArea-chart" } },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "bar",
                          height: "160",
                          options: _vm.spark10.chartOptions,
                          series: _vm.spark10.series
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

/***/ "./resources/js/views/app/chart/apexSparklineChart.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/app/chart/apexSparklineChart.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apexSparklineChart_vue_vue_type_template_id_7f2acd66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apexSparklineChart.vue?vue&type=template&id=7f2acd66& */ "./resources/js/views/app/chart/apexSparklineChart.vue?vue&type=template&id=7f2acd66&");
/* harmony import */ var _apexSparklineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apexSparklineChart.vue?vue&type=script&lang=js& */ "./resources/js/views/app/chart/apexSparklineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _apexSparklineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _apexSparklineChart_vue_vue_type_template_id_7f2acd66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _apexSparklineChart_vue_vue_type_template_id_7f2acd66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/chart/apexSparklineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/chart/apexSparklineChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/app/chart/apexSparklineChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apexSparklineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./apexSparklineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexSparklineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apexSparklineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/chart/apexSparklineChart.vue?vue&type=template&id=7f2acd66&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/app/chart/apexSparklineChart.vue?vue&type=template&id=7f2acd66& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexSparklineChart_vue_vue_type_template_id_7f2acd66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./apexSparklineChart.vue?vue&type=template&id=7f2acd66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexSparklineChart.vue?vue&type=template&id=7f2acd66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexSparklineChart_vue_vue_type_template_id_7f2acd66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexSparklineChart_vue_vue_type_template_id_7f2acd66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);