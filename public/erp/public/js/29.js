(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/customizer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/customizer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      isOpen: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getThemeMode", "getcompactLeftSideBarBgColor"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["changeThemeRtl", "changeThemeLayout", "changeThemeMode", "changecompactLeftSideBarBgColor"]), {
    changeLang: function changeLang(lang) {
      console.log(lang);
      this.$i18n.locale = lang;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/customizer.vue?vue&type=template&id=46287ef8&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/customizer.vue?vue&type=template&id=46287ef8&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      { staticClass: "customizer", class: { open: _vm.isOpen } },
      [
        _c(
          "div",
          {
            staticClass: "handle",
            on: {
              click: function($event) {
                _vm.isOpen = !_vm.isOpen
              }
            }
          },
          [_c("i", { staticClass: "i-Gear spin" })]
        ),
        _vm._v(" "),
        _c(
          "vue-perfect-scrollbar",
          {
            staticClass: "customizer-body ps rtl-ps-none",
            attrs: {
              settings: { suppressScrollX: true, wheelPropagation: false }
            }
          },
          [
            _c("div", {}, [
              _c(
                "div",
                { staticClass: "card-header", attrs: { id: "headingOne" } },
                [
                  _c("p", { staticClass: "mb-0" }, [
                    _vm._v("\n            Sidebar Layout\n          ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "layouts" }, [
                  _c(
                    "div",
                    {
                      staticClass: "layout-box",
                      class: {
                        active: _vm.getThemeMode.layout == "compact-sidebar"
                      },
                      on: {
                        click: function($event) {
                          return _vm.changeThemeLayout("compact-sidebar")
                        }
                      }
                    },
                    [
                      _c("img", {
                        attrs: {
                          alt: "",
                          src: __webpack_require__(/*! @/assets/images/screenshots/02_preview.png */ "./resources/js/assets/images/screenshots/02_preview.png")
                        }
                      }),
                      _c("i", { staticClass: "i-Eye" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "layout-box ",
                      class: {
                        active: _vm.getThemeMode.layout == "large-sidebar"
                      },
                      on: {
                        click: function($event) {
                          return _vm.changeThemeLayout("large-sidebar")
                        }
                      }
                    },
                    [
                      _c("img", {
                        attrs: {
                          alt: "",
                          src: __webpack_require__(/*! @/assets/images/screenshots/04_preview.png */ "./resources/js/assets/images/screenshots/04_preview.png")
                        }
                      }),
                      _c("i", { staticClass: "i-Eye" })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-center pt-3" }, [
                  _vm._v("More layouts coming...")
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.getThemeMode.layout == "compact-sidebar"
              ? _c("div", {}, [
                  _c(
                    "div",
                    { staticClass: "card-header", attrs: { id: "headingOne" } },
                    [
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v("\n            Sidebar Colors\n          ")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "colors sidebar-colors" }, [
                      _c(
                        "a",
                        {
                          staticClass: "color gradient-purple-indigo",
                          class: {
                            active:
                              _vm.getcompactLeftSideBarBgColor ==
                              "sidebar-gradient-purple-indigo"
                          },
                          on: {
                            click: function($event) {
                              return _vm.changecompactLeftSideBarBgColor(
                                "sidebar-gradient-purple-indigo"
                              )
                            }
                          }
                        },
                        [_c("i", { staticClass: "i-Eye" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "color gradient-black-blue",
                          class: {
                            active:
                              _vm.getcompactLeftSideBarBgColor ==
                              "sidebar-gradient-black-blue"
                          },
                          on: {
                            click: function($event) {
                              return _vm.changecompactLeftSideBarBgColor(
                                "sidebar-gradient-black-blue"
                              )
                            }
                          }
                        },
                        [_c("i", { staticClass: "i-Eye" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "color gradient-black-gray",
                          class: {
                            active:
                              _vm.getcompactLeftSideBarBgColor ==
                              "sidebar-gradient-black-gray"
                          },
                          on: {
                            click: function($event) {
                              return _vm.changecompactLeftSideBarBgColor(
                                "sidebar-gradient-black-gray"
                              )
                            }
                          }
                        },
                        [_c("i", { staticClass: "i-Eye" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "color gradient-steel-gray",
                          class: {
                            active:
                              _vm.getcompactLeftSideBarBgColor ==
                              "sidebar-gradient-steel-gray"
                          },
                          on: {
                            click: function($event) {
                              return _vm.changecompactLeftSideBarBgColor(
                                "sidebar-gradient-steel-gray"
                              )
                            }
                          }
                        },
                        [_c("i", { staticClass: "i-Eye" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "color dark-purple",
                          class: {
                            active:
                              _vm.getcompactLeftSideBarBgColor ==
                              "sidebar-dark-purple"
                          },
                          on: {
                            click: function($event) {
                              return _vm.changecompactLeftSideBarBgColor(
                                "sidebar-dark-purple"
                              )
                            }
                          }
                        },
                        [_c("i", { staticClass: "i-Eye" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "color slate-gray",
                          class: {
                            active:
                              _vm.getcompactLeftSideBarBgColor ==
                              "sidebar-slate-gray"
                          },
                          on: {
                            click: function($event) {
                              return _vm.changecompactLeftSideBarBgColor(
                                "sidebar-slate-gray"
                              )
                            }
                          }
                        },
                        [_c("i", { staticClass: "i-Eye" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "color midnight-blue",
                          class: {
                            active:
                              _vm.getcompactLeftSideBarBgColor ==
                              "sidebar-midnight-blue"
                          },
                          on: {
                            click: function($event) {
                              return _vm.changecompactLeftSideBarBgColor(
                                "sidebar-midnight-blue"
                              )
                            }
                          }
                        },
                        [_c("i", { staticClass: "i-Eye" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "color blue ",
                          class: {
                            active:
                              _vm.getcompactLeftSideBarBgColor == "sidebar-blue"
                          },
                          on: {
                            click: function($event) {
                              return _vm.changecompactLeftSideBarBgColor(
                                "sidebar-blue"
                              )
                            }
                          }
                        },
                        [_c("i", { staticClass: "i-Eye" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "color indigo",
                          class: {
                            active:
                              _vm.getcompactLeftSideBarBgColor ==
                              "sidebar-indigo"
                          },
                          on: {
                            click: function($event) {
                              return _vm.changecompactLeftSideBarBgColor(
                                "sidebar-indigo"
                              )
                            }
                          }
                        },
                        [_c("i", { staticClass: "i-Eye" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "color pink",
                          class: {
                            active:
                              _vm.getcompactLeftSideBarBgColor == "sidebar-pink"
                          },
                          on: {
                            click: function($event) {
                              return _vm.changecompactLeftSideBarBgColor(
                                "sidebar-pink"
                              )
                            }
                          }
                        },
                        [_c("i", { staticClass: "i-Eye" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "color red",
                          class: {
                            active:
                              _vm.getcompactLeftSideBarBgColor == "sidebar-red"
                          },
                          on: {
                            click: function($event) {
                              return _vm.changecompactLeftSideBarBgColor(
                                "sidebar-red"
                              )
                            }
                          }
                        },
                        [_c("i", { staticClass: "i-Eye" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "color purple",
                          class: {
                            active:
                              _vm.getcompactLeftSideBarBgColor ==
                              "sidebar-purple"
                          },
                          on: {
                            click: function($event) {
                              return _vm.changecompactLeftSideBarBgColor(
                                "sidebar-purple"
                              )
                            }
                          }
                        },
                        [_c("i", { staticClass: "i-Eye" })]
                      )
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", {}, [
              _c(
                "div",
                { staticClass: "card-header", attrs: { id: "headingOne" } },
                [
                  _c("p", { staticClass: "mb-0" }, [
                    _vm._v("\n            RTL\n          ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("label", { staticClass: "checkbox checkbox-primary" }, [
                  _c("input", {
                    attrs: { type: "checkbox", id: "rtl-checkbox" },
                    on: { change: _vm.changeThemeRtl }
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Enable RTL")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkmark" })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", {}, [
              _c("div", { staticClass: "card-header" }, [
                _c("p", { staticClass: "mb-0" }, [
                  _vm._v("\n            Dark Mode\n          ")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "label",
                  {
                    directives: [
                      {
                        name: "b-popover",
                        rawName: "v-b-popover.hover.left",
                        value: "Dark Mode",
                        expression: "'Dark Mode'",
                        modifiers: { hover: true, left: true }
                      }
                    ],
                    staticClass: "switch switch-primary mr-3 mt-2"
                  },
                  [
                    _c("input", {
                      attrs: { type: "checkbox" },
                      on: { click: _vm.changeThemeMode }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "slider" })
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", {}, [
              _c("div", { staticClass: "card-header" }, [
                _c("p", { staticClass: "mb-0" }, [
                  _vm._v("\n            Language\n          ")
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "default m-1" },
                      on: {
                        click: function($event) {
                          return _vm.changeLang("bn")
                        }
                      }
                    },
                    [_c("flag", { attrs: { iso: "BD" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "default m-1" },
                      on: {
                        click: function($event) {
                          return _vm.changeLang("en")
                        }
                      }
                    },
                    [_c("flag", { attrs: { iso: "US" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "default m-1" },
                      on: {
                        click: function($event) {
                          return _vm.changeLang("de")
                        }
                      }
                    },
                    [_c("flag", { attrs: { iso: "DE" } })],
                    1
                  )
                ],
                1
              )
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/images/screenshots/02_preview.png":
/*!***************************************************************!*\
  !*** ./resources/js/assets/images/screenshots/02_preview.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/02_preview.png?3d0f03f79c50fb5db5399f826587a421";

/***/ }),

/***/ "./resources/js/assets/images/screenshots/04_preview.png":
/*!***************************************************************!*\
  !*** ./resources/js/assets/images/screenshots/04_preview.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/04_preview.png?2abe079f10d27d8de5628c3eb49a4535";

/***/ }),

/***/ "./resources/js/components/common/customizer.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/common/customizer.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customizer_vue_vue_type_template_id_46287ef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customizer.vue?vue&type=template&id=46287ef8&scoped=true& */ "./resources/js/components/common/customizer.vue?vue&type=template&id=46287ef8&scoped=true&");
/* harmony import */ var _customizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customizer.vue?vue&type=script&lang=js& */ "./resources/js/components/common/customizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _customizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customizer_vue_vue_type_template_id_46287ef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _customizer_vue_vue_type_template_id_46287ef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "46287ef8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/customizer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/customizer.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/common/customizer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./customizer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/customizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/customizer.vue?vue&type=template&id=46287ef8&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/common/customizer.vue?vue&type=template&id=46287ef8&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_template_id_46287ef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./customizer.vue?vue&type=template&id=46287ef8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/customizer.vue?vue&type=template&id=46287ef8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_template_id_46287ef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_template_id_46287ef8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);