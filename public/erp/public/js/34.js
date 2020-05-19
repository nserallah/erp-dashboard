(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/inbox.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/inbox.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Inbox"
  },
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_0__["VueEditor"]
  },
  data: function data() {
    return {
      content: "<h1>Some initial content</h1>"
    };
  },
  methods: {
    editor: function editor() {}
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/inbox.vue?vue&type=template&id=4cdd4096&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/inbox.vue?vue&type=template&id=4cdd4096& ***!
  \************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Inbox", folder: "Apps" } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "inbox-main-sidebar-container sidebar-container" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "inbox-main-sidebar sidebar",
              attrs: { "data-sidebar": "main", "data-sidebar-position": "left" }
            },
            [
              _c("div", { staticClass: "pt-3 pr-3 pb-3" }, [
                _c("i", {
                  staticClass: "sidebar-close i-Close",
                  attrs: { "data-sidebar-toggle": "main" }
                }),
                _vm._v(" "),
                _c(
                  "div",
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
                        staticClass: "btn-rounded mb-30",
                        attrs: { block: "", variant: "primary" }
                      },
                      [_vm._v("Compose")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal-1",
                          size: "lg",
                          title: "BootstrapVue"
                        }
                      },
                      [
                        _c(
                          "b-form",
                          [
                            _c(
                              "b-form-group",
                              [
                                _c("b-form-input", {
                                  attrs: { type: "email", placeholder: "Email" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("vue-editor")
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
                _c("p", { staticClass: "text-muted mb-2" }, [_vm._v("Browse")]),
                _vm._v(" "),
                _vm._m(1)
              ])
            ]
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
    return _c("div", { staticClass: "inbox-main-content sidebar-content" }, [
      _c(
        "div",
        {
          staticClass:
            "inbox-secondary-sidebar-container box-shadow-1 sidebar-container"
        },
        [
          _c("div", { staticClass: "sidebar-content" }, [
            _c(
              "div",
              {
                staticClass:
                  "inbox-secondary-sidebar-content position-relative",
                staticStyle: { "min-height": "500px" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "inbox-topbar box-shadow-1 perfect-scrollbar pl-3 ps"
                  },
                  [
                    _c("a", { staticClass: "link-icon d-md-none" }, [
                      _c("i", { staticClass: "icon-regular i-Arrow-Turn-Left" })
                    ]),
                    _vm._v(" "),
                    _c("a", { staticClass: "link-icon mr-1 d-md-none" }, [
                      _c("i", { staticClass: "icon-regular mr-1 i-Left-3" }),
                      _vm._v("\n                Inbox\n              ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex" }, [
                      _c(
                        "a",
                        { staticClass: "link-icon mr-1", attrs: { href: "" } },
                        [
                          _c("i", { staticClass: "icon-regular i-Mail-Reply" }),
                          _vm._v(" Reply")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "link-icon mr-1", attrs: { href: "" } },
                        [
                          _c("i", {
                            staticClass: "icon-regular i-Mail-Reply-All"
                          }),
                          _vm._v(" Forward")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "link-icon mr-1 d-none d-sm-flex",
                          attrs: { href: "" }
                        },
                        [
                          _c("i", {
                            staticClass: "icon-regular i-Mail-Reply-All"
                          }),
                          _vm._v(" Delete")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "ps__rail-x",
                        staticStyle: { left: "0px", bottom: "0px" }
                      },
                      [
                        _c("div", {
                          staticClass: "ps__thumb-x",
                          staticStyle: { left: "0px", width: "0px" },
                          attrs: { tabindex: "0" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "ps__rail-y",
                        staticStyle: { top: "0px", right: "0px" }
                      },
                      [
                        _c("div", {
                          staticClass: "ps__thumb-y",
                          staticStyle: { top: "0px", height: "0px" },
                          attrs: { tabindex: "0" }
                        })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "inbox-details perfect-scrollbar ps" },
                  [
                    _c("div", { staticClass: "row no-gutters" }, [
                      _c(
                        "div",
                        { staticClass: "mr-2", staticStyle: { width: "36px" } },
                        [
                          _c("img", {
                            staticClass: "rounded-circle",
                            attrs: {
                              src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                              alt: ""
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-xs-12" }, [
                        _c("p", { staticClass: "m-0" }, [_vm._v("Jhon Doe")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-12 text-muted" }, [
                          _vm._v("20 Dec, 2018")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("h4", { staticClass: "mb-3" }, [
                      _vm._v("Confirm your email")
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("p", [
                        _vm._v(
                          "\n                  Natus consequuntur perspiciatis esse beatae illo quos eaque.\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                  Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit\n                  odit, ipsam iusto enim culpa, temporibus vero possimus error\n                  voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime\n                  animi excepturi a dignissimos doloribus, inventore sed\n                  ratione, ducimus atque earum maiores tenetur officia commodi\n                  dicta tempora consequatur non nesciunt ipsam, consequuntur\n                  quia fuga aspernatur impedit et? Natus, earum.\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("blockquote", { staticClass: "blockquote" }, [
                        _vm._v(
                          "\n                  Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit\n                  odit, ipsam iusto enim culpa, temporibus vero possimus error\n                  voluptates sequi.\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                  Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit\n                  odit, ipsam iusto enim culpa, temporibus vero possimus error\n                  voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime\n                  animi excepturi a dignissimos doloribus, inventore sed\n                  ratione, ducimus atque earum maiores tenetur officia commodi\n                  dicta tempora consequatur non nesciunt ipsam, consequuntur\n                  quia fuga aspernatur impedit et? Natus, earum.\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v("\n                Thanks"),
                      _c("br"),
                      _vm._v("\n                Jhone\n              ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "ps__rail-x",
                        staticStyle: { left: "0px", bottom: "0px" }
                      },
                      [
                        _c("div", {
                          staticClass: "ps__thumb-x",
                          staticStyle: { left: "0px", width: "0px" },
                          attrs: { tabindex: "0" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "ps__rail-y",
                        staticStyle: { top: "0px", right: "0px" }
                      },
                      [
                        _c("div", {
                          staticClass: "ps__thumb-y",
                          staticStyle: { top: "0px", height: "0px" },
                          attrs: { tabindex: "0" }
                        })
                      ]
                    )
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "inbox-secondary-sidebar perfect-scrollbar ps sidebar"
            },
            [
              _c("i", { staticClass: "sidebar-close i-Close" }),
              _vm._v(" "),
              _c("div", { staticClass: "mail-item" }, [
                _c("div", { staticClass: "avatar" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/faces/1.jpg */ "./resources/js/assets/images/faces/1.jpg"),
                      alt: ""
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 details" }, [
                  _c("span", { staticClass: "name text-muted" }, [
                    _vm._v("John Doe")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "m-0" }, [
                    _vm._v("Confirm your email")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-3 date" }, [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("20 Dec 2018")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mail-item" }, [
                _c("div", { staticClass: "avatar" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/faces/5.jpg */ "./resources/js/assets/images/faces/5.jpg"),
                      alt: ""
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 details" }, [
                  _c("span", { staticClass: "name text-muted" }, [
                    _vm._v("John Doe")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "m-0" }, [
                    _vm._v("Confirm your email")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-3 date" }, [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("20 Dec 2018")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mail-item" }, [
                _c("div", { staticClass: "avatar" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/faces/2.jpg */ "./resources/js/assets/images/faces/2.jpg"),
                      alt: ""
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 details" }, [
                  _c("span", { staticClass: "name text-muted" }, [
                    _vm._v("John Doe")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "m-0" }, [
                    _vm._v("Confirm your email")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-3 date" }, [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("20 Dec 2018")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mail-item" }, [
                _c("div", { staticClass: "avatar" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/faces/3.jpg */ "./resources/js/assets/images/faces/3.jpg"),
                      alt: ""
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 details" }, [
                  _c("span", { staticClass: "name text-muted" }, [
                    _vm._v("John Doe")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "m-0" }, [
                    _vm._v("Confirm your email")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-3 date" }, [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("20 Dec 2018")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mail-item" }, [
                _c("div", { staticClass: "avatar" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/faces/4.jpg */ "./resources/js/assets/images/faces/4.jpg"),
                      alt: ""
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 details" }, [
                  _c("span", { staticClass: "name text-muted" }, [
                    _vm._v("John Doe")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "m-0" }, [
                    _vm._v("Confirm your email")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-3 date" }, [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("20 Dec 2018")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mail-item" }, [
                _c("div", { staticClass: "avatar" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/faces/5.jpg */ "./resources/js/assets/images/faces/5.jpg"),
                      alt: ""
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 details" }, [
                  _c("span", { staticClass: "name text-muted" }, [
                    _vm._v("John Doe")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "m-0" }, [
                    _vm._v("Confirm your email")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-3 date" }, [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("20 Dec 2018")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mail-item" }, [
                _c("div", { staticClass: "avatar" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/faces/4.jpg */ "./resources/js/assets/images/faces/4.jpg"),
                      alt: ""
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 details" }, [
                  _c("span", { staticClass: "name text-muted" }, [
                    _vm._v("John Doe")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "m-0" }, [
                    _vm._v("Confirm your email")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-3 date" }, [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("20 Dec 2018")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mail-item" }, [
                _c("div", { staticClass: "avatar" }, [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! @/assets/images/faces/9.jpg */ "./resources/js/assets/images/faces/9.jpg"),
                      alt: ""
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-6 details" }, [
                  _c("span", { staticClass: "name text-muted" }, [
                    _vm._v("John Doe")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "m-0" }, [
                    _vm._v("Confirm your email")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-3 date" }, [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("20 Dec 2018")
                  ])
                ])
              ])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "inbox-main-nav" }, [
      _c("li", [
        _c("a", { staticClass: "active", attrs: { href: "" } }, [
          _c("i", { staticClass: "icon-regular i-Mail-2" }),
          _vm._v(" Inbox (2)")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "" } }, [
          _c("i", { staticClass: "icon-regular i-Mail-Outbox" }),
          _vm._v(" Sent")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "" } }, [
          _c("i", { staticClass: "icon-regular i-Mail-Favorite" }),
          _vm._v(" Starred")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "" } }, [
          _c("i", { staticClass: "icon-regular i-Folder-Trash" }),
          _vm._v(" Trash")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "" } }, [
          _c("i", { staticClass: "icon-regular i-Spam-Mail" }),
          _vm._v(" Spam")
        ])
      ])
    ])
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

/***/ "./resources/js/views/app/apps/inbox.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/app/apps/inbox.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inbox_vue_vue_type_template_id_4cdd4096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.vue?vue&type=template&id=4cdd4096& */ "./resources/js/views/app/apps/inbox.vue?vue&type=template&id=4cdd4096&");
/* harmony import */ var _inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox.vue?vue&type=script&lang=js& */ "./resources/js/views/app/apps/inbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _inbox_vue_vue_type_template_id_4cdd4096___WEBPACK_IMPORTED_MODULE_0__["render"],
  _inbox_vue_vue_type_template_id_4cdd4096___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/apps/inbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/apps/inbox.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/app/apps/inbox.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./inbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/inbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/apps/inbox.vue?vue&type=template&id=4cdd4096&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/app/apps/inbox.vue?vue&type=template&id=4cdd4096& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inbox_vue_vue_type_template_id_4cdd4096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./inbox.vue?vue&type=template&id=4cdd4096& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/inbox.vue?vue&type=template&id=4cdd4096&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inbox_vue_vue_type_template_id_4cdd4096___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inbox_vue_vue_type_template_id_4cdd4096___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);