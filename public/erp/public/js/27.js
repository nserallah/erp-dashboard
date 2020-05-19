(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/widgets/widgetCard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/widgets/widgetCard.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Card Widgets"
  },
  data: function data() {
    return {
      value: 75,
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{
        text: 'Select One',
        value: null
      }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    };
  },
  methods: {
    onSubmit: function onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset: function onReset(evt) {
      var _this = this;

      evt.preventDefault(); // Reset our form values

      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = []; // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/widgets/widgetCard.vue?vue&type=template&id=a69a9f7e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/widgets/widgetCard.vue?vue&type=template&id=a69a9f7e& ***!
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
      _c("breadcumb", { attrs: { page: "Card", folder: "Widgets" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "mb-30", attrs: { lg: "4", xl: "4" } },
            [
              _c(
                "b-card",
                { attrs: { "no-body": "" } },
                [
                  _c("img", {
                    staticClass: "d-block w-100 rounded rounded",
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg"),
                      alt: "corrupted"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "b-card-body",
                    [
                      _c("h5", { staticClass: "card-title mb-2" }, [
                        _vm._v("Gull Admin")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "card-text text-mute" }, [
                        _vm._v("By Frontend developer")
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _vm._v("Download")
                      ]),
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
            { staticClass: "mb-30", attrs: { lg: "4", xl: "4" } },
            [
              _c(
                "b-card",
                [
                  _c("img", {
                    staticClass: "d-block w-100 rounded rounded",
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/products/headphone-1.jpg */ "./resources/js/assets/images/products/headphone-1.jpg"),
                      alt: "corrupted"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-card-body", [
                    _c("h5", { staticClass: "card-title mb-2" }, [
                      _vm._v("Gull Admin")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text text-mute" }, [
                      _vm._v("By Frontend developer")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "ul-widget-card__info" }, [
                      _c("span", [
                        _c("p", [_vm._v("$ 4785.78")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-mute" }, [
                          _vm._v("Income")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _c("p", [_vm._v("4/11/2019")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-mute m-0" }, [
                          _vm._v("Deadline")
                        ])
                      ])
                    ])
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
            { staticClass: "mb-30", attrs: { lg: "4", xl: "4" } },
            [
              _c(
                "b-card",
                [
                  _c("img", {
                    staticClass: "d-block w-100 rounded rounded",
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg"),
                      alt: "corrupted"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "b-card-body",
                    [
                      _c("h5", { staticClass: "card-title mb-2" }, [
                        _vm._v("Gull Admin")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "ul-widget-card__progress-rate" },
                        [
                          _c("span", [_vm._v("$675")]),
                          _vm._v(" "),
                          _c("span", {}, [_vm._v("$10000")])
                        ]
                      ),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "mb-2",
                        attrs: { height: "10px", value: _vm.value }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-4" },
                        [
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("Download")
                          ]),
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
            { staticClass: "mb-30", attrs: { lg: "4", xl: "4" } },
            [
              _c("b-card", [
                _c("div", { staticClass: "user-profile mb-4" }, [
                  _c("div", { staticClass: "ul-widget-card__user-info" }, [
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
                    _c("p", { staticClass: "text-muted m-0" }, [
                      _vm._v("Digital Marketer")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "ul-widget-card--line mt-2" },
                    [
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _vm._v("Download")
                      ]),
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
                  _c("div", { staticClass: "ul-widget-card__rate-icon" }, [
                    _c("span", [
                      _c("i", { staticClass: "i-Add-UserStar text-warning" }),
                      _vm._v(
                        "\n                            5.0\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _c("i", { staticClass: "i-Bag text-primary" }),
                      _vm._v(
                        "\n                            78 Projects\n                        "
                      )
                    ])
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-30", attrs: { lg: "4", xl: "4" } },
            [
              _c("b-card", [
                _c(
                  "div",
                  {
                    staticClass: "ul-widget-card__title-info text-center mb-3"
                  },
                  [
                    _c("p", { staticClass: "m-0 text-24" }, [
                      _vm._v("Jon Snow")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted m-0" }, [
                      _vm._v("UI/UX")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "user-profile mb-4" }, [
                  _c("div", { staticClass: "ul-widget-card__user-info" }, [
                    _c("img", {
                      staticClass: "profile-picture avatar-lg mb-2",
                      attrs: {
                        src: __webpack_require__(/*! @/assets/images/faces/5.jpg */ "./resources/js/assets/images/faces/5.jpg"),
                        alt: ""
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "ul-widget-card__full-status mb-3" }, [
                  _c("div", { staticClass: "ul-widget-card__status1" }, [
                    _c("span", [_vm._v("797")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-mute" }, [
                      _vm._v("Uploads")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "ul-widget-card__status1" }, [
                    _c("span", [_vm._v("90k")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-mute" }, [
                      _vm._v("following")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "ul-widget-card__status1" }, [
                    _c("span", [_vm._v("2.5M")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-mute" }, [
                      _vm._v("followers")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mt-2" },
                  [
                    _c(
                      "b-button",
                      { attrs: { block: "", variant: "primary m-1" } },
                      [_vm._v("Follow")]
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
            { staticClass: "mb-30", attrs: { lg: "4", xl: "4" } },
            [
              _c("b-card", [
                _c(
                  "div",
                  { staticClass: "user-profile mb-4" },
                  [
                    _c("div", { staticClass: "ul-widget-card__user-info" }, [
                      _c("img", {
                        staticClass: "profile-picture avatar-lg mb-2",
                        attrs: {
                          src: __webpack_require__(/*! @/assets/images/faces/2.jpg */ "./resources/js/assets/images/faces/2.jpg"),
                          alt: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("p", { staticClass: "m-0 text-24" }, [
                        _vm._v("Wolverine")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted m-0" }, [
                        _vm._v("Mutant")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "ul-widget-card__progress-rate" },
                      [
                        _c("span", [_vm._v("700 Points")]),
                        _vm._v(" "),
                        _c("span", {}, [_vm._v("1000")])
                      ]
                    ),
                    _vm._v(" "),
                    _c("b-progress", {
                      staticClass: "mb-2 mt-2",
                      attrs: { height: "5px", value: _vm.value }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mt-4" },
                      [
                        _c("b-button", { attrs: { variant: "primary" } }, [
                          _vm._v("Download")
                        ]),
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
            { staticClass: "mb-30", attrs: { lg: "4", xl: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "bg-dark text-white o-hidden mb-30",
                  attrs: { "no-body": "" }
                },
                [
                  _c("img", {
                    staticClass: "card-img",
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/photo-long-1.jpg */ "./resources/js/assets/images/photo-long-1.jpg"),
                      alt: "Card image"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-img-overlay" }, [
                    _c("div", { staticClass: "text-center pt-4" }, [
                      _c("h5", { staticClass: "card-title mb-2 text-white" }, [
                        _vm._v("Card title")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "separator border-top mb-2" }),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-small font-italic" }, [
                        _vm._v("Last updated 3 mins ago")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "p-1 text-left card-footer font-weight-light d-flex"
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "mr-3 d-flex align-items-center" },
                          [
                            _c("i", { staticClass: "i-Speach-Bubble-6 mr-1" }),
                            _vm._v("\n                        12 ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _c("i", { staticClass: "i-Calendar-4 mr-2" }),
                            _vm._v("03.12.2018")
                          ]
                        )
                      ]
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
            { staticClass: "mb-30", attrs: { lg: "4", xl: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "bg-dark text-white o-hidden mb-30",
                  attrs: { "no-body": "" }
                },
                [
                  _c("img", {
                    staticClass: "card-img",
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/photo-long-2.jpg */ "./resources/js/assets/images/photo-long-2.jpg"),
                      alt: "Card image"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-img-overlay" }, [
                    _c("div", { staticClass: "text-center pt-4" }, [
                      _c("h5", { staticClass: "card-title mb-2 text-white" }, [
                        _vm._v("Sunny")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "separator border-top mb-2" }),
                      _vm._v(" "),
                      _c("h3", { staticClass: "text-white" }, [_vm._v("Korea")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "ul-widget-card__cloud card-icon-bg" },
                      [
                        _c("div", { staticClass: "ul-widget-card__head" }, [
                          _c("i", { staticClass: "i-Cloud-Sun" }),
                          _vm._v(" "),
                          _c("h1", { staticClass: "m-0" }, [
                            _vm._v("32 "),
                            _c("sup", [_vm._v("o")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ul-widget-card__body" }, [
                          _c(
                            "div",
                            { staticClass: "ul-widget-card__weather-info" },
                            [
                              _c("span", [_vm._v("Precipitation")]),
                              _vm._v(" "),
                              _c("span", [_vm._v("6%")])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "ul-widget-card__weather-info" },
                            [
                              _c("span", [_vm._v("Humidity")]),
                              _vm._v(" "),
                              _c("span", [_vm._v("64%")])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "ul-widget-card__weather-info" },
                            [
                              _c("span", [_vm._v("Wind")]),
                              _vm._v(" "),
                              _c("span", [_vm._v("6 km/h")])
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
                          "p-1 text-left card-footer font-weight-light d-flex"
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _c("i", { staticClass: "i-Calendar-4 mr-2" }),
                            _vm._v("03.12.2018")
                          ]
                        )
                      ]
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
            { staticClass: "mb-30", attrs: { lg: "4", xl: "4" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "bg-dark text-white o-hidden mb-30",
                  attrs: { "no-body": "" }
                },
                [
                  _c("img", {
                    staticClass: "card-img",
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/photo-long-2.jpg */ "./resources/js/assets/images/photo-long-2.jpg"),
                      alt: "Card image"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-img-overlay" }, [
                    _c("div", { staticClass: "text-center pt-4" }, [
                      _c("h5", { staticClass: "card-title mb-2 text-white" }, [
                        _vm._v("Card title")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "separator border-top mb-2" }),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-small font-italic" }, [
                        _vm._v("Last updated 3 mins ago")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "p-1 text-left card-footer font-weight-light d-flex"
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "mr-3 d-flex align-items-center" },
                          [
                            _c("i", { staticClass: "i-Speach-Bubble-6 mr-1" }),
                            _vm._v("\n                        12 ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _c("i", { staticClass: "i-Calendar-4 mr-2" }),
                            _vm._v("03.12.2018")
                          ]
                        )
                      ]
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
            { staticClass: "mb-30 mb-30", attrs: { lg: "4" } },
            [
              _c("b-card", [
                _c("h5", { staticClass: "ul-widget-card__title" }, [
                  _vm._v("Gull Admin")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text text-mute" }, [
                  _vm._v("By Frontend developer")
                ]),
                _vm._v(" "),
                _c("img", {
                  staticClass: "d-block w-100 rounded",
                  attrs: {
                    src: __webpack_require__(/*! @/assets/images/products/headphone-1.jpg */ "./resources/js/assets/images/products/headphone-1.jpg"),
                    alt: "Second slide"
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "ul-widget-card__rate-icon --version-2" },
                  [
                    _c("span", [
                      _c("a", { attrs: { href: "" } }, [
                        _c("i", { staticClass: "i-Like text-success" })
                      ]),
                      _vm._v(
                        "\n                        576\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _c("a", { attrs: { href: "" } }, [
                        _c("i", {
                          staticClass: "i-Speach-Bubble-3 text-primary"
                        })
                      ]),
                      _vm._v(
                        "\n                            350\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _c("a", { attrs: { href: "" } }, [
                        _c("i", { staticClass: "i-Heart1 text-danger" })
                      ]),
                      _vm._v(
                        "\n                            255\n                    "
                      )
                    ])
                  ]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-30", attrs: { lg: "8" } },
            [
              _c("b-card", { attrs: { title: "Timeline" } }, [
                _c(
                  "div",
                  {
                    staticClass: "ul-widget-s6__items ul-widget-card__position"
                  },
                  [
                    _c("div", { staticClass: "ul-widget-card__item" }, [
                      _c(
                        "span",
                        {
                          staticClass: "ul-widget-s6__badge ul-widget-card__dot"
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "badge-dot-primary ul-widget6__dot ul-widget-card__dot-xl"
                            },
                            [_c("i", { staticClass: "i-Add text-white" })]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "ul-widget-card__info-v2" }, [
                        _c("span", { staticClass: "t-font-boldest" }, [
                          _vm._v("Add File")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "t-font-bold" }, [
                          _vm._v(
                            "It is a long established fact that a reader will be distracted."
                          )
                        ]),
                        _vm._v(" "),
                        _c("small", { staticClass: "text-mute" }, [
                          _vm._v("3 Days Ago")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "ul-widget-s6__items ul-widget-card__position"
                  },
                  [
                    _c("div", { staticClass: "ul-widget-card__item" }, [
                      _c(
                        "span",
                        {
                          staticClass: "ul-widget-s6__badge ul-widget-card__dot"
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "badge-dot-success ul-widget6__dot ul-widget-card__dot-xl"
                            },
                            [_c("i", { staticClass: "i-Like-2 text-white" })]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "ul-widget-card__info-v2" }, [
                        _c("span", { staticClass: "t-font-boldest" }, [
                          _vm._v("File Completed")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "t-font-bold" }, [
                          _vm._v(
                            "It is a long established fact that a reader will be distracted."
                          )
                        ]),
                        _vm._v(" "),
                        _c("small", { staticClass: "text-mute" }, [
                          _vm._v("3 Days Ago")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "ul-widget-s6__items ul-widget-card__position"
                  },
                  [
                    _c("div", { staticClass: "ul-widget-card__item" }, [
                      _c(
                        "span",
                        {
                          staticClass: "ul-widget-s6__badge ul-widget-card__dot"
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "badge-dot-danger ul-widget6__dot ul-widget-card__dot-xl"
                            },
                            [
                              _c("i", {
                                staticClass: "i-Delete-File text-white"
                              })
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "ul-widget-card__info-v2" }, [
                        _c("span", { staticClass: "t-font-boldest" }, [
                          _vm._v("Delete File")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "t-font-bold" }, [
                          _vm._v(
                            "It is a long established fact that a reader will be distracted."
                          )
                        ]),
                        _vm._v(" "),
                        _c("small", { staticClass: "text-mute" }, [
                          _vm._v("3 Days Ago")
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "6", xl: "6", mt: "3" } },
            [
              _c("b-card", { attrs: { title: "Contact Form" } }, [
                _c(
                  "div",
                  [
                    _vm.show
                      ? _c(
                          "b-form",
                          { on: { submit: _vm.onSubmit, reset: _vm.onReset } },
                          [
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-1",
                                  label: "Email address:",
                                  "label-for": "input-1",
                                  description:
                                    "We'll never share your email with anyone else."
                                }
                              },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    id: "input-1",
                                    type: "email",
                                    required: "",
                                    placeholder: "Enter email"
                                  },
                                  model: {
                                    value: _vm.form.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "email", $$v)
                                    },
                                    expression: "form.email"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-2",
                                  label: "Your Name:",
                                  "label-for": "input-2"
                                }
                              },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    id: "input-2",
                                    required: "",
                                    placeholder: "Enter name"
                                  },
                                  model: {
                                    value: _vm.form.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "name", $$v)
                                    },
                                    expression: "form.name"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-3",
                                  label: "Food:",
                                  "label-for": "input-3"
                                }
                              },
                              [
                                _c("b-form-select", {
                                  attrs: {
                                    id: "input-3",
                                    options: _vm.foods,
                                    required: ""
                                  },
                                  model: {
                                    value: _vm.form.food,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "food", $$v)
                                    },
                                    expression: "form.food"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              { attrs: { id: "input-group-4" } },
                              [
                                _c(
                                  "b-form-checkbox-group",
                                  {
                                    attrs: { id: "checkboxes-4" },
                                    model: {
                                      value: _vm.form.checked,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "checked", $$v)
                                      },
                                      expression: "form.checked"
                                    }
                                  },
                                  [
                                    _c(
                                      "b-form-checkbox",
                                      { attrs: { value: "me" } },
                                      [_vm._v("Check me out")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-form-checkbox",
                                      { attrs: { value: "that" } },
                                      [_vm._v("Check that out")]
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
                                attrs: {
                                  type: "submit",
                                  variant: "primary m-1"
                                }
                              },
                              [_vm._v("Submit")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { type: "reset", variant: "danger" } },
                              [_vm._v("Reset")]
                            )
                          ],
                          1
                        )
                      : _vm._e()
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
            { attrs: { lg: "6", xl: "6", mt: "3" } },
            [
              _c("b-card", [
                _c(
                  "div",
                  [
                    _c(
                      "b-tabs",
                      { attrs: { "content-class": "mb-30" } },
                      [
                        _c("b-tab", { attrs: { title: "First", active: "" } }, [
                          _c("p", [
                            _vm._v(
                              "\n                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n                            "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("b-tab", { attrs: { title: "Second" } }, [
                          _c("p", [
                            _vm._v(
                              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("b-tab", { attrs: { title: "Disabled" } }, [
                          _c("p", [
                            _vm._v(
                              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                            )
                          ])
                        ])
                      ],
                      1
                    )
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

/***/ "./resources/js/assets/images/faces/1.jpg":
/*!************************************************!*\
  !*** ./resources/js/assets/images/faces/1.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/1.jpg?a1d0bb11bab42d630a1a03e8b129781a";

/***/ }),

/***/ "./resources/js/assets/images/photo-long-1.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/photo-long-1.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/photo-long-1.jpg?74d89417d2ead70cd86ae0f8ebc16797";

/***/ }),

/***/ "./resources/js/assets/images/photo-long-2.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/photo-long-2.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/photo-long-2.jpg?02a6d61ced40842dec7992960ba81069";

/***/ }),

/***/ "./resources/js/views/app/widgets/widgetCard.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/app/widgets/widgetCard.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widgetCard_vue_vue_type_template_id_a69a9f7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgetCard.vue?vue&type=template&id=a69a9f7e& */ "./resources/js/views/app/widgets/widgetCard.vue?vue&type=template&id=a69a9f7e&");
/* harmony import */ var _widgetCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgetCard.vue?vue&type=script&lang=js& */ "./resources/js/views/app/widgets/widgetCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _widgetCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _widgetCard_vue_vue_type_template_id_a69a9f7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _widgetCard_vue_vue_type_template_id_a69a9f7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/widgets/widgetCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/widgets/widgetCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/app/widgets/widgetCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_widgetCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./widgetCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/widgets/widgetCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_widgetCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/widgets/widgetCard.vue?vue&type=template&id=a69a9f7e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/app/widgets/widgetCard.vue?vue&type=template&id=a69a9f7e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widgetCard_vue_vue_type_template_id_a69a9f7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./widgetCard.vue?vue&type=template&id=a69a9f7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/widgets/widgetCard.vue?vue&type=template&id=a69a9f7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widgetCard_vue_vue_type_template_id_a69a9f7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widgetCard_vue_vue_type_template_id_a69a9f7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);