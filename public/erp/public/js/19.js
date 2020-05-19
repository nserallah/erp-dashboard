(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/datatables/paging.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/datatables/paging.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Paging Table"
  },
  data: function data() {
    return {
      columns: [{
        label: "Thumbnail ",
        field: "img",
        width: "150px",
        thClass: "gull-th-class"
      }, {
        label: "Title",
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
      }],
      rows: [{
        id: 1,
        img: __webpack_require__(/*! @/assets/images/products/speaker-1.jpg */ "./resources/js/assets/images/products/speaker-1.jpg"),
        span: "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
        createdAt: "2018-10-29",
        score: 0.03343
      }, {
        id: 2,
        img: __webpack_require__(/*! @/assets/images/products/speaker-2.jpg */ "./resources/js/assets/images/products/speaker-2.jpg"),
        span: "Portable Speaker with HD Sound",
        createdAt: "2011-10-31",
        score: 0.03343
      }, {
        id: 3,
        img: __webpack_require__(/*! @/assets/images/products/headphone-2.jpg */ "./resources/js/assets/images/products/headphone-2.jpg"),
        span: "Lightweight On-Ear Headphones - Black",
        createdAt: "2011-10-30",
        score: 0.03343
      }, {
        id: 4,
        img: __webpack_require__(/*! @/assets/images/products/watch-1.jpg */ "./resources/js/assets/images/products/watch-1.jpg"),
        span: "Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)",
        createdAt: "2011-10-11",
        score: 0.03343
      }, {
        id: 5,
        img: __webpack_require__(/*! @/assets/images/products/watch-1.jpg */ "./resources/js/assets/images/products/watch-1.jpg"),
        span: "Automatic-self-wind mens Watch 5102PR-001",
        createdAt: "2011-10-21",
        score: 0.03343
      }, {
        id: 6,
        img: __webpack_require__(/*! @/assets/images/products/headphone-3.jpg */ "./resources/js/assets/images/products/headphone-3.jpg"),
        span: "On-Ear Headphones - Black",
        createdAt: "2011-10-31",
        score: 0.03343
      }, {
        id: 1,
        img: __webpack_require__(/*! @/assets/images/products/headphone-4.jpg */ "./resources/js/assets/images/products/headphone-4.jpg"),
        span: "In-Ear Headphone",
        createdAt: "2018-10-29",
        score: 0.03343
      }, {
        id: 2,
        img: __webpack_require__(/*! @/assets/images/products/iphone-2.jpg */ "./resources/js/assets/images/products/iphone-2.jpg"),
        span: "Duis exercitation nostrud anim",
        createdAt: "2011-10-31",
        score: 0.03343
      }, {
        id: 3,
        img: __webpack_require__(/*! @/assets/images/products//headphone-2.jpg */ "./resources/js/assets/images/products/headphone-2.jpg"),
        span: "Doasdlor eu nostrud excepteur",
        createdAt: "2011-10-30",
        score: 0.03343
      }, {
        id: 4,
        img: __webpack_require__(/*! @/assets/images/products/headphone-1.jpg */ "./resources/js/assets/images/products/headphone-1.jpg"),
        span: "Over-Ear Headphones, Stereo Lightweight Adjustable Wired Headset",
        createdAt: "2011-10-11",
        score: 0.03343
      }, {
        id: 5,
        img: __webpack_require__(/*! @/assets/images/products/watch-1.jpg */ "./resources/js/assets/images/products/watch-1.jpg"),
        span: "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
        createdAt: "2011-10-21",
        score: 0.03343
      }, {
        id: 6,
        img: __webpack_require__(/*! @/assets/images/products/headphone-2.jpg */ "./resources/js/assets/images/products/headphone-2.jpg"),
        span: "Portable Speaker with HD Sound",
        createdAt: "2011-10-31",
        score: 0.03343
      }]
    };
  },
  methods: {
    addFile: function addFile() {// console.log('hello')
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/datatables/paging.vue?vue&type=template&id=70e1902f&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/datatables/paging.vue?vue&type=template&id=70e1902f& ***!
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
      _c("breadcumb", { attrs: { page: "Paging", folder: "Datatables" } }),
      _vm._v(" "),
      _c(
        "b-card",
        { staticClass: "wrapper" },
        [
          _c("vue-good-table", {
            attrs: {
              columns: _vm.columns,
              "pagination-options": {
                enabled: true,
                mode: "records"
              },
              styleClass: "tableOne vgt-table",
              rows: _vm.rows
            },
            scopedSlots: _vm._u([
              {
                key: "table-row",
                fn: function(props) {
                  return [
                    props.column.field == "img"
                      ? _c("span", [
                          _c("img", {
                            staticClass: "rounded",
                            staticStyle: { width: "50px", height: "50px" },
                            attrs: { src: props.row.img, alt: "corrupted img" }
                          })
                        ])
                      : _vm._e()
                  ]
                }
              }
            ])
          })
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

/***/ "./resources/js/assets/images/products/headphone-3.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/assets/images/products/headphone-3.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/headphone-3.jpg?17c2548a4c199ad4d4252b019c523632";

/***/ }),

/***/ "./resources/js/assets/images/products/headphone-4.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/assets/images/products/headphone-4.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/headphone-4.jpg?a25c0e7473083057e4c26391bbaa0e48";

/***/ }),

/***/ "./resources/js/assets/images/products/iphone-2.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/assets/images/products/iphone-2.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/iphone-2.jpg?66f4b2ff7908b734493c5d36928a9e41";

/***/ }),

/***/ "./resources/js/assets/images/products/watch-1.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/assets/images/products/watch-1.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/watch-1.jpg?b7e284147384c24e2d9db3eb4b36c4c3";

/***/ }),

/***/ "./resources/js/views/app/datatables/paging.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/app/datatables/paging.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paging_vue_vue_type_template_id_70e1902f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paging.vue?vue&type=template&id=70e1902f& */ "./resources/js/views/app/datatables/paging.vue?vue&type=template&id=70e1902f&");
/* harmony import */ var _paging_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paging.vue?vue&type=script&lang=js& */ "./resources/js/views/app/datatables/paging.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _paging_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paging_vue_vue_type_template_id_70e1902f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _paging_vue_vue_type_template_id_70e1902f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/datatables/paging.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/datatables/paging.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/app/datatables/paging.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paging_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./paging.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/datatables/paging.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paging_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/datatables/paging.vue?vue&type=template&id=70e1902f&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/app/datatables/paging.vue?vue&type=template&id=70e1902f& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paging_vue_vue_type_template_id_70e1902f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./paging.vue?vue&type=template&id=70e1902f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/datatables/paging.vue?vue&type=template&id=70e1902f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paging_vue_vue_type_template_id_70e1902f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paging_vue_vue_type_template_id_70e1902f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);