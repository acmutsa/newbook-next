"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer_1 = require("puppeteer");
var queries_1 = require("db/queries");
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var browser, page, optionList, _i, optionList_1, option, optionInput, searchBtn, noContentText, nextBtn, tablePageCourseList, courseList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, puppeteer_1.default.launch({
                    headless: true,
                })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                // Navigate the page to a URL.
                return [4 /*yield*/, page.goto("https://bluebook.utsa.edu")];
            case 3:
                // Navigate the page to a URL.
                _a.sent();
                return [4 /*yield*/, page.$$eval("#ctl00_MainContentSearchQuery_searchCriteriaEntry_CourseSubjectCombo_OptionList > li", function (options) {
                        return options.map(function (el) { return el.innerText; });
                    })];
            case 4:
                optionList = (_a.sent()).slice(1);
                _i = 0, optionList_1 = optionList;
                _a.label = 5;
            case 5:
                if (!(_i < optionList_1.length)) return [3 /*break*/, 23];
                option = optionList_1[_i];
                return [4 /*yield*/, page.$("input#ctl00_MainContentSearchQuery_searchCriteriaEntry_CourseSubjectCombo_TextBox")];
            case 6:
                optionInput = _a.sent();
                if (!optionInput) {
                    console.error("Can't find option input!");
                    browser.close();
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (optionInput === null || optionInput === void 0 ? void 0 : optionInput.evaluate(function (el, option) { return (el.value = option); }, option))];
            case 7:
                _a.sent();
                return [4 /*yield*/, optionInput.focus()];
            case 8:
                _a.sent();
                return [4 /*yield*/, page.keyboard.press("Enter")];
            case 9:
                _a.sent();
                return [4 /*yield*/, page.$("a#ctl00_MainContentSearchQuery_searchCriteriaEntry_SearchBtn")];
            case 10:
                searchBtn = _a.sent();
                if (!searchBtn) {
                    console.error("Failed to find search button!");
                }
                return [4 /*yield*/, searchBtn.focus()];
            case 11:
                _a.sent();
                return [4 /*yield*/, searchBtn.click()];
            case 12:
                _a.sent();
                return [4 /*yield*/, page.waitForNavigation()];
            case 13:
                _a.sent();
                return [4 /*yield*/, page.$("#ctl00_MainContent_mainContent1_NoContentHeaderPnl")];
            case 14:
                noContentText = _a.sent();
                if (noContentText) {
                    return [3 /*break*/, 22];
                }
                _a.label = 15;
            case 15:
                if (!true) return [3 /*break*/, 22];
                return [4 /*yield*/, page.$('#ctl00_MainContent_mainContent1_PagerImgBtn_NextTOP:not([disabled="disabled"])')];
            case 16:
                nextBtn = _a.sent();
                if (!nextBtn) {
                    return [3 /*break*/, 22];
                }
                return [4 /*yield*/, page.$$eval("table.infoTable tbody tr", function (list) {
                        return list;
                    })];
            case 17:
                tablePageCourseList = _a.sent();
                return [4 /*yield*/, Promise.all(tablePageCourseList.map(function (_, idx) { return __awaiter(void 0, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {};
                                    return [4 /*yield*/, page.$eval("span#ctl00_MainContent_mainContent1_MainContentAccordion_Pane_".concat(idx, "_header_SemYrLbl"), function (el) { return el.innerText; })];
                                case 1:
                                    _a.semester = _b.sent();
                                    return [4 /*yield*/, page.$eval("span#ctl00_MainContent_mainContent1_MainContentAccordion_Pane_".concat(idx, "_header_crnlbl"), function (el) { return el.innerText; })];
                                case 2:
                                    _a.crn = _b.sent();
                                    return [4 /*yield*/, page.$eval("span#ctl00_MainContent_mainContent1_MainContentAccordion_Pane_".concat(idx, "_header_CourseLbl"), function (el) { return el.innerText; })];
                                case 3:
                                    _a.section = _b.sent();
                                    return [4 /*yield*/, page.$eval("a#ctl00_MainContent_mainContent1_MainContentAccordion_Pane_".concat(idx, "_header_TitleLnkBtn"), function (el) { return el.innerText; })];
                                case 4:
                                    _a.title = _b.sent();
                                    return [4 /*yield*/, page.$eval("a#ctl00_MainContent_mainContent1_MainContentAccordion_Pane_".concat(idx, "_header_InstructorLnkBtn"), function (el) { return el.innerText; })];
                                case 5: return [2 /*return*/, (_a.instructor = _b.sent(),
                                        _a)];
                            }
                        });
                    }); }))];
            case 18:
                courseList = _a.sent();
                return [4 /*yield*/, (0, queries_1.insertCourses)(courseList)];
            case 19:
                _a.sent();
                return [4 /*yield*/, nextBtn.click()];
            case 20:
                _a.sent();
                return [4 /*yield*/, page.waitForNavigation()];
            case 21:
                _a.sent();
                return [3 /*break*/, 15];
            case 22:
                _i++;
                return [3 /*break*/, 5];
            case 23: return [4 /*yield*/, browser.close()];
            case 24:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
main();
