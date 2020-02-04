(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["students-students-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/students/student-list-item/student-list-item.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/students/student-list-item/student-list-item.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<td>{{ student.firstName }} {{ student.lastName }}</td>\r\n<td>\r\n    <ol>\r\n        <li *ngFor=\"let course of student.courses\">{{course.name}}</li>\r\n    </ol>\r\n</td>\r\n<td [ngClass]=\"{ 'red': student.score < 8 , 'green': student.score >= 8 }\" class=\"center\">{{student.score}}</td>\r\n<td class=\"center\">\r\n    <button type=\"submit\" class=\"btn btn-blue\" (click)=\"editStud(student)\"><i class=\"fa fa-pen\"></i></button>\r\n    <button type=\"submit\" class=\"btn btn-red\" (click)=\"delStud(student.id)\"><i class=\"fa fa-trash\"></i></button>\r\n</td>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/students/student-list/student-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/students/student-list/student-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap\">\n  <div class=\"table\">\n    <table *ngIf=\"studentsToShow\" width=\"100%\" cellpadding=\"10\" cellspacing=\"10\">\n      <tr>\n        <th>Full Name</th>\n        <th>Courses</th>\n        <th>Score</th>\n        <th>Buttons</th>\n      </tr>\n        <ng-container *ngFor='let student of studentsToShow'>\n          <tr app-student-list-item [student]=\"student\" (editEvent)=\"editStudent($event)\" (delEvent)=\"delStudent($event)\"></tr>\n        </ng-container>\n    </table>\n  </div>\n  <div class=\"students-aside\">\n    <ul>\n      <li class=\"srch\">\n        <input \n          [(ngModel)]=\"searchQuery\" \n          (ngModelChange)=\"search()\" \n          placeholder=\"Search by name\" \n          type='text' \n          id=\"search\"\n        >\n        <label for=\"search\" class=\"icon\"><i class=\"fa fa-search\"></i></label>\n      </li>\n      <li><a routerLink=\"student\"><i class=\"fa fa-user-plus\"></i> Create Student</a></li>\n    </ul>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/students/student/student.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/students/student/student.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"student-form\">\n  <h2><i class=\"fa fa-user-graduate\"></i> {{ title }} student</h2>\n  <hr>\n  <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"addStudent()\">\n    <div class=\"stud-info\">\n      <input type=\"text\" placeholder=\"First Name\" formControlName=\"firstName\"><br>\n      <div class=\"alert\" *ngIf=\"formSubmitted && form.get('firstName').errors?.required\">^ Field is empty</div>\n      <input type=\"text\" placeholder=\"Last Name\" formControlName=\"lastName\"><br>\n      <div class=\"alert\" *ngIf=\"formSubmitted && form.get('lastName').errors?.required\">^ Field is empty</div>\n      <input type=\"number\" placeholder=\"Score\" formControlName=\"score\">\n    </div>\n    <div class=\"stud-info\" *ngIf=\"courseAdded\">\n      <hr><h3><i class=\"fa fa-book-open\"></i> Courses</h3>\n      <div [formGroup]=\"courseFG\" class=\"form-group\" *ngFor=\"let courseFG of form.get('courses').controls\">\n        <input type=\"text\" placeholder=\"Course\" formControlName=\"name\">\n        <div class=\"alert\" *ngIf=\"formSubmitted && courseFG.get('name').errors?.required\">^ Field is empty</div>\n      </div>\n    </div>\n    <hr>\n    <a (click)=\"router.navigate(['students'])\" class=\"btn btn-link\"><i class=\"fa fa-chevron-left\"></i> Go back</a>\n    <button type=\"button\" (click)=\"addCourse()\" class=\"btn btn-blue\"><i class=\"fa fa-plus\"></i> Add course</button>\n    <button type=\"submit\" class=\"btn btn-green\"><i class=\"fa fa-check\"></i> {{ title }}</button>\n  </form>\n</div>");

/***/ }),

