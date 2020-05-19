(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/carousel.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/carousel.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Carousel"
  },
  data: function data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart: function onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd: function onSlideEnd(slide) {
      this.sliding = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/carousel.vue?vue&type=template&id=0ec3eb86&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-kits/carousel.vue?vue&type=template&id=0ec3eb86& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Carousel", folder: "Ui-Kits" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "mb-30", attrs: { md: "6" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Basic Carousel With Control" } },
                [
                  _c(
                    "div",
                    { staticClass: "carousel_wrap" },
                    [
                      _c(
                        "b-carousel",
                        {
                          staticStyle: { "text-shadow": "1px 1px 2px #333" },
                          attrs: {
                            id: "carousel-1",
                            interval: 4000,
                            controls: "",
                            background: "#ababab",
                            "img-width": "1024",
                            "img-height": "480"
                          },
                          on: {
                            "sliding-start": _vm.onSlideStart,
                            "sliding-end": _vm.onSlideEnd
                          },
                          model: {
                            value: _vm.slide,
                            callback: function($$v) {
                              _vm.slide = $$v
                            },
                            expression: "slide"
                          }
                        },
                        [
                          _c("b-carousel-slide", {
                            attrs: {
                              "img-src": __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg")
                            }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: {
                              "img-src": __webpack_require__(/*! @/assets/images/products/headphone-1.jpg */ "./resources/js/assets/images/products/headphone-1.jpg")
                            }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: {
                              "img-src": __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg")
                            }
                          })
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-30", attrs: { md: "6" } },
            [
              _c("b-card", { attrs: { title: "Carousel With Indicators" } }, [
                _c(
                  "div",
                  { staticClass: "carousel_wrap" },
                  [
                    _c(
                      "b-carousel",
                      {
                        staticStyle: { "text-shadow": "1px 1px 2px #333" },
                        attrs: {
                          id: "carousel-1",
                          interval: 4000,
                          controls: "",
                          indicators: "",
                          background: "#ababab",
                          "img-width": "1024",
                          "img-height": "480"
                        },
                        on: {
                          "sliding-start": _vm.onSlideStart,
                          "sliding-end": _vm.onSlideEnd
                        },
                        model: {
                          value: _vm.slide,
                          callback: function($$v) {
                            _vm.slide = $$v
                          },
                          expression: "slide"
                        }
                      },
                      [
                        _c("b-carousel-slide", {
                          attrs: {
                            "img-src": __webpack_require__(/*! @/assets/images/products/headphone-1.jpg */ "./resources/js/assets/images/products/headphone-1.jpg")
                          }
                        }),
                        _vm._v(" "),
                        _c("b-carousel-slide", {
                          attrs: {
                            "img-src": __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg")
                          }
                        }),
                        _vm._v(" "),
                        _c("b-carousel-slide", {
                          attrs: {
                            "img-src": __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg")
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-30", attrs: { md: "6" } },
            [
              _c("b-card", { attrs: { title: "Carousel With Caption" } }, [
                _c(
                  "div",
                  { staticClass: "carousel_wrap" },
                  [
                    _c(
                      "b-carousel",
                      {
                        staticStyle: { "text-shadow": "0px 0px 2px #fff" },
                        attrs: {
                          id: "carousel-1",
                          interval: 2000,
                          controls: "",
                          indicators: "",
                          background: "#ababab",
                          "img-width": "1024",
                          "img-height": "480"
                        },
                        on: {
                          "sliding-start": _vm.onSlideStart,
                          "sliding-end": _vm.onSlideEnd
                        },
                        model: {
                          value: _vm.slide,
                          callback: function($$v) {
                            _vm.slide = $$v
                          },
                          expression: "slide"
                        }
                      },
                      [
                        _c("b-carousel-slide", {
                          attrs: {
                            caption: "First slide",
                            text: "first slide to b-carousel-slide",
                            "img-src": __webpack_require__(/*! @/assets/images/products/headphone-1.jpg */ "./resources/js/assets/images/products/headphone-1.jpg")
                          }
                        }),
                        _vm._v(" "),
                        _c("b-carousel-slide", {
                          attrs: {
                            caption: "Second slide",
                            text: "first slide to b-carousel-slide",
                            "img-src": __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg")
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "b-carousel-slide",
                          {
                            attrs: {
                              "img-src": __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg")
                            }
                          },
                          [
                            _c("h2", { staticClass: "text-white" }, [
                              _vm._v("Third Slide")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-30", attrs: { md: "6" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Carousel With Crossfade animation" } },
                [
                  _c(
                    "div",
                    { staticClass: "carousel_wrap" },
                    [
                      _c(
                        "b-carousel",
                        {
                          staticStyle: { "text-shadow": "0px 0px 2px #fff" },
                          attrs: {
                            id: "carousel-1",
                            fade: "",
                            indicators: "",
                            background: "#ababab",
                            "img-width": "1024",
                            "img-height": "480"
                          },
                          on: {
                            "sliding-start": _vm.onSlideStart,
                            "sliding-end": _vm.onSlideEnd
                          },
                          model: {
                            value: _vm.slide,
                            callback: function($$v) {
                              _vm.slide = $$v
                            },
                            expression: "slide"
                          }
                        },
                        [
                          _c("b-carousel-slide", {
                            attrs: {
                              text: "first slide to b-carousel-slide",
                              "img-src": __webpack_require__(/*! @/assets/images/products/headphone-1.jpg */ "./resources/js/assets/images/products/headphone-1.jpg")
                            }
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: {
                              text: "first slide to b-carousel-slide",
                              "img-src": __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg")
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "b-carousel-slide",
                            {
                              attrs: {
                                "img-src": __webpack_require__(/*! @/assets/images/products/iphone-1.jpg */ "./resources/js/assets/images/products/iphone-1.jpg")
                              }
                            },
                            [
                              _c("h2", { staticClass: "text-white" }, [
                                _vm._v("Third Slide")
                              ])
                            ]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/ui-kits/carousel.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/app/ui-kits/carousel.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_vue_vue_type_template_id_0ec3eb86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.vue?vue&type=template&id=0ec3eb86& */ "./resources/js/views/app/ui-kits/carousel.vue?vue&type=template&id=0ec3eb86&");
/* harmony import */ var _carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.vue?vue&type=script&lang=js& */ "./resources/js/views/app/ui-kits/carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _carousel_vue_vue_type_template_id_0ec3eb86___WEBPACK_IMPORTED_MODULE_0__["render"],
  _carousel_vue_vue_type_template_id_0ec3eb86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/ui-kits/carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/ui-kits/carousel.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/carousel.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/ui-kits/carousel.vue?vue&type=template&id=0ec3eb86&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/app/ui-kits/carousel.vue?vue&type=template&id=0ec3eb86& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_0ec3eb86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./carousel.vue?vue&type=template&id=0ec3eb86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-kits/carousel.vue?vue&type=template&id=0ec3eb86&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_0ec3eb86___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_0ec3eb86___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);