import LotesService from '../Services/SqlService/LotesService';

import ILotes from '../Models/ILotes'
import IInfoLoteCoords from '../Models/IInfoLoteCoords'
import IInfoCampo from '../Models/IInfoCampo'
import IInfoLote from '../Models/IInfoLote';
import ILoteCoord from '../Models/ILoteCoord'

import {Request,Response} from 'express';
import { Express } from 'express';
import ConvertFileToJSON from '../Services/kmzService/KmzService.js'


class LotesController
{        
    async PutConvertKmzToJson(req: Request, res: Response)
    { 
        const documentFile = (req as any).file;  
        var result = await ConvertFileToJSON(documentFile.filename);
        res.json(result).status(200);
    
    }

    async PutLoteCoords(req: Request, res: Response)
    {
        let itemUpdate:ILoteCoord  = req.body;

        let result =  await LotesService.LoteCoords(itemUpdate)

        res.json(result);
    }

    async GetLotes(req: Request, res: Response)
    {        
        const {params} = req
        
        let result = await LotesService.Lotes();
        let records:ILotes[] = result.recordset;

        records.map(record => {
        record.DS_UBICACION_PUNTO = JSON.parse(record.DS_UBICACION_PUNTO)
        })

        records.map(record => record.DS_UBICACION_TOTAL = JSON.parse(record.DS_UBICACION_TOTAL))

        //console.log(records);
        res.json(records);
    }

    async GetLotesEmpty(req: Request, res: Response)
    {        
        const {params} = req
        
        let result = await LotesService.AllCoordsEmpty();

        let records:ILotes[] = result.recordset;

        //console.log(records);
        res.json(records);
    }

    async GetLotesByPage(req: Request, res: Response)
    {  
        const {params} = req       
        console.log(params.start, params.end);

        let result = await LotesService.LotesByPage(params.start,params.end);
        let records:ILotes[] = result.recordset; 
        
        records.map(record => {
            record.DS_UBICACION_PUNTO = JSON.parse(record.DS_UBICACION_PUNTO)
            })
    
            records.map(record => record.DS_UBICACION_TOTAL = JSON.parse(record.DS_UBICACION_TOTAL))

        console.log(records); 

        res.json(records);
    }

    async GetInfoLoteCoords(req: Request, res: Response)
    {
        const {params} = req
        console.log(params.cd_lote);

        let result = await LotesService.InfoLoteCoords(params.cd_lote);                
        let records:IInfoLoteCoords = result.recordset[0];
        
        //convert to json
        records.ds_ubicacion_punto = JSON.parse(records.ds_ubicacion_punto);
        records.ds_ubicacion_total = JSON.parse(records.ds_ubicacion_total);
                
        console.log("punto")
        console.log(records.ds_ubicacion_punto);

        console.log("poligono")
        console.log(records.ds_ubicacion_total);
        
        res.json(records);
    }

    async GetInfoCampo(req: Request, res: Response)
    {
        const {params} = req
        console.log(params.cd_campo);

        let result = await LotesService.InfoCampo(params.cd_campo);                
        let records:IInfoCampo[] = result.recordset;
                
        res.json(records);
    }

    async GetInfoLote(req: Request, res: Response)
    {
        const {params} = req

        let result = await LotesService.InfoLote(params.cd_lote);             


        if(result.recordset[0] != null) 
        {
            let records:IInfoLote = result.recordset[0];
            res.json(records);            
        }
        else
        {
            res.send("no content");
        }    

    }
}
const Lotes = new LotesController();

export default Lotes;