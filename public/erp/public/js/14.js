(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_apexChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/data/apexChart */ "./resources/js/data/apexChart.js");
/* harmony import */ var _data_widgetStatistics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/widgetStatistics */ "./resources/js/data/widgetStatistics.js");
/* harmony import */ var _data_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/echarts */ "./resources/js/data/echarts.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Dashboard v4"
  },
  props: {
    title: {
      type: String,
      "default": "Awesome Wizard"
    }
  },
  data: function data() {
    return {
      splineAreaWidget: _data_widgetStatistics__WEBPACK_IMPORTED_MODULE_1__["splineAreaWidget"],
      splineAreaWidgetTwo: _data_widgetStatistics__WEBPACK_IMPORTED_MODULE_1__["splineAreaWidgetTwo"],
      splineAreaWidgetThree: _data_widgetStatistics__WEBPACK_IMPORTED_MODULE_1__["splineAreaWidgetThree"],
      splineAreaWidgetFour: _data_widgetStatistics__WEBPACK_IMPORTED_MODULE_1__["splineAreaWidgetFour"],
      radialBar: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["radialBar"],
      stackedPie: _data_echarts__WEBPACK_IMPORTED_MODULE_2__["stackedPie"],
      spark3: _data_apexChart__WEBPACK_IMPORTED_MODULE_0__["spark3"],
      values: [30, 20],
      max: 100,
      // list
      columns: [{
        label: "Thumbnail ",
        field: "img",
        width: "100px",
        tdClass: "gull-border-none text-left"
      }, {
        label: "Title",
        field: "span",
        html: true,
        tdClass: "gull-border-none text-left"
      }, {
        label: "Status",
        field: "status",
        html: true,
        tdClass: "text-left gull-border-none",
        thClass: "text-left"
      }, {
        label: "Created On",
        field: "createdAt",
        type: "date",
        dateInputFormat: "yyyy-mm-dd",
        dateOutputFormat: "mmm Do yy",
        tdClass: "text-left gull-border-none",
        thClass: "text-left"
      }, {
        label: "Progress",
        field: "progressbar",
        html: true,
        tdClass: "text-left gull-border-none",
        thClass: "text-left"
      }],
      rows: [{
        id: 1,
        img: __webpack_require__(/*! @/assets/images/products/speaker-1.jpg */ "./resources/js/assets/images/products/speaker-1.jpg"),
        status: '<span class="badge badge-danger">Cancel</span>',
        span: "Wireless Bluetooth V4.0 ",
        createdAt: "2011-10-28",
        progressbar: '<div class="progress progress--height mt-1" ><div class="progress-bar bg-success" role="progressbar" style="width: 25%; " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div></div>'
      }, {
        id: 2,
        img: __webpack_require__(/*! @/assets/images/products/speaker-2.jpg */ "./resources/js/assets/images/products/speaker-2.jpg"),
        status: '<span class="badge badge-warning">Pending</span>',
        span: "Portable Speaker with HD Sound",
        createdAt: "2011-10-28",
        progressbar: '<div class="progress progress--height mt-1" ><div class="progress-bar bg-primary" role="progressbar" style="width: 50%; " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div></div>'
      }, {
        id: 3,
        img: __webpack_require__(/*! @/assets/images/products/headphone-2.jpg */ "./resources/js/assets/images/products/headphone-2.jpg"),
        status: '<span class="badge badge-success">Success</span>',
        span: "Lightweight On-Ear",
        createdAt: "2011-10-30",
        progressbar: '<div class="progress progress--height mt-1" ><div class="progress-bar bg-danger" role="progressbar" style="width: 75%; " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div></div>'
      }, {
        id: 4,
        img: __webpack_require__(/*! @/assets/images/products/watch-1.jpg */ "./resources/js/assets/images/products/watch-1.jpg"),
        status: '<span class="badge badge-danger">Cancel</span>',
        span: "Automatic-self-wind mens ",
        createdAt: "2011-10-11",
        progressbar: '<div class="progress progress--height mt-1" ><div class="progress-bar bg-info" role="progressbar" style="width: 100%; " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div></div>'
      }, {
        id: 5,
        img: __webpack_require__(/*! @/assets/images/products/watch-1.jpg */ "./resources/js/assets/images/products/watch-1.jpg"),
        status: '<span class="badge badge-primary">Approved</span>',
        span: "Automatic-self-wind ",
        createdAt: "2011-10-21",
        progressbar: '<div class="progress progress--height mt-1" ><div class="progress-bar bg-warning" role="progressbar" style="width: 80%; " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div></div>'
      }, {
        id: 6,
        img: __webpack_require__(/*! @/assets/images/products/headphone-3.jpg */ "./resources/js/assets/images/products/headphone-3.jpg"),
        status: '<span class="badge badge-info">Pending</span>',
        span: "On-Ear Headphones - Black",
        createdAt: "2011-10-28",
        progressbar: '<div class="progress progress--height mt-1" ><div class="progress-bar bg-success" role="progressbar" style="width: 25%; " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div></div>'
      }, {
        id: 7,
        img: __webpack_require__(/*! @/assets/images/products/headphone-2.jpg */ "./resources/js/assets/images/products/headphone-2.jpg"),
        status: '<span class="badge badge-success">Pending</span>',
        span: "Lightweight On-Ear Headphones - Black",
        createdAt: "2011-10-30",
        progressbar: '<div class="progress progress--height mt-1" ><div class="progress-bar bg-danger" role="progressbar" style="width: 75%; " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div></div>'
      }]
    };
  },
  methods: {
    onComplete: function onComplete() {
      this.$swal({
        position: "top-end",
        type: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    },
    // for vue-good-table testing
    rowStyleClassFn: function rowStyleClassFn(row) {
      return row.age > 18 ? "green" : "red";
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.gull-border-none {\n  border-bottom: none !important;\n}\ntable.tableOne.vgt-table {\n  border: none;\n}\ntable.vgt-table td {\n  padding: 8px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.v4.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=template&id=15426eab&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=template&id=15426eab& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Version 4", folder: "Dashboard" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { lg: "6", xl: "3", md: "6", sm: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30 o-hidden",
                  attrs: { "no-body": "", title: "" }
                },
                [
                  _c("div", { staticClass: "ul-widget__chart-info" }, [
                    _c("h5", { staticClass: "text-muted text-10" }, [
                      _vm._v("INCOME")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "ul-widget__chart-number" }, [
                      _c("h2", { staticClass: "t-font-boldest" }, [
                        _vm._v("$1000")
                      ]),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v("46% compared to last year")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-card-body", { staticClass: "ul-card__widget-chart" }, [
                    _c(
                      "div",
                      { attrs: { id: "basicArea-chart" } },
                      [
                        _c("apexchart", {
                          attrs: {
                            type: "area",
                            height: "150",
                            options: _vm.splineAreaWidget.chartOptions,
                            series: _vm.splineAreaWidget.series
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "6", xl: "3", md: "6", sm: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30 o-hidden",
                  attrs: { "no-body": "", title: "" }
                },
                [
                  _c("div", { staticClass: "ul-widget__chart-info" }, [
                    _c("h5", { staticClass: "text-muted text-10" }, [
                      _vm._v("APPROVE")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "ul-widget__chart-number" }, [
                      _c("h2", { staticClass: "t-font-boldest" }, [
                        _vm._v("$500")
                      ]),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v("46% compared to last year")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-card-body", { staticClass: "ul-card__widget-chart" }, [
                    _c(
                      "div",
                      { attrs: { id: "basicArea-chart" } },
                      [
                        _c("apexchart", {
                          attrs: {
                            type: "area",
                            height: "150",
                            options: _vm.splineAreaWidgetTwo.chartOptions,
                            series: _vm.splineAreaWidgetTwo.series
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "6", xl: "3", md: "6", sm: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30 o-hidden",
                  attrs: { "no-body": "", title: "" }
                },
                [
                  _c("div", { staticClass: "ul-widget__chart-info" }, [
                    _c("h5", { staticClass: "text-muted text-10" }, [
                      _vm._v("TRANSACTION")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "ul-widget__chart-number" }, [
                      _c("h2", { staticClass: "t-font-boldest" }, [
                        _vm._v("$44,909")
                      ]),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v("46% compared to last year")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-card-body", { staticClass: "ul-card__widget-chart" }, [
                    _c(
                      "div",
                      { attrs: { id: "basicArea-chart" } },
                      [
                        _c("apexchart", {
                          attrs: {
                            type: "area",
                            height: "150",
                            options: _vm.splineAreaWidgetThree.chartOptions,
                            series: _vm.splineAreaWidgetThree.series
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "6", xl: "3", md: "6", sm: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30 o-hidden",
                  attrs: { "no-body": "", title: "" }
                },
                [
                  _c("div", { staticClass: "ul-widget__chart-info" }, [
                    _c("h5", { staticClass: "text-muted text-10" }, [
                      _vm._v("SALES")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "ul-widget__chart-number" }, [
                      _c("h2", { staticClass: "t-font-boldest" }, [
                        _vm._v("$500")
                      ]),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v("46% compared to last year")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-card-body", { staticClass: "ul-card__widget-chart" }, [
                    _c(
                      "div",
                      { attrs: { id: "basicArea-chart" } },
                      [
                        _c("apexchart", {
                          attrs: {
                            type: "area",
                            height: "150",
                            options: _vm.splineAreaWidgetFour.chartOptions,
                            series: _vm.splineAreaWidgetFour.series
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: " mb-30", attrs: { sm: "12", md: "12", xl: "8" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "o-hidden",
                  attrs: {
                    title: "Create Your Company Profile And Get Started"
                  }
                },
                [
                  _c(
                    "form-wizard",
                    {
                      attrs: {
                        title: "",
                        subtitle: "",
                        shape: "circle",
                        color: "#639"
                      },
                      on: { "on-complete": _vm.onComplete }
                    },
                    [
                      _c(
                        "tab-content",
                        {
                          attrs: { title: "Basic Info", icon: "i-Information" }
                        },
                        [
                          _c(
                            "b-form",
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "col-md-6 mb-30",
                                      attrs: {
                                        id: "input-group-1",
                                        label: "First Name:",
                                        "label-for": "input-1"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: {
                                          id: "input-1",
                                          type: "text",
                                          required: "",
                                          placeholder: "Enter Your First Name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "col-md-6",
                                      attrs: {
                                        id: "input-group-1",
                                        label: "Last Name:",
                                        "label-for": "input-1"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: {
                                          id: "input-1",
                                          type: "text",
                                          required: "",
                                          placeholder: "Enter Your Last Name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "col-md-6",
                                      attrs: {
                                        id: "input-group-1",
                                        label: "email Address:",
                                        "label-for": "input-1"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: {
                                          id: "input-1",
                                          type: "email",
                                          required: "",
                                          placeholder:
                                            "Enter Your Email Address"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "col-md-6",
                                      attrs: {
                                        id: "input-group-1",
                                        label: "Phone Number:",
                                        "label-for": "input-1"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: {
                                          id: "input-1",
                                          type: "number",
                                          required: "",
                                          placeholder: "Enter Your Number"
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
                        "tab-content",
                        {
                          attrs: {
                            title: "Company Info",
                            icon: "i-Business-Mens"
                          }
                        },
                        [
                          _c(
                            "b-row",
                            [
                              _c("b-col", { attrs: { md: "6" } }, [
                                _c("h6", { staticClass: "mb-2" }, [
                                  _vm._v("Employees")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  { staticClass: "checkbox checkbox-primary" },
                                  [
                                    _c("input", {
                                      attrs: { type: "checkbox", checked: "" }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Designer")]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "checkmark" })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "checkbox checkbox-secondary"
                                  },
                                  [
                                    _c("input", {
                                      attrs: { type: "checkbox", checked: "" }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Coder")]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "checkmark" })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  { staticClass: "checkbox checkbox-success" },
                                  [
                                    _c("input", {
                                      attrs: { type: "checkbox", checked: "" }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("QA")]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "checkmark" })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { md: "6" } }, [
                                _c("h6", { staticClass: "mb-2" }, [
                                  _vm._v("Company")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "radio radio-outline-primary"
                                  },
                                  [
                                    _c("input", {
                                      attrs: {
                                        type: "radio",
                                        name: "radio",
                                        formcontrolname: "radio"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Less than 1 Year")]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "checkmark" })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "radio radio-outline-success"
                                  },
                                  [
                                    _c("input", {
                                      attrs: {
                                        type: "radio",
                                        name: "radio",
                                        formcontrolname: "radio"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("1-5 years")]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "checkmark" })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "radio radio-outline-warning"
                                  },
                                  [
                                    _c("input", {
                                      attrs: {
                                        type: "radio",
                                        name: "radio",
                                        formcontrolname: "radio"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("5+ years")]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "checkmark" })
                                  ]
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "tab-content",
                        {
                          attrs: { title: "Payment info", icon: "i-Car-Coins" }
                        },
                        [
                          _c(
                            "b-form",
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "col-md-6",
                                      attrs: {
                                        id: "input-group-1",
                                        label: "Card Number:",
                                        "label-for": "input-1"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: {
                                          id: "input-1",
                                          type: "text",
                                          required: "",
                                          placeholder: "Card Number"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "col-md-6",
                                      attrs: {
                                        id: "input-group-1",
                                        label: "Expires at:",
                                        "label-for": "input-1"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: {
                                          id: "input-1",
                                          type: "text",
                                          required: "",
                                          placeholder: "Expires at"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-group",
                                    {
                                      staticClass: "col-md-6",
                                      attrs: {
                                        id: "input-group-1",
                                        label: "Security code:",
                                        "label-for": "input-1"
                                      }
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: {
                                          id: "input-1",
                                          type: "text",
                                          required: "",
                                          placeholder: "Security code"
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
                        "button",
                        {
                          staticClass: "btn btn-outline-primary btn-rounded",
                          attrs: { slot: "prev", type: "primary" },
                          slot: "prev"
                        },
                        [_vm._v("\n            Back\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-primary btn-rounded",
                          attrs: { slot: "next", type: "primary" },
                          slot: "next"
                        },
                        [_vm._v("\n            Next\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-success btn-rounded",
                          attrs: { slot: "finish", type: "primary" },
                          slot: "finish"
                        },
                        [_vm._v("\n            Finish\n          ")]
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
            { staticClass: " mb-30", attrs: { sm: "12", md: "12", xl: "4" } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6", xl: "12" } },
                    [
                      _c("b-card", { staticClass: "o-hidden mb-30" }, [
                        _c("div", { staticClass: "user-profile mb-30" }, [
                          _c(
                            "div",
                            { staticClass: "ul-widget-card__user-info" },
                            [
                              _c("img", {
                                staticClass: "profile-picture avatar-lg mb-2",
                                attrs: {
                                  src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                  alt: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("p", { staticClass: "m-0 text-24" }, [
                                _vm._v("Timothy Carlson")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Digital Marketer")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "ul-widget-card--line mt-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("Download")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "float-right",
                                  attrs: { variant: "outline-success" }
                                },
                                [_vm._v("Preview")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "ul-widget-card__rate-icon" },
                            [
                              _c("span", [
                                _c("i", {
                                  staticClass: "i-Add-UserStar text-warning"
                                }),
                                _vm._v(
                                  "\n                  5.0\n                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("span", [
                                _c("i", { staticClass: "i-Bag text-primary" }),
                                _vm._v(
                                  "\n                  78 Projects\n                "
                                )
                              ])
                            ]
                          )
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6 ", xl: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass:
                            "o-hidden card-icon-bg card-icon-bg-primary o-hidden  text-center"
                        },
                        [
                          _c("i", { staticClass: "i-Data-Upload" }),
                          _vm._v(" "),
                          _c("div", { staticClass: "content" }, [
                            _c("p", { staticClass: "text-muted mt-2 mb-0" }, [
                              _vm._v("Download")
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass:
                                  "text-primary text-24 line-height-1 mb-2"
                              },
                              [_vm._v("4021")]
                            )
                          ])
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: " mb-30", attrs: { xl: "8", md: "12" } },
            [
              _c(
                "b-card",
                { staticClass: "o-hidden", attrs: { "no-body": "" } },
                [
                  _c(
                    "b-card-header",
                    { attrs: { "header-bg-variant": "transparent" } },
                    [
                      _c(
                        "b-row",
                        { staticStyle: { "align-items": "center" } },
                        [
                          _c("b-col", { attrs: { md: "6" } }, [
                            _c(
                              "div",
                              { staticClass: "ul-card-widget__head-label" },
                              [
                                _c("h5", { staticClass: " card-title" }, [
                                  _vm._v(
                                    "\n                  Finance Summary\n                "
                                  )
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "text-md-right",
                              attrs: { md: "6" }
                            },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-primary" } },
                                [
                                  _vm._v(
                                    "\n                Summary View\n              "
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
                  ),
                  _vm._v(" "),
                  _c(
                    "b-card-body",
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            {
                              staticClass: "mb-4 mb-md-0",
                              attrs: { md: "6 " }
                            },
                            [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "text-muted text-14 font-weight-500"
                                },
                                [
                                  _vm._v(
                                    "\n                Final Commission Revenue\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "text-muted text-18 font-weight-600"
                                },
                                [_vm._v("$790,420")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "mb-4 mb-md-0", attrs: { md: "6" } },
                            [
                              _c(
                                "h3",
                                {
                                  staticClass:
                                    "text-muted text-14 font-weight-500"
                                },
                                [
                                  _vm._v(
                                    "\n                Final Commission Revenue\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "text-muted text-18 font-weight-600"
                                },
                                [_vm._v("\n                July 25,2019")]
                              )
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
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: " mb-30", attrs: { xl: "4", md: "12" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " o-hidden",
                  attrs: { title: "Stacked Pie Chart" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "chart-wrapper",
                      staticStyle: { height: "250px" }
                    },
                    [
                      _c("v-chart", {
                        attrs: { options: _vm.stackedPie, autoresize: true }
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
            { staticClass: " mb-30", attrs: { md: "12", xl: "8" } },
            [
              _c(
                "b-card",
                { staticClass: "wrapper o-hidden h-100", attrs: { title: "" } },
                [
                  _c("vue-good-table", {
                    attrs: {
                      "fixed-header": true,
                      columns: _vm.columns,
                      styleClass: "tableOne text-left vgt-table",
                      "row-style-class": "text-left",
                      rows: _vm.rows
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "table-row",
                        fn: function(props) {
                          return [
                            props.column.field == "img"
                              ? _c("span", [
                                  _c("img", {
                                    staticClass: "rounded",
                                    staticStyle: {
                                      width: "50px",
                                      height: "50px"
                                    },
                                    attrs: {
                                      src: props.row.img,
                                      alt: "corrupted img"
                                    }
                                  })
                                ])
                              : _vm._e()
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("b-col", { staticClass: " mb-30", attrs: { xl: "4", md: "6" } }, [
            _c("div", { staticClass: "card  o-hidden" }, [
              _c("img", {
                staticClass: "card-img-top",
                attrs: {
                  src: __webpack_require__(/*! @/assets/images/photo-wide-3.jpg */ "./resources/js/assets/images/photo-wide-3.jpg"),
                  alt: ""
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [_vm._v("Card title")]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "\n            Some quick example text to build on the card title and make up the\n            bulk of the card's content.\n          "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "list-group list-group-flush" }, [
                _c("li", { staticClass: "list-group-item" }, [
                  _vm._v("Cras justo odio")
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "list-group-item" }, [
                  _vm._v("Dapibus ac facilisis in")
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "list-group-item" }, [
                  _vm._v("Vestibulum at eros")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: " mb-30", attrs: { md: "6", xl: "6" } },
            [
              _c(
                "b-card",
                { attrs: { "bg-variant": "defualt", "text-variant": "black" } },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex align-items-center  mb-30" },
                    [
                      _c("i", { staticClass: "i-ID-Card text-22 mr-2" }),
                      _vm._v(" "),
                      _c("h5", { staticClass: " card-title m-0" }, [
                        _vm._v("\n            Card Information\n          ")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "6" } },
                        [
                          _c("p", { staticClass: "font-weight-400 mb-2" }, [
                            _vm._v("CPF")
                          ]),
                          _vm._v(" "),
                          _c("the-mask", {
                            staticClass: "form-control",
                            attrs: {
                              mask: ["###.###.###-##"],
                              placeholder: "999.999.999-99"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-3", attrs: { md: "6" } },
                        [
                          _c("p", { staticClass: "font-weight-400 mb-2" }, [
                            _vm._v("Zip Code")
                          ]),
                          _vm._v(" "),
                          _c("the-mask", {
                            staticClass: "form-control",
                            attrs: {
                              mask: ["#####-###"],
                              placeholder: "99999-999"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-3", attrs: { md: "6" } },
                        [
                          _c("p", { staticClass: "font-weight-400 mb-2" }, [
                            _vm._v("Phone")
                          ]),
                          _vm._v(" "),
                          _c("the-mask", {
                            staticClass: "form-control",
                            attrs: {
                              mask: ["+# (###) ###-####"],
                              placeholder: "+9 (999) 999-9999"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-3", attrs: { md: "6" } },
                        [
                          _c("p", { staticClass: "font-weight-400 mb-2" }, [
                            _vm._v("Master Card")
                          ]),
                          _vm._v(" "),
                          _c("the-mask", {
                            staticClass: "form-control",
                            attrs: {
                              mask: ["#### #### #### ####"],
                              placeholder: "9999 9999 9999 9999"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-3", attrs: { md: "6" } },
                        [
                          _c("p", { staticClass: "font-weight-400 mb-2" }, [
                            _vm._v("Date")
                          ]),
                          _vm._v(" "),
                          _c("the-mask", {
                            staticClass: "form-control",
                            attrs: {
                              mask: ["##/##/####"],
                              placeholder: "mm/dd/yy"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-3", attrs: { md: "6" } },
                        [
                          _c("p", { staticClass: "font-weight-400 mb-2" }, [
                            _vm._v("CPF/CNPJ")
                          ]),
                          _vm._v(" "),
                          _c("the-mask", {
                            staticClass: "form-control",
                            attrs: {
                              mask: ["###.###.###-##", "##.###.###/####-##"],
                              placeholder: "99.999.999/9999-99"
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
                    "b-button",
                    {
                      staticClass: "float-right",
                      attrs: { variant: "danger" }
                    },
                    [_vm._v("Submit")]
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
            { staticClass: " mb-30", attrs: { xl: "6", md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "o-hidden",
                  attrs: { "no-body": "", title: "Payment Form #2" }
                },
                [
                  _c(
                    "b-tabs",
                    {
                      attrs: {
                        pills: "",
                        card: "",
                        "content-class": "mt-3",
                        fill: ""
                      }
                    },
                    [
                      _c(
                        "b-tab",
                        { attrs: { active: "" } },
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", {
                              staticClass:
                                "i-Credit-Card-2 text-16 mr-2 align-middle"
                            }),
                            _vm._v(" Credit\n              Card\n            ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-form",
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: "Full Name" } },
                                [
                                  _c(
                                    "b-input-group",
                                    { staticClass: "mb-2 mr-sm-2 mb-sm-0" },
                                    [
                                      _c("b-input-group-prepend", [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "input-group-text",
                                            attrs: { id: "basic-addon1" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "i-Male-21 text-18"
                                            })
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("b-input", {
                                        attrs: {
                                          id: "inline-form-input-username",
                                          placeholder: "Full Name"
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
                                "b-form-group",
                                {
                                  staticClass: "mt-4",
                                  attrs: { label: "Card Number" }
                                },
                                [
                                  _c(
                                    "b-input-group",
                                    { staticClass: "mb-2 mr-sm-2 mb-sm-0" },
                                    [
                                      _c("b-input-group-prepend", [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "input-group-text",
                                            attrs: { id: "basic-addon1" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "i-Credit-Card-2 text-18"
                                            })
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("b-input", {
                                        attrs: {
                                          id: "inline-form-input-username",
                                          placeholder: "card number"
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
                                "b-row",
                                { staticClass: "mt-4" },
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        { attrs: { label: "Expiration" } },
                                        [
                                          _c(
                                            "b-form-select",
                                            {
                                              attrs: {
                                                value: null,
                                                options: {
                                                  "1": "January",
                                                  "2": "Febraury",
                                                  "3": "March"
                                                },
                                                id:
                                                  "inline-form-custom-select-pref"
                                              }
                                            },
                                            [
                                              _c(
                                                "option",
                                                {
                                                  attrs: { slot: "first" },
                                                  domProps: { value: null },
                                                  slot: "first"
                                                },
                                                [_vm._v("Month")]
                                              )
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
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          staticStyle: { "margin-top": "25px" }
                                        },
                                        [
                                          _c(
                                            "b-form-select",
                                            {
                                              attrs: {
                                                value: null,
                                                options: {
                                                  "1": "2018",
                                                  "2": "2019",
                                                  "3": "2020"
                                                },
                                                id:
                                                  "inline-form-custom-select-pref"
                                              }
                                            },
                                            [
                                              _c(
                                                "option",
                                                {
                                                  attrs: { slot: "first" },
                                                  domProps: { value: null },
                                                  slot: "first"
                                                },
                                                [_vm._v("Year")]
                                              )
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
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        { attrs: { label: "CVV" } },
                                        [_c("b-form-input")],
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
                                "b-button",
                                {
                                  staticClass: "mt-3",
                                  attrs: { block: "", variant: "primary " }
                                },
                                [_vm._v("Confirm")]
                              )
                            ],
                            1
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", {
                              staticClass: "i-Paypal text-16 mr-2 align-middle"
                            }),
                            _vm._v(" Paypal\n            ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-form",
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: "Full Name" } },
                                [
                                  _c(
                                    "b-input-group",
                                    { staticClass: "mb-2 mr-sm-2 mb-sm-0" },
                                    [
                                      _c("b-input-group-prepend", [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "input-group-text",
                                            attrs: { id: "basic-addon1" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "i-Male-21 text-18"
                                            })
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("b-input", {
                                        attrs: {
                                          id: "inline-form-input-username",
                                          placeholder: "Full Name"
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
                                "b-form-group",
                                {
                                  staticClass: "mt-4",
                                  attrs: { label: "Card Number" }
                                },
                                [
                                  _c(
                                    "b-input-group",
                                    { staticClass: "mb-2 mr-sm-2 mb-sm-0" },
                                    [
                                      _c("b-input-group-prepend", [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "input-group-text",
                                            attrs: { id: "basic-addon1" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "i-Credit-Card-2 text-18"
                                            })
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("b-input", {
                                        attrs: {
                                          id: "inline-form-input-username",
                                          placeholder: "card number"
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
                                "b-row",
                                { staticClass: "mt-4" },
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        { attrs: { label: "Expiration" } },
                                        [
                                          _c(
                                            "b-form-select",
                                            {
                                              attrs: {
                                                value: null,
                                                options: {
                                                  "1": "January",
                                                  "2": "Febraury",
                                                  "3": "March"
                                                },
                                                id:
                                                  "inline-form-custom-select-pref"
                                              }
                                            },
                                            [
                                              _c(
                                                "option",
                                                {
                                                  attrs: { slot: "first" },
                                                  domProps: { value: null },
                                                  slot: "first"
                                                },
                                                [_vm._v("Month")]
                                              )
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
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          staticStyle: { "margin-top": "25px" }
                                        },
                                        [
                                          _c(
                                            "b-form-select",
                                            {
                                              attrs: {
                                                value: null,
                                                options: {
                                                  "1": "2018",
                                                  "2": "2019",
                                                  "3": "2020"
                                                },
                                                id:
                                                  "inline-form-custom-select-pref"
                                              }
                                            },
                                            [
                                              _c(
                                                "option",
                                                {
                                                  attrs: { slot: "first" },
                                                  domProps: { value: null },
                                                  slot: "first"
                                                },
                                                [_vm._v("Year")]
                                              )
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
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        { attrs: { label: "CVV" } },
                                        [_c("b-form-input")],
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
                                "b-button",
                                {
                                  staticClass: "mt-3",
                                  attrs: { block: "", variant: "primary" }
                                },
                                [_vm._v("Confirm")]
                              )
                            ],
                            1
                          )
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", {
                              staticClass: "i-Bank text-16 mr-2 align-middle"
                            }),
                            _vm._v("Bank Transaction\n            ")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-form",
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: "Full Name" } },
                                [
                                  _c(
                                    "b-input-group",
                                    { staticClass: "mb-2 mr-sm-2 mb-sm-0" },
                                    [
                                      _c("b-input-group-prepend", [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "input-group-text",
                                            attrs: { id: "basic-addon1" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "i-Male-21 text-18"
                                            })
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("b-input", {
                                        attrs: {
                                          id: "inline-form-input-username",
                                          placeholder: "Full Name"
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
                                "b-form-group",
                                {
                                  staticClass: "mt-4",
                                  attrs: { label: "Card Number" }
                                },
                                [
                                  _c(
                                    "b-input-group",
                                    { staticClass: "mb-2 mr-sm-2 mb-sm-0" },
                                    [
                                      _c("b-input-group-prepend", [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "input-group-text",
                                            attrs: { id: "basic-addon1" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "i-Credit-Card-2 text-18"
                                            })
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("b-input", {
                                        attrs: {
                                          id: "inline-form-input-username",
                                          placeholder: "card number"
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
                                "b-row",
                                { staticClass: "mt-4" },
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        { attrs: { label: "Expiration" } },
                                        [
                                          _c(
                                            "b-form-select",
                                            {
                                              attrs: {
                                                value: null,
                                                options: {
                                                  "1": "January",
                                                  "2": "Febraury",
                                                  "3": "March"
                                                },
                                                id:
                                                  "inline-form-custom-select-pref"
                                              }
                                            },
                                            [
                                              _c(
                                                "option",
                                                {
                                                  attrs: { slot: "first" },
                                                  domProps: { value: null },
                                                  slot: "first"
                                                },
                                                [_vm._v("Month")]
                                              )
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
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          staticStyle: { "margin-top": "25px" }
                                        },
                                        [
                                          _c(
                                            "b-form-select",
                                            {
                                              attrs: {
                                                value: null,
                                                options: {
                                                  "1": "2018",
                                                  "2": "2019",
                                                  "3": "2020"
                                                },
                                                id:
                                                  "inline-form-custom-select-pref"
                                              }
                                            },
                                            [
                                              _c(
                                                "option",
                                                {
                                                  attrs: { slot: "first" },
                                                  domProps: { value: null },
                                                  slot: "first"
                                                },
                                                [_vm._v("Year")]
                                              )
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
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        { attrs: { label: "CVV" } },
                                        [_c("b-form-input")],
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
                                "b-button",
                                {
                                  staticClass: "mt-3",
                                  attrs: { block: "", variant: "primary" }
                                },
                                [_vm._v("Confirm")]
                              )
                            ],
                            1
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/images/faces/1.jpg":
/*!************************************************!*\
  !*** ./resources/js/assets/images/faces/1.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/1.jpg?a1d0bb11bab42d630a1a03e8b129781a";

/***/ }),

/***/ "./resources/js/assets/images/photo-wide-3.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/photo-wide-3.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/photo-wide-3.jpg?b6a0740a33ee7d797d59e504cf7b2f4c";

/***/ }),

/***/ "./resources/js/assets/images/products/headphone-3.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/assets/images/products/headphone-3.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/headphone-3.jpg?17c2548a4c199ad4d4252b019c523632";

/***/ }),

/***/ "./resources/js/assets/images/products/watch-1.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/assets/images/products/watch-1.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/watch-1.jpg?b7e284147384c24e2d9db3eb4b36c4c3";

/***/ }),

/***/ "./resources/js/views/app/dashboards/dashboard.v4.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/app/dashboards/dashboard.v4.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_v4_vue_vue_type_template_id_15426eab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.v4.vue?vue&type=template&id=15426eab& */ "./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=template&id=15426eab&");
/* harmony import */ var _dashboard_v4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.v4.vue?vue&type=script&lang=js& */ "./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dashboard_v4_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.v4.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dashboard_v4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_v4_vue_vue_type_template_id_15426eab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_v4_vue_vue_type_template_id_15426eab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/dashboards/dashboard.v4.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.v4.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v4_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.v4.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v4_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v4_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v4_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v4_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v4_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=template&id=15426eab&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=template&id=15426eab& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v4_vue_vue_type_template_id_15426eab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.v4.vue?vue&type=template&id=15426eab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v4.vue?vue&type=template&id=15426eab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v4_vue_vue_type_template_id_15426eab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v4_vue_vue_type_template_id_15426eab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);