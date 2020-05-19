(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/tagInput.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/form/tagInput.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Tag Input"
  },
  data: function data() {
    return {
      tag: "",
      tags: [{
        text: "Javascript"
      }, {
        text: "Typescript"
      }, {
        text: "add"
      }],
      //   auto complete
      autocompleteTag: "",
      autocompleteTags: [{
        text: "Bangladesh"
      }],
      autocompleteItems: [{
        text: "Spain"
      }, {
        text: "France"
      }, {
        text: "USA"
      }, {
        text: "Germany"
      }, {
        text: "China"
      }]
    };
  },
  computed: {
    filteredItems: function filteredItems() {
      var _this = this;

      return this.autocompleteItems.filter(function (i) {
        return i.text.toLowerCase().indexOf(_this.tag.toLowerCase()) !== -1;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/tagInput.vue?vue&type=template&id=06b8b744&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/form/tagInput.vue?vue&type=template&id=06b8b744& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      _c("breadcumb", { attrs: { page: "Tag Input", folder: "Forms" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "12" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Tag Inputs" } },
                [
                  _c("vue-tags-input", {
                    staticClass: "tag-custom text-15",
                    attrs: { tags: _vm.tags, placeholder: "+ add" },
                    on: {
                      "tags-changed": function(newTags) {
                        return (_vm.tags = newTags)
                      }
                    },
                    model: {
                      value: _vm.tag,
                      callback: function($$v) {
                        _vm.tag = $$v
                      },
                      expression: "tag"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mt-4", attrs: { md: "12" } },
            [
              _c(
                "b-card",
                { attrs: { title: "Autocomplete" } },
                [
                  _c("vue-tags-input", {
                    staticClass: "tag-custom text-15",
                    attrs: {
                      tags: _vm.autocompleteTags,
                      "autocomplete-items": _vm.filteredItems,
                      placeholder: "Type Country Name"
                    },
                    on: {
                      "tags-changed": function(newTags) {
                        return (_vm.autocompleteTags = newTags)
                      }
                    },
                    model: {
                      value: _vm.autocompleteTag,
                      callback: function($$v) {
                        _vm.autocompleteTag = $$v
                      },
                      expression: "autocompleteTag"
                    }
                  })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/form/tagInput.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/app/form/tagInput.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagInput_vue_vue_type_template_id_06b8b744___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagInput.vue?vue&type=template&id=06b8b744& */ "./resources/js/views/app/form/tagInput.vue?vue&type=template&id=06b8b744&");
/* harmony import */ var _tagInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tagInput.vue?vue&type=script&lang=js& */ "./resources/js/views/app/form/tagInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tagInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tagInput_vue_vue_type_template_id_06b8b744___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tagInput_vue_vue_type_template_id_06b8b744___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/form/tagInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/form/tagInput.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/app/form/tagInput.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tagInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tagInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/tagInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tagInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/form/tagInput.vue?vue&type=template&id=06b8b744&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/app/form/tagInput.vue?vue&type=template&id=06b8b744& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tagInput_vue_vue_type_template_id_06b8b744___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tagInput.vue?vue&type=template&id=06b8b744& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/form/tagInput.vue?vue&type=template&id=06b8b744&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tagInput_vue_vue_type_template_id_06b8b744___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tagInput_vue_vue_type_template_id_06b8b744___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);