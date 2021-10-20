"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var uuidv4_1 = require("uuidv4"); // biblioteca para criação de IDs unicos
var User = /** @class */ (function () {
    function User(props) {
        this.name = props.name;
        this.email = props.email;
        this.password = props.password;
        this.phone = props.phone;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.id = (0, uuidv4_1.uuid)();
    }
    return User;
}());
exports.User = User;
