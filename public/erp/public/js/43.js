(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/vue-good-table.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/vue-good-table.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Task Manager"
  },
  data: function data() {
    return {
      columns: [{
        label: "Name",
        field: "name"
      }, {
        label: "Span",
        field: "span",
        html: true
      }, {
        label: "Created On",
        field: "createdAt",
        type: "date",
        dateInputFormat: "yyyy-mm-dd",
        dateOutputFormat: "MMM Do yy"
      }, {
        label: "Percent",
        field: "score",
        type: "percentage"
      }, {
        label: "Button",
        field: "button",
        html: true,
        tdClass: "text-right",
        thClass: "text-right"
      }],
      rows: [{
        id: 1,
        name: "John",
        span: '<span class="badge badge-primary">Primary</span>',
        createdAt: "2019-10-29",
        score: 0.03343
      }, {
        id: 2,
        name: "Jane",
        span: '<span class="badge badge-danger">Primary</span>',
        createdAt: "2011-10-31",
        score: 0.03343
      }, {
        id: 3,
        name: "Susan",
        span: '<span class="badge badge-warning">Primary</span>',
        createdAt: "2011-10-30",
        score: 0.03343
      }, {
        id: 4,
        name: "Chris",
        span: '<span class="badge badge-primary">Primary</span>',
        createdAt: "2011-10-11",
        score: 0.03343
      }, {
        id: 5,
        name: "Dan",
        span: '<span class="badge badge-danger">Primary</span>',
        createdAt: "2011-10-21",
        score: 0.03343
      }, {
        id: 6,
        name: "John",
        span: '<span class="badge badge-success">success</span>',
        createdAt: "2011-10-31",
        score: 0.03343
      }, {
        id: 1,
        name: "John",
        span: '<span class="badge badge-warning">Warning</span>',
        createdAt: "2019-10-29",
        score: 0.03343
      }, {
        id: 2,
        name: "Jane",
        span: '<span class="badge badge-info">Info</span>',
        createdAt: "2011-10-31",
        score: 0.03343
      }, {
        id: 3,
        name: "Susan",
        span: '<span class="badge badge-dark">Dark</span>',
        createdAt: "2011-10-30",
        score: 0.03343
      }, {
        id: 4,
        name: "Chris",
        span: '<span class="badge badge-warning">Warning</span>',
        createdAt: "2011-10-11",
        score: 0.03343
      }, {
        id: 5,
        name: "Dan",
        span: '<span class="badge badge-info">Info</span>',
        createdAt: "2011-10-21",
        score: 0.03343
      }, {
        id: 6,
        name: "John",
        span: '<span class="badge badge-primary">Primary</span>',
        createdAt: "2011-10-31",
        score: 0.03343
      }]
    };
  },
  methods: {
    addFile: function addFile() {
      console.log("hello");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/vue-good-table.vue?vue&type=template&id=d5c97bf6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/vue-good-table.vue?vue&type=template&id=d5c97bf6& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        attrs: { page: "Vue Good Table", folder: "Datatables" }
      }),
      _vm._v(" "),
      _c(
        "vue-good-table",
        {
          attrs: {
            columns: _vm.columns,
            "line-numbers": true,
            "search-options": {
              enabled: true,
              placeholder: "Search this table"
            },
            "pagination-options": {
              enabled: true,
              mode: "records"
            },
            styleClass: "tableOne vgt-table",
            selectOptions: {
              enabled: true,
              selectionInfoClass: "table-alert__box"
            },
            rows: _vm.rows
          },
          scopedSlots: _vm._u([
            {
              key: "table-row",
              fn: function(props) {
                return [
                  props.column.field == "button"
                    ? _c("span", [
                        _c("a", { attrs: { href: "" } }, [
                          _c("i", {
                            staticClass: "i-Eraser-2 text-25 text-success mr-2"
                          }),
                          _vm._v("\n          " + _vm._s(props.row.button))
                        ]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "" } }, [
                          _c("i", {
                            staticClass: "i-Close-Window text-25 text-danger"
                          }),
                          _vm._v("\n          " + _vm._s(props.row.button))
                        ])
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
                { staticClass: "btn-rounded", attrs: { variant: "primary" } },
                [_vm._v("\n        Add Button\n      ")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/apps/vue-good-table.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/app/apps/vue-good-table.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_good_table_vue_vue_type_template_id_d5c97bf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-good-table.vue?vue&type=template&id=d5c97bf6& */ "./resources/js/views/app/apps/vue-good-table.vue?vue&type=template&id=d5c97bf6&");
/* harmony import */ var _vue_good_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-good-table.vue?vue&type=script&lang=js& */ "./resources/js/views/app/apps/vue-good-table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vue_good_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vue_good_table_vue_vue_type_template_id_d5c97bf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vue_good_table_vue_vue_type_template_id_d5c97bf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/apps/vue-good-table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/apps/vue-good-table.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/app/apps/vue-good-table.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_good_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vue-good-table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/vue-good-table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_good_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/apps/vue-good-table.vue?vue&type=template&id=d5c97bf6&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/app/apps/vue-good-table.vue?vue&type=template&id=d5c97bf6& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_good_table_vue_vue_type_template_id_d5c97bf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vue-good-table.vue?vue&type=template&id=d5c97bf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/vue-good-table.vue?vue&type=template&id=d5c97bf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_good_table_vue_vue_type_template_id_d5c97bf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_good_table_vue_vue_type_template_id_d5c97bf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);