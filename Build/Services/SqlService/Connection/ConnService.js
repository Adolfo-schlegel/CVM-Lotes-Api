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
const mssql_1 = __importDefault(require("mssql"));
const settings = {
    user: "SA",
    password: "10deagosto",
    server: "localhost",
    database: "CVM_GPA_CTN_01",
    options: {
        trustServerCertificate: true,
    }
};
class Connection {
    GetConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mssql_1.default.connect(settings);
        });
    }
}
const conn = new Connection().GetConnection();
exports.default = conn;
//# sourceMappingURL=ConnService.js.map