/***/ "./src/app/students/student-list-item/student-list-item.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/students/student-list-item/student-list-item.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".red {\n  background: #f5c7cb;\n  color: #771122;\n}\n\n.green {\n  background: #c8ecc7;\n  color: #13660b;\n}\n\n.center {\n  text-align: center;\n}\n\ntd {\n  border-radius: 5px;\n  border: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMvc3R1ZGVudC1saXN0LWl0ZW0vQzpcXFVzZXJzXFxtYWRpeVxcbXktZHJlYW0tYXBwL3NyY1xcYXBwXFxzdHVkZW50c1xcc3R1ZGVudC1saXN0LWl0ZW1cXHN0dWRlbnQtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50cy9zdHVkZW50LWxpc3QtaXRlbS9zdHVkZW50LWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudHMvc3R1ZGVudC1saXN0LWl0ZW0vc3R1ZGVudC1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWM3Y2I7XHJcbiAgICBjb2xvcjogIzc3MTEyMjtcclxufVxyXG4uZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogI2M4ZWNjNztcclxuICAgIGNvbG9yOiAjMTM2NjBiO1xyXG59XHJcbi5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnRkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn0iLCIucmVkIHtcbiAgYmFja2dyb3VuZDogI2Y1YzdjYjtcbiAgY29sb3I6ICM3NzExMjI7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICNjOGVjYzc7XG4gIGNvbG9yOiAjMTM2NjBiO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/students/student-list-item/student-list-item.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/students/student-list-item/student-list-item.component.ts ***!
  \***************************************************************************/
/*! exports provided: StudentListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListItemComponent", function() { return StudentListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StudentListItemComponent = class StudentListItemComponent {
    constructor() {
        this.delEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    // EDIT STUDENT
    editStud(student) {
        this.editEvent.emit(student);
    }
    // DELETE STUDENT
    delStud(id) {
        this.delEvent.emit(id);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StudentListItemComponent.prototype, "student", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], StudentListItemComponent.prototype, "delEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], StudentListItemComponent.prototype, "editEvent", void 0);
StudentListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[app-student-list-item]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/students/student-list-item/student-list-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-list-item.component.scss */ "./src/app/students/student-list-item/student-list-item.component.scss")).default]
    })
], StudentListItemComponent);



/***/ }),

/***/ "./src/app/students/student-list/student-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/students/student-list/student-list.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap {\n  display: -webkit-box;\n  display: flex;\n}\n.wrap .table {\n  flex-basis: 80%;\n  margin-right: 10px;\n}\n.wrap .table table {\n  font-size: 1.2rem;\n  border: 1px solid #aaa;\n  border-radius: 10px;\n}\n.wrap .table table tr th {\n  background: var(--color-header);\n  border-radius: 5px;\n}\n.wrap .table table tr:hover {\n  background: #eee;\n  box-shadow: 0 0 0.6em rgba(0, 0, 0, 0.1);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.wrap .students-aside {\n  flex-basis: 20%;\n  padding: 20px;\n  background: #f4fff4;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n}\n.wrap .students-aside ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);\n}\n.wrap .students-aside ul li {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.wrap .students-aside ul li:first-child {\n  border-radius: 10px 10px 0 0;\n}\n.wrap .students-aside ul li:last-child {\n  border-radius: 0 0 10px 10px;\n}\n.wrap .students-aside ul li:last-child > * {\n  border-radius: 0 0 10px 10px;\n}\n.wrap .students-aside ul li.srch {\n  display: -webkit-box;\n  display: flex;\n  background: #fff;\n}\n.wrap .students-aside ul li.srch .icon {\n  display: block;\n  padding: 15px;\n}\n.wrap .students-aside ul li.srch #search {\n  padding: 15px;\n  margin: 0;\n  border: none;\n  border-radius: 10px 10px 0 0;\n}\n.wrap .students-aside ul li a {\n  display: block;\n  padding: 15px;\n  color: #555;\n  text-decoration: none;\n  background: rgba(20, 92, 6, 0.274);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.wrap .students-aside ul li a:hover {\n  background: rgba(20, 92, 6, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMvc3R1ZGVudC1saXN0L0M6XFxVc2Vyc1xcbWFkaXlcXG15LWRyZWFtLWFwcC9zcmNcXGFwcFxcc3R1ZGVudHNcXHN0dWRlbnQtbGlzdFxcc3R1ZGVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50cy9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDQ0o7QURBSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERFE7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNHWjtBRERnQjtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7QUNHcEI7QUREZ0I7RUFDSSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0dwQjtBREVJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRENRO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtBQ0NaO0FEQVk7RUFDSSwyQ0FBQTtBQ0VoQjtBRERnQjtFQUNJLDRCQUFBO0FDR3BCO0FERGdCO0VBQ0ksNEJBQUE7QUNHcEI7QURGb0I7RUFDSSw0QkFBQTtBQ0l4QjtBRERnQjtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0FDR3BCO0FERm9CO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUNJeEI7QURGb0I7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ0l4QjtBRERnQjtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDR3BCO0FERm9CO0VBQ0ksZ0NBQUE7QUNJeEIiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50cy9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC50YWJsZSB7XHJcbiAgICAgICAgZmxleC1iYXNpczogODAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItaGVhZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAuNmVtIHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN0dWRlbnRzLWFzaWRlIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiAyMCU7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ0LCAyNTUsIDI0NCk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICA+KiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5zcmNoIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgI3NlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjAsIDkyLCA2LCAwLjI3NCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMCwgOTIsIDYsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLndyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLndyYXAgLnRhYmxlIHtcbiAgZmxleC1iYXNpczogODAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ud3JhcCAudGFibGUgdGFibGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi53cmFwIC50YWJsZSB0YWJsZSB0ciB0aCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWhlYWRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi53cmFwIC50YWJsZSB0YWJsZSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjZlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4ud3JhcCAuc3R1ZGVudHMtYXNpZGUge1xuICBmbGV4LWJhc2lzOiAyMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmNGZmZjQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ud3JhcCAuc3R1ZGVudHMtYXNpZGUgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ud3JhcCAuc3R1ZGVudHMtYXNpZGUgdWwgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLndyYXAgLnN0dWRlbnRzLWFzaWRlIHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbn1cbi53cmFwIC5zdHVkZW50cy1hc2lkZSB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbn1cbi53cmFwIC5zdHVkZW50cy1hc2lkZSB1bCBsaTpsYXN0LWNoaWxkID4gKiB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG59XG4ud3JhcCAuc3R1ZGVudHMtYXNpZGUgdWwgbGkuc3JjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ud3JhcCAuc3R1ZGVudHMtYXNpZGUgdWwgbGkuc3JjaCAuaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLndyYXAgLnN0dWRlbnRzLWFzaWRlIHVsIGxpLnNyY2ggI3NlYXJjaCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xufVxuLndyYXAgLnN0dWRlbnRzLWFzaWRlIHVsIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICM1NTU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMCwgOTIsIDYsIDAuMjc0KTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi53cmFwIC5zdHVkZW50cy1hc2lkZSB1bCBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMCwgOTIsIDYsIDAuNSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/students/student-list/student-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/students/student-list/student-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _student_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../student-rest.service */ "./src/app/students/student-rest.service.ts");




