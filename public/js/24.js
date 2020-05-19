(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboards/dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/data/echarts */ "./resources/js/data/echarts.js");
/* harmony import */ var _data_dashboard1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/dashboard1 */ "./resources/js/data/dashboard1.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import {getAPI} from "../../../util/axios";

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Dashboard"
  },
  created: function created() {// getAPI('/super/plan/fetch',{
    //   id : 1 ,
    //
    // });
  },
  data: function data() {
    return {
      echartBar: _data_echarts__WEBPACK_IMPORTED_MODULE_0__["echartBar"],
      echartPie: _data_echarts__WEBPACK_IMPORTED_MODULE_0__["echartPie"],
      echart1: _data_dashboard1__WEBPACK_IMPORTED_MODULE_1__["echart1"],
      echart2: _data_dashboard1__WEBPACK_IMPORTED_MODULE_1__["echart2"],
      echart3: _data_dashboard1__WEBPACK_IMPORTED_MODULE_1__["echart3"],
      columns: [{
        label: "Order Id",
        field: "id",
        thClass: "text-left pl-3",
        tdClass: "text-left pl-3"
      }, {
        label: "Buyer Name",
        field: "name",
        thClass: "text-left",
        tdClass: "text-left"
      }, {
        label: "Product",
        field: "img",
        html: true,
        thClass: "text-left",
        tdClass: "text-left"
      }, {
        label: "Status",
        field: "span",
        html: true,
        thClass: "text-left",
        tdClass: "text-left"
      }, {
        label: "Shipping Cost",
        field: "score",
        // html:true,
        type: "percentage",
        thClass: "text-left",
        tdClass: "text-left"
      }, {
        label: "Date",
        field: "createdAt",
        type: "date",
        dateInputFormat: "yyyy-mm-dd",
        dateOutputFormat: "mmm Do yy",
        thClass: "text-left",
        tdClass: "text-left"
      }, {
        label: "Action",
        field: "action",
        html: true,
        thClass: "text-left",
        tdClass: "text-left"
      }],
      rows: [{
        id: 1,
        name: "John",
        img: '<img src="' + __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg") + '" class="rounded-circle avatar-sm" alt=""> <img src="' + __webpack_require__(/*! @/assets/images/products/iphone-2.jpg */ "./resources/js/assets/images/products/iphone-2.jpg") + '" class="rounded-circle avatar-sm" alt="">',
        span: '<span class="badge badge-pill badge-outline-primary p-2 ">Delivered</span>',
        createdAt: "2019-10-31 ",
        score: 0.03343,
        action: '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
      }, {
        id: 2,
        name: "Jane",
        img: '<img src="' + __webpack_require__(/*! @/assets/images/products/headphone-1.jpg */ "./resources/js/assets/images/products/headphone-1.jpg") + '" class="rounded-circle avatar-sm" alt=""> <img src="' + __webpack_require__(/*! @/assets/images/products/headphone-2.jpg */ "./resources/js/assets/images/products/headphone-2.jpg") + '" class="rounded-circle avatar-sm" alt="">',
        span: '<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
        createdAt: "2011-10-31",
        score: 0.03343,
        action: '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
      }, {
        id: 3,
        name: "Susan",
        img: '<img src="' + __webpack_require__(/*! @/assets/images/products/headphone-3.jpg */ "./resources/js/assets/images/products/headphone-3.jpg") + '" class="rounded-circle avatar-sm" alt=""> <img src="' + __webpack_require__(/*! @/assets/images/products/headphone-4.jpg */ "./resources/js/assets/images/products/headphone-4.jpg") + '" class="rounded-circle avatar-sm" alt="">',
        span: '<span class="badge badge-pill badge-outline-success p-2 ">Delivered</span>',
        createdAt: "2011-10-30",
        score: 0.03343,
        action: '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
      }, {
        id: 4,
        name: "Chris",
        img: '<img src="' + __webpack_require__(/*! @/assets/images/products/speaker-1.jpg */ "./resources/js/assets/images/products/speaker-1.jpg") + '" class="rounded-circle avatar-sm" alt=""> <img src="' + __webpack_require__(/*! @/assets/images/products/speaker-2.jpg */ "./resources/js/assets/images/products/speaker-2.jpg") + '" class="rounded-circle avatar-sm" alt="">',
        span: '<span class="badge badge-pill badge-outline-primary p-2">Pending</span>',
        createdAt: "2011-10-11",
        score: 0.03343,
        action: '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
      }, {
        id: 5,
        name: "Dan",
        img: '<img src="' + __webpack_require__(/*! @/assets/images/products/watch-1.jpg */ "./resources/js/assets/images/products/watch-1.jpg") + '" class="rounded-circle avatar-sm" alt=""> <img src="' + __webpack_require__(/*! @/assets/images/products/watch-2.jpg */ "./resources/js/assets/images/products/watch-2.jpg") + '" class="rounded-circle avatar-sm" alt="">',
        span: '<span class="badge badge-pill badge-outline-info p-2">Processing</span>',
        createdAt: "2011-10-21",
        score: 0.03343,
        action: '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
      }, {
        id: 6,
        name: "John",
        img: '<img src="' + __webpack_require__(/*! @/assets/images/products/speaker-1.jpg */ "./resources/js/assets/images/products/speaker-1.jpg") + '" class="rounded-circle avatar-sm" alt=""> <img src="' + __webpack_require__(/*! @/assets/images/products/speaker-2.jpg */ "./resources/js/assets/images/products/speaker-2.jpg") + '" class="rounded-circle avatar-sm" alt="">',
        span: '<span class="badge badge-pill badge-outline-success p-2 ">Delivered</span>',
        createdAt: "2011-10-31",
        score: 0.03343,
        action: '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
      }, {
        id: 7,
        name: "John",
        img: '<img src="' + __webpack_require__(/*! @/assets/images/products/headphone-3.jpg */ "./resources/js/assets/images/products/headphone-3.jpg") + '" class="rounded-circle avatar-sm" alt=""> <img src="' + __webpack_require__(/*! @/assets/images/products/headphone-4.jpg */ "./resources/js/assets/images/products/headphone-4.jpg") + '" class="rounded-circle avatar-sm" alt="">',
        span: '<span class="badge badge-pill badge-outline-info p-2 ">Pending</span>',
        createdAt: "2019-10-31 ",
        score: 0.03343,
        action: '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
      }, {
        id: 8,
        name: "Jane",
        img: '<img src="' + __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg") + '" class="rounded-circle avatar-sm" alt=""> <img src="' + __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg") + '" class="rounded-circle avatar-sm" alt="">',
        span: '<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
        createdAt: "2011-10-31",
        score: 0.03343,
        action: '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboards/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.echarts {\n    width: 100%;\n    height: 100%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboards/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.vue?vue&type=template&id=76c605de&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboards/dashboard.vue?vue&type=template&id=76c605de& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("dashboard"), folder: _vm.$t("dashboard") }
      }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { lg: "3", md: "6", sm: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass:
                    "card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
                },
                [
                  _c("i", { staticClass: "i-Add-User" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "content" }, [
                    _c("p", { staticClass: "text-muted mt-2 mb-0" }, [
                      _vm._v("New Leads")
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "text-primary text-24 line-height-1 mb-2"
                      },
                      [_vm._v("205")]
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
            { attrs: { lg: "3", md: "6", sm: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass:
                    "card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
                },
                [
                  _c("i", { staticClass: "i-Financial" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "content" }, [
                    _c("p", { staticClass: "text-muted mt-2 mb-0" }, [
                      _vm._v("Sales")
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "text-primary text-24 line-height-1 mb-2"
                      },
                      [_vm._v("$4021")]
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
            { attrs: { lg: "3", md: "6", sm: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass:
                    "card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
                },
                [
                  _c("i", { staticClass: "i-Checkout-Basket" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "content" }, [
                    _c("p", { staticClass: "text-muted mt-2 mb-0" }, [
                      _vm._v("Orders")
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "text-primary text-24 line-height-1 mb-2"
                      },
                      [_vm._v("80")]
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
            { attrs: { lg: "3", md: "6", sm: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass:
                    "card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
                },
                [
                  _c("i", { staticClass: "i-Money-2" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "content" }, [
                    _c("p", { staticClass: "text-muted mt-2 mb-0" }, [
                      _vm._v("Expense")
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "text-primary text-24 line-height-1 mb-2"
                      },
                      [_vm._v("$1200")]
                    )
                  ])
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
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { lg: "8", md: "12", sm: "12" } },
            [
              _c("b-card", { staticClass: " mb-30" }, [
                _c("h4", { staticClass: "card-title m-0" }, [
                  _vm._v("This Year Sales")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "chart-wrapper",
                    staticStyle: { height: "300px", width: "100%" }
                  },
                  [
                    _c("v-chart", {
                      attrs: {
                        id: "echartbar",
                        options: _vm.echartBar,
                        autoresize: true
                      }
                    })
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
            { attrs: { col: "", lg: "4", md: "12", sm: "12" } },
            [
              _c("b-card", { staticClass: " mb-30" }, [
                _c("h4", { staticClass: "card-title m-0" }, [
                  _vm._v("Sales by Countries")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "chart-wrapper",
                    staticStyle: { height: "300px", width: "100%" }
                  },
                  [
                    _c("v-chart", {
                      attrs: { options: _vm.echartPie, autoresize: true }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/images/products/headphone-3.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/assets/images/products/headphone-3.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/headphone-3.jpg?17c2548a4c199ad4d4252b019c523632";

/***/ }),

/***/ "./resources/js/assets/images/products/headphone-4.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/assets/images/products/headphone-4.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/headphone-4.jpg?a25c0e7473083057e4c26391bbaa0e48";

/***/ }),

/***/ "./resources/js/assets/images/products/iphone-2.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/assets/images/products/iphone-2.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/iphone-2.jpg?66f4b2ff7908b734493c5d36928a9e41";

/***/ }),

/***/ "./resources/js/assets/images/products/watch-1.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/assets/images/products/watch-1.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/watch-1.jpg?b7e284147384c24e2d9db3eb4b36c4c3";

/***/ }),

/***/ "./resources/js/data/dashboard1.js":
/*!*****************************************!*\
  !*** ./resources/js/data/dashboard1.js ***!
  \*****************************************/
/*! exports provided: echart1, echart2, echart3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "echart1", function() { return echart1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "echart2", function() { return echart2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "echart3", function() { return echart3; });
var dark_heading = "#c2c6dc";
var echart1 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      animation: true
    }
  },
  grid: {
    left: "0%",
    top: "0%",
    right: "0%",
    bottom: "0%"
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [],
    axisLabel: {
      formatter: "{value}",
      color: dark_heading,
      fontSize: 0,
      fontStyle: "normal",
      fontWeight: 400
    },
    axisLine: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    axisTick: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: "",
        width: 0
      }
    }
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 100,
    interval: 50,
    axisLabel: {
      formatter: "",
      color: dark_heading,
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: 400
    },
    axisLine: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    axisTick: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    splitLine: {
      lineStyle: {
        color: "",
        width: 0,
        opacity: 0.5
      }
    }
  },
  series: [{
    name: "Visit",
    type: "line",
    smooth: true,
    data: [30, 40, 20, 50, 40, 80, 90],
    symbolSize: 8,
    showSymbol: false,
    lineStyle: {
      color: dark_heading,
      opacity: 1,
      width: 1.5
    },
    itemStyle: {
      show: false,
      color: "#ff5721",
      borderColor: "#ff5721",
      borderWidth: 1.5
    },
    areaStyle: {
      normal: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: "rgba(102, 51, 153, .2)"
          }, {
            offset: 0.3,
            color: "rgba(102, 51, 153, .2)"
          }, {
            offset: 1,
            color: "rgba(102, 51, 153, .2)"
          }]
        }
      }
    }
  }]
};
var echart2 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      animation: true
    }
  },
  grid: {
    left: "0%",
    top: "0%",
    right: "0%",
    bottom: "0%"
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [],
    axisLabel: {
      formatter: "{value}",
      color: "#666",
      fontSize: 0,
      fontStyle: "normal",
      fontWeight: 400
    },
    axisLine: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    axisTick: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: "",
        width: 0
      }
    }
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 100,
    interval: 50,
    axisLabel: {
      formatter: "",
      color: "#666",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: 400
    },
    axisLine: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    axisTick: {
      lineStyle: {
        color: "",
        width: 0
      }
    },
    splitLine: {
      lineStyle: {
        color: "",
        width: 0,
        opacity: 0.5
      }
    }
  },
  series: [{
    name: "Visit",
    type: "line",
    smooth: true,
    data: [30, 10, 40, 10, 40, 20, 90],
    symbolSize: 8,
    showSymbol: false,
    lineStyle: {
      color: "#FFC107",
      opacity: 1,
      width: 1.5
    },
    itemStyle: {
      show: false,
      color: "#ff5721",
      borderColor: "#ff5721",
      borderWidth: 1.5
    },
    areaStyle: {
      normal: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: "rgba(255, 193, 7, 0.2)"
          }, {
            offset: 0.3,
            color: "rgba(255, 193, 7, 0.2)"
          }, {
            offset: 1,
            color: "rgba(255, 193, 7, 0.2)"
          }]
        }
      }
    }
  }]
};
var echart3 = {
  tooltip: {
    show: true,
    // trigger: "axis",
    axisPointer: {
      type: "line",
      animation: true
    }
  },
  grid: {
    top: "10%",
    left: "0",
    right: "0",
    bottom: "0"
  },
  xAxis: {
    type: "category",
    data: [],
    axisLine: {
      show: false
    },
    axisLabel: {
      show: true
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: "value",
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: true
    }
  },
  label: {
    show: false,
    color: "#212121"
  },
  series: [{
    data: [40, 80, 20, 90, 30, 80, 40, 90, 20, 80, 30, 45, 50, 110, 90, 145, 120, 135, 120, 140],
    type: "line",
    showSymbol: true,
    smooth: true,
    color: "#639",
    lineStyle: {
      color: "rgba(102, 51, 153, 0.8)",
      opacity: 1,
      width: 3
    }
  }]
};

/***/ }),

/***/ "./resources/js/views/app/dashboards/dashboard.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/app/dashboards/dashboard.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_76c605de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=76c605de& */ "./resources/js/views/app/dashboards/dashboard.vue?vue&type=template&id=76c605de&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/app/dashboards/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/app/dashboards/dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_76c605de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_76c605de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/dashboards/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/dashboards/dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/app/dashboards/dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/dashboards/dashboard.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/app/dashboards/dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/app/dashboards/dashboard.vue?vue&type=template&id=76c605de&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/app/dashboards/dashboard.vue?vue&type=template&id=76c605de& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_76c605de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=76c605de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.vue?vue&type=template&id=76c605de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_76c605de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_76c605de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);