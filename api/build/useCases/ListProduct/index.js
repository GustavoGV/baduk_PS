"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductController = exports.listProductUseCase = void 0;
var MongoProductsRepository_1 = require("../../repositories/implementations/MongoProductsRepository");
var ListProductController_1 = require("./ListProductController");
var ListProductUseCase_1 = require("./ListProductUseCase");
var mongoProductsRepository = new MongoProductsRepository_1.MongoProductsRepository();
var listProductUseCase = new ListProductUseCase_1.ListProductUseCase(mongoProductsRepository);
exports.listProductUseCase = listProductUseCase;
var listProductController = new ListProductController_1.ListProductController(listProductUseCase);
exports.listProductController = listProductController;