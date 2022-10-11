"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LotesService_1 = __importDefault(require("../Services/SqlService/LotesService"));
const KmzService_js_1 = __importDefault(require("../Services/kmzService/KmzService.js"));
class LotesController {
    PutConvertKmzToJson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const documentFile = req.file;
            var result = yield (0, KmzService_js_1.default)(documentFile.filename);
            res.json(result).status(200);
        });
    }
    PutLoteCoords(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let itemUpdate = req.body;
            let result = yield LotesService_1.default.LoteCoords(itemUpdate);
            res.json(result);
        });
    }
    GetLotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params } = req;
            let result = yield LotesService_1.default.Lotes();
            let records = result.recordset;
            records.map(record => {
                record.DS_UBICACION_PUNTO = JSON.parse(record.DS_UBICACION_PUNTO);
            });
            records.map(record => record.DS_UBICACION_TOTAL = JSON.parse(record.DS_UBICACION_TOTAL));
            //console.log(records);
            res.json(records);
        });
    }
    GetLotesEmpty(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params } = req;
            let result = yield LotesService_1.default.AllCoordsEmpty();
            let records = result.recordset;
            //console.log(records);
            res.json(records);
        });
    }
    GetLotesByPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params } = req;
            console.log(params.start, params.end);
            let result = yield LotesService_1.default.LotesByPage(params.start, params.end);
            let records = result.recordset;
            records.map(record => {
                record.DS_UBICACION_PUNTO = JSON.parse(record.DS_UBICACION_PUNTO);
            });
            records.map(record => record.DS_UBICACION_TOTAL = JSON.parse(record.DS_UBICACION_TOTAL));
            console.log(records);
            res.json(records);
        });
    }
    GetInfoLoteCoords(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params } = req;
            console.log(params.cd_lote);
            let result = yield LotesService_1.default.InfoLoteCoords(params.cd_lote);
            let records = result.recordset[0];
            //convert to json
            records.ds_ubicacion_punto = JSON.parse(records.ds_ubicacion_punto);
            records.ds_ubicacion_total = JSON.parse(records.ds_ubicacion_total);
            console.log("punto");
            console.log(records.ds_ubicacion_punto);
            console.log("poligono");
            console.log(records.ds_ubicacion_total);
            res.json(records);
        });
    }
    GetInfoCampo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params } = req;
            console.log(params.cd_campo);
            let result = yield LotesService_1.default.InfoCampo(params.cd_campo);
            let records = result.recordset;
            res.json(records);
        });
    }
    GetInfoLote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params } = req;
            let result = yield LotesService_1.default.InfoLote(params.cd_lote);
            if (result.recordset[0] != null) {
                let records = result.recordset[0];
                res.json(records);
            }
            else {
                res.send("no content");
            }
        });
    }
}
const Lotes = new LotesController();
exports.default = Lotes;
//# sourceMappingURL=LotesController.js.map