(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _insight_insight_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insight/insight.component */ "./src/app/insight/insight.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drinkers/drinkers.component */ "./src/app/drinkers/drinkers.component.ts");
/* harmony import */ var _modification_modification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modification/modification.component */ "./src/app/modification/modification.component.ts");
/* harmony import */ var _query_interface_query_interface_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./query-interface/query-interface.component */ "./src/app/query-interface/query-interface.component.ts");
/* harmony import */ var _patterns_patterns_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patterns/patterns.component */ "./src/app/patterns/patterns.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bars'
    },
    {
        path: 'static',
        pathMatch: 'full',
        redirectTo: 'bars'
    },
    {
        path: 'bars',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    },
    {
        path: 'bars/:bar',
        pathMatch: 'full',
        component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__["BarDetailsComponent"]
    },
    {
        path: 'beers/:beer',
        pathMatch: 'full',
        component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__["BeerDetailsComponent"]
    },
    {
        path: 'beers',
        pathMatch: 'full',
        component: _beers_beers_component__WEBPACK_IMPORTED_MODULE_5__["BeersComponent"]
    },
    {
        path: 'insight',
        pathMatch: 'full',
        component: _insight_insight_component__WEBPACK_IMPORTED_MODULE_6__["InsightComponent"]
    },
    {
        path: 'drinkers',
        pathMatch: 'full',
        component: _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_8__["DrinkersComponent"]
    },
    {
        path: 'drinkers/:drinker',
        pathMatch: 'full',
        component: _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_7__["DrinkerDetailsComponent"]
    },
    {
        path: 'modify',
        pathMatch: 'full',
        component: _modification_modification_component__WEBPACK_IMPORTED_MODULE_9__["ModificationComponent"]
    },
    {
        path: 'query-interface',
        pathMatch: 'full',
        component: _query_interface_query_interface_component__WEBPACK_IMPORTED_MODULE_10__["QueryInterfaceComponent"]
    },
    {
        path: 'patterns',
        pathMatch: 'full',
        component: _patterns_patterns_component__WEBPACK_IMPORTED_MODULE_11__["PatternsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <h1 class=\"navbar-brand\">Bar Beer Drinker</h1>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/bars\" >Bars</a>\n      </li>\n      <li class=\"nav-item\" outerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/beers\">Beers</a>\n      </li>\n      <li class=\"nav-item\" outerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/insight\">Insight</a>\n      </li>\n      <li class=\"nav-item\" outerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/drinkers\">Drinkers</a>\n      </li>\n      <li class=\"nav-item\" outerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/modify\">Modify</a>\n      </li>\n      <li class=\"nav-item\" outerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/query-interface\">Queries</a>\n      </li>\n      <li class=\"nav-item\" outerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/patterns\">Patterns</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bar-beer-drinker-ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _insight_insight_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./insight/insight.component */ "./src/app/insight/insight.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./drinkers/drinkers.component */ "./src/app/drinkers/drinkers.component.ts");
/* harmony import */ var _modification_modification_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modification/modification.component */ "./src/app/modification/modification.component.ts");
/* harmony import */ var _query_interface_query_interface_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./query-interface/query-interface.component */ "./src/app/query-interface/query-interface.component.ts");
/* harmony import */ var _patterns_patterns_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./patterns/patterns.component */ "./src/app/patterns/patterns.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_10__["BarDetailsComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_11__["BeerDetailsComponent"],
                _beers_beers_component__WEBPACK_IMPORTED_MODULE_12__["BeersComponent"],
                _insight_insight_component__WEBPACK_IMPORTED_MODULE_13__["InsightComponent"],
                _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_14__["DrinkerDetailsComponent"],
                _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_15__["DrinkersComponent"],
                _modification_modification_component__WEBPACK_IMPORTED_MODULE_16__["ModificationComponent"],
                _query_interface_query_interface_component__WEBPACK_IMPORTED_MODULE_17__["QueryInterfaceComponent"],
                _patterns_patterns_component__WEBPACK_IMPORTED_MODULE_18__["PatternsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kZXRhaWxzL2Jhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{barName}}</h1>\n    <p class=\"bar-details\" *ngIf=\"barDetails\">\n      {{barDetails?.Address}}<span *ngIf=\"barDetails.Address && barDetails.City\"></span>, {{barDetails?.City}}\n      <br>\n      {{barDetails?.Number}}\n    </p>\n  </div>\n</div>\n\n\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Menu</h2>\n  <p-dropdown class=\"float-right text-left\" *ngIf=\"filterOptions\" [options]=\"filterOptions\" (onChange)=\"sortBy($event.value)\"></p-dropdown>\n  <br>\n  <br>\n  <p-table [value]=\"menu\" sortMode=\"multiple\" sortField=\"price\">\n      <ng-template pTemplate=\"header\">\n          <tr>\n              <th>Item</th>\n              <th>Manufacturer</th>\n              <th>Price</th>\n              <th>Likes</th>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-item>\n          <tr>\n              <td><a routerLink='/beers/{{ item.item }}'>{{item.item}}</a></td>\n              <td>{{ item.Manf }}</td>\n              <td>{{ item.price | currency}}</td>\n              <td>{{ item.Likes}}</td>\n          </tr>\n      </ng-template>\n  </p-table>\n  <br>\n  <br>\n  <div id=\"top_spenders_graph\"></div>\n  <br>\n  <br>\n  <div id=\"most_popular_items_graph\"></div>\n  <br>\n  <br>\n  <div id=\"most_popular_manfs_graph\"></div>\n  <br>\n  <br>\n  <div id=\"most_popular_times_graph\"></div>\n  <br>\n  <br>\n  <div id=\"most_popular_months_graph\"></div>\n  \n\n</div>\n"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDetailsComponent = /** @class */ (function () {
    function BarDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server.');
                }
            });
            barService.getMostPopularItems(_this.barName).subscribe(function (data) {
                var orders = [];
                var items = [];
                data.forEach(function (order) {
                    items.push(order.item);
                    orders.push(order.orders);
                });
                _this.renderChart(items, orders, 'most_popular_items_graph', "Most Popular Items", "Items", "Orders");
            });
            barService.getMostPopularManfs(_this.barName).subscribe(function (data) {
                var orders = [];
                var manfs = [];
                data.forEach(function (order) {
                    manfs.push(order.Manf);
                    orders.push(order.orders);
                });
                _this.renderChart(manfs, orders, 'most_popular_manfs_graph', "Most Popular Manufacturers", "Manufacturer", "Orders");
            });
            barService.getMostPopularTimes(_this.barName).subscribe(function (data) {
                var orders = [];
                var times = [];
                data.forEach(function (order) {
                    times.push(order.ttime);
                    orders.push(order.orders);
                });
                _this.renderChart(times, orders, 'most_popular_times_graph', "Most Popular Times", "Times", "Orders");
            });
            barService.getMostPopularMonths(_this.barName).subscribe(function (data) {
                var orders = [];
                var months = [];
                data.forEach(function (order) {
                    months.push(order.month);
                    orders.push(order.orders);
                });
                _this.renderChart(months, orders, 'most_popular_months_graph', "Most Popular Months", "Months", "Orders");
            });
            barService.getMenu(_this.barName).subscribe(function (data) {
                _this.menu = data;
            });
            barService.getTopSpenders(_this.barName).subscribe(function (data) {
                var totals = [];
                var drinkers = [];
                data.forEach(function (transaction) {
                    drinkers.push(transaction.drinker);
                    totals.push(transaction.total);
                });
                _this.renderChart(drinkers, totals, 'top_spenders_graph', "Top Spenders", "Drinkers", "Total");
            });
            _this.filterOptions = [
                {
                    'label': 'High price first',
                    'value': 'high price'
                },
                {
                    'label': 'Low price first',
                    'value': 'low price'
                },
                {
                    'label': 'Best Seller',
                    'value': 'best seller'
                }
            ];
        });
    }
    BarDetailsComponent.prototype.ngOnInit = function () {
    };
    BarDetailsComponent.prototype.sortBy = function (selectedOption) {
        if (selectedOption === 'low price') {
            this.menu.sort(function (a, b) {
                return a.price - b.price;
            });
        }
        else if (selectedOption === 'high price') {
            this.menu.sort(function (a, b) {
                return b.price - a.price;
            });
        }
        else if (selectedOption === 'best seller') {
            this.menu.sort(function (a, b) {
                return b.likes - a.likes;
            });
        }
    };
    BarDetailsComponent.prototype.renderChart = function (items, counts, graphName, title, xTitle, yTitle) {
        Highcharts.chart(graphName, {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            xAxis: {
                categories: items,
                title: {
                    text: xTitle
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: yTitle
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                item: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: true
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
        this.url = 'https://c274683.herokuapp.com';
    }
    BarsService.prototype.getBars = function () {
        return this.http.get(this.url + '/api/bars');
    };
    BarsService.prototype.getBar = function (bar) {
        return this.http.get('https://c274683.herokuapp.com' + '/api/bars/' + bar);
    };
    BarsService.prototype.getMenu = function (bar) {
        return this.http.get('https://c274683.herokuapp.com' + '/api/menu/' + bar);
    };
    BarsService.prototype.getFrequentCounts = function () {
        return this.http.get('https://c274683.herokuapp.com' + '/api/frequents-data');
    };
    BarsService.prototype.getTopSpenders = function (bar) {
        return this.http.get('https://c274683.herokuapp.com' + '/api/bars/' + bar + '/top_spenders');
    };
    BarsService.prototype.getMostPopularItems = function (bar) {
        return this.http.get(this.url + '/api/bars/' + bar + '/most_popular_items');
    };
    BarsService.prototype.getMostPopularManfs = function (bar) {
        return this.http.get(this.url + '/api/bars/' + bar + '/most_popular_manfs');
    };
    BarsService.prototype.getMostPopularTimes = function (bar) {
        return this.http.get(this.url + '/api/bars/' + bar + '/most_popular_times');
    };
    BarsService.prototype.getMostPopularMonths = function (bar) {
        return this.http.get(this.url + '/api/bars/' + bar + '/most_popular_months');
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXItZGV0YWlscy9iZWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{ beerName }}</h1>\n    <p class=\"beer-details\" *ngIf=\"beerManf\">\n      Made by <i>{{beerManf}}</i>\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <br>\n  <div>\n    <span class=\"font-weight-light result-count\">Sold at {{ beerLocations.length }} bars!</span>\n    <p-dropdown class=\"float-right text-left\" *ngIf=\"filterOptions\" [options]=\"filterOptions\" (onChange)=\"sortBy($event.value)\"></p-dropdown>\n  </div>\n  <br>\n\n  <p-table [value]=\"beerLocations\" sortMode=\"multiple\" sortField=\"price\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Bar</th>\n        <th>Price</th>\n        <th>Customers</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bar>\n      <tr>\n        <td><a routerLink=\"/bars/{{ bar.bar }}\">{{ bar.bar }}</a></td>\n        <td>{{ bar.price | currency }}</td>\n        <td>{{ bar.Customers }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br>\n  <br>\n  <div id=\"most_popular_bar_graph\"></div>\n  <br>\n  <br>\n  <div id=\"top_drinker_graph\"></div>\n  <br>\n  <br>\n  <div id=\"most_popular_times_graph_beer\"></div>\n</div>"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            _this.beerService.getBarsSelling(_this.beerName).subscribe(function (data) {
                _this.beerLocations = data;
            });
            _this.beerService.getManfs(_this.beerName).subscribe(function (data) {
                _this.beerManf = data;
            });
            _this.beerService.getMostPopularBar(_this.beerName).subscribe(function (data) {
                var orders = [];
                var bars = [];
                data.forEach(function (order) {
                    bars.push(order.bar);
                    orders.push(order.orders);
                });
                for (var i = bars.length; i > 10; i--) {
                    bars.pop();
                    orders.pop();
                }
                _this.renderChart(bars, orders, 'most_popular_bar_graph', "Top 10 Selling Bars", "Bars", "Orders");
            });
            _this.beerService.getTopDrinkers(_this.beerName).subscribe(function (data) {
                var orders = [];
                var drinkers = [];
                data.forEach(function (order) {
                    drinkers.push(order.drinker);
                    orders.push(order.orders);
                });
                for (var i = drinkers.length; i > 15; i--) {
                    drinkers.pop();
                    orders.pop();
                }
                _this.renderChart(drinkers, orders, 'top_drinker_graph', "Top 15 Consumers", "Drinkers", "Orders");
            });
            _this.beerService.getMostPopularTimes(_this.beerName).subscribe(function (data) {
                var orders = [];
                var times = [];
                data.forEach(function (order) {
                    times.push(order.ttime);
                    orders.push(order.orders);
                });
                for (var i = times.length; i > 15; i--) {
                    times.pop();
                    orders.pop();
                }
                _this.renderChart(times, orders, 'most_popular_times_graph_beer', "Most Popular Times", "Times", "Orders");
            });
            _this.filterOptions = [
                {
                    'label': 'High price first',
                    'value': 'high price'
                },
                {
                    'label': 'Low price first',
                    'value': 'low price'
                }
            ];
        });
    }
    BeerDetailsComponent.prototype.ngOnInit = function () {
    };
    BeerDetailsComponent.prototype.sortBy = function (selectedOption) {
        if (selectedOption === 'low price') {
            this.beerLocations.sort(function (a, b) {
                return a.price - b.price;
            });
        }
        else if (selectedOption === 'high price') {
            this.beerLocations.sort(function (a, b) {
                return b.price - a.price;
            });
        }
    };
    BeerDetailsComponent.prototype.renderChart = function (items, counts, graphName, title, xTitle, yTitle) {
        Highcharts.chart(graphName, {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            xAxis: {
                categories: items,
                title: {
                    text: xTitle
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: yTitle
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                item: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: true
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beers.service.ts":
/*!**********************************!*\
  !*** ./src/app/beers.service.ts ***!
  \**********************************/
/*! exports provided: BeersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersService", function() { return BeersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersService = /** @class */ (function () {
    function BeersService(http) {
        this.http = http;
        this.url = 'https://c274683.herokuapp.com';
    }
    BeersService.prototype.getBeers = function () {
        return this.http.get(this.url + '/api/beers');
    };
    BeersService.prototype.getBarsSelling = function (beer) {
        return this.http.get(this.url + '/api/beers/' + beer);
    };
    BeersService.prototype.getManfs = function (beer) {
        if (beer) {
            return this.http.get(this.url + 'api/manufacturer/' + beer);
        }
        return this.http.get(this.url + 'api/manufacturer');
    };
    BeersService.prototype.getMostPopularBar = function (beer) {
        return this.http.get(this.url + '/api/beers/' + beer + '/most_popular_bars');
    };
    BeersService.prototype.getTopDrinkers = function (beer) {
        return this.http.get(this.url + '/api/beers/' + beer + '/top_drinkers');
    };
    BeersService.prototype.getMostPopularTimes = function (beer) {
        return this.http.get(this.url + '/api/beers/' + beer + '/most_popular_times');
    };
    BeersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeersService);
    return BeersService;
}());



/***/ }),

/***/ "./src/app/beers/beers.component.css":
/*!*******************************************!*\
  !*** ./src/app/beers/beers.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXJzL2JlZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/beers/beers.component.html":
/*!********************************************!*\
  !*** ./src/app/beers/beers.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Find your favorite beers!</h1>\n    <p class=\"lead\">This page can be used to see all the beers in our system or just the ones by your preferred\n      manufacturer.</p>\n    <p-dropdown *ngIf=\"manufacturerOptions\" [ngClass]=\"{ 'no-option-selected': selectedManufacturer === undefined || selectedManufacturer === null }\"\n      placeholder=\"Filter by manufacturer\" [options]=\"manufacturerOptions\" [(ngModel)]=\"selectedManufacturer\" showClear=\"true\"\n      (onChange)=\"filterBeers($event.value)\"></p-dropdown>\n  </div>\n</div>\n<br>\n\n<div class=\"container\">\n  <p-table [value]=\"beers\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Manufacturer</th>\n        <th>Beer</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beer>\n      <tr>\n        <td>{{ beer.Manf }}</td>\n        <td><a routerLink=\"/beers/{{ beer.Name }}\">{{ beer.Name }}</a></td>\n      </tr>\n    </ng-template>\n  </p-table>\n  \n</div>"

/***/ }),

/***/ "./src/app/beers/beers.component.ts":
/*!******************************************!*\
  !*** ./src/app/beers/beers.component.ts ***!
  \******************************************/
/*! exports provided: BeersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersComponent", function() { return BeersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersComponent = /** @class */ (function () {
    function BeersComponent(beerService) {
        var _this = this;
        this.beerService = beerService;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beers = data;
            _this.originalBeersList = data;
        });
        this.beerService.getManfs().subscribe(function (data) {
            _this.manufacturerOptions = data.map(function (Manf) {
                return {
                    label: Manf,
                    value: Manf,
                };
            });
        });
    }
    BeersComponent.prototype.ngOnInit = function () {
    };
    BeersComponent.prototype.filterBeers = function (manufacturer) {
        this.beers = this.originalBeersList;
        if (manufacturer) {
            this.beers = this.originalBeersList.filter(function (beer) { return beer.Manf === manufacturer; });
        }
    };
    BeersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beers',
            template: __webpack_require__(/*! ./beers.component.html */ "./src/app/beers/beers.component.html"),
            styles: [__webpack_require__(/*! ./beers.component.css */ "./src/app/beers/beers.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"]])
    ], BeersComponent);
    return BeersComponent;
}());



