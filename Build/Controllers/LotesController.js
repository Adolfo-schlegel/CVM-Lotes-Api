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
class LotesController {
    GetLotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params } = req;
            let result = yield LotesService_1.default.getLotes();
            let records = result.recordset;
            //console.log(records);
            res.json(records);
        });
    }
    GetLotesByPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params } = req;
            console.log(params.start, params.end);
            let result = yield LotesService_1.default.getLotesByPage(params.start, params.end);
            let records = result.recordset;
            console.log(records);
            res.json(records);
        });
    }
}
const Lotes = new LotesController();
exports.default = Lotes;
//# sourceMappingURL=LotesController.js.map