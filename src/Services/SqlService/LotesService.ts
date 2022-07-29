import ConnService from "./Connection/ConnService"

class LotesService 
{    
    async getLotes()
    {
        const pool = await ConnService;
        return await pool.query("select ds_campo_lote, cd_campo, cd_lote from   vs_mani_lugares_lotes1");
    }

    async getLotesByPage(OFFSET: string, NEXT: string)
    {
        const pool = await ConnService;
        return await pool.query(`SELECT ds_campo_lote, cd_campo, cd_lote FROM vs_mani_lugares_lotes1 ORDER BY cd_lote OFFSET ${OFFSET} ROWS FETCH NEXT ${NEXT} ROWS ONLY`);
    }
}

export default new LotesService();