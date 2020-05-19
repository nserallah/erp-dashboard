(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/printInvoice.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/printInvoice.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Print Invoice"
  },
  data: function data() {
    var _ref;

    return _ref = {
      fields: ["index", "itemName", "unitPrice", "unit", "cost", "action"],
      items: [{
        itemName: "",
        unitPrice: "",
        unit: "",
        cost: 0
      }]
    }, _defineProperty(_ref, "fields", ["index", "itemName", "unitPrice", "unit", "cost"]), _defineProperty(_ref, "items", [{
      age: 40,
      first_name: "Dickerson",
      last_name: "Macdonald"
    }, {
      age: 40,
      first_name: "Dickerson",
      last_name: "Macdonald"
    }]), _ref;
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getNewInvoice"]),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["addInvoice", "editInvoice"]), {
    getInvoice: function getInvoice() {},
    addInvoice: function addInvoice() {
      this.addInvoice();
    },
    backInvoice: function backInvoice() {
      this.$router.push("/app/apps/invoice");
    },
    print: function print() {
      window.print();
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/printInvoice.vue?vue&type=template&id=3c778e40&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/printInvoice.vue?vue&type=template&id=3c778e40& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _c("b-card", [
        _c(
          "div",
          { staticClass: "d-sm-flex mb-5" },
          [
            _c("span", { staticClass: "m-auto" }),
            _vm._v(" "),
            _c(
              "b-button",
              {
                attrs: { variant: "outline-danger mr-3 mb-3" },
                on: { click: _vm.backInvoice }
              },
              [_vm._v("Back To Invoices")]
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                attrs: { variant: "outline-danger mr-3 mb-3" },
                on: { click: _vm.editInvoice }
              },
              [_vm._v("Edit Invoice")]
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                attrs: { variant: "primary mr-3 mb-3" },
                on: { click: _vm.print }
              },
              [_vm._v("print Invoice")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "printArea",
            staticClass: "print-area",
            attrs: { id: "print-area" }
          },
          [
            _c(
              "b-row",
              [
                _c("b-col", { attrs: { md: "6" } }, [
                  _c("h4", { staticClass: "font-weight-bold" }, [
                    _vm._v("Order Info")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.getNewInvoice.invoiceId))])
                ]),
                _vm._v(" "),
                _c(
                  "b-col",
                  { staticClass: "text-sm-right", attrs: { md: "6" } },
                  [
                    _c("p", [
                      _c("strong", [_vm._v("Order status: ")]),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(_vm.getNewInvoice.status))])
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("strong", [
                        _vm._v("\n              Order date:\n            ")
                      ]),
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.getNewInvoice.date) +
                          "\n          "
                      )
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mt-3 mb-30 border-top" }),
            _vm._v(" "),
            _c(
              "b-row",
              { staticClass: "mb-5" },
              [
                _c(
                  "b-col",
                  { staticClass: "mb-3 mb-sm-0", attrs: { md: "6" } },
                  [
                    _c("h5", { staticClass: "font-weight-bold" }, [
                      _vm._v("Bill From")
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.getNewInvoice.billFrom))]),
                    _vm._v(" "),
                    _c("span", { staticStyle: { "white-space": "pre-line" } }, [
                      _vm._v(
                        _vm._s(_vm.getNewInvoice.billFromAddress) +
                          "\n          "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { staticClass: "text-sm-right", attrs: { md: "6" } },
                  [
                    _c("h5", { staticClass: "font-weight-bold" }, [
                      _vm._v("Bill To")
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.getNewInvoice.billTo))]),
                    _vm._v(" "),
                    _c("span", { staticStyle: { "white-space": "pre-line" } }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.getNewInvoice.billToAddress) +
                          "\n          "
                      )
                    ])
                  ]
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
                  { staticClass: "table-responsive", attrs: { md: "12" } },
                  [
                    _c(
                      "b-table",
                      {
                        attrs: {
                          hover: "",
                          items: _vm.items,
                          fields: _vm.fields
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "index",
                            fn: function(data) {
                              return [
                                _c("p", { staticClass: "font-weight-bold" }, [
                                  _vm._v(_vm._s(data.index + 1))
                                ])
                              ]
                            }
                          },
                          {
                            key: "itemName",
                            fn: function(data) {
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(data.item.first_name) +
                                    "\n            "
                                )
                              ]
                            }
                          },
                          {
                            key: "unitPrice",
                            fn: function(data) {
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(data.item.first_name) +
                                    "\n            "
                                )
                              ]
                            }
                          },
                          {
                            key: "unit",
                            fn: function(data) {
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(data.item.first_name) +
                                    "\n            "
                                )
                              ]
                            }
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _vm._v(" "),
                        _vm._v(" "),
                        _vm._v(" "),
                        _c("template", { slot: "cost" }, [
                          _vm._v("\n              0\n            ")
                        ])
                      ],
                      2
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-col", { attrs: { md: "12" } }, [
                  _c("div", { staticClass: "invoice-summary float-right" }, [
                    _c("p", [
                      _vm._v("\n              Sub total:\n              "),
                      _c("span", [_vm._v("44")])
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("\n              Vat:\n              "),
                      _c("span", [_vm._v(" 5.28 ")])
                    ]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "font-weight-bold" }, [
                      _vm._v("\n              Grand Total:\n              "),
                      _c("span", [_vm._v(" 49.28 ")])
                    ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/apps/printInvoice.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/app/apps/printInvoice.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printInvoice_vue_vue_type_template_id_3c778e40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printInvoice.vue?vue&type=template&id=3c778e40& */ "./resources/js/views/app/apps/printInvoice.vue?vue&type=template&id=3c778e40&");
/* harmony import */ var _printInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printInvoice.vue?vue&type=script&lang=js& */ "./resources/js/views/app/apps/printInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _printInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _printInvoice_vue_vue_type_template_id_3c778e40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _printInvoice_vue_vue_type_template_id_3c778e40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/apps/printInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/apps/printInvoice.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/app/apps/printInvoice.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./printInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/printInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/apps/printInvoice.vue?vue&type=template&id=3c778e40&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/app/apps/printInvoice.vue?vue&type=template&id=3c778e40& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_template_id_3c778e40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./printInvoice.vue?vue&type=template&id=3c778e40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/printInvoice.vue?vue&type=template&id=3c778e40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_template_id_3c778e40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_printInvoice_vue_vue_type_template_id_3c778e40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);