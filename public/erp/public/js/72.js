(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/bootstrap-tab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/bootstrap-tab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Bootstrap Vue tab"
  },
  data: function data() {
    return {
      // dynamicTabs
      tabs: [],
      tabCounter: 1,
      // end::dynamicTabs
      // advanceExample
      tabIndex: 1
    };
  },
  methods: {
    //  dynamicTabs
    closeTab: function closeTab(x) {
      for (var i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1);
        }
      }
    },
    newTab: function newTab() {
      this.tabs.push(this.tabCounter++);
    }
  } // end::dynamicTabs

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/bootstrap-tab.vue?vue&type=template&id=c9f5f700&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/bootstrap-tab.vue?vue&type=template&id=c9f5f700& ***!
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
      _c("breadcumb", {
        attrs: { page: "Bootstrap Vue Tab ", folder: "UI Kits" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        [
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "card   mb-30",
                  attrs: {
                    header: "Basic Tabs",
                    "header-bg-variant": "transparent "
                  }
                },
                [
                  _c(
                    "b-tabs",
                    {
                      attrs: {
                        "active-nav-item-class": "nav nav-tabs",
                        "content-class": "mt-3"
                      }
                    },
                    [
                      _c("b-tab", { attrs: { title: "Home", active: "" } }, [
                        _c("p", {}, [
                          _vm._v(
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Profile" } }, [
                        _c("p", {}, [
                          _vm._v(
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Contact" } }, [
                        _c("p", {}, [
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
              ),
              _vm._v(" "),
              _c(
                "div",
                {},
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "card   mb-30",
                      attrs: {
                        header: "Advanced Example ",
                        "header-bg-variant": "transparent "
                      }
                    },
                    [
                      _c(
                        "b-tabs",
                        {
                          model: {
                            value: _vm.tabIndex,
                            callback: function($$v) {
                              _vm.tabIndex = $$v
                            },
                            expression: "tabIndex"
                          }
                        },
                        [
                          _c("b-tab", { attrs: { title: "General" } }, [
                            _vm._v("I'm the first fading tab")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            { attrs: { title: "Edit profile" } },
                            [
                              _vm._v(
                                "\n                    I'm the second tab\n                    "
                              ),
                              _c("b-card", [_vm._v("I'm the card in tab")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tab",
                            { attrs: { title: "Premium Plan", disabled: "" } },
                            [_vm._v("Sibzamini!")]
                          ),
                          _vm._v(" "),
                          _c("b-tab", { attrs: { title: "Info" } }, [
                            _vm._v("I'm the last tab")
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
                    { staticClass: "text-center" },
                    [
                      _c(
                        "b-button-group",
                        { staticClass: "mt-2" },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "outline-primary" },
                              on: {
                                click: function($event) {
                                  _vm.tabIndex--
                                }
                              }
                            },
                            [_vm._v("Previous")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "outline-primary" },
                              on: {
                                click: function($event) {
                                  _vm.tabIndex++
                                }
                              }
                            },
                            [_vm._v("Next")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-muted mb-30" }, [
                        _vm._v("Current Tab: " + _vm._s(_vm.tabIndex))
                      ])
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
                  staticClass: "card   mb-30",
                  attrs: {
                    header: "Icon Tabs",
                    "header-bg-variant": "transparent "
                  }
                },
                [
                  _c(
                    "b-tabs",
                    {
                      attrs: {
                        "active-nav-item-class": "nav nav-tabs",
                        "content-class": "mt-3"
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
                                "i-Bio-Hazard  ul-tab__icon text-danger mr-1"
                            }),
                            _vm._v(
                              "\n                            Active\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", {}, [
                            _vm._v(
                              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            )
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "" } },
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", {
                              staticClass:
                                "i-Download ul-tab__icon text-success mr-1"
                            }),
                            _vm._v(
                              "\n                            Download\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", {}, [
                            _vm._v(
                              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                            )
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", {
                              staticClass:
                                "i-File-Clipboard-File--Text ul-tab__icon text-muted mr-1"
                            }),
                            _vm._v(
                              "\n                            Clip File\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", {}, [
                            _vm._v(
                              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                            )
                          ])
                        ],
                        2
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "ul-tab__border" }),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    {
                      attrs: {
                        "active-nav-item-class": "nav nav-tabs",
                        "content-class": "mt-3"
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
                                "i-Bio-Hazard  ul-tab__icon text-danger mr-1"
                            }),
                            _vm._v(
                              "\n                            Active\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", {}, [
                            _vm._v(
                              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            )
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "" } },
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", {
                              staticClass:
                                "i-Download ul-tab__icon text-success mr-1"
                            }),
                            _vm._v(
                              "\n                            Download\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", {}, [
                            _vm._v(
                              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                            )
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c("template", { slot: "title" }, [
                            _c("i", {
                              staticClass:
                                "i-File-Clipboard-File--Text ul-tab__icon text-muted mr-1"
                            }),
                            _vm._v(
                              "\n                            Clip File\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", {}, [
                            _vm._v(
                              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                            )
                          ])
                        ],
                        2
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
                  staticClass: "card   mb-30",
                  attrs: {
                    header: "Adjusted Tabs",
                    "header-bg-variant": "transparent "
                  }
                },
                [
                  _c(
                    "b-tabs",
                    { attrs: { "content-class": "mt-3", justified: "" } },
                    [
                      _c("b-tab", { attrs: { title: "First", active: "" } }, [
                        _c("p", {}, [
                          _vm._v(
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Second" } }, [
                        _c("p", {}, [
                          _vm._v(
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Very, very long title" } },
                        [
                          _c("p", {}, [
                            _vm._v(
                              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Disabled", disabled: "" } },
                        [_c("p", [_vm._v("I'm a disabled tab!")])]
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
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "card   mb-30",
                  attrs: {
                    header: "Pills",
                    "header-bg-variant": "transparent "
                  }
                },
                [
                  _c(
                    "b-tabs",
                    { attrs: { pills: "" } },
                    [
                      _c(
                        "b-tab",
                        { attrs: { title: "Active", active: "" } },
                        [
                          _c("b-card-text", {}, [
                            _vm._v(
                              "\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Download" } },
                        [
                          _c("b-card-text", {}, [
                            _vm._v(
                              "\n                            \n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Disabled", disabled: "" } },
                        [
                          _c("b-card-text", {}, [
                            _vm._v(
                              "\n                            \n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                        "
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
                "div",
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "card   mb-30",
                      attrs: {
                        header: "Dynamic",
                        "header-bg-variant": "transparent "
                      }
                    },
                    [
                      _c(
                        "b-tabs",
                        [
                          _vm._l(_vm.tabs, function(i) {
                            return _c(
                              "b-tab",
                              {
                                key: "dyn-tab-" + i,
                                attrs: { title: "Tab " + i }
                              },
                              [
                                _vm._v(
                                  "\n                    Tab Contents " +
                                    _vm._s(i) +
                                    "\n                    "
                                ),
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "float-right",
                                    attrs: { size: "sm", variant: "danger" },
                                    on: {
                                      click: function() {
                                        return _vm.closeTab(i)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        Close tab\n                    "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          }),
                          _vm._v(" "),
                          _c(
                            "template",
                            { slot: "tabs" },
                            [
                              _c(
                                "b-nav-item",
                                {
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.newTab($event)
                                    }
                                  }
                                },
                                [_c("b", [_vm._v("+")])]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "text-center text-muted",
                              attrs: { slot: "empty" },
                              slot: "empty"
                            },
                            [
                              _vm._v(
                                "\n                    There are no open tabs"
                              ),
                              _c("br"),
                              _vm._v(
                                "\n                    Open a new tab using the "
                              ),
                              _c("b", [_vm._v("+")]),
                              _vm._v(" button above.\n                    ")
                            ]
                          )
                        ],
                        2
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
                  staticClass: "card   mb-30",
                  attrs: {
                    header: "Add custom content to tab title ",
                    "header-bg-variant": "transparent "
                  }
                },
                [
                  _c(
                    "b-tabs",
                    [
                      _c(
                        "b-tab",
                        { attrs: { active: "" } },
                        [
                          _c(
                            "template",
                            { slot: "title" },
                            [
                              _c("b-spinner", {
                                attrs: { type: "grow", small: "" }
                              }),
                              _vm._v(" I'm "),
                              _c("i", [_vm._v("Custom")]),
                              _vm._v(" "),
                              _c("strong", [_vm._v("Title")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "p-3" }, [
                            _vm._v(
                              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            )
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        [
                          _c(
                            "template",
                            { slot: "title" },
                            [
                              _c("b-spinner", {
                                attrs: { type: "border", small: "" }
                              }),
                              _vm._v(" Tab 2\n                    ")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "p-3" }, [
                            _vm._v(
                              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            )
                          ])
                        ],
                        2
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
                  staticClass: "card   mb-30",
                  attrs: {
                    header: "Adjusted Pills",
                    "header-bg-variant": "transparent "
                  }
                },
                [
                  _c(
                    "b-tabs",
                    { attrs: { pills: "", justified: "" } },
                    [
                      _c(
                        "b-tab",
                        { attrs: { title: "Active", active: "" } },
                        [
                          _c("b-card-text", {}, [
                            _vm._v(
                              "\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Download" } },
                        [
                          _c("b-card-text", {}, [
                            _vm._v(
                              "\n                            \n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Disabled", disabled: "" } },
                        [
                          _c("b-card-text", {}, [
                            _vm._v(
                              "\n                            \n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                        "
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
                "b-card",
                {
                  staticClass: "card   mb-30",
                  attrs: {
                    header: "Alignment ",
                    "header-bg-variant": "transparent "
                  }
                },
                [
                  _c(
                    "b-tabs",
                    { attrs: { "content-class": "mt-3", align: "center" } },
                    [
                      _c("b-tab", { attrs: { title: "First", active: "" } }, [
                        _c("p", {}, [
                          _vm._v(
                            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Second" } }, [
                        _c("p", {}, [
                          _vm._v(
                            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { attrs: { title: "Disabled", disabled: "" } },
                        [
                          _c("p", {}, [
                            _vm._v(
                              " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/ui-kits/bootstrap-tab.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/app/ui-kits/bootstrap-tab.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_tab_vue_vue_type_template_id_c9f5f700___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap-tab.vue?vue&type=template&id=c9f5f700& */ "./resources/js/views/app/ui-kits/bootstrap-tab.vue?vue&type=template&id=c9f5f700&");
/* harmony import */ var _bootstrap_tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap-tab.vue?vue&type=script&lang=js& */ "./resources/js/views/app/ui-kits/bootstrap-tab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _bootstrap_tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bootstrap_tab_vue_vue_type_template_id_c9f5f700___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bootstrap_tab_vue_vue_type_template_id_c9f5f700___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/ui-kits/bootstrap-tab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/ui-kits/bootstrap-tab.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/bootstrap-tab.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bootstrap_tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./bootstrap-tab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/bootstrap-tab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bootstrap_tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/ui-kits/bootstrap-tab.vue?vue&type=template&id=c9f5f700&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/bootstrap-tab.vue?vue&type=template&id=c9f5f700& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bootstrap_tab_vue_vue_type_template_id_c9f5f700___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./bootstrap-tab.vue?vue&type=template&id=c9f5f700& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/bootstrap-tab.vue?vue&type=template&id=c9f5f700&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bootstrap_tab_vue_vue_type_template_id_c9f5f700___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bootstrap_tab_vue_vue_type_template_id_c9f5f700___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);