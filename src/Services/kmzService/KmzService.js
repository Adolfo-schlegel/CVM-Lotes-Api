import parseKMZ from "parse2-kmz"
import fs from "fs"
import { escapeLeadingUnderscores } from "typescript"

export default function ConvertFileToJSON(filename) {
   const res = parseKMZ    
        .toJson(process.cwd() + '\\temp\\' + filename)
        //.toJson('../../../temp' + filename)
        .then((r) => {
            const { features } = r
            let polygons = []
            let pointers = []
            let aux = []
            features.forEach((feature, i) => {
                if (feature.geometry.type === "Polygon") {
                    feature.geometry.coordinates[0].map((item) => {
                        aux.push({ lat: item[1], lng: item[0] })
                    })
                    polygons.push({
                        coords: aux,
                        name: feature.properties.name,
                    })
                    aux = []
                } else if (feature.geometry.type === "Point") {
                    pointers.push({
                        coords: {
                            lat: feature.geometry.coordinates[1],
                            lng: feature.geometry.coordinates[0],
                        },
                        name: feature.properties.name,
                    })
                }
            })
            fs.unlinkSync("./temp/" + filename)            
            return { polygons, center: polygons[0].coords[0], pointers }
        })
        .catch((e) => {
            console.log(e.message)
        })

    return res;    
}