let StudentListComponent = class StudentListComponent {
    constructor(studentRestService, router) {
        this.studentRestService = studentRestService;
        this.router = router;
        this.searchQuery = '';
        this.studentsToShow = [];
        this.students = [];
    }
    ngOnInit() {
        this.getStudents();
        this.studentsToShow = [...this.students];
    }
    // GET STUDENTS
    getStudents() {
        this.studentRestService.getStudents()
            .subscribe(students => {
            this.students = students;
            this.studentsToShow = [...this.students];
        });
    }
    // SEARCH STUDENT BY NAME
    search() {
        this.studentsToShow = this.students.filter(student => student.firstName.toLocaleLowerCase().includes(this.searchQuery.toLocaleLowerCase()));
    }
    // DELETE STUDENT
    delStudent(id) {
        this.studentRestService.deleteStudent(id)
            .subscribe(student => {
            this.getStudents();
        });
    }
    // EDIT STUDENT
    editStudent(student) {
        this.router.navigate(['students/student', student.id]);
    }
};
StudentListComponent.ctorParameters = () => [
    { type: _student_rest_service__WEBPACK_IMPORTED_MODULE_3__["StudentRestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/students/student-list/student-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-list.component.scss */ "./src/app/students/student-list/student-list.component.scss")).default]
    })
], StudentListComponent);



/***/ }),

/***/ "./src/app/students/student-rest.service.ts":
/*!**************************************************!*\
  !*** ./src/app/students/student-rest.service.ts ***!
  \**************************************************/
/*! exports provided: StudentRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRestService", function() { return StudentRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let StudentRestService = class StudentRestService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://ca-api.witharts.kz';
        // this.http;
    }
    // ALL STUDS
    getStudents() {
        return this.http.get(`${this.apiUrl}/students`);
    }
    // ONE STUD
    getStudent(id) {
        return this.http.get(`${this.apiUrl}/students/${id}`);
    }
    // NEW STUD
    createStudent(student) {
        return this.http.post(`${this.apiUrl}/students`, student);
    }
    // DEL STUD
    deleteStudent(id) {
        return this.http.delete(`${this.apiUrl}/students/${id}`);
    }
    // PUT STUD
    updateStudent(student) {
        return this.http.put(`${this.apiUrl}/students/${student.id}`, student);
    }
};
StudentRestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
StudentRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], StudentRestService);



/***/ }),