/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItZGV0YWlscy9kcmlua2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">{{ drinkerName }}</h1>\n      <p class=\"drinker-details\" *ngIf=\"drinkerDetails\">\n          {{drinkerDetails?.street}}<span *ngIf=\"drinkerDetails.street && drinkerDetails.city\"></span>, {{drinkerDetails?.city}}\n          <br>\n          {{drinkerDetails?.phone}}\n      </p>\n    </div>\n</div>\n  \n<div class=\"container\">\n    <div>\n       <h2>Transactions</h2> \n    </div>\n    <p-table [value]=\"transactionDetails\" sortMode=\"multiple\" sortField=\"price\">\n        <ng-template pTemplate=\"header\">\n          <tr>\n            <th>ID</th>\n            <th>Bar</th>\n            <th>Date</th>\n            <th>Time</th>\n            <th>Total</th>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-transaction>\n          <tr>\n            <td>{{ transaction.id }}</td>\n            <td><a routerLink=\"/bars/{{ transaction.bar }}\">{{ transaction.bar }}</a></td>\n            <td>{{ transaction.date}}</td>\n            <td>{{ transaction.time }}</td>\n            <td>{{ transaction.total | currency }}</td>\n          </tr>\n        </ng-template>\n      </p-table>\n    <br>\n    <br>\n    <div id=\"ordered_most_graph\"></div>\n    <br>\n    <br>\n    <div id=\"transactions_graph\"></div>\n\n</div>\n  "

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.ts ***!
  \**************************************************************/
