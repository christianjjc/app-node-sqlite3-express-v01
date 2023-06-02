const moment = require("moment");

function getAnoMes() {
  const fecha = moment();
  const anomes = fecha.format("YYMM");
  return anomes;
}

const generarID = (longitudTotal, ultimoId) => {
  const anioMes = moment().format("YYMM");
  //console.log("anioMes ", anioMes);
  const nuevaNumeracion = parseInt(
    ultimoId ? ultimoId.slice(-(longitudTotal - anioMes.length)) : 0
  );
  //console.log("nuevaNumeracion ", nuevaNumeracion);
  const ceros = "0".repeat(longitudTotal - anioMes.length);
  //console.log("ceros ", ceros);
  let nuevoID = anioMes + ceros;
  //console.log("nuevoID ", nuevoID);
  const numero = parseInt(nuevaNumeracion) + 1;
  //console.log("numero ", numero);
  const numeroConCeros = numero
    .toString()
    .padStart(longitudTotal - anioMes.length, "0");
  //console.log("numeroConCeros", numeroConCeros);
  nuevoID = anioMes + numeroConCeros;
  //console.log("nuevoID" + nuevoID);
  return nuevoID;
};

module.exports = { generarID, getAnoMes };
