"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const Lotes_1 = __importDefault(require("./routes/Lotes"));
/* import express from "express";
import cors from "cors";
import Lotes from "./routes/Lotes";
import dotenv from "dotenv"; */
dotenv_1.default.config();
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use("/api", Lotes_1.default);
    }
    start() {
        this.app.listen(process.env.PORT || this.app.get('port'), () => {
            console.log('server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=server.js.map