/*! exports provided: DrinkerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerDetailsComponent", function() { return DrinkerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrinkerDetailsComponent = /** @class */ (function () {
    function DrinkerDetailsComponent(drinkerService, route) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.drinkerName = paramMap.get('drinker');
            _this.drinkerService.getDrinker(_this.drinkerName).subscribe(function (data) {
                _this.drinkerDetails = data;
            });
            _this.drinkerService.getTransactions(_this.drinkerName).subscribe(function (data) {
                _this.transactionDetails = data;
                var totals = [];
                var ids = [];
                data.forEach(function (transaction) {
                    ids.push(transaction.id);
                    totals.push(transaction.total);
                });
                _this.renderChart(ids, totals, 'transactions_graph', "Transactions", "ID", "Total");
            });
            _this.drinkerService.getOrderedMost(_this.drinkerName).subscribe(function (data) {
                var items = [];
                var counts = [];
                data.forEach(function (item) {
                    items.push(item.item);
                    counts.push(item.ordered);
                });
                _this.renderChart(items, counts, 'ordered_most_graph', "Drinker's favorite items", "Items", "# of Orders");
            });
        });
    }
    DrinkerDetailsComponent.prototype.ngOnInit = function () {
    };
    DrinkerDetailsComponent.prototype.renderChart = function (items, counts, graphName, title, xTitle, yTitle) {
        Highcharts.chart(graphName, {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            xAxis: {
                categories: items,
                title: {
                    text: xTitle
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: yTitle
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                item: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: true
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    DrinkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-details',
            template: __webpack_require__(/*! ./drinker-details.component.html */ "./src/app/drinker-details/drinker-details.component.html"),
            styles: [__webpack_require__(/*! ./drinker-details.component.css */ "./src/app/drinker-details/drinker-details.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_1__["DrinkersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DrinkerDetailsComponent);
    return DrinkerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/drinkers.service.ts":
/*!*************************************!*\
  !*** ./src/app/drinkers.service.ts ***!
  \*************************************/
/*! exports provided: DrinkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersService", function() { return DrinkersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersService = /** @class */ (function () {
    function DrinkersService(http) {
        this.http = http;
        this.url = 'https://c274683.herokuapp.com';
    }
    DrinkersService.prototype.getDrinkers = function () {
        return this.http.get(this.url + '/api/drinkers');
    };
    DrinkersService.prototype.getDrinker = function (name) {
        return this.http.get(this.url + '/api/drinkers/' + name);
    };
    DrinkersService.prototype.getCities = function (city) {
        if (city) {
            return this.http.get(this.url + '/api/cities/' + city);
        }
        return this.http.get(this.url + '/api/cities');
    };
    DrinkersService.prototype.getOrderedMost = function (name) {
        return this.http.get(this.url + '/api/drinkers/' + name + '/orders_most');
    };
    DrinkersService.prototype.getTransactions = function (name) {
        return this.http.get(this.url + '/api/drinkers/' + name + '/transactions');
    };
    DrinkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DrinkersService);
    return DrinkersService;
}());



/***/ }),

/***/ "./src/app/drinkers/drinkers.component.css":
/*!*************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXJzL2RyaW5rZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/drinkers/drinkers.component.html":
/*!**************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Drinkers Directory</h1>\n      <p-dropdown *ngIf=\"cityOptions\" [ngClass]=\"{ 'no-option-selected': selectedCity === undefined || selectedCity === null }\"\n      placeholder=\"Filter by city\" [options]=\"cityOptions\" [(ngModel)]=\"selectedCity\" showClear=\"true\"\n      (onChange)=\"filterCities($event.value)\"></p-dropdown>\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <h2>Transactions</h2>\n    <p-table [value]=\"drinkers\">\n      <ng-template pTemplate=\"header\">\n          <tr>\n            <th>Name</th>\n            <th>Address</th>\n            <th>City</th>\n            <th>Phone</th>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-drinker>\n          <tr>\n            <td>\n              <a routerLink=\"/drinkers/{{drinker.drinker}}\">\n                {{ drinker.drinker }}\n              </a> \n            </td>\n            <td>{{ drinker.street }}</td>\n            <td>{{ drinker.city }}</td>\n            <td>{{ drinker.phone }}</td>\n          </tr>\n      </ng-template>\n  </p-table>\n  </div>"

/***/ }),

/***/ "./src/app/drinkers/drinkers.component.ts":
/*!************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.ts ***!
  \************************************************/
/*! exports provided: DrinkersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersComponent", function() { return DrinkersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersComponent = /** @class */ (function () {
    function DrinkersComponent(drinkerService) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.drinkerService.getDrinkers().subscribe(function (data) {
            _this.drinkers = data;
            _this.originalDrinkersList = data;
        });
        this.drinkerService.getCities().subscribe(function (data) {
            _this.cityOptions = data.map(function (city) {
                return {
                    label: city.city,
                    value: city.city,
                };
            });
        });
    }
    DrinkersComponent.prototype.ngOnInit = function () {
    };
    DrinkersComponent.prototype.filterCities = function (city) {
        this.drinkers = this.originalDrinkersList;
        if (city) {
            this.drinkers = this.originalDrinkersList.filter(function (drinker) { return drinker.city === city; });
        }
    };
    DrinkersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinkers',
            template: __webpack_require__(/*! ./drinkers.component.html */ "./src/app/drinkers/drinkers.component.html"),
            styles: [__webpack_require__(/*! ./drinkers.component.css */ "./src/app/drinkers/drinkers.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_1__["DrinkersService"]])
    ], DrinkersComponent);
    return DrinkersComponent;
}());



