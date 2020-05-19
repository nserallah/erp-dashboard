(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexColumnChart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/chart/apexColumnChart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Apex- Column Charts"
  },
  data: function data() {
    return {
      basicColumnChart: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["basicColumnChart"],
      columnDataLabels: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["columnDataLabels"],
      stackedColumn: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["stackedColumn"],
      negativeColumn: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["negativeColumn"],
      distributedColumnChart: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["distributedColumnChart"]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexColumnChart.vue?vue&type=template&id=8ad20ad0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/chart/apexColumnChart.vue?vue&type=template&id=8ad20ad0& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Apexcolumnchart", folder: "Chart" } }),
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
                  attrs: { title: "Basic Column chart" }
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
                          type: "bar",
                          height: "350",
                          options: _vm.basicColumnChart.chartOptions,
                          series: _vm.basicColumnChart.series
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
                  attrs: { title: "Column with Data Labels" }
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
                          type: "bar",
                          height: "350",
                          options: _vm.columnDataLabels.chartOptions,
                          series: _vm.columnDataLabels.series
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
                { staticClass: " mb-30", attrs: { title: "Stacked Columns" } },
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
                          type: "bar",
                          height: "350",
                          options: _vm.stackedColumn.chartOptions,
                          series: _vm.stackedColumn.series
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
                  attrs: { title: "Column with Negative Values" }
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
                          type: "bar",
                          height: "350",
                          options: _vm.negativeColumn.chartOptions,
                          series: _vm.negativeColumn.series
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
                  attrs: { title: "Distributed Columns" }
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
                          type: "bar",
                          height: "350",
                          options: _vm.distributedColumnChart.chartOptions,
                          series: _vm.distributedColumnChart.chartOptions.series
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

/***/ "./resources/js/views/app/chart/apexColumnChart.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/app/chart/apexColumnChart.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apexColumnChart_vue_vue_type_template_id_8ad20ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apexColumnChart.vue?vue&type=template&id=8ad20ad0& */ "./resources/js/views/app/chart/apexColumnChart.vue?vue&type=template&id=8ad20ad0&");
/* harmony import */ var _apexColumnChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apexColumnChart.vue?vue&type=script&lang=js& */ "./resources/js/views/app/chart/apexColumnChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _apexColumnChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _apexColumnChart_vue_vue_type_template_id_8ad20ad0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _apexColumnChart_vue_vue_type_template_id_8ad20ad0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/chart/apexColumnChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/chart/apexColumnChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/chart/apexColumnChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apexColumnChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./apexColumnChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexColumnChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apexColumnChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/chart/apexColumnChart.vue?vue&type=template&id=8ad20ad0&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/app/chart/apexColumnChart.vue?vue&type=template&id=8ad20ad0& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexColumnChart_vue_vue_type_template_id_8ad20ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./apexColumnChart.vue?vue&type=template&id=8ad20ad0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/chart/apexColumnChart.vue?vue&type=template&id=8ad20ad0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexColumnChart_vue_vue_type_template_id_8ad20ad0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apexColumnChart_vue_vue_type_template_id_8ad20ad0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);