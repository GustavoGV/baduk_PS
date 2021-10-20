"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUser = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    customerId: { type: String, required: true },
    totalPrice: { type: String, required: true },
    products: { type: [], required: true },
    id: { type: String, required: false },
    createdAt: { type: Date, required: false },
    updatedAt: { type: Date, required: false },
});
var MUser = (0, mongoose_1.model)('User', schema); // Criado Model (compaivel com o Mongoose)
exports.MUser = MUser;
