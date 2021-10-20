"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var uuidv4_1 = require("uuidv4"); // biblioteca para criação de IDs unicos
var Order = /** @class */ (function () {
    function Order(props) {
        this.customerId = props.customerId;
        this.totalPrice = props.totalPrice;
        this.products = props.products;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.id = (0, uuidv4_1.uuid)();
    }
    return Order;
}());
exports.Order = Order;
