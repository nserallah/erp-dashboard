(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/sessions/forgot.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/sessions/forgot.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Forgot Password"
  },
  data: function data() {
    return {
      bgImage: __webpack_require__(/*! @/assets/images/photo-wide-4.jpg */ "./resources/js/assets/images/photo-wide-4.jpg"),
      logo: __webpack_require__(/*! @/assets/images/logo.png */ "./resources/js/assets/images/logo.png"),
      formImage: __webpack_require__(/*! @/assets/images/photo-long-3.jpg */ "./resources/js/assets/images/photo-long-3.jpg")
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/sessions/forgot.vue?vue&type=template&id=5d41a038&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/sessions/forgot.vue?vue&type=template&id=5d41a038& ***!
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
    {
      staticClass: "auth-layout-wrap",
      style: { backgroundImage: "url(" + _vm.bgImage + ")" }
    },
    [
      _c("div", { staticClass: "auth-content" }, [
        _c("div", { staticClass: "card o-hidden" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "p-4" }, [
                _c("div", { staticClass: "auth-logo text-center mb-30" }, [
                  _c("img", { attrs: { src: _vm.logo, alt: "" } })
                ]),
                _vm._v(" "),
                _c("h1", { staticClass: "mb-3 text-18" }, [
                  _vm._v("Forgot Password")
                ]),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mt-3 text-center" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "text-muted ",
                        attrs: { to: "signIn", tag: "a" }
                      },
                      [_c("u", [_vm._v("Sign In")])]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-6 text-center ",
                staticStyle: { "background-size": "cover" },
                style: { backgroundImage: "url(" + _vm.formImage + ")" }
              },
              [_vm._m(1)]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { attrs: { action: "" } }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "email" } }, [_vm._v("Email address")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control form-control-rounded",
          attrs: { id: "email", type: "email" }
        })
      ]),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary btn-block btn-rounded mt-3" },
        [_vm._v("\n                Reset Password\n              ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pr-3 auth-right" }, [
      _c(
        "a",
        {
          staticClass:
            "btn btn-outline-primary btn-outline-email btn-block btn-icon-text btn-rounded",
          attrs: { href: "signup.html" }
        },
        [
          _c("i", { staticClass: "i-Mail-with-At-Sign" }),
          _vm._v(" Sign up with Email\n            ")
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "btn btn-outline-primary btn-outline-google btn-block btn-icon-text btn-rounded"
        },
        [
          _c("i", { staticClass: "i-Google-Plus" }),
          _vm._v(" Sign in with Google\n            ")
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "btn btn-outline-primary btn-outline-facebook btn-block btn-icon-text btn-rounded"
        },
        [
          _c("i", { staticClass: "i-Facebook-2" }),
          _vm._v(" Sign in with Facebook\n            ")
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/images/logo.png":
/*!*********************************************!*\
  !*** ./resources/js/assets/images/logo.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.png?e660834951733a562ed0271a46516b9a";

/***/ }),

/***/ "./resources/js/assets/images/photo-long-3.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/photo-long-3.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/photo-long-3.jpg?f4e38da9d40ca8f3e5be4b6886517002";

/***/ }),

/***/ "./resources/js/assets/images/photo-wide-4.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/photo-wide-4.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/photo-wide-4.jpg?2e142cde64f1b8e128390567fc4bded6";

/***/ }),

/***/ "./resources/js/views/app/sessions/forgot.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/app/sessions/forgot.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forgot_vue_vue_type_template_id_5d41a038___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.vue?vue&type=template&id=5d41a038& */ "./resources/js/views/app/sessions/forgot.vue?vue&type=template&id=5d41a038&");
/* harmony import */ var _forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.vue?vue&type=script&lang=js& */ "./resources/js/views/app/sessions/forgot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _forgot_vue_vue_type_template_id_5d41a038___WEBPACK_IMPORTED_MODULE_0__["render"],
  _forgot_vue_vue_type_template_id_5d41a038___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/sessions/forgot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/sessions/forgot.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/app/sessions/forgot.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./forgot.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/sessions/forgot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/sessions/forgot.vue?vue&type=template&id=5d41a038&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/sessions/forgot.vue?vue&type=template&id=5d41a038& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_vue_vue_type_template_id_5d41a038___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./forgot.vue?vue&type=template&id=5d41a038& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/sessions/forgot.vue?vue&type=template&id=5d41a038&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_vue_vue_type_template_id_5d41a038___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_vue_vue_type_template_id_5d41a038___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);