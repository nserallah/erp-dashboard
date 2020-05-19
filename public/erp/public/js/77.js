(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/modals.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/modals.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Modals"
  },
  data: function data() {
    return {
      //   variant-modal
      show: false,
      variants: ["primary", "secondary", "success", "warning", "danger", "info", "light", "dark"],
      headerBgVariant: "primary",
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "success",
      footerTextVariant: "dark",
      // confirm-message-box
      boxOne: "",
      boxTwo: ""
    };
  },
  methods: {
    // confirm-message-box
    showMsgBoxOne: function showMsgBoxOne() {
      var _this = this;

      this.boxOne = "";
      this.$bvModal.msgBoxConfirm("Are you sure?").then(function (value) {
        _this.boxOne = value;
      })["catch"](function (err) {// An error occurred
      });
    },
    // confirm-message-box
    showMsgBoxTwo: function showMsgBoxTwo() {
      var _this2 = this;

      this.boxTwo = "";
      this.$bvModal.msgBoxConfirm("Please confirm that you want to delete everything.", {
        title: "Please Confirm",
        size: "sm",
        buttonSize: "sm",
        okVariant: "danger",
        okTitle: "YES",
        cancelTitle: "NO",
        footerClass: "p-2",
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        _this2.boxTwo = value;
      })["catch"](function (err) {// An error occurred
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/modals.vue?vue&type=template&id=7dba03e8&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/modals.vue?vue&type=template&id=7dba03e8& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Modals", folder: "UI Kits" } }),
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
                { staticClass: " mb-30", attrs: { title: "Basic Modal" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-1",
                          modifiers: { "modal-1": true }
                        }
                      ],
                      attrs: { variant: "primary" }
                    },
                    [_vm._v("Launch demo modal")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    { attrs: { id: "modal-1", title: "BootstrapVue" } },
                    [
                      _c("p", { staticClass: "my-4" }, [
                        _vm._v("Hello from modal!")
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
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30",
                  attrs: { title: "Scrolling long content" }
                },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-tall",
                          modifiers: { "modal-tall": true }
                        }
                      ],
                      attrs: { variant: "primary" }
                    },
                    [_vm._v("Launch overflowing modal")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: { id: "modal-tall", title: "Overflowing Content" }
                    },
                    _vm._l(20, function(i) {
                      return _c("p", { key: i, staticClass: "my-4" }, [
                        _vm._v(
                          "\n            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,\n            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta\n            ac consectetur ac, vestibulum at eros.\n          "
                        )
                      ])
                    }),
                    0
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
                  staticClass: " mb-30",
                  attrs: { title: "Confirm message box" }
                },
                [
                  _c("div", [
                    _c(
                      "div",
                      { staticClass: "mb-2" },
                      [
                        _c(
                          "b-button",
                          {
                            attrs: { variant: "success" },
                            on: { click: _vm.showMsgBoxOne }
                          },
                          [_vm._v("Simple msgBoxConfirm")]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mt-2" }, [
                          _vm._v("Return value: " + _vm._s(String(_vm.boxOne)))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-1" },
                      [
                        _c(
                          "b-button",
                          {
                            attrs: { variant: "warning" },
                            on: { click: _vm.showMsgBoxTwo }
                          },
                          [_vm._v("msgBoxConfirm with options")]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mt-2" }, [
                          _vm._v("Return value: " + _vm._s(String(_vm.boxTwo)))
                        ])
                      ],
                      1
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
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { title: "Optional Sizes" } },
                [
                  _c(
                    "div",
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-xl",
                              modifiers: { "modal-xl": true }
                            }
                          ],
                          attrs: { variant: "primary m-1" }
                        },
                        [_vm._v("xl modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-lg",
                              modifiers: { "modal-lg": true }
                            }
                          ],
                          attrs: { variant: "primary m-1" }
                        },
                        [_vm._v("lg modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-sm",
                              modifiers: { "modal-sm": true }
                            }
                          ],
                          attrs: { variant: "primary m-1" }
                        },
                        [_vm._v("sm modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          attrs: {
                            id: "modal-xl",
                            size: "xl",
                            title: "Extra Large Modal"
                          }
                        },
                        [_vm._v("Hello Extra Large Modal!")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          attrs: {
                            id: "modal-lg",
                            size: "lg",
                            title: "Large Modal"
                          }
                        },
                        [_vm._v("Hello Large Modal!")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          attrs: {
                            id: "modal-sm",
                            size: "sm",
                            title: "Small Modal"
                          }
                        },
                        [_vm._v("Hello Small Modal!")]
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
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                {
                  staticClass: " mb-30",
                  attrs: { title: "Multiple modal support" }
                },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-multi-1",
                          modifiers: { "modal-multi-1": true }
                        }
                      ],
                      attrs: { variant: "danger" }
                    },
                    [_vm._v("Open First Modal")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-multi-1",
                        size: "lg",
                        title: "First Modal",
                        "ok-only": "",
                        "no-stacking": ""
                      }
                    },
                    [
                      _c("p", { staticClass: "my-2" }, [_vm._v("First Modal")]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-multi-2",
                              modifiers: { "modal-multi-2": true }
                            }
                          ]
                        },
                        [_vm._v("Open Second Modal")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-multi-2",
                        title: "Second Modal",
                        "ok-only": ""
                      }
                    },
                    [
                      _c("p", { staticClass: "my-2" }, [
                        _vm._v("Second Modal")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-multi-3",
                              modifiers: { "modal-multi-3": true }
                            }
                          ],
                          attrs: { size: "sm" }
                        },
                        [_vm._v("Open Third Modal")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-multi-3",
                        size: "sm",
                        title: "Third Modal",
                        "ok-only": ""
                      }
                    },
                    [_c("p", { staticClass: "my-1" }, [_vm._v("Third Modal")])]
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
                  staticClass: " mb-30",
                  attrs: { title: "Vertically centered" }
                },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-center",
                          modifiers: { "modal-center": true }
                        }
                      ],
                      attrs: { variant: "primary" }
                    },
                    [_vm._v("Launch centered modal")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-center",
                        centered: "",
                        title: "BootstrapVue"
                      }
                    },
                    [
                      _c("p", { staticClass: "my-4" }, [
                        _vm._v("Vertically centered modal!")
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
            "b-col",
            { attrs: { md: "6" } },
            [
              _c(
                "b-card",
                { staticClass: " mb-30", attrs: { title: "Variant Modal" } },
                [
                  _c(
                    "div",
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "primary" },
                          on: {
                            click: function($event) {
                              _vm.show = true
                            }
                          }
                        },
                        [_vm._v("Show Modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          attrs: {
                            title: "Modal Variants",
                            "header-bg-variant": _vm.headerBgVariant,
                            "header-text-variant": _vm.headerTextVariant,
                            "body-bg-variant": _vm.bodyBgVariant,
                            "body-text-variant": _vm.bodyTextVariant,
                            "footer-bg-variant": _vm.footerBgVariant,
                            "footer-text-variant": _vm.footerTextVariant
                          },
                          model: {
                            value: _vm.show,
                            callback: function($$v) {
                              _vm.show = $$v
                            },
                            expression: "show"
                          }
                        },
                        [
                          _c(
                            "b-container",
                            { attrs: { fluid: "" } },
                            [
                              _c(
                                "b-row",
                                { staticClass: "mb-1 text-center" },
                                [
                                  _c("b-col", { attrs: { cols: "3" } }),
                                  _vm._v(" "),
                                  _c("b-col", [_vm._v("Background")]),
                                  _vm._v(" "),
                                  _c("b-col", [_vm._v("Text")])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-row",
                                { staticClass: "mb-1" },
                                [
                                  _c("b-col", { attrs: { cols: "3" } }, [
                                    _vm._v("Header")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    [
                                      _c("b-form-select", {
                                        attrs: { options: _vm.variants },
                                        model: {
                                          value: _vm.headerBgVariant,
                                          callback: function($$v) {
                                            _vm.headerBgVariant = $$v
                                          },
                                          expression: "headerBgVariant"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    [
                                      _c("b-form-select", {
                                        attrs: { options: _vm.variants },
                                        model: {
                                          value: _vm.headerTextVariant,
                                          callback: function($$v) {
                                            _vm.headerTextVariant = $$v
                                          },
                                          expression: "headerTextVariant"
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
                                { staticClass: "mb-1" },
                                [
                                  _c("b-col", { attrs: { cols: "3" } }, [
                                    _vm._v("Body")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    [
                                      _c("b-form-select", {
                                        attrs: { options: _vm.variants },
                                        model: {
                                          value: _vm.bodyBgVariant,
                                          callback: function($$v) {
                                            _vm.bodyBgVariant = $$v
                                          },
                                          expression: "bodyBgVariant"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    [
                                      _c("b-form-select", {
                                        attrs: { options: _vm.variants },
                                        model: {
                                          value: _vm.bodyTextVariant,
                                          callback: function($$v) {
                                            _vm.bodyTextVariant = $$v
                                          },
                                          expression: "bodyTextVariant"
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
                                [
                                  _c("b-col", { attrs: { cols: "3" } }, [
                                    _vm._v("Footer")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    [
                                      _c("b-form-select", {
                                        attrs: { options: _vm.variants },
                                        model: {
                                          value: _vm.footerBgVariant,
                                          callback: function($$v) {
                                            _vm.footerBgVariant = $$v
                                          },
                                          expression: "footerBgVariant"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    [
                                      _c("b-form-select", {
                                        attrs: { options: _vm.variants },
                                        model: {
                                          value: _vm.footerTextVariant,
                                          callback: function($$v) {
                                            _vm.footerTextVariant = $$v
                                          },
                                          expression: "footerTextVariant"
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
                            "div",
                            {
                              staticClass: "w-100",
                              attrs: { slot: "modal-footer" },
                              slot: "modal-footer"
                            },
                            [
                              _c("p", { staticClass: "float-left" }, [
                                _vm._v("Modal Footer Content")
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  staticClass: "float-right",
                                  attrs: { variant: "primary", size: "sm" },
                                  on: {
                                    click: function($event) {
                                      _vm.show = false
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Close\n              "
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
                  attrs: { title: "Tooltips and popovers" }
                },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modalPopover",
                          modifiers: { modalPopover: true }
                        }
                      ],
                      attrs: { variant: "info" }
                    },
                    [_vm._v("Show Modal")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modalPopover",
                        title: "Modal with Popover",
                        "ok-only": ""
                      }
                    },
                    [
                      _c(
                        "p",
                        [
                          _vm._v("\n            This\n            "),
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-popover",
                                  rawName: "v-b-popover",
                                  value: "Popover inside a modal!",
                                  expression: "'Popover inside a modal!'"
                                }
                              ],
                              attrs: { title: "Popover" }
                            },
                            [_vm._v("Button")]
                          ),
                          _vm._v(
                            "\n            triggers a popover on click.\n          "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            This\n            "),
                        _c(
                          "a",
                          {
                            directives: [
                              { name: "b-tooltip", rawName: "v-b-tooltip" }
                            ],
                            attrs: { href: "#", title: "Tooltip in a modal!" }
                          },
                          [_vm._v("Link")]
                        ),
                        _vm._v(
                          " will\n            show a tooltip on hover.\n          "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/ui-kits/modals.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/app/ui-kits/modals.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modals_vue_vue_type_template_id_7dba03e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals.vue?vue&type=template&id=7dba03e8& */ "./resources/js/views/app/ui-kits/modals.vue?vue&type=template&id=7dba03e8&");
/* harmony import */ var _modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals.vue?vue&type=script&lang=js& */ "./resources/js/views/app/ui-kits/modals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modals_vue_vue_type_template_id_7dba03e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modals_vue_vue_type_template_id_7dba03e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/ui-kits/modals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/ui-kits/modals.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/modals.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/modals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/ui-kits/modals.vue?vue&type=template&id=7dba03e8&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/modals.vue?vue&type=template&id=7dba03e8& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modals_vue_vue_type_template_id_7dba03e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modals.vue?vue&type=template&id=7dba03e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/modals.vue?vue&type=template&id=7dba03e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modals_vue_vue_type_template_id_7dba03e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modals_vue_vue_type_template_id_7dba03e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);