/***/ }),

/***/ "./src/app/insight/insight.component.css":
/*!***********************************************!*\
  !*** ./src/app/insight/insight.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lnaHQvaW5zaWdodC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/insight/insight.component.html":
/*!************************************************!*\
  !*** ./src/app/insight/insight.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div id=\"bargraph\"></div>\n</div>"

/***/ }),

/***/ "./src/app/insight/insight.component.ts":
/*!**********************************************!*\
  !*** ./src/app/insight/insight.component.ts ***!
  \**********************************************/
/*! exports provided: InsightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightComponent", function() { return InsightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsightComponent = /** @class */ (function () {
    function InsightComponent(barService) {
        var _this = this;
        this.barService = barService;
        this.barService.getFrequentCounts().subscribe(function (data) {
            var bars = [];
            var counts = [];
            data.forEach(function (bar) {
                bars.push(bar.bar);
                counts.push(bar.Frequents);
            });
            _this.renderChart(bars, counts);
        });
    }
    InsightComponent.prototype.ngOnInit = function () {
    };
    InsightComponent.prototype.renderChart = function (bars, counts) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Frequenting count at bars'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Bar'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of customers'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: true
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    InsightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insight',
            template: __webpack_require__(/*! ./insight.component.html */ "./src/app/insight/insight.component.html"),
            styles: [__webpack_require__(/*! ./insight.component.css */ "./src/app/insight/insight.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], InsightComponent);
    return InsightComponent;
}());



/***/ }),

