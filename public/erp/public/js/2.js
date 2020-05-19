(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/invoice.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/invoice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
 // const STORAGE_KEY = 'invoice';

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return _defineProperty({
      input: [{
        name: ""
      }],
      columns: [{
        label: "Bill From",
        field: "billFrom"
      }, {
        label: "Bill To",
        field: "billTo"
      }, {
        label: "Status",
        field: "status",
        html: true
      }, {
        label: "Button",
        field: "button",
        html: true,
        tdClass: "text-right",
        thClass: "text-right"
      }],
      newTodo: ""
    }, "input", [{
      name: ""
    }]);
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["invoiceList"]),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["editInvoice", "removeInvoice", "viewInvoice"]), {
    editInvoiceData: function editInvoiceData(data) {
      this.editInvoice(data);
      this.$router.push("/app/apps/edit-invoice");
    },
    viewInvoicePage: function viewInvoicePage(data) {
      this.viewInvoice(data);
      this.$router.push("/app/apps/printInvoice");
    },
    createInvoice: function createInvoice() {
      this.$router.push("/app/apps/createInvoice");
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/invoice.vue?vue&type=template&id=5fcbf7bd&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/invoice.vue?vue&type=template&id=5fcbf7bd& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "main-content" },
      [
        _c("breadcumb", { attrs: { page: "Invoice", folder: "Apps" } }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "wrapper" },
          [
            _c(
              "vue-good-table",
              {
                attrs: {
                  columns: _vm.columns,
                  "line-numbers": true,
                  "search-options": {
                    enabled: true,
                    placeholder: "Search this table",
                    selectionInfoClass: " flex-column flex-sm-row"
                  },
                  "pagination-options": {
                    enabled: true,
                    mode: "records"
                  },
                  styleClass: "tableOne vgt-table",
                  selectOptions: {
                    enabled: false,
                    selectionInfoClass: "table-alert__box"
                  },
                  rows: _vm.invoiceList
                },
                scopedSlots: _vm._u([
                  {
                    key: "table-row",
                    fn: function(props) {
                      return [
                        props.column.field == "button"
                          ? _c("span", [
                              _c(
                                "a",
                                {
                                  directives: [
                                    {
                                      name: "b-tooltip",
                                      rawName: "v-b-tooltip.hover",
                                      modifiers: { hover: true }
                                    }
                                  ],
                                  staticClass: "o-hidden d-inline-block",
                                  attrs: { title: "Edit" },
                                  on: {
                                    click: function($event) {
                                      return _vm.editInvoiceData(props.row)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "i-Eraser-2 text-25 text-info mr-2"
                                  }),
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(props.row.button)
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  directives: [
                                    {
                                      name: "b-tooltip",
                                      rawName: "v-b-tooltip.hover",
                                      modifiers: { hover: true }
                                    }
                                  ],
                                  staticClass: "o-hidden d-inline-block",
                                  attrs: { title: "View" },
                                  on: {
                                    click: function($event) {
                                      return _vm.viewInvoicePage(props.row)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "i-Edit text-25 text-success mr-2"
                                  }),
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(props.row.button)
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  directives: [
                                    {
                                      name: "b-tooltip",
                                      rawName: "v-b-tooltip.hover",
                                      modifiers: { hover: true }
                                    }
                                  ],
                                  staticClass: "o-hidden d-inline-block",
                                  attrs: { title: "Delete" },
                                  on: {
                                    click: function($event) {
                                      return _vm.removeInvoice(
                                        props.row.invoiceId
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "i-Close-Window text-25 text-danger"
                                  }),
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(props.row.button)
                                  )
                                ]
                              )
                            ])
                          : _vm._e()
                      ]
                    }
                  }
                ])
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "mb-3",
                    attrs: { slot: "table-actions" },
                    slot: "table-actions"
                  },
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn-rounded d-sm-block d-none",
                        attrs: { variant: "primary" },
                        on: { click: _vm.createInvoice }
                      },
                      [_vm._v("\n            Create New Invoice\n          ")]
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/apps/invoice.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/app/apps/invoice.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invoice_vue_vue_type_template_id_5fcbf7bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.vue?vue&type=template&id=5fcbf7bd& */ "./resources/js/views/app/apps/invoice.vue?vue&type=template&id=5fcbf7bd&");
/* harmony import */ var _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.vue?vue&type=script&lang=js& */ "./resources/js/views/app/apps/invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _invoice_vue_vue_type_template_id_5fcbf7bd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _invoice_vue_vue_type_template_id_5fcbf7bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/apps/invoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/apps/invoice.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/app/apps/invoice.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/apps/invoice.vue?vue&type=template&id=5fcbf7bd&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/app/apps/invoice.vue?vue&type=template&id=5fcbf7bd& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_5fcbf7bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./invoice.vue?vue&type=template&id=5fcbf7bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/invoice.vue?vue&type=template&id=5fcbf7bd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_5fcbf7bd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_5fcbf7bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);