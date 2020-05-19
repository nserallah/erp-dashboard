(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/formWizard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/form/formWizard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Form Wizard"
  },
  props: {
    title: {
      type: String,
      "default": "Awesome Wizard"
    }
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
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/formWizard.vue?vue&type=template&id=36386b46&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/form/formWizard.vue?vue&type=template&id=36386b46& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Form Wizard", folder: "Forms" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "12 mb-30" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Simple" } },
                [
                  _c(
                    "form-wizard",
                    { on: { "on-complete": _vm.onComplete } },
                    [
                      _c(
                        "tab-content",
                        {
                          attrs: {
                            title: "Personal details",
                            icon: "i-Administrator"
                          }
                        },
                        [
                          _vm._v(
                            "\n            My first tab content\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "tab-content",
                        { attrs: { title: "Additional Info", icon: "i-Gear" } },
                        [
                          _vm._v(
                            "\n            My second tab content\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "tab-content",
                        {
                          attrs: {
                            title: "Last step",
                            icon: "i-Thumbs-Up-Smiley"
                          }
                        },
                        [
                          _vm._v(
                            "\n            Yuhuuu! This seems pretty damn simple\n          "
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
            "b-col",
            { attrs: { md: "12 mb-30" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Square Steps" } },
                [
                  _c(
                    "form-wizard",
                    {
                      attrs: { shape: "square", color: "#3498db" },
                      on: { "on-complete": _vm.onComplete }
                    },
                    [
                      _c(
                        "tab-content",
                        {
                          attrs: {
                            title: "Personal details",
                            icon: "i-Administrator"
                          }
                        },
                        [
                          _vm._v(
                            "\n            My first tab content\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "tab-content",
                        { attrs: { title: "Additional Info", icon: "i-Gear" } },
                        [
                          _vm._v(
                            "\n            My second tab content\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "tab-content",
                        {
                          attrs: {
                            title: "Last step",
                            icon: "i-Thumbs-Up-Smiley"
                          }
                        },
                        [
                          _vm._v(
                            "\n            Yuhuuu! This seems pretty damn simple\n          "
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
            "b-col",
            { attrs: { md: "12 mb-30" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Tabbed steps" } },
                [
                  _c(
                    "form-wizard",
                    {
                      attrs: { shape: "tab", color: "#9b59b6" },
                      on: { "on-complete": _vm.onComplete }
                    },
                    [
                      _c(
                        "tab-content",
                        {
                          attrs: {
                            title: "Personal details",
                            icon: "i-Administrator"
                          }
                        },
                        [
                          _vm._v(
                            "\n            My first tab content\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "tab-content",
                        { attrs: { title: "Additional Info", icon: "i-Gear" } },
                        [
                          _vm._v(
                            "\n            My second tab content\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "tab-content",
                        {
                          attrs: {
                            title: "Last step",
                            icon: "i-Thumbs-Up-Smiley"
                          }
                        },
                        [
                          _vm._v(
                            "\n            Yuhuuu! This seems pretty damn simple\n          "
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
            "b-col",
            { attrs: { md: "12 mb-30" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Form Steps" } },
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
                                      staticClass: "col-md-6",
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

/***/ "./resources/js/views/app/form/formWizard.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/app/form/formWizard.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formWizard_vue_vue_type_template_id_36386b46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formWizard.vue?vue&type=template&id=36386b46& */ "./resources/js/views/app/form/formWizard.vue?vue&type=template&id=36386b46&");
/* harmony import */ var _formWizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formWizard.vue?vue&type=script&lang=js& */ "./resources/js/views/app/form/formWizard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formWizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formWizard_vue_vue_type_template_id_36386b46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formWizard_vue_vue_type_template_id_36386b46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/form/formWizard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/form/formWizard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/app/form/formWizard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formWizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formWizard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/formWizard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formWizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/form/formWizard.vue?vue&type=template&id=36386b46&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/form/formWizard.vue?vue&type=template&id=36386b46& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formWizard_vue_vue_type_template_id_36386b46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formWizard.vue?vue&type=template&id=36386b46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/formWizard.vue?vue&type=template&id=36386b46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formWizard_vue_vue_type_template_id_36386b46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formWizard_vue_vue_type_template_id_36386b46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);