/***/ "./src/app/modification.service.ts":
/*!*****************************************!*\
  !*** ./src/app/modification.service.ts ***!
  \*****************************************/
/*! exports provided: ModificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationService", function() { return ModificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModificationService = /** @class */ (function () {
    function ModificationService(http) {
        this.http = http;
        this.url = 'https://c274683.herokuapp.com';
    }
    ModificationService.prototype.sendBeerQuery = function (query) {
        return this.http.get(this.url + '/api/beerUpdate/' + query);
    };
    ModificationService.prototype.sendBarQuery = function (query) {
        return this.http.get(this.url + '/api/barUpdate/' + query);
    };
    ModificationService.prototype.sendDrinkerQuery = function (query) {
        return this.http.get(this.url + '/api/drinkerUpdate/' + query);
    };
    ModificationService.prototype.sendSellQuery = function (query) {
        return this.http.get(this.url + '/api/sellUpdate/' + query);
    };
    ModificationService.prototype.sendFrequentQuery = function (query) {
        return this.http.get(this.url + '/api/frequentUpdate/' + query);
    };
    ModificationService.prototype.sendLikeQuery = function (query) {
        return this.http.get(this.url + '/api/likeUpdate/' + query);
    };
    ModificationService.prototype.sendTotalQuery = function (query) {
        return this.http.get(this.url + '/api/totalUpdate/' + query);
    };
    ModificationService.prototype.sendTranQuery = function (query) {
        return this.http.get(this.url + '/api/tranUpdate/' + query);
    };
    ModificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModificationService);
    return ModificationService;
}());



