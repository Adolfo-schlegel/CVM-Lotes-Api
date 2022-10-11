import LotesController from '../Controllers/LotesController';
import {Router, Request, Response} from 'express'; 
import multer from '../Tools/SaveFile.js';

class Lotes
{
    router: Router;
    constructor()
    {
        this.router = Router();
        this.routes();
    }

    public routes(){
        this.router.get('/GetLotes',LotesController.GetLotes)
        this.router.get('/GetLotesByPage/:start/:end',LotesController.GetLotesByPage)
        this.router.get('/GetInfoLoteCoords/:cd_lote',LotesController.GetInfoLoteCoords)
        this.router.get('/GetInfoCampo/:cd_campo',LotesController.GetInfoCampo)
        this.router.get('/GetInfoLote/:cd_lote',LotesController.GetInfoLote)
        this.router.get('/GetAllLotesEmpty',LotesController.GetLotesEmpty)
        this.router.post('/PutLoteCoords',LotesController.PutLoteCoords)
        this.router.post("/upload", multer.single("archivo"), LotesController.PutConvertKmzToJson)
    }
}

const lotes = new Lotes();
export default lotes.router;

