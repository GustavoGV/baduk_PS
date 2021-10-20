"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var app_1 = require("./app");
(0, mongoose_1.connect)('mongodb://localhost:27017/baduk');
app_1.app.listen(3333);
