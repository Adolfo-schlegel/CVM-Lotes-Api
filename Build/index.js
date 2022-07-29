"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Lotes_1 = __importDefault(require("./routes/Lotes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class main {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.PORT || 7575);
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use("/api", Lotes_1.default);
    }
    start() {
        this.app.listen(process.env.PORT || this.app.get("port"), () => {
            console.log("Server in port " + this.app.get("port"));
        });
    }
}
const program = new main();
program.start();
//# sourceMappingURL=index.js.map