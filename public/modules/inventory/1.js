(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/views/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/views/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "../../../node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "../../../node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "../../../node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_macbook_DevTools_erp_merge_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /Users/macbook/DevTools/erp-merge/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var common_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/mixins */ "./resources/js/common/mixins/index.js");
/* harmony import */ var common_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/util */ "./resources/js/common/util/index.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [common_mixins__WEBPACK_IMPORTED_MODULE_4__["InteractsWithQueryString"], common_mixins__WEBPACK_IMPORTED_MODULE_4__["PerPageable"], common_mixins__WEBPACK_IMPORTED_MODULE_4__["Paginatable"]],
  props: {
    resourceName: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      orderBy: '',
      orderByDirection: '',
      search: '',
      allMatchingResourceCount: 0,
      fields: [],
      resources: [],
      actions: [],
      filters: []
    };
  },
  methods: {
    getFilters: function getFilters() {
      this.filters = [{
        slug: 'product-status',
        name: 'Product Status',
        component: 'select-filter',
        currentValue: null,
        options: [{
          name: 'All',
          value: ''
        }, {
          name: 'Pending',
          value: '0'
        }, {
          name: 'Delivered',
          value: '1'
        }, {
          name: 'Canceled',
          value: '2'
        }]
      }, {
        slug: 'product-status2',
        name: 'Product Status2',
        component: 'select-filter',
        currentValue: null,
        options: [{
          name: 'All',
          value: ''
        }, {
          name: 'Pending',
          value: '0'
        }, {
          name: 'Delivered',
          value: '1'
        }, {
          name: 'Canceled',
          value: '2'
        }]
      }, {
        slug: 'product-title',
        name: 'Product Title',
        component: 'text-filter',
        currentValue: null,
        options: []
      }];
      this.filters = [];
    },
    getResources: function getResources() {
      var _this = this;

      this.loading = true;
      this.$nextTick(function () {
        return Object(common_util__WEBPACK_IMPORTED_MODULE_5__["Minimum"])(Object(common_util__WEBPACK_IMPORTED_MODULE_5__["Request"])().get('/api/' + _this.resourceName, {
          params: _this.resourceRequestQueryString
        }), 300).then(function (_ref) {
          var data = _ref.data;
          _this.resources = [];
          _this.resourceResponse = data;
          _this.resources = data.resources;
          _this.fields = data.fields;
          _this.perPage = data.per_page;
          _this.loading = false;

          _this.getAllMatchingResourceCount();
        });
      });
    },
    getAllMatchingResourceCount: function getAllMatchingResourceCount() {
      var _this2 = this;

      Object(common_util__WEBPACK_IMPORTED_MODULE_5__["Request"])().get('/api/' + this.resourceName + '/count', {
        params: this.resourceRequestQueryString
      }).then(function (response) {
        _this2.allMatchingResourceCount = response.data.count;
      });
    },
    orderByField: function orderByField(field) {
      var _this$updateQueryStri;

      var direction = this.currentOrderByDirection == 'asc' ? 'desc' : 'asc';

      if (this.currentOrderBy != field.attribute) {
        direction = 'asc';
      }

      this.updateQueryString((_this$updateQueryStri = {}, Object(_Users_macbook_DevTools_erp_merge_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$updateQueryStri, this.orderByParameter, field.attribute), Object(_Users_macbook_DevTools_erp_merge_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$updateQueryStri, this.orderByDirectionParameter, direction), _this$updateQueryStri));
    },
    performSearch: function performSearch(event) {
      if (event.which != 9) {
        this.updateQueryString(Object(_Users_macbook_DevTools_erp_merge_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, this.searchParameter, this.search));
      }
    },
    updatePerPageChanged: function updatePerPageChanged(perPage) {
      this.perPage = perPage;
      this.page = 1;
      this.perPageChanged();
    },
    selectPage: function selectPage(page) {
      this.updateQueryString(Object(_Users_macbook_DevTools_erp_merge_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, this.pageParameter, page));
    },
    initializeSearchFromQueryString: function initializeSearchFromQueryString() {
      this.search = this.currentSearch;
    },
    filterChanged: function filterChanged(filter) {
      this.updateFilter(filter);
      this.updateQueryString(Object(_Users_macbook_DevTools_erp_merge_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, this.filterParameter, this.currentEncodedFilters));
    },
    updateFilter: function updateFilter(updatedFilter) {
      var filter = _(this.filters).find(function (f) {
        return f.slug == updatedFilter.slug;
      });

      filter.currentValue = updatedFilter.value;
    },
    initializeFiltersFromQueryString: function initializeFiltersFromQueryString() {
      var _this3 = this;

      if (this.initialEncodedFilters) {
        var initialFilters = JSON.parse(atob(this.initialEncodedFilters));

        _.each(initialFilters, function (f) {
          _this3.updateFilter({
            slug: f.slug,
            value: f.value
          });
        });
      }
    }
  },
  computed: {
    currentOrderByDirection: function currentOrderByDirection() {
      return this.$route.query[this.orderByDirectionParameter] || 'desc';
    },
    orderByDirectionParameter: function orderByDirectionParameter() {
      return this.resourceName + '_direction';
    },
    currentOrderBy: function currentOrderBy() {
      return this.$route.query[this.orderByParameter] || '';
    },
    orderByParameter: function orderByParameter() {
      return this.resourceName + '_order';
    },
    resourceRequestQueryString: function resourceRequestQueryString() {
      return {
        search: this.currentSearch,
        orderBy: this.currentOrderBy,
        orderByDirection: this.currentOrderByDirection,
        perPage: this.currentPerPage,
        page: this.currentPage,
        filters: this.currentEncodedFilters
      };
    },
    currentSearch: function currentSearch() {
      return this.$route.query[this.searchParameter] || '';
    },
    currentEncodedFilters: function currentEncodedFilters() {
      return btoa(JSON.stringify(this.currentFilters));
    },
    currentFilters: function currentFilters() {
      return _.map(this.filters, function (f) {
        return {
          slug: f.slug,
          value: f.currentValue
        };
      });
    },
    initialEncodedFilters: function initialEncodedFilters() {
      return this.$route.query[this.filterParameter] || '';
    },
    searchParameter: function searchParameter() {
      return this.resourceName + '_search';
    },
    paginationComponent: function paginationComponent() {
      return 'pagination-links';
    },
    totalPages: function totalPages() {
      return Math.ceil(this.allMatchingResourceCount / this.currentPerPage);
    },
    perPageOptions: function perPageOptions() {
      return [25, 50, 100];
    },
    resourceCountLabel: function resourceCountLabel() {
      var first = this.perPage * (this.currentPage - 1);
      return this.resources.length && "".concat(first + 1, "-").concat(first + this.resources.length, " ").concat(this.__('of'), " ").concat(this.allMatchingResourceCount);
    },
    perPageParameter: function perPageParameter() {
      return this.resourceName + '_per_page';
    },
    pageParameter: function pageParameter() {
      return this.resourceName + '_page';
    },
    filterParameter: function filterParameter() {
      return this.resourceName + '_filter';
    }
  },
  created: function created() {
    var _this4 = this;

    console.log('Index Created');
    this.initializeSearchFromQueryString();
    this.getFilters();
    this.initializeFiltersFromQueryString();
    this.getResources();
    this.$watch(function () {
      return _this4.resourceName + _this4.currentOrderBy + _this4.currentOrderByDirection + _this4.currentSearch + _this4.currentEncodedFilters + _this4.currentPerPage + _this4.currentPage;
    }, function () {
      _this4.getResources();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inventory/views/item/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/inventory/views/item/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_views_Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/views/Index */ "./resources/js/common/views/Index.vue");
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [common_views_Index__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/views/Index.vue?vue&type=template&id=9a0fffaa&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/common/views/Index.vue?vue&type=template&id=9a0fffaa& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    [
      _c("page", {
        scopedSlots: _vm._u([
          {
            key: "body",
            fn: function() {
              return [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("portlet", {
                        attrs: { title: _vm.resourceName },
                        scopedSlots: _vm._u([
                          {
                            key: "head",
                            fn: function(ref) {
                              var title = ref.title
                              return [
                                _c(
                                  "div",
                                  { staticClass: "kt-portlet__head-label" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "kt-portlet__head-icon" },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "kt-font-brand flaticon2-line-chart"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "h3",
                                      { staticClass: "kt-portlet__head-title" },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.__(title)) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("h3")
                              ]
                            }
                          },
                          {
                            key: "body",
                            fn: function() {
                              return [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "row align-items-center" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-xl-8 order-2 order-xl-1"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "row align-items-center"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-md-4 kt-margin-b-20-tablet-and-mobile"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "kt-input-icon kt-input-icon--left"
                                                      },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value: _vm.search,
                                                              expression:
                                                                "search"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            type: "text",
                                                            placeholder:
                                                              _vm.__("Search") +
                                                              "..."
                                                          },
                                                          domProps: {
                                                            value: _vm.search
                                                          },
                                                          on: {
                                                            keypress: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                !$event.type.indexOf(
                                                                  "key"
                                                                ) &&
                                                                _vm._k(
                                                                  $event.keyCode,
                                                                  "enter",
                                                                  13,
                                                                  $event.key,
                                                                  "Enter"
                                                                )
                                                              ) {
                                                                return null
                                                              }
                                                              return _vm.performSearch(
                                                                $event
                                                              )
                                                            },
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.search =
                                                                $event.target.value
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "kt-input-icon__icon kt-input-icon__icon--left"
                                                          },
                                                          [
                                                            _c("span", [
                                                              _c("i", {
                                                                staticClass:
                                                                  "la la-search"
                                                              })
                                                            ])
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-xl-4 order-1 order-xl-2 kt-align-right"
                                          },
                                          [
                                            _c("create-button", {
                                              attrs: {
                                                "resource-name":
                                                  _vm.resourceName,
                                                classes: "btn btn-default"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("div", {
                                              staticClass:
                                                "kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10"
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "row align-items-center" },
                                      _vm._l(_vm.filters, function(filter) {
                                        return _c(filter.component, {
                                          key: filter.slug,
                                          tag: "component",
                                          attrs: { filter: filter },
                                          on: { change: _vm.filterChanged }
                                        })
                                      }),
                                      1
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--loaded"
                                  },
                                  [
                                    _c("resource-table", {
                                      attrs: {
                                        fields: _vm.fields,
                                        resources: _vm.resources,
                                        actions: _vm.actions,
                                        "resource-name": _vm.resourceName
                                      },
                                      on: { order: _vm.orderByField }
                                    }),
                                    _vm._v(" "),
                                    _vm.resources.length > 0
                                      ? _c(
                                          _vm.paginationComponent,
                                          {
                                            tag: "component",
                                            attrs: {
                                              pages: _vm.totalPages,
                                              page: _vm.currentPage,
                                              "per-page": _vm.currentPerPage,
                                              "per-page-options":
                                                _vm.perPageOptions
                                            },
                                            on: {
                                              page: _vm.selectPage,
                                              "per-page":
                                                _vm.updatePerPageChanged
                                            }
                                          },
                                          [
                                            _vm.resourceCountLabel
                                              ? _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.resourceCountLabel
                                                    )
                                                  )
                                                ])
                                              : _vm._e()
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      })
                    ],
                    1
                  )
                ])
              ]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/common/mixins/FormField.js":
/*!*************************************************!*\
  !*** ./resources/js/common/mixins/FormField.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.fill */ "../../../node_modules/core-js/modules/es6.array.fill.js");
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    field: {}
  },
  data: function data() {
    return {
      value: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.setInitialValue();
    this.field.fill = this.fill;
    bus.$on(this.field.attribute + '-value', function (value) {
      _this.value = value;
    });
  },
  destroyed: function destroyed() {
    bus.$off(this.field.attribute + '-value');
  },
  methods: {
    setInitialValue: function setInitialValue() {
      this.value = !(this.field.value === undefined || this.field.value === null) ? this.field.value : '';
    },
    fill: function fill(formData) {
      formData.append(this.field.attribute, String(this.value));
    },
    handleChange: function handleChange(value) {
      this.value = value;
    }
  },
  computed: {
    isReadonly: function isReadonly() {
      return this.field.readonly || _.get(this.field, 'extraAttributes.readonly');
    },
    fieldLayout: function fieldLayout() {
      return this.field.layout == 'inline' ? 'inline-field' : 'default-field';
    }
  }
});

/***/ }),

/***/ "./resources/js/common/mixins/HandlesValidationErrors.js":
/*!***************************************************************!*\
  !*** ./resources/js/common/mixins/HandlesValidationErrors.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var form_backend_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-backend-validation */ "./node_modules/form-backend-validation/dist/index.js");
/* harmony import */ var form_backend_validation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_backend_validation__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    errors: {
      default: function _default() {
        return new form_backend_validation__WEBPACK_IMPORTED_MODULE_0__["Errors"]();
      }
    }
  },
  data: function data() {
    return {
      errorClass: 'border-danger'
    };
  },
  computed: {
    errorClasses: function errorClasses() {
      return this.hasError ? [this.errorClass] : [];
    },
    fieldAttribute: function fieldAttribute() {
      return this.field.attribute;
    },
    hasError: function hasError() {
      return this.errors.has(this.fieldAttribute);
    },
    firstError: function firstError() {
      if (this.hasError) {
        return this.errors.first(this.fieldAttribute);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/common/mixins/InteractsWithQueryString.js":
/*!****************************************************************!*\
  !*** ./resources/js/common/mixins/InteractsWithQueryString.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/defaults */ "./node_modules/lodash/defaults.js");
/* harmony import */ var lodash_defaults__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_defaults__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    /**
     * Update the given query string values.
     */
    updateQueryString: function updateQueryString(value) {
      this.$router.push({
        query: lodash_defaults__WEBPACK_IMPORTED_MODULE_0___default()(value, this.$route.query)
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/common/mixins/Paginatable.js":
/*!***************************************************!*\
  !*** ./resources/js/common/mixins/Paginatable.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_macbook_DevTools_erp_merge_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/macbook/DevTools/erp-merge/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    selectPreviousPage: function selectPreviousPage() {
      this.updateQueryString(Object(_Users_macbook_DevTools_erp_merge_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.pageParameter, this.currentPage - 1));
    },
    selectNextPage: function selectNextPage() {
      this.updateQueryString(Object(_Users_macbook_DevTools_erp_merge_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.pageParameter, this.currentPage + 1));
    }
  },
  computed: {
    currentPage: function currentPage() {
      return parseInt(this.$route.query[this.pageParameter] || 1);
    }
  }
});

/***/ }),

/***/ "./resources/js/common/mixins/PerPageable.js":
/*!***************************************************!*\
  !*** ./resources/js/common/mixins/PerPageable.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_macbook_DevTools_erp_merge_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/macbook/DevTools/erp-merge/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "../../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      perPage: 25
    };
  },
  methods: {
    initializePerPageFromQueryString: function initializePerPageFromQueryString() {
      this.perPage = this.currentPerPage;
    },
    perPageChanged: function perPageChanged() {
      var _this$updateQueryStri;

      this.updateQueryString((_this$updateQueryStri = {}, Object(_Users_macbook_DevTools_erp_merge_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$updateQueryStri, this.perPageParameter, this.perPage), Object(_Users_macbook_DevTools_erp_merge_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$updateQueryStri, this.pageParameter, this.page), _this$updateQueryStri));
    }
  },
  computed: {
    currentPerPage: function currentPerPage() {
      return parseInt(this.$route.query[this.perPageParameter]) || 25;
    }
  }
});

/***/ }),

/***/ "./resources/js/common/mixins/index.js":
/*!*********************************************!*\
  !*** ./resources/js/common/mixins/index.js ***!
  \*********************************************/
/*! exports provided: InteractsWithQueryString, HandlesValidationErrors, Paginatable, PerPageable, FormField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InteractsWithQueryString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InteractsWithQueryString */ "./resources/js/common/mixins/InteractsWithQueryString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractsWithQueryString", function() { return _InteractsWithQueryString__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _HandlesValidationErrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HandlesValidationErrors */ "./resources/js/common/mixins/HandlesValidationErrors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HandlesValidationErrors", function() { return _HandlesValidationErrors__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Paginatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Paginatable */ "./resources/js/common/mixins/Paginatable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paginatable", function() { return _Paginatable__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _PerPageable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PerPageable */ "./resources/js/common/mixins/PerPageable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerPageable", function() { return _PerPageable__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormField */ "./resources/js/common/mixins/FormField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormField", function() { return _FormField__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./resources/js/common/util/capitalize.js":
/*!************************************************!*\
  !*** ./resources/js/common/util/capitalize.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/upperFirst */ "./node_modules/lodash/upperFirst.js");
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_upperFirst__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (string) {
  return lodash_upperFirst__WEBPACK_IMPORTED_MODULE_0___default()(string);
});

/***/ }),

/***/ "./resources/js/common/util/index.js":
/*!*******************************************!*\
  !*** ./resources/js/common/util/index.js ***!
  \*******************************************/
/*! exports provided: Errors, Inflector, Capitalize, Minimum, SingularOrPlural, Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inflector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inflector-js */ "./node_modules/inflector-js/index.js");
/* harmony import */ var inflector_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inflector_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Inflector", function() { return inflector_js__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capitalize */ "./resources/js/common/util/capitalize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Capitalize", function() { return _capitalize__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _minimum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minimum */ "./resources/js/common/util/minimum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Minimum", function() { return _minimum__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var form_backend_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! form-backend-validation */ "./node_modules/form-backend-validation/dist/index.js");
/* harmony import */ var form_backend_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(form_backend_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return form_backend_validation__WEBPACK_IMPORTED_MODULE_3__["Errors"]; });

/* harmony import */ var _singularOrPlural__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./singularOrPlural */ "./resources/js/common/util/singularOrPlural.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingularOrPlural", function() { return _singularOrPlural__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request */ "./resources/js/common/util/request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return _request__WEBPACK_IMPORTED_MODULE_5__["default"]; });

// Util








/***/ }),

/***/ "./resources/js/common/util/minimum.js":
/*!*********************************************!*\
  !*** ./resources/js/common/util/minimum.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "../../../node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "../../../node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "../../../node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (originalPromise) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return Promise.all([originalPromise, new Promise(function (resolve) {
    setTimeout(function () {
      return resolve();
    }, delay);
  })]).then(function (result) {
    return result[0];
  });
}); // Usage
// minimum(axios.get('/'))
//     .then(response => console.log('done'))
//     .catch(error => console.log(error))

/***/ }),

