(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/basicForms.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/form/basicForms.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Basic Forms"
  },
  data: function data() {
    return {
      date: new Date(),
      form: {
        name: '',
        email: '',
        fName: '',
        lName: '',
        phone: ''
      },
      selected: 'first',
      options: [{
        text: 'First radio',
        value: 'first'
      }, {
        text: 'Second radio',
        value: 'second'
      }, {
        text: 'Third radio',
        value: 'third'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/basicForms.vue?vue&type=template&id=395f6aaf&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/form/basicForms.vue?vue&type=template&id=395f6aaf& ***!
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
      _c("breadcumb", { attrs: { page: "Basic", folder: "Forms" } }),
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
                { attrs: { title: "Form Inputs" } },
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
                              staticClass: "col-md-6 mb-3",
                              attrs: {
                                id: "input-group-1",
                                label: "First Name",
                                "label-for": "input-1"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "input-1",
                                  type: "text",
                                  required: "",
                                  placeholder: "First Name"
                                },
                                model: {
                                  value: _vm.form.fName,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "fName", $$v)
                                  },
                                  expression: "form.fName"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              staticClass: "col-md-6 mb-3",
                              attrs: {
                                id: "input-group-1",
                                label: "Last Name",
                                "label-for": "input-1"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "input-1",
                                  type: "text",
                                  required: "",
                                  placeholder: "Last Name"
                                },
                                model: {
                                  value: _vm.form.lName,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "lName", $$v)
                                  },
                                  expression: "form.lName"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              staticClass: "col-md-6 mb-3",
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
                              staticClass: "col-md-6 mb-3",
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
                                  type: "text",
                                  required: "",
                                  placeholder: "put your phone number"
                                },
                                model: {
                                  value: _vm.form.phone,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "phone", $$v)
                                  },
                                  expression: "form.phone"
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
                                label: "Credit Card",
                                "label-for": "input-1"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "input-1",
                                  type: "email",
                                  required: "",
                                  placeholder: "Enter Credit Card Number"
                                },
                                model: {
                                  value: _vm.form.credit,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "credit", $$v)
                                  },
                                  expression: "form.credit"
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
                                label: "Date",
                                "label-for": "input-1"
                              }
                            },
                            [
                              _c("v-date-picker", {
                                model: {
                                  value: _vm.date,
                                  callback: function($$v) {
                                    _vm.date = $$v
                                  },
                                  expression: "date"
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
                                label: "Select",
                                "label-for": "input-1"
                              }
                            },
                            [
                              _c(
                                "b-form-select",
                                {
                                  attrs: {
                                    value: null,
                                    options: {
                                      "1": "One",
                                      "2": "Two",
                                      "3": "Three"
                                    },
                                    id: "inline-form-custom-select-pref"
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
                                    [_vm._v("Choose...")]
                                  )
                                ]
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
                                "b-button",
                                {
                                  staticClass: "mt-3",
                                  attrs: { type: "submit", variant: "primary" }
                                },
                                [_vm._v("Submit")]
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
            { attrs: { md: "12 mb-30" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Form Inputs Rounded" } },
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
                              staticClass: "col-md-6 mb-3",
                              attrs: {
                                id: "input-group-1",
                                label: "First Name",
                                "label-for": "input-1"
                              }
                            },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-rounded",
                                attrs: {
                                  id: "input-1",
                                  type: "text",
                                  required: "",
                                  placeholder: "First Name"
                                },
                                model: {
                                  value: _vm.form.fName,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "fName", $$v)
                                  },
                                  expression: "form.fName"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              staticClass: "col-md-6 mb-3",
                              attrs: {
                                id: "input-group-1",
                                label: "Last Name",
                                "label-for": "input-1"
                              }
                            },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-rounded",
                                attrs: {
                                  id: "input-1",
                                  type: "text",
                                  required: "",
                                  placeholder: "Last Name"
                                },
                                model: {
                                  value: _vm.form.lName,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "lName", $$v)
                                  },
                                  expression: "form.lName"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              staticClass: "col-md-6 mb-3",
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
                                staticClass: "form-control-rounded",
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
                              staticClass: "col-md-6 mb-3",
                              attrs: {
                                id: "input-group-1",
                                label: "Phone Number:",
                                "label-for": "input-1"
                              }
                            },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-rounded",
                                attrs: {
                                  id: "input-1",
                                  type: "text",
                                  required: "",
                                  placeholder: "put your phone number"
                                },
                                model: {
                                  value: _vm.form.phone,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "phone", $$v)
                                  },
                                  expression: "form.phone"
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
                                label: "Credit Card",
                                "label-for": "input-1"
                              }
                            },
                            [
                              _c("b-form-input", {
                                staticClass: "form-control-rounded",
                                attrs: {
                                  id: "input-1",
                                  type: "email",
                                  required: "",
                                  placeholder: "Enter Credit Card Number"
                                },
                                model: {
                                  value: _vm.form.credit,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "credit", $$v)
                                  },
                                  expression: "form.credit"
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
                                label: "Date",
                                "label-for": "input-1"
                              }
                            },
                            [
                              _c("v-date-picker", {
                                model: {
                                  value: _vm.date,
                                  callback: function($$v) {
                                    _vm.date = $$v
                                  },
                                  expression: "date"
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
                                label: "Select",
                                "label-for": "input-1"
                              }
                            },
                            [
                              _c(
                                "b-form-select",
                                {
                                  attrs: {
                                    value: null,
                                    options: {
                                      "1": "One",
                                      "2": "Two",
                                      "3": "Three"
                                    },
                                    id: "inline-form-custom-select-pref"
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
                                    [_vm._v("Choose...")]
                                  )
                                ]
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
                                "b-button",
                                {
                                  staticClass: "mt-3",
                                  attrs: { type: "submit", variant: "primary" }
                                },
                                [_vm._v("Submit")]
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
            { attrs: { md: "12 mb-30" } },
            [
              _c("b-card", { attrs: { title: "Switch" } }, [
                _c("label", { staticClass: "switch switch-primary mr-3" }, [
                  _c("span", [_vm._v("Primary")]),
                  _vm._v(" "),
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", { staticClass: "slider" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "switch switch-secondary mr-3" }, [
                  _c("span", [_vm._v("Secondary")]),
                  _vm._v(" "),
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", { staticClass: "slider" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "switch switch-success mr-3" }, [
                  _c("span", [_vm._v("Success")]),
                  _vm._v(" "),
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", { staticClass: "slider" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "switch switch-warning mr-3" }, [
                  _c("span", [_vm._v("Warning")]),
                  _vm._v(" "),
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", { staticClass: "slider" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "switch switch-danger mr-3" }, [
                  _c("span", [_vm._v("Danger")]),
                  _vm._v(" "),
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", { staticClass: "slider" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "switch switch-light mr-3" }, [
                  _c("span", [_vm._v("Light")]),
                  _vm._v(" "),
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", { staticClass: "slider" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "switch switch-dark mr-3" }, [
                  _c("span", [_vm._v("Dark")]),
                  _vm._v(" "),
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", { staticClass: "slider" })
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-30", attrs: { md: "6" } },
            [
              _c("b-card", { attrs: { title: "Checkbox Default" } }, [
                _c("label", { staticClass: "checkbox checkbox-primary" }, [
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Primary")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox checkbox-secondary" }, [
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Secondary")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox checkbox-success" }, [
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Success")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox checkbox-warning" }, [
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Warning")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox checkbox-danger" }, [
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Danger")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox checkbox-info" }, [
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Info")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox checkbox-dark" }, [
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Dark")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-30", attrs: { md: "6" } },
            [
              _c("b-card", { attrs: { title: "Checkbox Outline" } }, [
                _c(
                  "label",
                  { staticClass: "checkbox checkbox-outline-primary" },
                  [
                    _c("input", { attrs: { type: "checkbox", checked: "" } }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Primary")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "checkmark" })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "label",
                  { staticClass: "checkbox checkbox-outline-secondary" },
                  [
                    _c("input", { attrs: { type: "checkbox", checked: "" } }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Secondary")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "checkmark" })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "label",
                  { staticClass: "checkbox checkbox-outline-success" },
                  [
                    _c("input", { attrs: { type: "checkbox", checked: "" } }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Success")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "checkmark" })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "label",
                  { staticClass: "checkbox checkbox-outline-warning" },
                  [
                    _c("input", { attrs: { type: "checkbox", checked: "" } }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Warning")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "checkmark" })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "label",
                  { staticClass: "checkbox checkbox-outline-danger" },
                  [
                    _c("input", { attrs: { type: "checkbox", checked: "" } }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Danger")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "checkmark" })
                  ]
                ),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox checkbox-outline-info" }, [
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Info")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "checkbox checkbox-outline-dark" }, [
                  _c("input", { attrs: { type: "checkbox", checked: "" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Dark")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-30", attrs: { md: "6" } },
            [
              _c("b-card", { attrs: { title: "Radio Button" } }, [
                _c("label", { staticClass: "radio radio-primary" }, [
                  _c("input", { attrs: { type: "radio", name: "radio" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Primary")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "radio radio-secondary" }, [
                  _c("input", { attrs: { type: "radio", name: "radio" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Secondary")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "radio radio-success" }, [
                  _c("input", { attrs: { type: "radio", name: "radio" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Success")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "radio radio-warning" }, [
                  _c("input", { attrs: { type: "radio", name: "radio" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Warning")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "radio radio-danger" }, [
                  _c("input", { attrs: { type: "radio", name: "radio" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Danger")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "radio radio-light" }, [
                  _c("input", { attrs: { type: "radio", name: "radio" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Light")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "radio radio-dark" }, [
                  _c("input", { attrs: { type: "radio", name: "radio" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Dark")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-30", attrs: { md: "6" } },
            [
              _c("b-card", { attrs: { title: "Radio Button Outline" } }, [
                _c("label", { staticClass: "radio radio-outline-primary" }, [
                  _c("input", { attrs: { type: "radio", name: "radio" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Primary")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "radio radio-outline-secondary" }, [
                  _c("input", { attrs: { type: "radio", name: "radio" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Secondary")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "radio radio-outline-success" }, [
                  _c("input", { attrs: { type: "radio", name: "radio" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Success")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "radio radio-outline-warning" }, [
                  _c("input", { attrs: { type: "radio", name: "radio" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Warning")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "radio radio-outline-danger" }, [
                  _c("input", { attrs: { type: "radio", name: "radio" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Danger")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "radio radio-outline-light" }, [
                  _c("input", { attrs: { type: "radio", name: "radio" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Danger")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ]),
                _vm._v(" "),
                _c("label", { staticClass: "radio radio-outline-dark" }, [
                  _c("input", { attrs: { type: "radio", name: "radio" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Danger")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/form/basicForms.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/app/form/basicForms.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basicForms_vue_vue_type_template_id_395f6aaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicForms.vue?vue&type=template&id=395f6aaf& */ "./resources/js/views/app/form/basicForms.vue?vue&type=template&id=395f6aaf&");
/* harmony import */ var _basicForms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basicForms.vue?vue&type=script&lang=js& */ "./resources/js/views/app/form/basicForms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _basicForms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _basicForms_vue_vue_type_template_id_395f6aaf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _basicForms_vue_vue_type_template_id_395f6aaf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/form/basicForms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/form/basicForms.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/app/form/basicForms.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basicForms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./basicForms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/basicForms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basicForms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/form/basicForms.vue?vue&type=template&id=395f6aaf&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/form/basicForms.vue?vue&type=template&id=395f6aaf& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basicForms_vue_vue_type_template_id_395f6aaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./basicForms.vue?vue&type=template&id=395f6aaf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/basicForms.vue?vue&type=template&id=395f6aaf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basicForms_vue_vue_type_template_id_395f6aaf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basicForms_vue_vue_type_template_id_395f6aaf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);