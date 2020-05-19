(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/chat.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/chat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Chat"
  },
  data: function data() {
    return {
      recentContacts: [],
      search: "",
      isMobile: false
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["changeSelectedUser"]), {
    console: function (_console) {
      function console() {
        return _console.apply(this, arguments);
      }

      console.toString = function () {
        return _console.toString();
      };

      return console;
    }(function () {
      console.log(this.test);
    })
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getContactLists", "getRecentUser", "getCurrentUser", "getSelectedUser"]), {
    filterContacts: function filterContacts() {
      var _this = this;

      return this.getContactLists.filter(function (contact) {
        return contact.name.toLowerCase().match(_this.search.toLowerCase());
      });
    }
  }),
  created: function created() {
    console.log(this.getSelectedUser); // this.getCurrentUser.forEach(currentUser => {
    //   currentUser.chatInfo.forEach(user => {
    //     this.getContactLists.filter(contact => {
    //       if (user.contactId == contact.id) {
    //         this.recentContacts.push(contact);
    //       }
    //     });
    //   });
    // });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/chat.vue?vue&type=template&id=a1d3e710&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/chat.vue?vue&type=template&id=a1d3e710& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Chat", folder: "apps" } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card chat-sidebar-container sidebar-container" },
        [
          _c(
            "div",
            {
              staticClass: "chat-sidebar-wrap sidebar",
              class: { "ml-0": _vm.isMobile }
            },
            [
              _c(
                "div",
                { staticClass: "border-right" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "pt-2 pb-2 pl-3 pr-3 d-flex align-items-center o-hidden box-shadow-1 chat-topbar"
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "link-icon d-md-none",
                          on: {
                            click: function($event) {
                              _vm.isMobile = !_vm.isMobile
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "icon-regular ml-0 mr-3 i-Left"
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group m-0 flex-grow-1" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.search,
                              expression: "search"
                            }
                          ],
                          staticClass: "form-control form-control-rounded",
                          attrs: {
                            type: "text",
                            id: "search",
                            placeholder: "Search contacts"
                          },
                          domProps: { value: _vm.search },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.search = $event.target.value
                            }
                          }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vue-perfect-scrollbar",
                    {
                      staticClass:
                        "contacts-scrollable perfect-scrollbar  rtl-ps-none ps scroll",
                      attrs: {
                        settings: {
                          suppressScrollX: true,
                          wheelPropagation: false
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "mt-3 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"
                            },
                            [_vm._v("\n              Contacts\n            ")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.filterContacts, function(contact) {
                            return _c(
                              "div",
                              {
                                key: contact.id,
                                staticClass:
                                  "p-3 d-flex border-bottom align-items-center contact",
                                class: contact.status,
                                on: {
                                  click: function($event) {
                                    return _vm.changeSelectedUser(contact.id)
                                  }
                                }
                              },
                              [
                                _c("img", {
                                  staticClass: "avatar-sm rounded-circle mr-3",
                                  attrs: { src: contact.avatar, alt: "" }
                                }),
                                _vm._v(" "),
                                _c("h6", {}, [_vm._v(_vm._s(contact.name))])
                              ]
                            )
                          })
                        ],
                        2
                      )
                    ]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "chat-content-wrap sidebar-content" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex pl-3 pr-3 pt-2 pb-2 o-hidden box-shadow-1 chat-topbar"
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "link-icon d-md-none",
                      on: {
                        click: function($event) {
                          _vm.isMobile = !_vm.isMobile
                        }
                      }
                    },
                    [_c("i", { staticClass: "icon-regular i-Right ml-0 mr-3" })]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex align-items-center" }, [
                    _c("img", {
                      staticClass: "avatar-sm rounded-circle mr-2",
                      attrs: { src: _vm.getSelectedUser.avatar, alt: "" }
                    }),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "m-0 text-title text-16 flex-grow-1" },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.getSelectedUser.name) +
                            "\n          "
                        )
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "vue-perfect-scrollbar",
                {
                  staticClass:
                    "chat-content perfect-scrollbar rtl-ps-none ps scroll",
                  attrs: {
                    settings: { suppressScrollX: true, wheelPropagation: false }
                  }
                },
                [
                  _c("div", [
                    _c("div", { staticClass: "d-flex mb-30" }, [
                      _c("div", { staticClass: "message flex-grow-1" }, [
                        _c("div", { staticClass: "d-flex" }, [
                          _c(
                            "p",
                            {
                              staticClass: "mb-1 text-title text-16 flex-grow-1"
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.getSelectedUser.name) +
                                  "\n                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-small text-muted" }, [
                            _vm._v("25 min ago")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "m-0" }, [
                          _vm._v(
                            "\n                Do you ever find yourself falling into the “discount trap?\n              "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "avatar-sm rounded-circle ml-3",
                        attrs: { src: _vm.getSelectedUser.avatar, alt: "" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex mb-30 user" }, [
                      _c("img", {
                        staticClass: "avatar-sm rounded-circle mr-3",
                        attrs: {
                          src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                          alt: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "message flex-grow-1" }, [
                        _c("div", { staticClass: "d-flex" }, [
                          _c(
                            "p",
                            {
                              staticClass: "mb-1 text-title text-16 flex-grow-1"
                            },
                            [_vm._v("Jhon Doe")]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-small text-muted" }, [
                            _vm._v("24 min ago")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "m-0" }, [
                          _vm._v("Lorem ipsum dolor sit amet.")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex mb-30" }, [
                      _c("div", { staticClass: "message flex-grow-1" }, [
                        _c("div", { staticClass: "d-flex" }, [
                          _c(
                            "p",
                            {
                              staticClass: "mb-1 text-title text-16 flex-grow-1"
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.getSelectedUser.name) +
                                  "\n                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-small text-muted" }, [
                            _vm._v("25 min ago")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "m-0" }, [
                          _vm._v(
                            "\n                Do you ever find yourself falling into the “discount trap?\n              "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "avatar-sm rounded-circle ml-3",
                        attrs: { src: _vm.getSelectedUser.avatar, alt: "" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex mb-30 user" }, [
                      _c("img", {
                        staticClass: "avatar-sm rounded-circle mr-3",
                        attrs: {
                          src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                          alt: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "message flex-grow-1" }, [
                        _c("div", { staticClass: "d-flex" }, [
                          _c(
                            "p",
                            {
                              staticClass: "mb-1 text-title text-16 flex-grow-1"
                            },
                            [_vm._v("Jhon Doe")]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-small text-muted" }, [
                            _vm._v("24 min ago")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "m-0" }, [
                          _vm._v("Lorem ipsum dolor sit amet.")
                        ])
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(0)
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area" },
      [
        _c("form", { staticClass: "inputForm" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("textarea", {
              staticClass: "form-control form-control-rounded",
              attrs: {
                placeholder: "Type your message",
                name: "message",
                id: "message",
                cols: "30",
                rows: "3",
                spellcheck: "false"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex" }, [
            _c("div", { staticClass: "flex-grow-1" }),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-icon btn-rounded btn-primary mr-2" },
              [_c("i", { staticClass: "i-Paper-Plane" })]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-icon btn-rounded btn-outline-primary",
                attrs: { type: "button" }
              },
              [_c("i", { staticClass: "i-Add-File" })]
            )
          ])
        ])
      ]
    )
  }
]
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

/***/ "./resources/js/views/app/apps/chat.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/app/apps/chat.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_a1d3e710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=a1d3e710& */ "./resources/js/views/app/apps/chat.vue?vue&type=template&id=a1d3e710&");
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ "./resources/js/views/app/apps/chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_a1d3e710___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_a1d3e710___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/apps/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/apps/chat.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/app/apps/chat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/apps/chat.vue?vue&type=template&id=a1d3e710&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/app/apps/chat.vue?vue&type=template&id=a1d3e710& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_a1d3e710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=template&id=a1d3e710& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/chat.vue?vue&type=template&id=a1d3e710&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_a1d3e710___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_a1d3e710___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);