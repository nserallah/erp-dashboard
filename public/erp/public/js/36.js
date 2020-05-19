(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/taskManager.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/taskManager.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Task Manager"
  },
  data: function data() {
    return {
      value: 75,
      // pagination
      perPage: 3,
      currentPage: 1,
      items: [{
        id: 1,
        first_name: 'Fred',
        last_name: 'Flintstone'
      }, {
        id: 2,
        first_name: 'Wilma',
        last_name: 'Flintstone'
      }, {
        id: 3,
        first_name: 'Barney',
        last_name: 'Rubble'
      }, {
        id: 4,
        first_name: 'Betty',
        last_name: 'Rubble'
      }, {
        id: 5,
        first_name: 'Pebbles',
        last_name: 'Flintstone'
      }, {
        id: 6,
        first_name: 'Bamm Bamm',
        last_name: 'Rubble'
      }, {
        id: 7,
        first_name: 'The Great',
        last_name: 'Gazzoo'
      }, {
        id: 8,
        first_name: 'Rockhead',
        last_name: 'Slate'
      }, {
        id: 9,
        first_name: 'Pearl',
        last_name: 'Slaghoople'
      }]
    };
  },
  computed: {
    rows: function rows() {
      return this.items.length;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/taskManager.vue?vue&type=template&id=21eac578&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/taskManager.vue?vue&type=template&id=21eac578& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Task Manager", folder: "Apps" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "9" } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { xl: "6" } },
                    [
                      _c("b-card", { staticClass: " mb-30" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-sm-flex align-item-sm-center flex-sm-nowrap"
                          },
                          [
                            _c("div", [
                              _c("h5", [
                                _c("a", { attrs: { href: "" } }, [
                                  _vm._v("#23. New icons set for an iOS app")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "ul-task-manager__paragraph mb-3"
                                },
                                [_vm._v("A collection of textile samples ..")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle ",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("i", {
                                    staticClass:
                                      "ul-task-manager__fonts i-Add text-30 ",
                                    staticStyle: { "vertical-align": "middle" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed",
                                  attrs: { href: "" }
                                },
                                [_c("i", { staticClass: "icon-plus22" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto"
                              },
                              [
                                _c("li", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "ul-task-manager__font-date text-muted"
                                    },
                                    [_vm._v("20 Jan,2015")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Eternity app")
                                  ])
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { attrs: { slot: "footer" }, slot: "footer" },
                          [
                            _c(
                              "small",
                              {
                                staticClass:
                                  "text-muted d-sm-flex justify-content-sm-between align-items-sm-center"
                              },
                              [
                                _c("span", [
                                  _vm._v("Due: "),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-semibold" },
                                    [_vm._v("18 hours")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "list-inline mb-0 mt-2 mt-sm-0"
                                  },
                                  [
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-0",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_vm._v("On hold")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-2",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_c("i", { staticClass: "i-Gear-2" })]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
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
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "6" } },
                    [
                      _c("b-card", { staticClass: " mb-30" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-sm-flex align-item-sm-center flex-sm-nowrap"
                          },
                          [
                            _c("div", [
                              _c("h5", [
                                _c("a", { attrs: { href: "" } }, [
                                  _vm._v("#23. New icons set for an iOS app")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "ul-task-manager__paragraph mb-3"
                                },
                                [_vm._v("A collection of textile samples ..")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle ",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("i", {
                                    staticClass:
                                      "ul-task-manager__fonts i-Add text-30 ",
                                    staticStyle: { "vertical-align": "middle" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed",
                                  attrs: { href: "" }
                                },
                                [_c("i", { staticClass: "icon-plus22" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto"
                              },
                              [
                                _c("li", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "ul-task-manager__font-date text-muted"
                                    },
                                    [_vm._v("20 Jan,2015")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Eternity app")
                                  ])
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { attrs: { slot: "footer" }, slot: "footer" },
                          [
                            _c(
                              "small",
                              {
                                staticClass:
                                  "text-muted d-sm-flex justify-content-sm-between align-items-sm-center"
                              },
                              [
                                _c("span", [
                                  _vm._v("Due: "),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-semibold" },
                                    [_vm._v("18 hours")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "list-inline mb-0 mt-2 mt-sm-0"
                                  },
                                  [
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-0",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_vm._v("On hold")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-2",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_c("i", { staticClass: "i-Gear-2" })]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
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
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "6" } },
                    [
                      _c("b-card", { staticClass: " mb-30" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-sm-flex align-item-sm-center flex-sm-nowrap"
                          },
                          [
                            _c("div", [
                              _c("h5", [
                                _c("a", { attrs: { href: "" } }, [
                                  _vm._v("#23. New icons set for an iOS app")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "ul-task-manager__paragraph mb-3"
                                },
                                [_vm._v("A collection of textile samples ..")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle ",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("i", {
                                    staticClass:
                                      "ul-task-manager__fonts i-Add text-30 ",
                                    staticStyle: { "vertical-align": "middle" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed",
                                  attrs: { href: "" }
                                },
                                [_c("i", { staticClass: "icon-plus22" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto"
                              },
                              [
                                _c("li", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "ul-task-manager__font-date text-muted"
                                    },
                                    [_vm._v("20 Jan,2015")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Eternity app")
                                  ])
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { attrs: { slot: "footer" }, slot: "footer" },
                          [
                            _c(
                              "small",
                              {
                                staticClass:
                                  "text-muted d-sm-flex justify-content-sm-between align-items-sm-center"
                              },
                              [
                                _c("span", [
                                  _vm._v("Due: "),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-semibold" },
                                    [_vm._v("18 hours")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "list-inline mb-0 mt-2 mt-sm-0"
                                  },
                                  [
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-0",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_vm._v("On hold")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-2",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_c("i", { staticClass: "i-Gear-2" })]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
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
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "6" } },
                    [
                      _c("b-card", { staticClass: " mb-30" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-sm-flex align-item-sm-center flex-sm-nowrap"
                          },
                          [
                            _c("div", [
                              _c("h5", [
                                _c("a", { attrs: { href: "" } }, [
                                  _vm._v("#23. New icons set for an iOS app")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "ul-task-manager__paragraph mb-3"
                                },
                                [_vm._v("A collection of textile samples ..")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle ",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("i", {
                                    staticClass:
                                      "ul-task-manager__fonts i-Add text-30 ",
                                    staticStyle: { "vertical-align": "middle" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed",
                                  attrs: { href: "" }
                                },
                                [_c("i", { staticClass: "icon-plus22" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto"
                              },
                              [
                                _c("li", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "ul-task-manager__font-date text-muted"
                                    },
                                    [_vm._v("20 Jan,2015")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Eternity app")
                                  ])
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { attrs: { slot: "footer" }, slot: "footer" },
                          [
                            _c(
                              "small",
                              {
                                staticClass:
                                  "text-muted d-sm-flex justify-content-sm-between align-items-sm-center"
                              },
                              [
                                _c("span", [
                                  _vm._v("Due: "),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-semibold" },
                                    [_vm._v("18 hours")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "list-inline mb-0 mt-2 mt-sm-0"
                                  },
                                  [
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-0",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_vm._v("On hold")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-2",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_c("i", { staticClass: "i-Gear-2" })]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
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
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "6" } },
                    [
                      _c("b-card", { staticClass: " mb-30" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-sm-flex align-item-sm-center flex-sm-nowrap"
                          },
                          [
                            _c("div", [
                              _c("h5", [
                                _c("a", { attrs: { href: "" } }, [
                                  _vm._v("#23. New icons set for an iOS app")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "ul-task-manager__paragraph mb-3"
                                },
                                [_vm._v("A collection of textile samples ..")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle ",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("i", {
                                    staticClass:
                                      "ul-task-manager__fonts i-Add text-30 ",
                                    staticStyle: { "vertical-align": "middle" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed",
                                  attrs: { href: "" }
                                },
                                [_c("i", { staticClass: "icon-plus22" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto"
                              },
                              [
                                _c("li", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "ul-task-manager__font-date text-muted"
                                    },
                                    [_vm._v("20 Jan,2015")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Eternity app")
                                  ])
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { attrs: { slot: "footer" }, slot: "footer" },
                          [
                            _c(
                              "small",
                              {
                                staticClass:
                                  "text-muted d-sm-flex justify-content-sm-between align-items-sm-center"
                              },
                              [
                                _c("span", [
                                  _vm._v("Due: "),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-semibold" },
                                    [_vm._v("18 hours")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "list-inline mb-0 mt-2 mt-sm-0"
                                  },
                                  [
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-0",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_vm._v("On hold")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-2",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_c("i", { staticClass: "i-Gear-2" })]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
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
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "6" } },
                    [
                      _c("b-card", { staticClass: " mb-30" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-sm-flex align-item-sm-center flex-sm-nowrap"
                          },
                          [
                            _c("div", [
                              _c("h5", [
                                _c("a", { attrs: { href: "" } }, [
                                  _vm._v("#23. New icons set for an iOS app")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "ul-task-manager__paragraph mb-3"
                                },
                                [_vm._v("A collection of textile samples ..")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle ",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("i", {
                                    staticClass:
                                      "ul-task-manager__fonts i-Add text-30 ",
                                    staticStyle: { "vertical-align": "middle" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed",
                                  attrs: { href: "" }
                                },
                                [_c("i", { staticClass: "icon-plus22" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto"
                              },
                              [
                                _c("li", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "ul-task-manager__font-date text-muted"
                                    },
                                    [_vm._v("20 Jan,2015")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Eternity app")
                                  ])
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { attrs: { slot: "footer" }, slot: "footer" },
                          [
                            _c(
                              "small",
                              {
                                staticClass:
                                  "text-muted d-sm-flex justify-content-sm-between align-items-sm-center"
                              },
                              [
                                _c("span", [
                                  _vm._v("Due: "),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-semibold" },
                                    [_vm._v("18 hours")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "list-inline mb-0 mt-2 mt-sm-0"
                                  },
                                  [
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-0",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_vm._v("On hold")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-2",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_c("i", { staticClass: "i-Gear-2" })]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
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
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "6" } },
                    [
                      _c("b-card", { staticClass: " mb-30" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-sm-flex align-item-sm-center flex-sm-nowrap"
                          },
                          [
                            _c("div", [
                              _c("h5", [
                                _c("a", { attrs: { href: "" } }, [
                                  _vm._v("#23. New icons set for an iOS app")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "ul-task-manager__paragraph mb-3"
                                },
                                [_vm._v("A collection of textile samples ..")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle ",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("i", {
                                    staticClass:
                                      "ul-task-manager__fonts i-Add text-30 ",
                                    staticStyle: { "vertical-align": "middle" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed",
                                  attrs: { href: "" }
                                },
                                [_c("i", { staticClass: "icon-plus22" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto"
                              },
                              [
                                _c("li", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "ul-task-manager__font-date text-muted"
                                    },
                                    [_vm._v("20 Jan,2015")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Eternity app")
                                  ])
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { attrs: { slot: "footer" }, slot: "footer" },
                          [
                            _c(
                              "small",
                              {
                                staticClass:
                                  "text-muted d-sm-flex justify-content-sm-between align-items-sm-center"
                              },
                              [
                                _c("span", [
                                  _vm._v("Due: "),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-semibold" },
                                    [_vm._v("18 hours")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "list-inline mb-0 mt-2 mt-sm-0"
                                  },
                                  [
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-0",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_vm._v("On hold")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-2",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_c("i", { staticClass: "i-Gear-2" })]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
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
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "6" } },
                    [
                      _c("b-card", { staticClass: " mb-30" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-sm-flex align-item-sm-center flex-sm-nowrap"
                          },
                          [
                            _c("div", [
                              _c("h5", [
                                _c("a", { attrs: { href: "" } }, [
                                  _vm._v("#23. New icons set for an iOS app")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "ul-task-manager__paragraph mb-3"
                                },
                                [_vm._v("A collection of textile samples ..")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle ",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("i", {
                                    staticClass:
                                      "ul-task-manager__fonts i-Add text-30 ",
                                    staticStyle: { "vertical-align": "middle" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed",
                                  attrs: { href: "" }
                                },
                                [_c("i", { staticClass: "icon-plus22" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto"
                              },
                              [
                                _c("li", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "ul-task-manager__font-date text-muted"
                                    },
                                    [_vm._v("20 Jan,2015")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Eternity app")
                                  ])
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { attrs: { slot: "footer" }, slot: "footer" },
                          [
                            _c(
                              "small",
                              {
                                staticClass:
                                  "text-muted d-sm-flex justify-content-sm-between align-items-sm-center"
                              },
                              [
                                _c("span", [
                                  _vm._v("Due: "),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-semibold" },
                                    [_vm._v("18 hours")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "list-inline mb-0 mt-2 mt-sm-0"
                                  },
                                  [
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-0",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_vm._v("On hold")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-2",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_c("i", { staticClass: "i-Gear-2" })]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
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
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "6" } },
                    [
                      _c("b-card", { staticClass: " mb-30" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-sm-flex align-item-sm-center flex-sm-nowrap"
                          },
                          [
                            _c("div", [
                              _c("h5", [
                                _c("a", { attrs: { href: "" } }, [
                                  _vm._v("#23. New icons set for an iOS app")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "ul-task-manager__paragraph mb-3"
                                },
                                [_vm._v("A collection of textile samples ..")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle ",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("i", {
                                    staticClass:
                                      "ul-task-manager__fonts i-Add text-30 ",
                                    staticStyle: { "vertical-align": "middle" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed",
                                  attrs: { href: "" }
                                },
                                [_c("i", { staticClass: "icon-plus22" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto"
                              },
                              [
                                _c("li", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "ul-task-manager__font-date text-muted"
                                    },
                                    [_vm._v("20 Jan,2015")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Eternity app")
                                  ])
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { attrs: { slot: "footer" }, slot: "footer" },
                          [
                            _c(
                              "small",
                              {
                                staticClass:
                                  "text-muted d-sm-flex justify-content-sm-between align-items-sm-center"
                              },
                              [
                                _c("span", [
                                  _vm._v("Due: "),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-semibold" },
                                    [_vm._v("18 hours")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "list-inline mb-0 mt-2 mt-sm-0"
                                  },
                                  [
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-0",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_vm._v("On hold")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-2",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_c("i", { staticClass: "i-Gear-2" })]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
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
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { xl: "6" } },
                    [
                      _c("b-card", { staticClass: " mb-30" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-sm-flex align-item-sm-center flex-sm-nowrap"
                          },
                          [
                            _c("div", [
                              _c("h5", [
                                _c("a", { attrs: { href: "" } }, [
                                  _vm._v("#23. New icons set for an iOS app")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "ul-task-manager__paragraph mb-3"
                                },
                                [_vm._v("A collection of textile samples ..")]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle ",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("img", {
                                    staticClass: "rounded-circle",
                                    attrs: {
                                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                                      width: "36",
                                      height: "36",
                                      alt: "corrupted 2"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "m-1", attrs: { href: "#" } },
                                [
                                  _c("i", {
                                    staticClass:
                                      "ul-task-manager__fonts i-Add text-30 ",
                                    staticStyle: { "vertical-align": "middle" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-icon bg-transparent border-slate-300 text-slate rounded-round border-dashed",
                                  attrs: { href: "" }
                                },
                                [_c("i", { staticClass: "icon-plus22" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list list-unstyled mb-0 mt-3 mt-sm-0 ml-auto"
                              },
                              [
                                _c("li", [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "ul-task-manager__font-date text-muted"
                                    },
                                    [_vm._v("20 Jan,2015")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Eternity app")
                                  ])
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { attrs: { slot: "footer" }, slot: "footer" },
                          [
                            _c(
                              "small",
                              {
                                staticClass:
                                  "text-muted d-sm-flex justify-content-sm-between align-items-sm-center"
                              },
                              [
                                _c("span", [
                                  _vm._v("Due: "),
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-semibold" },
                                    [_vm._v("18 hours")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "list-inline mb-0 mt-2 mt-sm-0"
                                  },
                                  [
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-0",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_vm._v("On hold")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          variant: "link p-2",
                                          "toggle-class":
                                            "text-decoration-none",
                                          "no-caret": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "template",
                                          { slot: "button-content" },
                                          [_c("i", { staticClass: "i-Gear-2" })]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Another action")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          { attrs: { href: "#" } },
                                          [_vm._v("Something else here...")]
                                        )
                                      ],
                                      2
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
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-30  o-hidden",
                          attrs: { "b-card-link": "", "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              directives: [
                                {
                                  name: "b-toggle",
                                  rawName: "v-b-toggle.collapse-1",
                                  modifiers: { "collapse-1": true }
                                }
                              ],
                              staticStyle: { cursor: "pointer" }
                            },
                            [
                              _vm._v(
                                "\n                            Search Task\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              staticClass: "mt-2",
                              attrs: { visible: "", id: "collapse-1" }
                            },
                            [
                              _c("b-card-body", [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    placeholder: "type  &  hit enter"
                                  }
                                })
                              ])
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
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-30  o-hidden",
                          attrs: { "b-card-link": "", "no-body": "" }
                        },
                        [
                          _c(
                            "b-collapse",
                            {
                              staticClass: "mt-2",
                              attrs: { visible: "", id: "collapse-3" }
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c("p", { staticClass: "card-text" }, [
                                    _vm._v("Actions")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-list-group",
                                    [
                                      _c(
                                        "b-list-group-item",
                                        { attrs: { button: "" } },
                                        [
                                          _c("a", { attrs: { href: "" } }, [
                                            _c("i", {
                                              staticClass: "i-Empty-Box mr-2"
                                            }),
                                            _vm._v(" Create Project")
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-list-group-item",
                                        { attrs: { button: "" } },
                                        [
                                          _c("a", { attrs: { href: "" } }, [
                                            _c("i", {
                                              staticClass: "i-Edit mr-2"
                                            }),
                                            _vm._v("  Edit Task List")
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-list-group-item",
                                        { attrs: { button: "" } },
                                        [
                                          _c("a", { attrs: { href: "" } }, [
                                            _c("i", {
                                              staticClass: "i-Add-User mr-2"
                                            }),
                                            _vm._v("  Assign User")
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-list-group-item",
                                        { attrs: { button: "" } },
                                        [
                                          _c("a", { attrs: { href: "" } }, [
                                            _c("i", {
                                              staticClass: "i-Network mr-2"
                                            }),
                                            _vm._v("  Create Team ")
                                          ])
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: " mb-30" }),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "card-text" }, [
                                    _vm._v("Tasks")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-list-group",
                                    [
                                      _c(
                                        "b-list-group-item",
                                        { attrs: { button: "" } },
                                        [
                                          _c("a", { attrs: { href: "" } }, [
                                            _c("i", {
                                              staticClass: "i-Folders mr-2"
                                            }),
                                            _vm._v(" All Tasks")
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-list-group-item",
                                        { attrs: { button: "" } },
                                        [
                                          _c("a", { attrs: { href: "" } }, [
                                            _c("i", {
                                              staticClass: "i-Add-File mr-2"
                                            }),
                                            _vm._v(" Active Tasks")
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-list-group-item",
                                        { attrs: { button: "" } },
                                        [
                                          _c("a", { attrs: { href: "" } }, [
                                            _c("i", {
                                              staticClass:
                                                "i-File-Favorite mr-2"
                                            }),
                                            _vm._v(" Closed Tasks")
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-list-group-item",
                                        { attrs: { button: "" } },
                                        [
                                          _c(
                                            "a",
                                            { attrs: { href: "" } },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "i-Administrator mr-2"
                                              }),
                                              _vm._v(
                                                "  Assigned To Me  \n                                              "
                                              ),
                                              _c(
                                                "b-badge",
                                                {
                                                  attrs: {
                                                    pill: "",
                                                    variant: "primary ml-4"
                                                  }
                                                },
                                                [_vm._v("14")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-list-group-item",
                                        { attrs: { button: "" } },
                                        [
                                          _c(
                                            "a",
                                            { attrs: { href: "" } },
                                            [
                                              _c("i", {
                                                staticClass: "i-Conference mr-2"
                                              }),
                                              _vm._v(
                                                "   Assigned To My Team    \n                                              "
                                              ),
                                              _c(
                                                "b-badge",
                                                {
                                                  attrs: {
                                                    pill: "",
                                                    variant: "primary ml-4"
                                                  }
                                                },
                                                [_vm._v("14")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-list-group-item",
                                        { attrs: { button: "" } },
                                        [
                                          _c("a", { attrs: { href: "" } }, [
                                            _c("i", {
                                              staticClass: "i-Gears mr-2"
                                            }),
                                            _vm._v(
                                              " Settings     \n                                              \n                                         "
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
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-30  o-hidden",
                          attrs: { "b-card-link": "", "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              directives: [
                                {
                                  name: "b-toggle",
                                  rawName: "v-b-toggle.collapse-4",
                                  modifiers: { "collapse-4": true }
                                }
                              ],
                              staticStyle: { cursor: "pointer" }
                            },
                            [
                              _vm._v(
                                "\n                            Assigners\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              staticClass: "mt-2",
                              attrs: { visible: "", id: "collapse-4" }
                            },
                            [
                              _c("b-card-body", [
                                _c("ul", { staticClass: "media-list pl-0" }, [
                                  _c("li", { staticClass: "media mb-4" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "mr-4",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "rounded-circle",
                                          attrs: {
                                            src:
                                              "http://gull-html-laravel.ui-lib.com/assets/images/faces/1.jpg",
                                            width: "40",
                                            alt: "asd",
                                            srcset: ""
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "ul-task-manager__media" },
                                      [
                                        _c("a", { attrs: { href: "" } }, [
                                          _vm._v("James Alexander gull")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-sm text-muted"
                                          },
                                          [_vm._v("Santa Ana,CA")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "ml-3 align-self-center" },
                                      [
                                        _c("span", {
                                          staticClass: "badge badge-mark"
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "media mb-4" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "mr-4",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "rounded-circle",
                                          attrs: {
                                            src: __webpack_require__(/*! @/assets/images/faces/4.jpg */ "./resources/js/assets/images/faces/4.jpg"),
                                            width: "40",
                                            alt: "asd",
                                            srcset: ""
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "ul-task-manager__media" },
                                      [
                                        _c("a", { attrs: { href: "" } }, [
                                          _vm._v("James Alexander")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-sm text-muted"
                                          },
                                          [_vm._v("Santa Ana,CA")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "ml-3 align-self-center" },
                                      [
                                        _c("span", {
                                          staticClass: "badge badge-mark "
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "media " }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "mr-4",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "rounded-circle",
                                          attrs: {
                                            src: __webpack_require__(/*! @/assets/images/faces/3.jpg */ "./resources/js/assets/images/faces/3.jpg"),
                                            width: "40",
                                            alt: "asd",
                                            srcset: ""
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "ul-task-manager__media" },
                                      [
                                        _c("a", { attrs: { href: "" } }, [
                                          _vm._v("James Alexander")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-sm text-muted"
                                          },
                                          [_vm._v("Santa Ana,CA")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "ml-3 align-self-center" },
                                      [
                                        _c("span", {
                                          staticClass: "badge badge-mark"
                                        })
                                      ]
                                    )
                                  ])
                                ])
                              ])
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
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-30  o-hidden",
                          attrs: { "b-card-link": "", "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              directives: [
                                {
                                  name: "b-toggle",
                                  rawName: "v-b-toggle.collapse-6",
                                  modifiers: { "collapse-6": true }
                                }
                              ],
                              staticStyle: { cursor: "pointer" }
                            },
                            [
                              _vm._v(
                                "\n                            Completeness Stats\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              staticClass: "mt-2",
                              attrs: { visible: "", id: "collapse-6" }
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c(
                                    "b-list-group",
                                    [
                                      _c(
                                        "b-list-group-item",
                                        { staticClass: "mb-3 border-0" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex align-items-center  mb-1"
                                            },
                                            [
                                              _vm._v("Blockers "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-muted ml-auto"
                                                },
                                                [_vm._v("50%")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("b-progress", {
                                            attrs: {
                                              height: "2px",
                                              value: _vm.value
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-list-group-item",
                                        { staticClass: "mb-3 border-0" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex align-items-center  mb-1"
                                            },
                                            [
                                              _vm._v("High Priority "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-muted ml-auto"
                                                },
                                                [_vm._v("50%")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("b-progress", {
                                            attrs: {
                                              variant: "danger",
                                              height: "2px",
                                              value: _vm.value
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-list-group-item",
                                        { staticClass: "mb-3 border-0" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex align-items-center  mb-1"
                                            },
                                            [
                                              _vm._v("Normal Priority "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-muted ml-auto"
                                                },
                                                [_vm._v("50%")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("b-progress", {
                                            attrs: {
                                              variant: "success",
                                              height: "2px",
                                              value: _vm.value
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-list-group-item",
                                        { staticClass: "mb-3 border-0" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex align-items-center  mb-1"
                                            },
                                            [
                                              _vm._v("Low Priority "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-muted ml-auto"
                                                },
                                                [_vm._v("50%")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("b-progress", {
                                            attrs: {
                                              variant: "warning",
                                              height: "2px",
                                              value: _vm.value
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

/***/ "./resources/js/views/app/apps/taskManager.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/app/apps/taskManager.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskManager_vue_vue_type_template_id_21eac578___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager.vue?vue&type=template&id=21eac578& */ "./resources/js/views/app/apps/taskManager.vue?vue&type=template&id=21eac578&");
/* harmony import */ var _taskManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager.vue?vue&type=script&lang=js& */ "./resources/js/views/app/apps/taskManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _taskManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _taskManager_vue_vue_type_template_id_21eac578___WEBPACK_IMPORTED_MODULE_0__["render"],
  _taskManager_vue_vue_type_template_id_21eac578___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/apps/taskManager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/apps/taskManager.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/app/apps/taskManager.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./taskManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/taskManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/apps/taskManager.vue?vue&type=template&id=21eac578&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/app/apps/taskManager.vue?vue&type=template&id=21eac578& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskManager_vue_vue_type_template_id_21eac578___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./taskManager.vue?vue&type=template&id=21eac578& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/taskManager.vue?vue&type=template&id=21eac578&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskManager_vue_vue_type_template_id_21eac578___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskManager_vue_vue_type_template_id_21eac578___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);