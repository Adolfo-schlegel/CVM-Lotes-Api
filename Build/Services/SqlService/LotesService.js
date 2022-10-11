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
    Lotes() {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield ConnService_1.default;
            return yield pool.query("select ds_campo_lote, cd_campo, cd_lote, DS_UBICACION_PUNTO, DS_UBICACION_TOTAL from vs_mani_lugares_lotes1 where DS_UBICACION_PUNTO != '' and DS_UBICACION_TOTAL != ''");
        });
    }
    AllCoords() {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield ConnService_1.default;
            return yield pool.query("select ds_campo_lote, cd_campo, cd_lote from  vs_mani_lugares_lotes1");
        });
    }
    LotesByPage(OFFSET, NEXT) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield ConnService_1.default;
            return yield pool.query(`SELECT ds_campo_lote, cd_campo, cd_lote, DS_UBICACION_PUNTO, DS_UBICACION_TOTAL FROM vs_mani_lugares_lotes1 where DS_UBICACION_PUNTO != '' and DS_UBICACION_TOTAL != '' ORDER BY cd_lote OFFSET ${OFFSET} ROWS FETCH NEXT ${NEXT} ROWS ONLY`);
        });
    }
    InfoLoteCoords(LOTE) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield ConnService_1.default;
            return yield pool.query(`
          select ds_campo_lote,qt_hectareas, ds_cultivo_previo, qt_kms_ar, cd_producto_sub, ds_ubicacion_total, ds_ubicacion_punto, cd_campo, cd_lote
          from   vs_mani_lugares_lotes1
          where  cd_lote = ${LOTE} 
        `);
        });
    }
    InfoCampo(CAMPO) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield ConnService_1.default;
            return yield pool.query(`
            select
            cd_campo,
            CD_PRODUCTO_SUB,
            cd_lote,
            cd_producto,
            cd_producto_sub,
            qt_kms_planta,
            QT_KMS_AR,
            QT_HECTAREAS,
            ds_domicilio,
            ds_campo_lote,
            dt_contrato,
            DS_CULTIVO_PREVIO
            from vs_mani_lugares_lotes1
            where CD_CAMPO = ${CAMPO} 
        `);
        });
    }
    InfoLote(LOTE) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield ConnService_1.default;
            return yield pool.query(`
        select
        cd_campo,
        CD_PRODUCTO_SUB,
        cd_lote,
        cd_producto,
        cd_producto_sub,
        qt_kms_planta,
        QT_KMS_AR,
        QT_HECTAREAS,
        ds_domicilio,
        ds_campo_lote,
        dt_contrato,
        DS_CULTIVO_PREVIO
        from vs_mani_lugares_lotes1
        where CD_LOTE = ${LOTE} 
        `);
        });
    }
    LoteCoords(Coords) {
        return __awaiter(this, void 0, void 0, function* () {
            var pointer = { coords: Coords.DS_UBICACION_TOTAL.coords[0] };
            var coords = { coords: Coords.DS_UBICACION_TOTAL.coords };
            const jsonPointer = JSON.stringify(pointer);
            const jsonCoords = JSON.stringify(coords);
            const cd_lote = Coords.cd_lote;
            const pool = yield ConnService_1.default;
            return yield pool.request().query(`update vs_mani_lugares_lotes1 set DS_UBICACION_TOTAL = '${jsonCoords}', DS_UBICACION_PUNTO = '${jsonPointer}' where cd_lote = ${cd_lote};`);
        });
    }
    AllCoordsEmpty() {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield ConnService_1.default;
            return yield pool.query("select ds_campo_lote, cd_campo, cd_lote, DS_UBICACION_PUNTO, DS_UBICACION_TOTAL from vs_mani_lugares_lotes1 where DS_UBICACION_TOTAL = '' and DS_UBICACION_PUNTO = ''");
        });
    }
}
exports.default = new LotesService();
//# sourceMappingURL=LotesService.js.map