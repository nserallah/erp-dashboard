(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/contact-details.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/contact-details.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [{
        text: "Select One",
        value: null
      }, "Carrots", "Beans", "Tomatoes", "Corn"],
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

      this.form.email = "";
      this.form.name = "";
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/contact-details.vue?vue&type=template&id=c911bbb6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/contact-details.vue?vue&type=template&id=c911bbb6& ***!
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
      _c("breadcumb", { attrs: { page: "Contact Details", folder: "App" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: " mb-30", attrs: { lg: "4", xl: "4" } },
            [
              _c(
                "b-card",
                { staticClass: "o-hidden", attrs: { "no-body": "" } },
                [
                  _c("img", {
                    staticClass: "d-block w-100",
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg"),
                      alt: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("b-card-body", [
                    _c(
                      "div",
                      { staticClass: "ul-contact-detail__info" },
                      [
                        _c(
                          "b-row",
                          [
                            _c(
                              "b-col",
                              {
                                staticClass: "text-center",
                                attrs: { md: "6" }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "ul-contact-detail__info-1" },
                                  [
                                    _c("h5", [_vm._v("Name")]),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Genelia Deshmukh")])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "ul-contact-detail__info-1" },
                                  [
                                    _c("h5", [_vm._v("Name")]),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Genelia Deshmukh")])
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              {
                                staticClass: "text-center",
                                attrs: { md: "6" }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "ul-contact-detail__info-1" },
                                  [
                                    _c("h5", [_vm._v("Name")]),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Genelia Deshmukh")])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "ul-contact-detail__info-1" },
                                  [
                                    _c("h5", [_vm._v("Name")]),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Genelia Deshmukh")])
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              {
                                staticClass: "text-center",
                                attrs: { md: "12" }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "ul-contact-detail__info-1" },
                                  [
                                    _c("h5", [_vm._v("Address")]),
                                    _vm._v(" "),
                                    _c("span", [
                                      _vm._v(
                                        "DieSachbearbeiter Choriner Straße 49 10435 Berlin"
                                      )
                                    ])
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              {
                                staticClass: "text-center",
                                attrs: { md: "12" }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "ul-contact-detail__social" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "ul-contact-detail__social-1"
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-facebook btn-icon m-1",
                                            attrs: { type: "button" }
                                          },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "ul-btn__icon" },
                                              [
                                                _c("i", {
                                                  staticClass: "i-Facebook-2"
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("span", {
                                          staticClass:
                                            "t-font-boldest ul-contact-detail__followers"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "ul-contact-detail__social-1"
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-twitter btn-icon m-1",
                                            attrs: { type: "button" }
                                          },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "ul-btn__icon" },
                                              [
                                                _c("i", {
                                                  staticClass: "i-Twitter"
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("span", {
                                          staticClass:
                                            "t-font-boldest ul-contact-detail__followers"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "ul-contact-detail__social-1"
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-dribble btn-icon m-1",
                                            attrs: { type: "button" }
                                          },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "ul-btn__icon" },
                                              [
                                                _c("i", {
                                                  staticClass: "i-Dribble"
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("span", {
                                          staticClass:
                                            "t-font-boldest ul-contact-detail__followers"
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
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
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "8", xl: "8" } },
            [
              _c(
                "b-card",
                {
                  attrs: {
                    header: "Basic Tabs",
                    "header-bg-variant": "transparent"
                  }
                },
                [
                  _c(
                    "div",
                    [
                      _c(
                        "b-tabs",
                        { attrs: { "content-class": "mt-3" } },
                        [
                          _c(
                            "b-tab",
                            { attrs: { title: "Home", active: "" } },
                            [
                              _c(
                                "div",
                                { staticClass: "ul-contact-detail__timeline" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "row" },
                                    [
                                      _c(
                                        "b-col",
                                        { attrs: { lg: "12", xl: "12" } },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "ul-contact-detail__timeline-row"
                                            },
                                            [
                                              _c(
                                                "b-row",
                                                [
                                                  _c(
                                                    "b-col",
                                                    { attrs: { lg: "1" } },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "ul-contact-detail__left-timeline"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "ul-widget3-img"
                                                            },
                                                            [
                                                              _c("img", {
                                                                staticClass:
                                                                  "img-fluid",
                                                                attrs: {
                                                                  src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                                                  id:
                                                                    "userDropdown",
                                                                  alt: "",
                                                                  "data-toggle":
                                                                    "dropdown",
                                                                  "aria-haspopup":
                                                                    "true",
                                                                  "aria-expanded":
                                                                    "false"
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "b-col",
                                                    { attrs: { lg: "11" } },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "ul-contact-detail__right-timeline"
                                                        },
                                                        [
                                                          _c(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "ul-widget4__title d-block",
                                                              attrs: {
                                                                href: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Timity Clarkson"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "small",
                                                            {
                                                              staticClass:
                                                                "text-mute"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "10 minutes"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("p", [
                                                            _vm._v(
                                                              "\n                              assign a new task "
                                                            ),
                                                            _c(
                                                              "a",
                                                              {
                                                                attrs: {
                                                                  href: "#"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " Weblayout"
                                                                )
                                                              ]
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "ul-contact-detail__timeline-image"
                                                            },
                                                            [
                                                              _c("img", {
                                                                staticClass:
                                                                  "d-block",
                                                                attrs: {
                                                                  src: __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg"),
                                                                  alt:
                                                                    "First slide"
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c("img", {
                                                                staticClass:
                                                                  "d-block",
                                                                attrs: {
                                                                  src: __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg"),
                                                                  alt:
                                                                    "First slide"
                                                                }
                                                              }),
                                                              _vm._v(" "),
                                                              _c("img", {
                                                                staticClass:
                                                                  "d-block",
                                                                attrs: {
                                                                  src: __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg"),
                                                                  alt:
                                                                    "First slide"
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "ul-contact-detail__timeline-row"
                                },
                                [
                                  _c(
                                    "b-row",
                                    [
                                      _c("b-col", { attrs: { lg: "1" } }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "ul-contact-detail__left-timeline"
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "ul-widget3-img" },
                                              [
                                                _c("img", {
                                                  attrs: {
                                                    src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                                    id: "userDropdown",
                                                    alt: "",
                                                    "data-toggle": "dropdown",
                                                    "aria-haspopup": "true",
                                                    "aria-expanded": "false"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-lg-11" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "ul-contact-detail__right-timeline"
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "ul-widget4__title d-block",
                                                attrs: { href: "" }
                                              },
                                              [_vm._v("Timity Clarkson")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-mute" },
                                              [_vm._v("10 minutes")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "ul-contact-detail__timeline-image-2 mt-3"
                                              },
                                              [
                                                _c("img", {
                                                  staticClass: "d-block",
                                                  attrs: {
                                                    src: __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg"),
                                                    alt: "First slide"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "ul-contact-detail__timeline-image-info"
                                                  },
                                                  [
                                                    _c(
                                                      "p",
                                                      {
                                                        staticStyle: {
                                                          width: "80%"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                            Lorem ipsum dolor sit amet, consectetur adipiscing\n                            elit. Integer nec odio. Praesent libero. Sed\n                            cursus ante dapibus diam. Sed nisi. Nulla quis sem\n                            at nibh elementum imperdiet. Duis sagittis ipsum.\n                            Praesent mauris. Fusce nec tellus sed augue semper\n                            porta.\n                          "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-button",
                                                      {
                                                        staticClass: " m-1",
                                                        attrs: {
                                                          variant: "primary"
                                                        }
                                                      },
                                                      [_vm._v("layout")]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
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
                                "div",
                                {
                                  staticClass: "ul-contact-detail__timeline-row"
                                },
                                [
                                  _c(
                                    "b-row",
                                    [
                                      _c("b-col", { attrs: { lg: "1" } }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "ul-contact-detail__left-timeline"
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "ul-widget3-img" },
                                              [
                                                _c("img", {
                                                  attrs: {
                                                    src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                                    id: "userDropdown",
                                                    alt: "",
                                                    "data-toggle": "dropdown",
                                                    "aria-haspopup": "true",
                                                    "aria-expanded": "false"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("b-col", { attrs: { lg: "8" } }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "ul-contact-detail__right-timeline"
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "ul-widget4__title d-block",
                                                attrs: { href: "" }
                                              },
                                              [_vm._v("Timity Clarkson")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-mute" },
                                              [_vm._v("10 minutes")]
                                            ),
                                            _vm._v(" "),
                                            _c("p", { staticClass: "mt-3" }, [
                                              _vm._v(
                                                "\n                        Lorem ipsum dolor sit amet, consectetur adipiscing\n                        elit. Integer nec odio. Praesent libero. Sed cursus\n                        ante dapibus diam. Sed nisi. Nulla quis sem at nibh\n                        elementum imperdiet. Duis sagittis ipsum. Praesent\n                        mauris. Fusce nec tellus sed augue semper\n                      "
                                              )
                                            ])
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
                                "div",
                                {
                                  staticClass: "ul-contact-detail__timeline-row"
                                },
                                [
                                  _c(
                                    "b-row",
                                    [
                                      _c("b-col", { attrs: { lg: "1" } }, [
                                        _c(
                                          "div",
                                          { staticClass: "ul-widget3-img" },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src: "/img/1.1536e831.jpg",
                                                id: "userDropdown",
                                                alt: "",
                                                "data-toggle": "dropdown",
                                                "aria-haspopup": "true",
                                                "aria-expanded": "false"
                                              }
                                            })
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("b-col", { attrs: { lg: "11" } }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "ul-contact-detail__right-timeline"
                                          },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "ul-widget4__title d-block",
                                                attrs: { href: "" }
                                              },
                                              [_vm._v("Timity Clarkson")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-mute" },
                                              [_vm._v("10 minutes")]
                                            ),
                                            _vm._v(" "),
                                            _c("p", [
                                              _vm._v("assign a new task "),
                                              _c(
                                                "a",
                                                { attrs: { href: "#" } },
                                                [_vm._v(" Weblayout")]
                                              )
                                            ])
                                          ]
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            { attrs: { title: "Profile" } },
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { lg: "12", xl: "12" } },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "ul-contact-detail__profile"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "ul-contact-detail__inner-profile"
                                            },
                                            [
                                              _c(
                                                "h4",
                                                { staticClass: "heading" },
                                                [_vm._v("Full Name")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "tetx-muted" },
                                                [_vm._v("Timity Clarkson")]
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", {
                                        staticClass: "custom-separator"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { lg: "12", xl: "12" } },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "ul-contact-dwtail__profile-swcription"
                                        },
                                        [
                                          _c("p", { staticClass: "mt-3" }, [
                                            _vm._v(
                                              "\n                      Lorem Ipsum is simply dummy text of the printing and\n                      typesetting industry. Lorem Ipsum has been the\n                      industry's standard dummy text ever since the 1500s,\n                      when an unknown printer took a galley of type and\n                      scrambled it to make a type specimen book. It has\n                      survived not only five centuries\n                    "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", [
                                            _vm._v(
                                              "\n                      Lorem Ipsum is simply dummy text of the printing and\n                      typesetting industry. Lorem Ipsum has been the\n                      industry's standard dummy text ever since the 1500s,\n                      when an unknown printer took a galley of type and\n                      scrambled it to make a type specimen book. It has\n                      survived not only five centuries\n                    "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", [
                                            _vm._v(
                                              "\n                      Lorem Ipsum is simply dummy text of the printing and\n                      typesetting industry. Lorem Ipsum has been the\n                      industry's standard dummy text ever since the 1500s,\n                      when an unknown printer took a galley of type and\n                      scrambled it to make a type specimen book. It has\n                      survived not only five centuries\n                    "
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { lg: "12", xl: "12" } },
                                    [
                                      _c(
                                        "h4",
                                        { staticClass: "card-title mb-3" },
                                        [_vm._v("Skills")]
                                      ),
                                      _vm._v(" "),
                                      _c("div", {
                                        staticClass: "custom-separator"
                                      }),
                                      _vm._v(" "),
                                      _c("span", {}, [_vm._v(" Wordpress")]),
                                      _vm._v(" "),
                                      _c("b-progress", {
                                        staticClass: "mb-3",
                                        attrs: { value: 10, "show-value": "" }
                                      }),
                                      _vm._v(" "),
                                      _c("span", {}, [_vm._v(" HTML 5")]),
                                      _vm._v(" "),
                                      _c("b-progress", {
                                        staticClass: "mb-3",
                                        attrs: {
                                          variant: "success",
                                          value: 25,
                                          "show-value": ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", [_vm._v("React.js")]),
                                      _vm._v(" "),
                                      _c("b-progress", {
                                        staticClass: "mb-3",
                                        attrs: {
                                          variant: "info",
                                          value: 50,
                                          "show-value": ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Photoshop")]),
                                      _vm._v(" "),
                                      _c("b-progress", {
                                        staticClass: "mb-3",
                                        attrs: {
                                          variant: "warning",
                                          value: 75,
                                          "show-value": ""
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
                            "b-tab",
                            { attrs: { title: "Contact" } },
                            [
                              _vm.show
                                ? _c(
                                    "b-form",
                                    {
                                      on: {
                                        submit: _vm.onSubmit,
                                        reset: _vm.onReset
                                      }
                                    },
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
                                                  _vm.$set(
                                                    _vm.form,
                                                    "checked",
                                                    $$v
                                                  )
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
                                            variant: "primary"
                                          }
                                        },
                                        [_vm._v("Send")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            type: "reset",
                                            variant: "danger"
                                          }
                                        },
                                        [_vm._v("Reset")]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
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

/***/ "./resources/js/assets/images/faces/1.jpg":
/*!************************************************!*\
  !*** ./resources/js/assets/images/faces/1.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/1.jpg?a1d0bb11bab42d630a1a03e8b129781a";

/***/ }),

/***/ "./resources/js/views/app/apps/contact-details.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/app/apps/contact-details.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_details_vue_vue_type_template_id_c911bbb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-details.vue?vue&type=template&id=c911bbb6& */ "./resources/js/views/app/apps/contact-details.vue?vue&type=template&id=c911bbb6&");
/* harmony import */ var _contact_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-details.vue?vue&type=script&lang=js& */ "./resources/js/views/app/apps/contact-details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _contact_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contact_details_vue_vue_type_template_id_c911bbb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _contact_details_vue_vue_type_template_id_c911bbb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/apps/contact-details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/apps/contact-details.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/app/apps/contact-details.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./contact-details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/contact-details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/apps/contact-details.vue?vue&type=template&id=c911bbb6&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/app/apps/contact-details.vue?vue&type=template&id=c911bbb6& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_details_vue_vue_type_template_id_c911bbb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./contact-details.vue?vue&type=template&id=c911bbb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/contact-details.vue?vue&type=template&id=c911bbb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_details_vue_vue_type_template_id_c911bbb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_details_vue_vue_type_template_id_c911bbb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);