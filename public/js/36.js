(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/chart/apexChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Apex- Area Charts"
  },
  data: function data() {
    return {
      name: "apexChart",
      apexDemo: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["apexDemo"],
      basicArea: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["basicArea"],
      splineArea: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["splineArea"],
      dateTimeXaxis: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["dateTimeXaxis"],
      negativeArea: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["negativeArea"],
      stackedArea: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["stackedArea"],
      nullAreaChart: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["nullAreaChart"]
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexChart.vue?vue&type=template&id=469e8f4e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/chart/apexChart.vue?vue&type=template&id=469e8f4e& ***!
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
      _c("breadcumb", { attrs: { page: "Apexchart", folder: "Chart" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30",
                  attrs: {
                    title: "Basic Area chart(Fundamental Analysis of Stocks)"
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
                          type: "area",
                          height: "350",
                          options: _vm.basicArea.chartOptions,
                          series: _vm.basicArea.chartOptions.series
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
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { title: "Spline Area" } },
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
                          type: "area",
                          height: "350",
                          options: _vm.splineArea.chartOptions,
                          series: _vm.splineArea.series
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
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { title: "Datetime X-Axis" } },
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
                          type: "area",
                          height: "350",
                          options: _vm.dateTimeXaxis.chartOptions,
                          series: _vm.dateTimeXaxis.series
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
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30",
                  attrs: { title: "Area with Negative Values" }
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
                          type: "area",
                          height: "350",
                          width: "100%",
                          options: _vm.negativeArea.chartOptions,
                          series: _vm.negativeArea.series
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
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { title: "Stacked Area" } },
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
                          type: "area",
                          height: "350",
                          options: _vm.stackedArea.chartOptions,
                          series: _vm.stackedArea.chartOptions.series
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
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30",
                  attrs: {
                    title:
                      "Missing / Null values Area Chart(Network Monitoring)"
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
                          type: "area",
                          height: "350",
                          options: _vm.nullAreaChart.chartOptions,
                          series: _vm.nullAreaChart.series
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

/***/ "./resources/js/views/app/chart/apexChart.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/app/chart/apexChart.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apexChart_vue_vue_type_template_id_469e8f4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apexChart.vue?vue&type=template&id=469e8f4e& */ "./resources/js/views/app/chart/apexChart.vue?vue&type=template&id=469e8f4e&");
/* harmony import */ var _apexChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apexChart.vue?vue&type=script&lang=js& */ "./resources/js/views/app/chart/apexChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _apexChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _apexChart_vue_vue_type_template_id_469e8f4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _apexChart_vue_vue_type_template_id_469e8f4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/chart/apexChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/chart/apexChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/app/chart/apexChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apexChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./apexChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apexChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/chart/apexChart.vue?vue&type=template&id=469e8f4e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/chart/apexChart.vue?vue&type=template&id=469e8f4e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexChart_vue_vue_type_template_id_469e8f4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./apexChart.vue?vue&type=template&id=469e8f4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexChart.vue?vue&type=template&id=469e8f4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexChart_vue_vue_type_template_id_469e8f4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexChart_vue_vue_type_template_id_469e8f4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);