/***/ }),

/***/ "./src/app/modification/modification.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modification/modification.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmaWNhdGlvbi9tb2RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modification/modification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modification/modification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    input{width: 500px;margin-right: 10px;}\n</style>\n\n<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Modify</h1>\n      <p class=\"lead\">Modify tables</p>\n    </div>\n</div>\n\n<div class=\"container\">\n        Beer Query:<br>\n        <input type=\"text\" [(ngModel)]=\"inputText\">\n        <button (click)=\"onClickBeers()\">Send query</button>\n        <br>\n        <br>\n\n        Bar Query:<br>\n        <input type=\"text\" [(ngModel)]=\"inputText2\">\n        <button (click)=\"onClickBars()\">Send query</button>\n        <br>\n        <br>\n\n        Drinker Query:<br>\n        <input type=\"text\" [(ngModel)]=\"inputText3\">\n        <button (click)=\"onClickDrinkers()\">Send query</button>\n        <br>\n        <br>\n\n        Sell Query:<br>\n        <input type=\"text\" [(ngModel)]=\"inputText4\">\n        <button (click)=\"onClickSells()\">Send query</button>\n        <br>\n        <br>\n\n        Frequent Query:<br>\n        <input type=\"text\" [(ngModel)]=\"inputText5\">\n        <button (click)=\"onClickFrequents()\">Send query</button>\n        <br>\n        <br>\n\n        Like Query:<br>\n        <input type=\"text\" [(ngModel)]=\"inputText6\">\n        <button (click)=\"onClickLikes()\">Send query</button>\n        <br>\n        <br>\n\n        Total Query:<br>\n        <input type=\"text\" [(ngModel)]=\"inputText7\">\n        <button (click)=\"onClickTotals()\">Send query</button>\n        <br>\n        <br>\n\n        Transaction Query:<br>\n        <input type=\"text\" [(ngModel)]=\"inputText8\">\n        <button (click)=\"onClickTrans()\">Send query</button>\n        <br>\n        <br>\n\n</div>"

/***/ }),

/***/ "./src/app/modification/modification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modification/modification.component.ts ***!
  \********************************************************/
