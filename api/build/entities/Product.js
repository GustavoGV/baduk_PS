"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var uuidv4_1 = require("uuidv4"); // biblioteca para criação de IDs unicos
var Product = /** @class */ (function () {
    function Product(props) {
        this.name = props.name;
        this.price = props.price;
        this.quantity = props.quantity;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.id = (0, uuidv4_1.uuid)();
    }
    return Product;
}());
exports.Product = Product;
