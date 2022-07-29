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
const ConnService_1 = __importDefault(require("./Connection/ConnService"));
class LotesService {
    getLotes() {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield ConnService_1.default;
            return yield pool.query("select ds_campo_lote, cd_campo, cd_lote from   vs_mani_lugares_lotes1");
        });
    }
}
exports.default = new LotesService();
//# sourceMappingURL=LotesService.js.map