import ConnService from "./Connection/ConnService"
import ILoteCoord from '../../Models/ILoteCoord'
class LotesService 
{    
    async Lotes()
    {
        const pool = await ConnService;
        return await pool.query("select ds_campo_lote, cd_campo, cd_lote, DS_UBICACION_PUNTO, DS_UBICACION_TOTAL from vs_mani_lugares_lotes1 where DS_UBICACION_PUNTO != '' and DS_UBICACION_TOTAL != ''");
    }

    async AllCoords()
    {
        const pool = await ConnService;
        return await pool.query("select ds_campo_lote, cd_campo, cd_lote from  vs_mani_lugares_lotes1");
    }

    async LotesByPage(OFFSET: string, NEXT: string)
    {
        const pool = await ConnService;
        return await pool.query(`SELECT ds_campo_lote, cd_campo, cd_lote, DS_UBICACION_PUNTO, DS_UBICACION_TOTAL FROM vs_mani_lugares_lotes1 where DS_UBICACION_PUNTO != '' and DS_UBICACION_TOTAL != '' ORDER BY cd_lote OFFSET ${OFFSET} ROWS FETCH NEXT ${NEXT} ROWS ONLY`);
    }

    async InfoLoteCoords(LOTE: string)
    {
        const pool = await ConnService;
        return await pool.query(`
          select ds_campo_lote,qt_hectareas, ds_cultivo_previo, qt_kms_ar, cd_producto_sub, ds_ubicacion_total, ds_ubicacion_punto, cd_campo, cd_lote
          from   vs_mani_lugares_lotes1
          where  cd_lote = ${LOTE} 
        `);

    }

    async InfoCampo(CAMPO: string)
    {
        const pool = await ConnService;
        return await pool.query(`
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

    }

    async InfoLote(LOTE: string)
    {
        const pool = await ConnService;
        return await pool.query(`
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

    }

    async LoteCoords(Coords: ILoteCoord)  
    {                 
      var pointer = {coords: Coords.DS_UBICACION_TOTAL.coords[0]}
      var coords = {coords:Coords.DS_UBICACION_TOTAL.coords};
      
      const jsonPointer = JSON.stringify(pointer);
      const jsonCoords = JSON.stringify(coords);

      const cd_lote : number = Coords.cd_lote;

      const pool = await ConnService;
      return await pool.request().query(`update vs_mani_lugares_lotes1 set DS_UBICACION_TOTAL = '${jsonCoords}', DS_UBICACION_PUNTO = '${jsonPointer}' where cd_lote = ${cd_lote};`);   
    }
    async AllCoordsEmpty()
    {
        const pool = await ConnService;
        return await pool.query("select ds_campo_lote, cd_campo, cd_lote, DS_UBICACION_PUNTO, DS_UBICACION_TOTAL from vs_mani_lugares_lotes1 where DS_UBICACION_TOTAL = '' and DS_UBICACION_PUNTO = ''")
    }
    
}


export default new LotesService();