/*! exports provided: ModificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationComponent", function() { return ModificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modification.service */ "./src/app/modification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModificationComponent = /** @class */ (function () {
    function ModificationComponent(modificationService) {
        this.modificationService = modificationService;
        this.inputText = "";
        this.inputText2 = "";
        this.inputText3 = "";
        this.inputText4 = "";
        this.inputText5 = "";
        this.inputText6 = "";
        this.inputText7 = "";
        this.inputText8 = "";
    }
    ModificationComponent.prototype.onClickBeers = function () {
        var _this = this;
        this.modificationService.sendBeerQuery(this.inputText).subscribe(function (data) {
            _this.trueOrFalse = data;
        });
    };
    ModificationComponent.prototype.onClickBars = function () {
        var _this = this;
        this.modificationService.sendBarQuery(this.inputText2).subscribe(function (data) {
            _this.trueOrFalse = data;
        });
    };
    ModificationComponent.prototype.onClickDrinkers = function () {
        var _this = this;
        this.modificationService.sendDrinkerQuery(this.inputText3).subscribe(function (data) {
            _this.trueOrFalse = data;
        });
    };
    ModificationComponent.prototype.onClickFrequents = function () {
        var _this = this;
        this.modificationService.sendFrequentQuery(this.inputText5).subscribe(function (data) {
            _this.trueOrFalse = data;
        });
    };
    ModificationComponent.prototype.onClickSells = function () {
        var _this = this;
        this.modificationService.sendSellQuery(this.inputText4).subscribe(function (data) {
            _this.trueOrFalse = data;
        });
    };
    ModificationComponent.prototype.onClickLikes = function () {
        var _this = this;
        this.modificationService.sendLikeQuery(this.inputText6).subscribe(function (data) {
            _this.trueOrFalse = data;
        });
    };
    ModificationComponent.prototype.onClickTotals = function () {
        var _this = this;
        this.modificationService.sendTotalQuery(this.inputText7).subscribe(function (data) {
            _this.trueOrFalse = data;
        });
    };
    ModificationComponent.prototype.onClickTrans = function () {
        var _this = this;
        this.modificationService.sendTranQuery(this.inputText8).subscribe(function (data) {
            _this.trueOrFalse = data;
        });
    };
    ModificationComponent.prototype.ngOnInit = function () {
    };
    ModificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modification',
            template: __webpack_require__(/*! ./modification.component.html */ "./src/app/modification/modification.component.html"),
            styles: [__webpack_require__(/*! ./modification.component.css */ "./src/app/modification/modification.component.css")],
        }),
        __metadata("design:paramtypes", [_modification_service__WEBPACK_IMPORTED_MODULE_1__["ModificationService"]])
    ], ModificationComponent);
    return ModificationComponent;
}());



/***/ }),

/***/ "./src/app/patterns.service.ts":
/*!*************************************!*\
  !*** ./src/app/patterns.service.ts ***!
  \*************************************/
/*! exports provided: PatternsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternsService", function() { return PatternsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatternsService = /** @class */ (function () {
    function PatternsService(http) {
        this.http = http;
        this.url = 'https://c274683.herokuapp.com';
    }
    PatternsService.prototype.getPatternOne = function () {
        return this.http.get(this.url + '/api/patternone');
    };
    PatternsService.prototype.getPatternTwo = function () {
        return this.http.get(this.url + '/api/patterntwo');
    };
    PatternsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PatternsService);
    return PatternsService;
}());



/***/ }),

/***/ "./src/app/patterns/patterns.component.css":
/*!*************************************************!*\
  !*** ./src/app/patterns/patterns.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdHRlcm5zL3BhdHRlcm5zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/patterns/patterns.component.html":
/*!**************************************************!*\
  !*** ./src/app/patterns/patterns.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Patterns</h1>\n      <p class=\"lead\">The required patterns</p>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div>\n       <h2>Frequents Pattern</h2> \n       <p>select frequents.drinker as drinker, frequents.bar as bar, drinkers.city as drinkerCity, bars.City as barCity \n          from frequents, drinkers, bars \n          where frequents.drinker = drinkers.drinker AND frequents.bar = bars.BarName AND drinkers.city = bars.city</p>\n    </div>\n    <p-table [value]=\"patternOneData\" sortMode=\"multiple\" sortField=\"price\">\n        <ng-template pTemplate=\"header\">\n          <tr>\n            <th>Drinker</th>\n            <th>Bar</th>\n            <th>Drinker City</th>\n            <th>Bar City</th>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-data>\n          <tr>\n            <td>{{ data.drinker }}</td>\n            <td>{{ data.bar }}</td>\n            <td>{{ data.drinkerCity }}</td>\n            <td>{{ data.barCity }}</td>\n          </tr>\n        </ng-template>\n      </p-table>\n    <br>\n    <br>\n</div>\n<div class=\"container\">\n    <div>\n       <h2>Time Pattern</h2> \n       <p>select id, ttime, open, close \n          from transactions, bars \n          where transactions.ttime > bars.open AND transactions.ttime < bars.close and transactions.bar = bars.BarName \n          group by id</p>\n    </div>\n    <p-table [value]=\"patternTwoData\" sortMode=\"multiple\" sortField=\"price\">\n        <ng-template pTemplate=\"header\">\n          <tr>\n            <th>ID</th>\n            <th>Time of transaction</th>\n            <th>Open hour</th>\n            <th>Close hour</th>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-data>\n          <tr>\n            <td>{{ data.id }}</td>\n            <td>{{ data.ttime }}</td>\n            <td>{{ data.open }}</td>\n            <td>{{ data.close }}</td>\n          </tr>\n        </ng-template>\n      </p-table>\n    <br>\n    <br>\n</div>"

/***/ }),

