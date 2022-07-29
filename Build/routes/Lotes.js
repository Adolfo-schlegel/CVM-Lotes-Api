"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LotesController_1 = __importDefault(require("../Controllers/LotesController"));
const express_1 = require("express");
class Lotes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/GetLotes', LotesController_1.default.GetLotes);
        this.router.get('/GetLotesByPage/:start/:end', LotesController_1.default.GetLotesByPage);
    }
}
const lotes = new Lotes();
exports.default = lotes.router;
//# sourceMappingURL=Lotes.js.map