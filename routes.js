const express = require("express");
const { selectAll, selectOne, selectId } = require("./query_select_from");
const app = express();
const { Router } = express;
const routerProveedores = Router();
const { knex } = require("./config/conexionBD");
const { generarID, getAnoMes } = require("./services");
const { insertData } = require("./query_insert_into");

const iniciaServidorWeb = () => {
  const server = app.listen(8080, () => {
    console.log("Servicor iniciado en port: " + server.address().port);
  });
  server.on("error", () => console.log(`Error en el servidor: ${error}`));

  //Configurar el middleware de análisis de cuerpos
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/1.0/proveedores", routerProveedores);
  //app.use('/public', express.static(__dirname + '/public'));
};

routerProveedores.get("/", async (req, res) => {
  try {
    const datos = await selectAll(knex, "proveedores", "id_proveedor");
    if (datos.length) {
      res.json(datos);
    } else {
      res.json({ Mensaje: "No existen registros en la base de datos." });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos" });
  }
});


routerProveedores.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const datos = await selectOne(
      knex,
      "proveedores",
      "id_proveedor",
      "id_proveedor",
      id
    );
    if (datos.length) {
      res.json(datos);
    } else {
      res.json({ Mensaje: "La búsqueda no obtuvo coincidencias." });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos" });
  }
});

routerProveedores.post("/", async (req, res) => {
  const { body } = req;
  try {
    let result = await selectId(knex, "proveedores", "id_proveedor", getAnoMes());
    console.log('id encontrado: ' + result.id_proveedor)
    const id = generarID(8, result.id_proveedor);
    console.log('id generado: ' + id)
    await insertData(knex, "proveedores", { id_proveedor: id, ...body });
    console.log('datos insertados')
    res.json({ Mensaje: "Datos Ingresados. OK" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Cerrar la conexión al finalizar la aplicación
process.on("exit", () => {
  knex.destroy();
});

module.exports = { iniciaServidorWeb };