/***/ "./src/app/patterns/patterns.component.ts":
/*!************************************************!*\
  !*** ./src/app/patterns/patterns.component.ts ***!
  \************************************************/
/*! exports provided: PatternsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternsComponent", function() { return PatternsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _patterns_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patterns.service */ "./src/app/patterns.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatternsComponent = /** @class */ (function () {
    function PatternsComponent(patternsService) {
        var _this = this;
        this.patternsService = patternsService;
        this.patternsService.getPatternOne().subscribe(function (data) {
            _this.patternOneData = data;
        });
        this.patternsService.getPatternTwo().subscribe(function (data) {
            _this.patternTwoData = data;
        });
    }
    PatternsComponent.prototype.ngOnInit = function () {
    };
    PatternsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patterns',
            template: __webpack_require__(/*! ./patterns.component.html */ "./src/app/patterns/patterns.component.html"),
            styles: [__webpack_require__(/*! ./patterns.component.css */ "./src/app/patterns/patterns.component.css")]
        }),
        __metadata("design:paramtypes", [_patterns_service__WEBPACK_IMPORTED_MODULE_1__["PatternsService"]])
    ], PatternsComponent);
    return PatternsComponent;
}());



/***/ }),

/***/ "./src/app/query-interface.service.ts":
/*!********************************************!*\
  !*** ./src/app/query-interface.service.ts ***!
  \********************************************/
/*! exports provided: QueryInterfaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryInterfaceService", function() { return QueryInterfaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QueryInterfaceService = /** @class */ (function () {
    function QueryInterfaceService(http) {
        this.http = http;
        this.url = 'https://c274683.herokuapp.com';
    }
    QueryInterfaceService.prototype.sendTestQuery = function (query) {
        return this.http.get(this.url + '/api/testQuery/' + query);
    };
    QueryInterfaceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QueryInterfaceService);
    return QueryInterfaceService;
}());



/***/ }),

/***/ "./src/app/query-interface/query-interface.component.css":
/*!***************************************************************!*\
  !*** ./src/app/query-interface/query-interface.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXJ5LWludGVyZmFjZS9xdWVyeS1pbnRlcmZhY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/query-interface/query-interface.component.html":
/*!****************************************************************!*\
  !*** ./src/app/query-interface/query-interface.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    input{width: 500px;margin-right: 10px;}\n</style>\n\n<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Query Interface</h1>\n      <p class=\"lead\">Test SQL queries</p>\n    </div>\n</div>\n\n<div class=\"container\">\n    Test Query:<br>\n    <input type=\"text\" [(ngModel)]=\"inputText\">\n    <button (click)=\"onClickQuery()\">Send query</button>\n    <br>\n    <br>\n</div>\n\n\n<p-table [value]=\"queryData\" sortMode=\"multiple\">\n    \n    <ng-template pTemplate=\"body\" let-item>\n        <tr>\n            \n            <td>{{ item }}</td>\n\n        </tr>\n    </ng-template>\n</p-table>"

/***/ }),

/***/ "./src/app/query-interface/query-interface.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/query-interface/query-interface.component.ts ***!
  \**************************************************************/
/*! exports provided: QueryInterfaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryInterfaceComponent", function() { return QueryInterfaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _query_interface_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../query-interface.service */ "./src/app/query-interface.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QueryInterfaceComponent = /** @class */ (function () {
    function QueryInterfaceComponent(queryInterfaceService) {
        this.queryInterfaceService = queryInterfaceService;
        this.inputText = "";
    }
    QueryInterfaceComponent.prototype.onClickQuery = function () {
        var _this = this;
        this.queryInterfaceService.sendTestQuery(this.inputText).subscribe(function (data) {
            _this.queryData = data;
        });
    };
    QueryInterfaceComponent.prototype.ngOnInit = function () {
    };
    QueryInterfaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query-interface',
            template: __webpack_require__(/*! ./query-interface.component.html */ "./src/app/query-interface/query-interface.component.html"),
            styles: [__webpack_require__(/*! ./query-interface.component.css */ "./src/app/query-interface/query-interface.component.css")]
        }),
        __metadata("design:paramtypes", [_query_interface_service__WEBPACK_IMPORTED_MODULE_1__["QueryInterfaceService"]])
    ], QueryInterfaceComponent);
    return QueryInterfaceComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Welcome to Bar Beer Drinker!</h1>\n    <p class=\"lead\">This is a demo application for CS336.</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <p-table [value]=\"bars\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Name</th>\n          <th>Licence</th>\n          <th>Address</th>\n          <th>City</th>\n          <th>Phone</th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bar>\n        <tr>\n          <td>\n            <a routerLink=\"/bars/{{bar.BarName}}\">\n              {{ bar.BarName }}\n            </a> \n          </td>\n          <td>{{ bar.License }}</td>\n          <td>{{ bar.Address }}</td>\n          <td>{{ bar.City }}</td>\n          <td>{{ bar.Number }}</td>\n        </tr>\n    </ng-template>\n</p-table>\n</div>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(barService) {
        this.barService = barService;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.getBars();
    };
    WelcomeComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('Could not retrieve a list of bars');
        });
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/calvintang/Desktop/bar_beer_drinker/bar-beer-drinker-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map