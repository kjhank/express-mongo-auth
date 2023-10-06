"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var port = process.env.PORT;
var app = (0, express_1.default)();
app.listen(port, function () {
    console.log("server is running on ".concat(port));
});
app.get('/', function (req, res, next) {
    res.status(200).send({ message: 'sup' });
});
//# sourceMappingURL=server.js.map