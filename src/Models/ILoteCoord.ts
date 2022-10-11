interface Coords{
    lat: number,
    lng: number
}

interface UBICACION{
    coords: Coords[]
};

interface ILoteCoord{
    cd_lote: number,
    DS_UBICACION_TOTAL : UBICACION
}

export default ILoteCoord;