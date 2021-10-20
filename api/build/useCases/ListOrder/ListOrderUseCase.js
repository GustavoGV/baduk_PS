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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
exports.ListOrderUseCase = void 0;
var ListOrderUseCase = /** @class */ (function () {
    function ListOrderUseCase(ordersRepository) {
        this.ordersRepository = ordersRepository;
    }
    ListOrderUseCase.prototype.execute = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var acimaDe, abaixoDe, inicioPeriodo, finalPeriodo, page, contentsPerPage, ids, result, result, result, result, result, result, result, result, result, result, result, result, result, result, result, result, result, result, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        acimaDe = data.acimaDe, abaixoDe = data.abaixoDe, inicioPeriodo = data.inicioPeriodo, finalPeriodo = data.finalPeriodo, page = data.page, contentsPerPage = data.contentsPerPage, ids = data.ids;
                        if (!(data.abaixoDe && data.acimaDe)) return [3 /*break*/, 15];
                        if (!(data.inicioPeriodo && data.finalPeriodo)) return [3 /*break*/, 5];
                        if (!data.ids) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ordersRepository.findByRangeValuesByRangeTimeByIds(acimaDe, abaixoDe, inicioPeriodo, finalPeriodo, page, contentsPerPage, ids)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2: return [4 /*yield*/, this.ordersRepository.findByRangeValuesByRangeTime(acimaDe, abaixoDe, inicioPeriodo, finalPeriodo, page, contentsPerPage)];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 4: return [3 /*break*/, 14];
                    case 5:
                        if (!data.inicioPeriodo) return [3 /*break*/, 10];
                        if (!data.ids) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.ordersRepository.findByRangeValuesByStartTimeByIds(acimaDe, abaixoDe, inicioPeriodo, page, contentsPerPage, ids)];
                    case 6:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 7: return [4 /*yield*/, this.ordersRepository.findByRangeValuesByStartTime(acimaDe, abaixoDe, inicioPeriodo, page, contentsPerPage)];
                    case 8:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 9: return [3 /*break*/, 14];
                    case 10:
                        if (!data.ids) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.ordersRepository.findByRangeValuesByEndTimeByIds(acimaDe, abaixoDe, finalPeriodo, page, contentsPerPage, ids)];
                    case 11:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 12: return [4 /*yield*/, this.ordersRepository.findByRangeValuesByEndTime(acimaDe, abaixoDe, finalPeriodo, page, contentsPerPage)];
                    case 13:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 14: return [3 /*break*/, 47];
                    case 15:
                        if (!data.abaixoDe) return [3 /*break*/, 30];
                        if (!(data.inicioPeriodo && data.finalPeriodo)) return [3 /*break*/, 20];
                        if (!data.ids) return [3 /*break*/, 17];
                        return [4 /*yield*/, this.ordersRepository.findByLowerValuesByRangeTimeByIds(abaixoDe, inicioPeriodo, finalPeriodo, page, contentsPerPage, ids)];
                    case 16:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 17: return [4 /*yield*/, this.ordersRepository.findByLowerValuesByRangeTime(abaixoDe, inicioPeriodo, finalPeriodo, page, contentsPerPage)];
                    case 18:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 19: return [3 /*break*/, 29];
                    case 20:
                        if (!data.inicioPeriodo) return [3 /*break*/, 25];
                        if (!data.ids) return [3 /*break*/, 22];
                        return [4 /*yield*/, this.ordersRepository.findByLowerValuesByStartTimeByIds(abaixoDe, inicioPeriodo, page, contentsPerPage, ids)];
                    case 21:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 22: return [4 /*yield*/, this.ordersRepository.findByLowerValuesByStartTime(abaixoDe, inicioPeriodo, page, contentsPerPage)];
                    case 23:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 24: return [3 /*break*/, 29];
                    case 25:
                        if (!data.ids) return [3 /*break*/, 27];
                        return [4 /*yield*/, this.ordersRepository.findByLowerValuesByEndTimeByIds(abaixoDe, finalPeriodo, page, contentsPerPage, ids)];
                    case 26:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 27: return [4 /*yield*/, this.ordersRepository.findByLowerValuesByEndTime(abaixoDe, finalPeriodo, page, contentsPerPage)];
                    case 28:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 29: return [3 /*break*/, 47];
                    case 30:
                        if (!data.acimaDe) return [3 /*break*/, 45];
                        if (!(data.inicioPeriodo && data.finalPeriodo)) return [3 /*break*/, 35];
                        if (!data.ids) return [3 /*break*/, 32];
                        return [4 /*yield*/, this.ordersRepository.findByUpperValuesByRangeTimeByIds(acimaDe, inicioPeriodo, finalPeriodo, page, contentsPerPage, ids)];
                    case 31:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 32: return [4 /*yield*/, this.ordersRepository.findByUpperValuesByRangeTime(acimaDe, inicioPeriodo, finalPeriodo, page, contentsPerPage)];
                    case 33:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 34: return [3 /*break*/, 44];
                    case 35:
                        if (!data.inicioPeriodo) return [3 /*break*/, 40];
                        if (!data.ids) return [3 /*break*/, 37];
                        return [4 /*yield*/, this.ordersRepository.findByUpperValuesByStartTimeByIds(acimaDe, inicioPeriodo, page, contentsPerPage, ids)];
                    case 36:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 37: return [4 /*yield*/, this.ordersRepository.findByUpperValuesByStartTime(acimaDe, inicioPeriodo, page, contentsPerPage)];
                    case 38:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 39: return [3 /*break*/, 44];
                    case 40:
                        if (!data.ids) return [3 /*break*/, 42];
                        return [4 /*yield*/, this.ordersRepository.findByUpperValuesByEndTimeByIds(acimaDe, finalPeriodo, page, contentsPerPage, ids)];
                    case 41:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 42: return [4 /*yield*/, this.ordersRepository.findByUpperValuesByEndTimeBy(acimaDe, finalPeriodo, page, contentsPerPage)];
                    case 43:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 44: return [3 /*break*/, 47];
                    case 45: return [4 /*yield*/, this.ordersRepository.findByIds(ids)];
                    case 46:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 47: return [2 /*return*/];
                }
            });
        });
    };
    return ListOrderUseCase;
}());
exports.ListOrderUseCase = ListOrderUseCase;
