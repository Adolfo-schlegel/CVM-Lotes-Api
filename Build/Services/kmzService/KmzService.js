"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parse2_kmz_1 = __importDefault(require("parse2-kmz"));
const fs_1 = __importDefault(require("fs"));
function ConvertFileToJSON(filename) {
    const res = parse2_kmz_1.default
        .toJson(process.cwd() + '\\temp\\' + filename)
        //.toJson('../../../temp' + filename)
        .then((r) => {
        const { features } = r;
        let polygons = [];
        let pointers = [];
        let aux = [];
        features.forEach((feature, i) => {
            if (feature.geometry.type === "Polygon") {
                feature.geometry.coordinates[0].map((item) => {
                    aux.push({ lat: item[1], lng: item[0] });
                });
                polygons.push({
                    coords: aux,
                    name: feature.properties.name,
                });
                aux = [];
            }
            else if (feature.geometry.type === "Point") {
                pointers.push({
                    coords: {
                        lat: feature.geometry.coordinates[1],
                        lng: feature.geometry.coordinates[0],
                    },
                    name: feature.properties.name,
                });
            }
        });
        fs_1.default.unlinkSync("./temp/" + filename);
        return { polygons, center: polygons[0].coords[0], pointers };
    })
        .catch((e) => {
        console.log(e.message);
    });
    return res;
}
exports.default = ConvertFileToJSON;
//# sourceMappingURL=KmzService.js.map