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
exports.MongoOrdersRepository = void 0;
var iMongoUsers_1 = require("../../entities/iMongoUsers");
var MongoOrdersRepository = /** @class */ (function () {
    function MongoOrdersRepository() {
    }
    MongoOrdersRepository.prototype.save = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var mongoDoc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mongoDoc = new iMongoUsers_1.MUser({
                            customerId: user.customerId,
                            totalPrice: user.totalPrice,
                            products: user.products,
                            createdAt: user.createdAt,
                            updatedAt: user.updatedAt,
                            id: user.id,
                        });
                        return [4 /*yield*/, mongoDoc.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /*
    async findByRangeValues(acimaDe: number | null, abaixoDe: number): Promise<any>{
      const result = await MUser.find({
        totalPrice : { $gte :  acimaDe,  $lte :  abaixoDe}
      })
      return result
    }
    async findByRangeTime(inicioPeriodo: string | null | any, finalPeriodo: string):  Promise<any>{
      let inicio: string = inicioPeriodo[0] + inicioPeriodo[1] + inicioPeriodo[2] + inicioPeriodo[3] + '-' + inicioPeriodo[6] + inicioPeriodo[7] + '-' + inicioPeriodo[4] + inicioPeriodo[5]
      let final: string = finalPeriodo[0] + finalPeriodo[1] + finalPeriodo[2] + finalPeriodo[3] + '-' + finalPeriodo[6] + finalPeriodo[7] + '-' + finalPeriodo[4] + finalPeriodo[5]
      const result = await MUser.find({
        createdAt : { $gte : new Date(inicio),  $lte : new Date(final)}
      })
      return result
    }
    async findByUpperValues(acimaDe: number | null): Promise<any>{
      const result = await MUser.find({
        totalPrice : { $gte :  acimaDe}
      })
      return result
    }
    async findByLowerValues(abaixoDe: number | null): Promise<any>{
      const result = await MUser.find({
        totalPrice : { $lte :  abaixoDe}
      })
      return result
    }
    async findByEndTime(finalPeriodo: number | null): Promise<any>{
  
    }
    async findByStartTime(inicioPeriodo: number | null): Promise<any>{
  
    }
    async findByIds(ids: Array<string> | null): Promise<any>{
    }
    */
    MongoOrdersRepository.prototype.findByRangeValuesByRangeTime = function (acimaDe, abaixoDe, inicioPeriodo, finalPeriodo) {
        return __awaiter(this, void 0, void 0, function () {
            var inicio, final, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inicio = inicioPeriodo[0] + inicioPeriodo[1] + inicioPeriodo[2] + inicioPeriodo[3] + '-' + inicioPeriodo[6] + inicioPeriodo[7] + '-' + inicioPeriodo[4] + inicioPeriodo[5];
                        final = finalPeriodo[0] + finalPeriodo[1] + finalPeriodo[2] + finalPeriodo[3] + '-' + finalPeriodo[6] + finalPeriodo[7] + '-' + finalPeriodo[4] + finalPeriodo[5];
                        return [4 /*yield*/, iMongoUsers_1.MUser.find({
                                totalPrice: { $gte: acimaDe, $lte: abaixoDe }
                            }).find({
                                createdAt: {
                                    $gte: new Date(inicio),
                                    $lt: new Date(final)
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    MongoOrdersRepository.prototype.findByRangeValuesByRangeTimeByIds = function (acimaDe, abaixoDe, inicioPeriodo, finalPeriodo, page, contentsPerPage, ids) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, iMongoUsers_1.MUser.find({
                            totalPrice: { $gte: acimaDe, $lte: abaixoDe }
                        }).find({
                            createdAt: {
                                $gte: new Date(inicioPeriodo),
                                $lt: new Date(finalPeriodo)
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    MongoOrdersRepository.prototype.findByRangeValuesByStartTimeByIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByRangeValuesByStartTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByRangeValuesByEndTimeByIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByRangeValuesByEndTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByLowerValuesByRangeTimeByIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByLowerValuesByRangeTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByLowerValuesByStartTimeByIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByLowerValuesByStartTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByLowerValuesByEndTimeByIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByLowerValuesByEndTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByUpperValuesByRangeTimeByIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByUpperValuesByRangeTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByUpperValuesByStartTimeByIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByUpperValuesByStartTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByUpperValuesByEndTimeByIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByUpperValuesByEndTimeBy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    MongoOrdersRepository.prototype.findByIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return MongoOrdersRepository;
}());
exports.MongoOrdersRepository = MongoOrdersRepository;
