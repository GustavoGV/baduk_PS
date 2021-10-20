"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderController = exports.createOrderUseCase = void 0;
var MongoOrdersRepository_1 = require("../../repositories/implementations/MongoOrdersRepository");
var CreateOrderController_1 = require("./CreateOrderController");
var CreateOrderUseCase_1 = require("./CreateOrderUseCase");
var mongoOrdersRepository = new MongoOrdersRepository_1.MongoOrdersRepository();
var createOrderUseCase = new CreateOrderUseCase_1.CreateOrderUseCase(mongoOrdersRepository);
exports.createOrderUseCase = createOrderUseCase;
var createOrderController = new CreateOrderController_1.CreateOrderController(createOrderUseCase);
exports.createOrderController = createOrderController;