/***/ "./src/app/students/student/student.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/students/student/student.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".student-form {\n  max-width: 500px;\n  margin: 20px auto;\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.3);\n  border-radius: 15px;\n  padding: 10px;\n}\n.student-form h2, .student-form h3 {\n  margin: 0;\n  padding: 10px;\n}\n.student-form hr {\n  border: 0;\n  border-top: 1px solid #ddd;\n}\n.student-form .stud-info {\n  padding: 10px;\n}\n.student-form .alert {\n  padding: 10px;\n  margin: 5px;\n  border: 1px solid #f18484;\n  border-radius: 10px;\n  background: #ffc3c3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMvc3R1ZGVudC9DOlxcVXNlcnNcXG1hZGl5XFxteS1kcmVhbS1hcHAvc3JjXFxhcHBcXHN0dWRlbnRzXFxzdHVkZW50XFxzdHVkZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50cy9zdHVkZW50L3N0dWRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0ksU0FBQTtFQUNBLGFBQUE7QUNFUjtBREFJO0VBQ0ksU0FBQTtFQUNBLDBCQUFBO0FDRVI7QURBSTtFQUNJLGFBQUE7QUNFUjtBREFJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHVkZW50LWZvcm0ge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGgyLCBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBociB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgfVxyXG4gICAgLnN0dWQtaW5mbyB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIC5hbGVydCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQxLCAxMzIsIDEzMik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxOTUsIDE5NSk7XHJcbiAgICB9XHJcbn1cclxuICAgICAgICAiLCIuc3R1ZGVudC1mb3JtIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnN0dWRlbnQtZm9ybSBoMiwgLnN0dWRlbnQtZm9ybSBoMyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zdHVkZW50LWZvcm0gaHIge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xufVxuLnN0dWRlbnQtZm9ybSAuc3R1ZC1pbmZvIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zdHVkZW50LWZvcm0gLmFsZXJ0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMTg0ODQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmMzYzM7XG59Il19 */");

/***/ }),

/***/ "./src/app/students/student/student.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/students/student/student.component.ts ***!
  \*******************************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _student_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../student-rest.service */ "./src/app/students/student-rest.service.ts");





let StudentComponent = class StudentComponent {
    constructor(studentRestService, router, route) {
        this.studentRestService = studentRestService;
        this.router = router;
        this.route = route;
        this.formSubmitted = false;
        this.courseAdded = false;
        this.title = 'Create';
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            score: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            courses: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
        });
        // GET STUDENT BY ID AND SET TO FORM
        this.route.params.subscribe(params => {
            if (params.id) {
                this.title = 'Edit';
                this.studentRestService.getStudent(params.id)
                    .subscribe(student => {
                    this.student = student;
                    this.form.patchValue(this.student);
                    if (this.student.courses) {
                        this.courseAdded = true;
                        this.student.courses.forEach(course => {
                            const controls = this.form.get('courses');
                            controls.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](course.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                            }));
                        });
                    }
                });
            }
        });
    }
    // ADD COURSE
    addCourse() {
        this.courseAdded = true;
        const arrayControl = this.form.get('courses');
        arrayControl.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        }));
    }
    // ADD/EDIT NEW STUDENT
    addStudent() {
        if (!this.form.valid) {
            this.formSubmitted = true;
            return;
        }
        const newStudent = {
            firstName: this.form.get('firstName').value,
            lastName: this.form.get('lastName').value,
            score: this.form.get('score').value,
            courses: this.form.get('courses').value,
        };
        // UPDATE STUDENT
        if (this.student) {
            this.student = Object.assign({}, this.student, newStudent);
            this.studentRestService.updateStudent(this.student).
                subscribe(student => {
                if (student) {
                    this.router.navigate(['students']);
                }
            });
            return;
        }
        // CREATE STUDENT
        this.studentRestService.createStudent(newStudent)
            .subscribe(student => {
            if (student) {
                this.router.navigate(['students']);
            }
        });
    }
};
StudentComponent.ctorParameters = () => [
    { type: _student_rest_service__WEBPACK_IMPORTED_MODULE_4__["StudentRestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/students/student/student.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student.component.scss */ "./src/app/students/student/student.component.scss")).default]
    })
], StudentComponent);



/***/ }),

/***/ "./src/app/students/students.module.ts":
/*!*********************************************!*\
  !*** ./src/app/students/students.module.ts ***!
  \*********************************************/
/*! exports provided: StudentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsModule", function() { return StudentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-list/student-list.component */ "./src/app/students/student-list/student-list.component.ts");
/* harmony import */ var _student_list_item_student_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-list-item/student-list-item.component */ "./src/app/students/student-list-item/student-list-item.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student/student.component */ "./src/app/students/student/student.component.ts");





// My imports



const routes = [
    { path: '', component: _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_5__["StudentListComponent"] },
    { path: 'student/:id', component: _student_student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"] },
    { path: 'student', component: _student_student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"] },
];
let StudentsModule = class StudentsModule {
};
StudentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_5__["StudentListComponent"],
            _student_list_item_student_list_item_component__WEBPACK_IMPORTED_MODULE_6__["StudentListItemComponent"],
            _student_student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]
    })
], StudentsModule);



/***/ })

}]);
//# sourceMappingURL=students-students-module-es2015.js.map