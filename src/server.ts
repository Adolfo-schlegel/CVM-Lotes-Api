import express, {Request, Response} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Lotes from "./routes/Lotes";

/* import express from "express";
import cors from "cors";
import Lotes from "./routes/Lotes";
import dotenv from "dotenv"; */

dotenv.config()

class Server {
    private app: express.Application;

    constructor() {
        this.app = express()
        this.config()
        this.routes()
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(cors());
    }

    routes(): void {
        //this.app.use("/api", Lotes)

        this.app.get('/', (req: Request, res: Response) => {
            res.send('hello world')
        })
    }

    start(): void {
        this.app.listen(process.env.PORT || this.app.get('port'), () => {
            console.log('server on port ', this.app.get('port'))
        })
    }
}

const server = new Server()
server.start()
