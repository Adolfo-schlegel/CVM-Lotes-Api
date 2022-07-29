import LotesController from '../Controllers/LotesController';
import {Router, Request, Response} from 'express'; 
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
    }
}

const lotes = new Lotes();
export default lotes.router;

