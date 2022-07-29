import express from "express";
import cors from "cors";
import Lotes from "./routes/Lotes";
import dotenv from "dotenv";
dotenv.config();

class main
{
     private app: express.Application;

    constructor()
    {
        this.app = express();
        this.config();  
        this.routes();              
    }

    config()
    {               
        this.app.set("port", process.env.PORT || 7575);
        this.app.use(cors()) 
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));       
    }

    routes()
    {
        this.app.use("/api",Lotes);
    }

    start()
    {
        this.app.listen(process.env.PORT || this.app.get("port"), ()=>{
            console.log("Server in port " + this.app.get("port"));
        });
    }
}

const program = new main();
program.start();
