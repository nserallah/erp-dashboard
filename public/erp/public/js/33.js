(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/contact-list.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/contact-list.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Task Manager"
  },
  data: function data() {
    return {
      foods: ["apple", "orrange"],
      columns: [{
        label: "Name",
        field: "name"
      }, {
        label: "Email",
        field: "email"
      }, {
        label: "Phone",
        field: "phone"
      }, {
        label: "Span",
        field: "span",
        html: true
      }, {
        label: "Age",
        field: "age"
      }, {
        label: "Joining Date",
        field: "join"
      }, {
        label: "Salary",
        field: "salary"
      }, {
        label: "Button",
        field: "button",
        html: true,
        tdClass: "text-right",
        thClass: "text-right"
      }],
      rows: [{
        id: 1,
        avatar: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
        name: "John",
        email: "jhonwick_23@gmail.com",
        phone: "+88012378478",
        span: '<span class="badge badge-primary">Primary</span>',
        join: "April 25, 2019",
        age: "35 ",
        salary: "$320,800"
      }, {
        id: 2,
        avatar: __webpack_require__(/*! @/assets/images/faces/3.jpg */ "./resources/js/assets/images/faces/3.jpg"),
        name: "Jane",
        email: "jameswann@gmail.com",
        phone: "+88012378478",
        span: '<span class="badge badge-danger">Primary</span>',
        join: "April 34, 2019",
        age: "31",
        salary: "$320,800"
      }, {
        id: 3,
        avatar: __webpack_require__(/*! @/assets/images/faces/2.jpg */ "./resources/js/assets/images/faces/2.jpg"),
        name: "Susan",
        email: "jameswann@gmail.com",
        phone: "+88012378478",
        span: '<span class="badge badge-warning">Primary</span>',
        join: "April 34, 2019",
        age: "10",
        salary: "$320,800"
      }, {
        id: 4,
        avatar: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
        name: "Chris",
        email: "jhonwick_23@gmail.com",
        phone: "+88012378478",
        span: '<span class="badge badge-primary">Primary</span>',
        join: "April 25, 2019",
        age: "20",
        salary: "$320,800"
      }, {
        id: 5,
        avatar: __webpack_require__(/*! @/assets/images/faces/4.jpg */ "./resources/js/assets/images/faces/4.jpg"),
        name: "Dan",
        email: "jhonwick_23@gmail.com",
        phone: "+88012378478",
        span: '<span class="badge badge-danger">Primary</span>',
        join: "April 25, 2019",
        age: "21",
        salary: "$320,800"
      }, {
        id: 6,
        avatar: __webpack_require__(/*! @/assets/images/faces/5.jpg */ "./resources/js/assets/images/faces/5.jpg"),
        name: "John",
        email: "jameswann@gmail.com",
        phone: "+88012378478",
        span: '<span class="badge badge-success">success</span>',
        join: "April 25, 2019",
        age: "31",
        salary: "$320,800"
      }, {
        id: 1,
        avatar: __webpack_require__(/*! @/assets/images/faces/4.jpg */ "./resources/js/assets/images/faces/4.jpg"),
        name: "John",
        email: "dan_brown@gmail.com",
        phone: "+88012378478",
        span: '<span class="badge badge-warning">Warning</span>',
        join: "April 25, 2019",
        age: "35 ",
        salary: "$320,800"
      }, {
        id: 2,
        avatar: __webpack_require__(/*! @/assets/images/faces/3.jpg */ "./resources/js/assets/images/faces/3.jpg"),
        name: "Jane",
        email: "jameswann@gmail.com",
        phone: "+88012378478",
        span: '<span class="badge badge-info">Info</span>',
        join: "April 25, 2019",
        age: "11",
        salary: "$320,800"
      }, {
        id: 3,
        avatar: __webpack_require__(/*! @/assets/images/faces/2.jpg */ "./resources/js/assets/images/faces/2.jpg"),
        name: "Susan",
        email: "janeswann@gmail.com",
        phone: "+88012378478",
        span: '<span class="badge badge-dark">Dark</span>',
        join: "April 25, 2019",
        age: "2011-10-30",
        salary: "$320,800"
      }, {
        id: 4,
        avatar: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
        name: "Chris",
        email: "jaasdameswann@gmail.com",
        phone: "+88012378478",
        span: '<span class="badge badge-warning">Warning</span>',
        join: "April 25, 2019",
        age: "20",
        salary: "$320,800"
      }, {
        id: 5,
        avatar: __webpack_require__(/*! @/assets/images/faces/5.jpg */ "./resources/js/assets/images/faces/5.jpg"),
        name: "Dan",
        email: "doomwaytne@gmail.com",
        phone: "+88012378478",
        span: '<span class="badge badge-info">Info</span>',
        join: "April 25, 2019",
        age: "21",
        salary: "$320,800"
      }, {
        id: 6,
        avatar: __webpack_require__(/*! @/assets/images/faces/3.jpg */ "./resources/js/assets/images/faces/3.jpg"),
        name: "John",
        email: "sidsacc@gmail.com",
        phone: "+88012378478",
        span: '<span class="badge badge-primary">Primary</span>',
        join: "April 25, 2019",
        age: "31",
        salary: "$320,800"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/contact-list.vue?vue&type=template&id=43ee11cb&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/contact-list.vue?vue&type=template&id=43ee11cb& ***!
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
      _c("breadcumb", { attrs: { page: "Contact List", folder: "Apps" } }),
      _vm._v(" "),
      _c(
        "b-card",
        [
          _c(
            "vue-good-table",
            {
              attrs: {
                columns: _vm.columns,
                "line-numbers": false,
                "search-options": {
                  enabled: true,
                  placeholder: "Search this table"
                },
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
                      props.column.field == "button"
                        ? _c("span", [
                            _c("a", { attrs: { href: "" } }, [
                              _c("i", {
                                staticClass:
                                  "i-Eraser-2 text-25 text-success mr-2"
                              }),
                              _vm._v(
                                "\n            " + _vm._s(props.row.button)
                              )
                            ]),
                            _vm._v(" "),
                            _c("a", { attrs: { href: "" } }, [
                              _c("i", {
                                staticClass:
                                  "i-Close-Window text-25 text-danger"
                              }),
                              _vm._v(
                                "\n            " + _vm._s(props.row.button)
                              )
                            ])
                          ])
                        : props.column.field == "name"
                        ? _c("span", [
                            _c("a", { attrs: { href: "" } }, [
                              _c(
                                "div",
                                { staticClass: "ul-widget-app__profile-pic" },
                                [
                                  _c("img", {
                                    staticClass:
                                      "profile-picture avatar-sm mb-2 rounded-circle img-fluid",
                                    attrs: { src: props.row.avatar, alt: "" }
                                  }),
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(props.row.name) +
                                      "\n            "
                                  )
                                ]
                              )
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
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-1",
                          modifiers: { "modal-1": true }
                        }
                      ],
                      staticClass: "btn-rounded d-none d-sm-block",
                      attrs: { variant: "primary" }
                    },
                    [
                      _c("i", { staticClass: "i-Add-User text-white mr-2" }),
                      _vm._v("Add Contact\n        ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    { attrs: { id: "modal-1", title: "BootstrapVue" } },
                    [
                      _c(
                        "b-form",
                        [
                          _c(
                            "b-form-group",
                            {
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
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                id: "input-group-2",
                                label: "Your Name:",
                                "label-for": "input-2"
                              }
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "input-2",
                                  required: "",
                                  placeholder: "Enter name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                id: "input-group-3",
                                label: "Food:",
                                "label-for": "input-3"
                              }
                            },
                            [
                              _c("b-form-select", {
                                attrs: {
                                  id: "input-3",
                                  options: _vm.foods,
                                  required: ""
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-form-group",
                            { attrs: { id: "input-group-4" } },
                            [
                              _c(
                                "b-form-checkbox-group",
                                { attrs: { id: "checkboxes-4" } },
                                [
                                  _c(
                                    "b-form-checkbox",
                                    { attrs: { value: "me" } },
                                    [_vm._v("Check me out")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-checkbox",
                                    { attrs: { value: "that" } },
                                    [_vm._v("Check that out")]
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
            ]
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

/***/ "./resources/js/views/app/apps/contact-list.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/app/apps/contact-list.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_list_vue_vue_type_template_id_43ee11cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-list.vue?vue&type=template&id=43ee11cb& */ "./resources/js/views/app/apps/contact-list.vue?vue&type=template&id=43ee11cb&");
/* harmony import */ var _contact_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-list.vue?vue&type=script&lang=js& */ "./resources/js/views/app/apps/contact-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _contact_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contact_list_vue_vue_type_template_id_43ee11cb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _contact_list_vue_vue_type_template_id_43ee11cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/apps/contact-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/apps/contact-list.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/app/apps/contact-list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./contact-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/contact-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/apps/contact-list.vue?vue&type=template&id=43ee11cb&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/app/apps/contact-list.vue?vue&type=template&id=43ee11cb& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_template_id_43ee11cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./contact-list.vue?vue&type=template&id=43ee11cb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/contact-list.vue?vue&type=template&id=43ee11cb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_template_id_43ee11cb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_template_id_43ee11cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);