(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/imageCropper.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/extraKits/imageCropper.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cropperjs */ "./node_modules/vue-cropperjs/dist/VueCropper.js");
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_cropperjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ "./node_modules/cropperjs/dist/cropper.css");
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    VueCropper: vue_cropperjs__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Image Cropper"
  },
  data: function data() {
    return {
      imgSrc: "",
      cropImg: ""
    };
  },
  methods: {
    setImage: function setImage(e) {
      var _this = this;

      var file = e.target.files[0];

      if (!file.type.includes("image/")) {
        alert("Please select an image file");
        return;
      }

      if (typeof FileReader === "function") {
        var reader = new FileReader();

        reader.onload = function (event) {
          _this.imgSrc = event.target.result; // rebuild cropperjs with the updated source

          _this.$refs.cropper.replace(event.target.result);
        };

        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    cropImage: function cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    rotate: function rotate() {
      // guess what this does :)
      this.$refs.cropper.rotate(90);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/imageCropper.vue?vue&type=template&id=713967e1&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/extraKits/imageCropper.vue?vue&type=template&id=713967e1& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: "Image Cropper", folder: "Extra Kits" }
      }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "6 mb-30" } },
            [
              _c("b-card", { attrs: { title: "Input Crop Image" } }, [
                _c("input", {
                  staticStyle: { "font-size": "1.2em", padding: "10px 0" },
                  attrs: { type: "file", name: "image", accept: "image/*" },
                  on: { change: _vm.setImage }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticStyle: {
                      width: "100%",
                      height: "100%",
                      border: "1px solid gray",
                      display: "inline-block"
                    }
                  },
                  [
                    _c("h4", [_vm._v("Insert Image")]),
                    _vm._v(" "),
                    _c("vue-cropper", {
                      ref: "cropper",
                      attrs: {
                        guides: true,
                        "view-mode": 2,
                        "drag-mode": "crop",
                        "auto-crop-area": 0.5,
                        "min-container-width": 250,
                        "min-container-height": 180,
                        background: true,
                        rotatable: true,
                        src: _vm.imgSrc,
                        alt: "Source Image",
                        "img-style": { width: "400px", height: "300px" }
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mt-4" },
                  [
                    _vm.imgSrc != ""
                      ? _c(
                          "b-button",
                          {
                            staticClass: "m-2",
                            attrs: { variant: "primary" },
                            on: { click: _vm.cropImage }
                          },
                          [_vm._v("Crop")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.imgSrc != ""
                      ? _c(
                          "b-button",
                          {
                            staticClass: "m-2",
                            attrs: { variant: "success" },
                            on: { click: _vm.rotate }
                          },
                          [_vm._v("Rotate")]
                        )
                      : _vm._e()
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
            { attrs: { md: "6" } },
            [
              _c("b-card", { attrs: { title: "Output Crop Image" } }, [
                _c("img", {
                  staticStyle: {
                    width: "100%",
                    height: "100%",
                    border: "1px solid gray"
                  },
                  attrs: { src: _vm.cropImg, alt: "Cropped Image" }
                })
              ])
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

/***/ "./resources/js/views/app/extraKits/imageCropper.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/app/extraKits/imageCropper.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imageCropper_vue_vue_type_template_id_713967e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageCropper.vue?vue&type=template&id=713967e1& */ "./resources/js/views/app/extraKits/imageCropper.vue?vue&type=template&id=713967e1&");
/* harmony import */ var _imageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCropper.vue?vue&type=script&lang=js& */ "./resources/js/views/app/extraKits/imageCropper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _imageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _imageCropper_vue_vue_type_template_id_713967e1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _imageCropper_vue_vue_type_template_id_713967e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/extraKits/imageCropper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/extraKits/imageCropper.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/app/extraKits/imageCropper.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./imageCropper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/imageCropper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/extraKits/imageCropper.vue?vue&type=template&id=713967e1&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/app/extraKits/imageCropper.vue?vue&type=template&id=713967e1& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_imageCropper_vue_vue_type_template_id_713967e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./imageCropper.vue?vue&type=template&id=713967e1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/extraKits/imageCropper.vue?vue&type=template&id=713967e1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_imageCropper_vue_vue_type_template_id_713967e1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_imageCropper_vue_vue_type_template_id_713967e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);