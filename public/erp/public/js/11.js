(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Dashboard v1"
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.echarts {\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.v1.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=template&id=15182828&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=template&id=15182828& ***!
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
      _c("breadcumb", { attrs: { page: "Version 1", folder: "Dashboard" } }),
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
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("div", { staticClass: "col-lg-6 col-xl-6 col-md-12" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 col-md-6" }, [
                _c(
                  "div",
                  { staticClass: "card card-chart-bottom o-hidden mb-30" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "chart-wrapper",
                        staticStyle: { height: "260px" }
                      },
                      [
                        _c("v-chart", {
                          attrs: { options: _vm.echart1, autoresize: true }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6 col-md-6" }, [
                _c(
                  "div",
                  { staticClass: "card card-chart-bottom o-hidden mb-30" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "chart-wrapper",
                        staticStyle: { height: "260px" }
                      },
                      [
                        _c("v-chart", {
                          attrs: { options: _vm.echart2, autoresize: true }
                        })
                      ],
                      1
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c(
                    "b-card",
                    { staticClass: "card-profile-1 mb-30 text-center" },
                    [
                      _c("div", { staticClass: "avatar box-shadow-2 mb-3" }, [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! @/assets/images/faces/16.jpg */ "./resources/js/assets/images/faces/16.jpg"),
                            alt: ""
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "m-0" }, [
                        _vm._v("Jassica Hike")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mt-0 text-muted" }, [
                        _vm._v("Top Seller")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n              Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              Recusandae cumque. It was popularised in the 1960s with the\n              release of Letraset sheets containing Lorem Ipsum.\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        { staticClass: "btn btn-primary btn-rounded" },
                        [
                          _vm._v(
                            "\n              Contact Jassica\n            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-socials-simple mt-4" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c("i", { staticClass: "i-Linkedin-2" })
                        ]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "" } }, [
                          _c("i", { staticClass: "i-Facebook-2" })
                        ]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "" } }, [
                          _c("i", { staticClass: "i-Twitter" })
                        ])
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c(
                    "b-card",
                    { staticClass: "card-profile-1 mb-30 text-center" },
                    [
                      _c("div", { staticClass: "avatar box-shadow-2 mb-3" }, [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! @/assets/images/faces/13.jpg */ "./resources/js/assets/images/faces/13.jpg"),
                            alt: ""
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "m-0" }, [_vm._v("jhon doe")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mt-0 text-muted" }, [
                        _vm._v("Top Buyer")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n              Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              Recusandae cumque. It was popularised in the 1960s with the\n              release of Letraset sheets containing Lorem Ipsum .\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        { staticClass: "btn btn-primary btn-rounded" },
                        [
                          _vm._v(
                            "\n              Contact Jassica\n            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-socials-simple mt-4" }, [
                        _c("a", { attrs: { href: "" } }, [
                          _c("i", { staticClass: "i-Linkedin-2" })
                        ]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "" } }, [
                          _c("i", { staticClass: "i-Facebook-2" })
                        ]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "" } }, [
                          _c("i", { staticClass: "i-Twitter" })
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("b-col", { attrs: { lg: "6", xl: "6", md: "12" } }, [
            _c("div", { staticClass: "card mb-30" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "card-title" }, [
                  _vm._v("Top Selling Products")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex flex-column flex-sm-row align-items-center mb-3"
                  },
                  [
                    _c("img", {
                      staticClass: "avatar-lg mb-3 mb-sm-0 rounded mr-sm-3",
                      attrs: {
                        src: __webpack_require__(/*! @/assets/images/products/headphone-4.jpg */ "./resources/js/assets/images/products/headphone-4.jpg"),
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "flex-grow-1 text-center text-sm-left" },
                      [
                        _c("h5", {}, [
                          _c("a", { attrs: { href: "" } }, [
                            _vm._v("Wireless Headphone E23")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "m-0 text-small text-muted" }, [
                          _vm._v(
                            "\n                Lorem ipsum dolor sit amet consectetur.\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-small text-danger m-0" }, [
                          _vm._v("\n                $450 "),
                          _c("del", { staticClass: "text-muted" }, [
                            _vm._v("$500")
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-outline-primary btn-rounded btn-sm m-3 m-sm-0"
                        },
                        [
                          _vm._v(
                            "\n                View details\n              "
                          )
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex flex-column flex-sm-row align-items-center mb-3"
                  },
                  [
                    _c("img", {
                      staticClass: "avatar-lg mb-3 mb-sm-0 rounded mr-sm-3",
                      attrs: {
                        src: __webpack_require__(/*! @/assets/images/products/headphone-2.jpg */ "./resources/js/assets/images/products/headphone-2.jpg"),
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "flex-grow-1 text-center text-sm-left" },
                      [
                        _c("h5", {}, [
                          _c("a", { attrs: { href: "" } }, [
                            _vm._v("Wireless Headphone Y902")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "m-0 text-small text-muted" }, [
                          _vm._v(
                            "\n                Lorem ipsum dolor sit amet consectetur.\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-small text-danger m-0" }, [
                          _vm._v("\n                $550 "),
                          _c("del", { staticClass: "text-muted" }, [
                            _vm._v("$600")
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-outline-primary btn-sm btn-rounded m-3 m-sm-0"
                        },
                        [
                          _vm._v(
                            "\n                View details\n              "
                          )
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex flex-column flex-sm-row align-items-center mb-3"
                  },
                  [
                    _c("img", {
                      staticClass: "avatar-lg mb-3 mb-sm-0 rounded mr-sm-3",
                      attrs: {
                        src: __webpack_require__(/*! @/assets/images/products/headphone-3.jpg */ "./resources/js/assets/images/products/headphone-3.jpg"),
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "flex-grow-1 text-center text-sm-left" },
                      [
                        _c("h5", {}, [
                          _c("a", { attrs: { href: "" } }, [
                            _vm._v("Wireless Headphone E09")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "m-0 text-small text-muted" }, [
                          _vm._v(
                            "\n                Lorem ipsum dolor sit amet consectetur.\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-small text-danger m-0" }, [
                          _vm._v("\n                $250 "),
                          _c("del", { staticClass: "text-muted" }, [
                            _vm._v("$300")
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-outline-primary btn-sm btn-rounded m-3 m-sm-0"
                        },
                        [
                          _vm._v(
                            "\n                View details\n              "
                          )
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex flex-column flex-sm-row align-items-center mb-3"
                  },
                  [
                    _c("img", {
                      staticClass: "avatar-lg mb-3 mb-sm-0 rounded mr-sm-3",
                      attrs: {
                        src: __webpack_require__(/*! @/assets/images/products/headphone-4.jpg */ "./resources/js/assets/images/products/headphone-4.jpg"),
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "flex-grow-1 text-center text-sm-left" },
                      [
                        _c("h5", {}, [
                          _c("a", { attrs: { href: "" } }, [
                            _vm._v("Wireless Headphone X89")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "m-0 text-small text-muted" }, [
                          _vm._v(
                            "\n                Lorem ipsum dolor sit amet consectetur.\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-small text-danger m-0" }, [
                          _vm._v("\n                $450 "),
                          _c("del", { staticClass: "text-muted" }, [
                            _vm._v("$500")
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-outline-primary btn-sm btn-rounded m-3 m-sm-0"
                        },
                        [
                          _vm._v(
                            "\n                View details\n              "
                          )
                        ]
                      )
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card mb-30" }, [
              _c("div", { staticClass: "card-body p-0" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "card-title  d-flex align-items-center mb-2 pb-0 p-3"
                  },
                  [
                    _c("span", [_vm._v("User activity")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "flex-grow-1" }),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "badge badge-pill badge-warning" },
                      [_vm._v("Updated daily")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex border-bottom justify-content-between  p-3 "
                  },
                  [
                    _c("div", { staticClass: "flex-grow-1" }, [
                      _c("span", { staticClass: "text-small text-muted" }, [
                        _vm._v("Pages / Visit")
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "m-0" }, [_vm._v("2065")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-grow-1" }, [
                      _c("span", { staticClass: "text-small text-muted" }, [
                        _vm._v("New user")
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "m-0" }, [_vm._v("465")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-grow-1" }, [
                      _c("span", { staticClass: "text-small text-muted" }, [
                        _vm._v("Last week")
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "m-0" }, [_vm._v("23456")])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex border-bottom justify-content-between p-3"
                  },
                  [
                    _c("div", { staticClass: "flex-grow-1" }, [
                      _c("span", { staticClass: "text-small text-muted" }, [
                        _vm._v("Pages / Visit")
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "m-0" }, [_vm._v("1829")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-grow-1" }, [
                      _c("span", { staticClass: "text-small text-muted" }, [
                        _vm._v("New user")
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "m-0" }, [_vm._v("735")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-grow-1" }, [
                      _c("span", { staticClass: "text-small text-muted" }, [
                        _vm._v("Last week")
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "m-0" }, [_vm._v("92565")])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex justify-content-between p-3 mb-1" },
                  [
                    _c("div", { staticClass: "flex-grow-1" }, [
                      _c("span", { staticClass: "text-small text-muted" }, [
                        _vm._v("Pages / Visit")
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "m-0" }, [_vm._v("3165")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-grow-1" }, [
                      _c("span", { staticClass: "text-small text-muted" }, [
                        _vm._v("New user")
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "m-0" }, [_vm._v("165")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-grow-1" }, [
                      _c("span", { staticClass: "text-small text-muted" }, [
                        _vm._v("Last week")
                      ]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "m-0" }, [_vm._v("32165")])
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card mb-30" }, [
              _c(
                "div",
                { staticClass: "card-body p-0 " },
                [
                  _c(
                    "h5",
                    { staticClass: "card-title border-bottom p-3 mb-2" },
                    [_vm._v("Recent Orders")]
                  ),
                  _vm._v(" "),
                  _c("vue-good-table", {
                    attrs: {
                      columns: _vm.columns,
                      "line-numbers": false,
                      styleClass: "order-table vgt-table",
                      rows: _vm.rows
                    }
                  })
                ],
                1
              )
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body pb-0 " }, [
      _c("div", { staticClass: "text-muted" }, [_vm._v("Last Month Sales")]),
      _vm._v(" "),
      _c("p", { staticClass: "  text-primary text-24 m-0" }, [_vm._v("$40250")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body pb-0" }, [
      _c("div", { staticClass: "text-muted" }, [_vm._v("Last Week Sales")]),
      _vm._v(" "),
      _c("p", { staticClass: " text-warning text-24 m-0" }, [_vm._v("$10250")])
    ])
  }
]
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

/***/ "./resources/js/views/app/dashboards/dashboard.v1.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/app/dashboards/dashboard.v1.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_v1_vue_vue_type_template_id_15182828___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.v1.vue?vue&type=template&id=15182828& */ "./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=template&id=15182828&");
/* harmony import */ var _dashboard_v1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.v1.vue?vue&type=script&lang=js& */ "./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dashboard_v1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.v1.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dashboard_v1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_v1_vue_vue_type_template_id_15182828___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_v1_vue_vue_type_template_id_15182828___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/dashboards/dashboard.v1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.v1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.v1.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=template&id=15182828&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=template&id=15182828& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v1_vue_vue_type_template_id_15182828___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.v1.vue?vue&type=template&id=15182828& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboards/dashboard.v1.vue?vue&type=template&id=15182828&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v1_vue_vue_type_template_id_15182828___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_v1_vue_vue_type_template_id_15182828___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);