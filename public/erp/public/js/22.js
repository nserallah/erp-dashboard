(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/products.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/products.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "List Table"
  },
  data: function data() {
    return {
      filterBrand: "",
      priceValue: 500,
      selectedFilter: "",
      selectPriceRange: "",
      priceRange: 1,
      value: 1,
      items: "",
      paginatedItems: "",
      currentPage: 1,
      perPage: 9,
      // totalRows: '',
      isFirst: false,
      // button
      isListView: true,
      // isGridVIew:false,
      selected: [],
      // Must be an array reference!
      // options: [
      //   { text: 'Orange', value: 'orange' },
      //   { text: 'Apple', value: 'apple' },
      //   { text: 'Pineapple', value: 'pineapple' },
      //   { text: 'Grape', value: 'grape' }
      // ],
      featured: null,
      featuredOptions: [{
        value: null,
        text: "Featured"
      }, {
        value: "a",
        text: "Highest Price"
      }, {
        value: "b",
        text: "Lowest Price"
      }] // brandsCount: this.$store.getters.brandsCount,
      // brands: this.$store.state.brands

    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["getItems", "brandsCount", "getBrandsItem", "getFilterProducts", "getCategoryItem"]), {
    totalRows: function totalRows() {
      return this.getFilterProducts.length;
    },
    filterItems: function filterItems() {
      return this.getFilterProducts;
    }
  }),
  created: function created() {
    this.items = this.getItems;
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["addCart", "addBrandToFilter", "addCategoryItem", "ascendingOrderCart", "descendingOrderCart"]), {
    addBrandToFilterPage: function addBrandToFilterPage(checkedArray) {
      checkedArray = this.$refs.checkFilter;
      checkedArray = checkedArray.filter(function (element) {
        return element.checked;
      }).map(function (element) {
        return element.value;
      });
      console.log(checkedArray);
      this.addBrandToFilter(checkedArray);
      this.paginatePerPage();
    },
    paginatePerPage: function paginatePerPage() {
      this.paginate(this.perPage, 0);
    },
    addCategoryItemPage: function addCategoryItemPage(data) {
      this.addCategoryItem(data);
      this.paginatePerPage();
    },
    ascendingOrderCartPage: function ascendingOrderCartPage() {
      this.ascendingOrderCart();
      this.paginatePerPage();
    },
    descendingOrderCartPage: function descendingOrderCartPage() {
      this.descendingOrderCart();
      this.paginatePerPage();
    },
    priceFilter: function priceFilter() {// console.log(this.priceValue);
      // return this.getItems.filter(state => state.productPrice)
      // let price500 = this.getItems.filter(state => state.productPrice >= 50 &&  state.productPrice<= 500)
      // console.log('price 500' , price500)
      // if(this.priceValue == 1)
      // {
      //  let price50 = this.getItems.filter(state => state.productPrice <= 50)
      //  console.log('test' , price50)
      // }
      // else if(this.priceValue == 2){
      //   let price500 = this.getItems.filter(state => state.productPrice <= 50 && productPrice <= 500)
      //  console.log('500' , price500)
      // }
      // else if(this.priceValue == 3)
      // {
      //   let price1000 = this.getItems.filter(state => state.productPrice >= 500)
      //   console.log('1000' , price1000)
      // }
      // else{
      //   console.log('All')
      // }
    },
    onRadioButtonChange: function onRadioButtonChange(data) {
      if (data == "asc") {
        console.log("Working", this.ascendingOrderCart());
      }
    },
    viewCart: function viewCart() {
      this.$router.push("./product-detail");
    },
    // button
    listView: function listView() {
      this.isListView = true;
    },
    gridView: function gridView() {
      this.isListView = false;
    },
    // end-button
    paginate: function paginate(pageSize, pageNumber) {
      var itemsToParse = this.getFilterProducts;
      this.paginatedItems = itemsToParse.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
    },
    onPageChanged: function onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    }
  }),
  mounted: function mounted() {
    this.paginate(this.perPage, 0);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/products.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/products.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nul.gull-pagination li {\n  margin: 0 12px;\n}\nul.gull-pagination li .page-link {\n  border-radius: 50% !important;\n  border-color: #fff !important;\n}\n.page-link:hover {\n  background-color: #fff;\n}\n.page-link:focus {\n  box-shadow: 0 0 0 0.2rem rgb(255, 255, 255);\n}\n.page-item.disabled .page-link {\n  color: #d5d0d9;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/products.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/products.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/products.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/products.vue?vue&type=template&id=1200e084&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/apps/products.vue?vue&type=template&id=1200e084& ***!
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
      _c("breadcumb", { attrs: { page: "Products", folder: "Ecomerce" } }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { attrs: { md: "4" } }, [
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-rounded btn-outline-primary mb-3",
                on: { click: _vm.listView }
              },
              [_c("i", { staticClass: "i-Split-Four-Square-Window text-15" })]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "btn btn-sm btn-rounded btn-outline-primary mb-3 ml-2",
                on: { click: _vm.gridView }
              },
              [_c("i", { staticClass: "i-Align-Justify-All text-15" })]
            )
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "5" } },
            [
              _c("b-form-input", {
                attrs: { type: "text", placeholder: "search...." }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "3" } },
            [
              _c("b-form-select", {
                attrs: { options: _vm.featuredOptions },
                model: {
                  value: _vm.featured,
                  callback: function($$v) {
                    _vm.featured = $$v
                  },
                  expression: "featured"
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
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "2" } },
            [
              _c(
                "b-card",
                [
                  _c(
                    "b-form-group",
                    {},
                    [
                      _c("label", [
                        _c(
                          "h5",
                          { staticClass: "text-primary font-weight-600" },
                          [_vm._v("Price")]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-form-radio",
                        {
                          attrs: { name: "some-radios" },
                          on: {
                            change: function($event) {
                              return _vm.ascendingOrderCartPage()
                            }
                          }
                        },
                        [_vm._v("Low to High")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-radio",
                        {
                          attrs: { name: "some-radios" },
                          on: {
                            change: function($event) {
                              return _vm.descendingOrderCartPage()
                            }
                          }
                        },
                        [_vm._v("High to Low")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    [
                      _c("label", { attrs: { for: "range-1" } }, [
                        _c(
                          "h5",
                          {
                            staticClass:
                              "text-primary font-weight-600 mb-1 mt-3"
                          },
                          [_vm._v("Category")]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.getCategoryItem, function(category, index) {
                        return _c(
                          "b-form-radio",
                          {
                            key: index,
                            attrs: { name: "radio", value: category },
                            on: {
                              change: function($event) {
                                return _vm.addCategoryItemPage(category)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(category) +
                                "\n          "
                            )
                          ]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("b-form-group", [
                    _c("label", { attrs: { for: "range-1" } }, [
                      _c(
                        "h5",
                        {
                          staticClass: "text-primary font-weight-600 mb-1 mt-3"
                        },
                        [_vm._v("Brand")]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "list-group" },
                      _vm._l(_vm.getBrandsItem, function(brand, index) {
                        return _c(
                          "li",
                          {
                            key: index,
                            staticClass: "list-group-item p-0 mb-2 border-0"
                          },
                          [
                            _c("div", { staticClass: "test d-flex" }, [
                              _c(
                                "label",
                                { staticClass: "checkbox checkbox-primary" },
                                [
                                  _c("input", {
                                    ref: "checkFilter",
                                    refInFor: true,
                                    attrs: { type: "checkbox" },
                                    domProps: { value: brand },
                                    on: {
                                      change: function($event) {
                                        return _vm.addBrandToFilterPage(brand)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "checkmark" })
                                ]
                              ),
                              _vm._v(
                                "\n                " +
                                  _vm._s(brand) +
                                  "(" +
                                  _vm._s(_vm.brandsCount[brand]) +
                                  ")\n              "
                              )
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("b-col", { attrs: { md: "10" } }, [
            _c("section", { staticClass: "product-cart" }, [
              _c(
                "div",
                {
                  ref: "rowView",
                  staticClass: "row",
                  class: {
                    "list-grid": _vm.isListView,
                    "list-horizontal": !_vm.isListView
                  }
                },
                _vm._l(_vm.paginatedItems, function(item, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      staticClass: "list-item",
                      class: {
                        "col-md-4": _vm.isListView,
                        "col-md-12": !_vm.isListView
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card o-hidden mb-4 d-flex",
                          class: {
                            "flex-column": _vm.isListView,
                            "flex-row": !_vm.isListView
                          }
                        },
                        [
                          _c("div", { staticClass: "list-thumb d-flex" }, [
                            _c("img", { attrs: { alt: "", src: item.img } })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "flex-grow-1",
                              class: {
                                "d-bock": _vm.isListView,
                                "pl-2 d-flex": !_vm.isListView
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center",
                                  class: { "flex-lg-row": !_vm.isListView }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "w-40 w-sm-100",
                                      attrs: { href: "" }
                                    },
                                    [
                                      _c("div", { staticClass: "item-title" }, [
                                        _vm._v(_vm._s(item.title))
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "text-muted text-small w-15 w-sm-100 mb-2"
                                    },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(item.brand) +
                                          "\n                  "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "m-0 text-muted text-small w-15 w-sm-100"
                                    },
                                    [
                                      _c("h6", [
                                        _vm._v("$ " + _vm._s(item.productPrice))
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges"
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "badge",
                                          class: item.badgeColor
                                        },
                                        [_vm._v(_vm._s(item.discount))]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex justify-content-between"
                                    },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            size: "sm",
                                            variant: "primary"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.addCart(item)
                                            }
                                          }
                                        },
                                        [_vm._v("Add Cart")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            size: "sm",
                                            variant: "outline-primary"
                                          },
                                          on: { click: _vm.viewCart }
                                        },
                                        [_vm._v("View Cart")]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                }),
                0
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "mt-4", attrs: { md: "12" } },
            [
              _c(
                "b-pagination",
                {
                  staticClass: "my-0 gull-pagination align-items-center",
                  attrs: {
                    "total-rows": _vm.totalRows,
                    "per-page": _vm.perPage,
                    align: "center",
                    "first-text": "",
                    "last-text": ""
                  },
                  on: { change: _vm.onPageChanged },
                  model: {
                    value: _vm.currentPage,
                    callback: function($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage"
                  }
                },
                [
                  _c(
                    "p",
                    {
                      staticClass: "list-arrow m-0",
                      attrs: { slot: "prev-text" },
                      slot: "prev-text"
                    },
                    [_c("i", { staticClass: "i-Arrow-Left text-40" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass: "list-arrow m-0",
                      attrs: { slot: "next-text" },
                      slot: "next-text"
                    },
                    [_c("i", { staticClass: "i-Arrow-Right text-40" })]
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

/***/ "./resources/js/views/app/apps/products.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/app/apps/products.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_vue_vue_type_template_id_1200e084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.vue?vue&type=template&id=1200e084& */ "./resources/js/views/app/apps/products.vue?vue&type=template&id=1200e084&");
/* harmony import */ var _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.vue?vue&type=script&lang=js& */ "./resources/js/views/app/apps/products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/app/apps/products.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _products_vue_vue_type_template_id_1200e084___WEBPACK_IMPORTED_MODULE_0__["render"],
  _products_vue_vue_type_template_id_1200e084___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/apps/products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/apps/products.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/app/apps/products.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/apps/products.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/apps/products.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/products.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/app/apps/products.vue?vue&type=template&id=1200e084&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/app/apps/products.vue?vue&type=template&id=1200e084& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_1200e084___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=template&id=1200e084& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/apps/products.vue?vue&type=template&id=1200e084&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_1200e084___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_1200e084___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);