(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/accordion.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/accordion.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Accordion"
  },
  data: function data() {
    return {
      text: "\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor\n        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\n        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n        synth nesciunt you probably haven't heard of them accusamus labore VHS.\n      "
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/accordion.vue?vue&type=template&id=4bcdfe12&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/accordion.vue?vue&type=template&id=4bcdfe12&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Accordion", folder: "UI Kits" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { lg: "6", md: "6" } },
            [
              _c(
                "b-card",
                { staticClass: "mb-30", attrs: { title: "Accordion Group" } },
                [
                  _c(
                    "div",
                    { attrs: { role: "tablist" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "ul-card__border-radius",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              staticClass: "p-1",
                              attrs: { "header-tag": "header", role: "tab" }
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-1",
                                      modifiers: { "accordion-1": true }
                                    }
                                  ],
                                  staticClass: "card-title mb-0",
                                  attrs: {
                                    block: "",
                                    href: "#",
                                    variant: "transparent"
                                  }
                                },
                                [_vm._v("Accordion 1")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-1",
                                visible: "",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c("b-card-text", [
                                    _vm._v("I start opened because "),
                                    _c("code", [_vm._v("visible")]),
                                    _vm._v(" is "),
                                    _c("code", [_vm._v("true")])
                                  ]),
                                  _vm._v(" "),
                                  _c("b-card-text", [_vm._v(_vm._s(_vm.text))])
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
                        "b-card",
                        {
                          staticClass: "ul-card__border-radius",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              staticClass: "p-1",
                              attrs: { "header-tag": "header", role: "tab" }
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-2",
                                      modifiers: { "accordion-2": true }
                                    }
                                  ],
                                  staticClass: "card-title mb-0",
                                  attrs: {
                                    block: "",
                                    href: "#",
                                    variant: "transparent"
                                  }
                                },
                                [_vm._v("Accordion 2")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-2",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [_c("b-card-text", [_vm._v(_vm._s(_vm.text))])],
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
                        "b-card",
                        {
                          staticClass: "ul-card__border-radius",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              staticClass: "p-1",
                              attrs: { "header-tag": "header", role: "tab" }
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-3",
                                      modifiers: { "accordion-3": true }
                                    }
                                  ],
                                  staticClass: "card-title mb-0",
                                  attrs: {
                                    block: "",
                                    href: "#",
                                    variant: "transparent"
                                  }
                                },
                                [_vm._v("Accordion 3")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-3",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [_c("b-card-text", [_vm._v(_vm._s(_vm.text))])],
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
                ]
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: " mb-30",
                  attrs: { title: "Right control icon" }
                },
                [
                  _c(
                    "div",
                    { attrs: { role: "tablist" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "ul-card__border-radius",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              staticClass: "p-1",
                              attrs: { "header-tag": "header", role: "tab" }
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-4",
                                      modifiers: { "accordion-4": true }
                                    }
                                  ],
                                  staticClass: "card-title mb-0 custom_a",
                                  attrs: {
                                    block: "",
                                    href: "#",
                                    variant: "transparent"
                                  }
                                },
                                [_vm._v("Accordion 1")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-4",
                                visible: "",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c("b-card-text", [
                                    _vm._v("I start opened because "),
                                    _c("code", [_vm._v("visible")]),
                                    _vm._v(" is "),
                                    _c("code", [_vm._v("true")])
                                  ]),
                                  _vm._v(" "),
                                  _c("b-card-text", [_vm._v(_vm._s(_vm.text))])
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
                        "b-card",
                        {
                          staticClass: "ul-card__border-radius",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              staticClass: "p-1",
                              attrs: { "header-tag": "header", role: "tab" }
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-5",
                                      modifiers: { "accordion-5": true }
                                    }
                                  ],
                                  staticClass: "card-title mb-0",
                                  attrs: {
                                    block: "",
                                    href: "#",
                                    variant: "transparent"
                                  }
                                },
                                [_vm._v("Accordion 2")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-5",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [_c("b-card-text", [_vm._v(_vm._s(_vm.text))])],
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
                        "b-card",
                        {
                          staticClass: "ul-card__border-radius",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              staticClass: "p-1",
                              attrs: { "header-tag": "header", role: "tab" }
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-6",
                                      modifiers: { "accordion-6": true }
                                    }
                                  ],
                                  staticClass: "card-title mb-0",
                                  attrs: {
                                    block: "",
                                    href: "#",
                                    variant: "transparent"
                                  }
                                },
                                [_vm._v("Accordion 3")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-6",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [_c("b-card-text", [_vm._v(_vm._s(_vm.text))])],
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
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "6", md: "6" } },
            [
              _c(
                "b-card",
                { staticClass: "mb-30", attrs: { title: "With Icons" } },
                [
                  _c(
                    "div",
                    { attrs: { role: "tablist" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "ul-card__border-radius",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              staticClass: "p-1 header-elements-inline",
                              attrs: { "header-tag": "header", role: "tab" }
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-2-1",
                                      modifiers: { "accordion-2-1": true }
                                    }
                                  ],
                                  staticClass: "card-title mb-0 ",
                                  attrs: {
                                    block: "",
                                    href: "#",
                                    variant: "transparent"
                                  }
                                },
                                [
                                  _c("span", [
                                    _c("i", {
                                      staticClass:
                                        "i-Big-Data text-18 font-weight-500 mr-1"
                                    })
                                  ]),
                                  _vm._v(" Accordion 1")
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-2-1",
                                visible: "",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c("b-card-text", [
                                    _vm._v("I start opened because "),
                                    _c("code", [_vm._v("visible")]),
                                    _vm._v(" is "),
                                    _c("code", [_vm._v("true")])
                                  ]),
                                  _vm._v(" "),
                                  _c("b-card-text", [_vm._v(_vm._s(_vm.text))])
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
                        "b-card",
                        {
                          staticClass: "ul-card__border-radius",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              staticClass: "p-1",
                              attrs: { "header-tag": "header", role: "tab" }
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-2-2",
                                      modifiers: { "accordion-2-2": true }
                                    }
                                  ],
                                  staticClass: "card-title mb-0",
                                  attrs: {
                                    block: "",
                                    href: "#",
                                    variant: "transparent"
                                  }
                                },
                                [
                                  _c("span", [
                                    _c("i", {
                                      staticClass:
                                        "i-Data-Settings text-18 font-weight-500 mr-1"
                                    })
                                  ]),
                                  _vm._v(
                                    "\n                            Accordion 2\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-2-2",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [_c("b-card-text", [_vm._v(_vm._s(_vm.text))])],
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
                        "b-card",
                        {
                          staticClass: "ul-card__border-radius",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              staticClass: "p-1",
                              attrs: { "header-tag": "header", role: "tab" }
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-2-3",
                                      modifiers: { "accordion-2-3": true }
                                    }
                                  ],
                                  staticClass: "card-title mb-0",
                                  attrs: {
                                    block: "",
                                    href: "#",
                                    variant: "transparent"
                                  }
                                },
                                [
                                  _c("span", [
                                    _c("i", {
                                      staticClass:
                                        "i-Bell1 text-18 font-weight-500 mr-1"
                                    })
                                  ]),
                                  _vm._v(
                                    "\n                            Accordion 3\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-2-3",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [_c("b-card-text", [_vm._v(_vm._s(_vm.text))])],
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
                ]
              ),
              _vm._v(" "),
              _c(
                "b-card",
                {
                  staticClass: "mb-30",
                  attrs: { title: "Without Right Icons" }
                },
                [
                  _c(
                    "div",
                    { attrs: { role: "tablist" } },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "ul-card__border-radius",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              staticClass: "p-1 header-elements-inline",
                              attrs: { "header-tag": "header", role: "tab" }
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-2-4",
                                      modifiers: { "accordion-2-4": true }
                                    }
                                  ],
                                  staticClass: "card-title mb-0 ",
                                  attrs: {
                                    block: "",
                                    href: "#",
                                    variant: "transparent"
                                  }
                                },
                                [
                                  _c("span", [
                                    _c("i", {
                                      staticClass:
                                        "i-Big-Data text-18 font-weight-500 mr-1"
                                    })
                                  ]),
                                  _vm._v(" Accordion 1")
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-2-4",
                                visible: "",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c("b-card-text", [
                                    _vm._v("I start opened because "),
                                    _c("code", [_vm._v("visible")]),
                                    _vm._v(" is "),
                                    _c("code", [_vm._v("true")])
                                  ]),
                                  _vm._v(" "),
                                  _c("b-card-text", [_vm._v(_vm._s(_vm.text))])
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
                        "b-card",
                        {
                          staticClass: "ul-card__border-radius",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              staticClass: "p-1",
                              attrs: { "header-tag": "header", role: "tab" }
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-2-5",
                                      modifiers: { "accordion-2-5": true }
                                    }
                                  ],
                                  staticClass: "card-title mb-0",
                                  attrs: {
                                    block: "",
                                    href: "#",
                                    variant: "transparent"
                                  }
                                },
                                [
                                  _c("span", [
                                    _c("i", {
                                      staticClass:
                                        "i-Data-Settings text-18 font-weight-500 mr-1"
                                    })
                                  ]),
                                  _vm._v(
                                    "\n                            Accordion 2\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-2-5",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [_c("b-card-text", [_vm._v(_vm._s(_vm.text))])],
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
                        "b-card",
                        {
                          staticClass: "ul-card__border-radius",
                          attrs: { "no-body": "" }
                        },
                        [
                          _c(
                            "b-card-header",
                            {
                              staticClass: "p-1",
                              attrs: { "header-tag": "header", role: "tab" }
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-2-6",
                                      modifiers: { "accordion-2-6": true }
                                    }
                                  ],
                                  staticClass: "card-title mb-0",
                                  attrs: {
                                    block: "",
                                    href: "#",
                                    variant: "transparent"
                                  }
                                },
                                [
                                  _c("span", [
                                    _c("i", {
                                      staticClass:
                                        "i-Bell1 text-18 font-weight-500 mr-1"
                                    })
                                  ]),
                                  _vm._v(
                                    "\n                            Accordion 3\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-2-6",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [_c("b-card-text", [_vm._v(_vm._s(_vm.text))])],
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

/***/ "./resources/js/views/app/ui-kits/accordion.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/app/ui-kits/accordion.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion_vue_vue_type_template_id_4bcdfe12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.vue?vue&type=template&id=4bcdfe12&scoped=true& */ "./resources/js/views/app/ui-kits/accordion.vue?vue&type=template&id=4bcdfe12&scoped=true&");
/* harmony import */ var _accordion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.vue?vue&type=script&lang=js& */ "./resources/js/views/app/ui-kits/accordion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _accordion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _accordion_vue_vue_type_template_id_4bcdfe12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _accordion_vue_vue_type_template_id_4bcdfe12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4bcdfe12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/ui-kits/accordion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/ui-kits/accordion.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/accordion.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accordion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./accordion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/accordion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accordion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/ui-kits/accordion.vue?vue&type=template&id=4bcdfe12&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/accordion.vue?vue&type=template&id=4bcdfe12&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_accordion_vue_vue_type_template_id_4bcdfe12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./accordion.vue?vue&type=template&id=4bcdfe12&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/accordion.vue?vue&type=template&id=4bcdfe12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_accordion_vue_vue_type_template_id_4bcdfe12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_accordion_vue_vue_type_template_id_4bcdfe12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);