(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexLineChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/chart/apexLineChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Apex- Line Charts"
  },
  data: function data() {
    return {
      basicLineChart: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["basicLineChart"],
      lineChartWIthDataLabel: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["lineChartWIthDataLabel"],
      gradientLineChart: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["gradientLineChart"],
      dashedLineChart: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["dashedLineChart"],
      brushLineChart: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["brushLineChart"]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexLineChart.vue?vue&type=template&id=0a0d05ba&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/chart/apexLineChart.vue?vue&type=template&id=0a0d05ba& ***!
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
      _c("breadcumb", { attrs: { page: "Apexlinechart", folder: "Forms" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "12", lg: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30",
                  attrs: { title: "Basic line chart(Product Trends by Month)" }
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: { "min-height": "365px" },
                      attrs: { id: "basicArea-chart" }
                    },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "line",
                          height: "350",
                          options: _vm.basicLineChart.chartOptions,
                          series: _vm.basicLineChart.series
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
            { attrs: { md: "12", lg: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30",
                  attrs: {
                    title:
                      "Line with data Label(Average High & Low Temperature)"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: { "min-height": "365px" },
                      attrs: { id: "basicArea-chart" }
                    },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "line",
                          height: "350",
                          options: _vm.lineChartWIthDataLabel.chartOptions,
                          series: _vm.lineChartWIthDataLabel.series
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
            { attrs: { md: "12", lg: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30",
                  attrs: { title: "Gradient Line Chart(Social Media)" }
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: { "min-height": "365px" },
                      attrs: { id: "basicArea-chart" }
                    },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "line",
                          height: "350",
                          options: _vm.gradientLineChart.chartOptions,
                          series: _vm.gradientLineChart.series
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
            { attrs: { md: "12", lg: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30",
                  attrs: { title: "Dashed Line Chart(Page Statistics)" }
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: { "min-height": "365px" },
                      attrs: { id: "basicArea-chart" }
                    },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "line",
                          height: "350",
                          options: _vm.dashedLineChart.chartOptions,
                          series: _vm.dashedLineChart.series
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
            { attrs: { md: "12", lg: "6" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { title: "Brush Line chart" } },
                [
                  _c(
                    "div",
                    { attrs: { id: "chart1" } },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "line",
                          height: "230",
                          options: _vm.brushLineChart.chartOptionsArea,
                          series: _vm.brushLineChart.series
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { attrs: { id: "chart2" } },
                    [
                      _c("apexchart", {
                        attrs: {
                          type: "area",
                          height: "130",
                          options: _vm.brushLineChart.chartOptionsBrush,
                          series: _vm.brushLineChart.series
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

/***/ "./resources/js/views/app/chart/apexLineChart.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/app/chart/apexLineChart.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apexLineChart_vue_vue_type_template_id_0a0d05ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apexLineChart.vue?vue&type=template&id=0a0d05ba& */ "./resources/js/views/app/chart/apexLineChart.vue?vue&type=template&id=0a0d05ba&");
/* harmony import */ var _apexLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apexLineChart.vue?vue&type=script&lang=js& */ "./resources/js/views/app/chart/apexLineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _apexLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _apexLineChart_vue_vue_type_template_id_0a0d05ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _apexLineChart_vue_vue_type_template_id_0a0d05ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/chart/apexLineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/chart/apexLineChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/app/chart/apexLineChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apexLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./apexLineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexLineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apexLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/chart/apexLineChart.vue?vue&type=template&id=0a0d05ba&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/app/chart/apexLineChart.vue?vue&type=template&id=0a0d05ba& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexLineChart_vue_vue_type_template_id_0a0d05ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./apexLineChart.vue?vue&type=template&id=0a0d05ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexLineChart.vue?vue&type=template&id=0a0d05ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexLineChart_vue_vue_type_template_id_0a0d05ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexLineChart_vue_vue_type_template_id_0a0d05ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);