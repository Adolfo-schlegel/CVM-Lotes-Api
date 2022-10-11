"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LotesController_1 = __importDefault(require("../Controllers/LotesController"));
const express_1 = require("express");
const SaveFile_js_1 = __importDefault(require("../Tools/SaveFile.js"));
class Lotes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/GetLotes', LotesController_1.default.GetLotes);
        this.router.get('/GetLotesByPage/:start/:end', LotesController_1.default.GetLotesByPage);
        this.router.get('/GetInfoLoteCoords/:cd_lote', LotesController_1.default.GetInfoLoteCoords);
        this.router.get('/GetInfoCampo/:cd_campo', LotesController_1.default.GetInfoCampo);
        this.router.get('/GetInfoLote/:cd_lote', LotesController_1.default.GetInfoLote);
        this.router.get('/GetAllLotesEmpty', LotesController_1.default.GetLotesEmpty);
        this.router.post('/PutLoteCoords', LotesController_1.default.PutLoteCoords);
        this.router.post("/upload", SaveFile_js_1.default.single("archivo"), LotesController_1.default.PutConvertKmzToJson);
    }
}
const lotes = new Lotes();
exports.default = lotes.router;
//# sourceMappingURL=Lotes.js.map