/***/ "./resources/js/common/util/request.js":
/*!*********************************************!*\
  !*** ./resources/js/common/util/request.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  if (options !== undefined) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
  }

  var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: window.config.base
  });
  instance.defaults.headers.common['lang'] = window.config.lang;
  instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  return instance;
});

/***/ }),

/***/ "./resources/js/common/util/singularOrPlural.js":
/*!******************************************************!*\
  !*** ./resources/js/common/util/singularOrPlural.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return singularOrPlural; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./resources/js/common/util/index.js");

function singularOrPlural(value, suffix) {
  if (value > 1 || value == 0) return ___WEBPACK_IMPORTED_MODULE_0__["Inflector"].pluralize(suffix);
  return ___WEBPACK_IMPORTED_MODULE_0__["Inflector"].singularize(suffix);
}

/***/ }),

/***/ "./resources/js/common/views/Index.vue":
/*!*********************************************!*\
  !*** ./resources/js/common/views/Index.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_9a0fffaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=9a0fffaa& */ "./resources/js/common/views/Index.vue?vue&type=template&id=9a0fffaa&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/common/views/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_9a0fffaa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_9a0fffaa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/common/views/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/common/views/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/common/views/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/views/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/common/views/Index.vue?vue&type=template&id=9a0fffaa&":
/*!****************************************************************************!*\
  !*** ./resources/js/common/views/Index.vue?vue&type=template&id=9a0fffaa& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9a0fffaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=9a0fffaa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/common/views/Index.vue?vue&type=template&id=9a0fffaa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9a0fffaa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_9a0fffaa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/inventory/views/item/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/inventory/views/item/Index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/inventory/views/item/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/inventory/views/item/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/inventory/views/item/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/inventory/views/item/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/inventory/views/item/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);