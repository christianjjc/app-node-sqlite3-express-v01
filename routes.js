const express = require("express");
const { selectAll, selectOne } = require("./query_select_from");
const app = express();
const { Router } = express;
const router = Router();
const { knex } = require("./config/conexionBD");

const iniciaServidorWeb = () => {
  const server = app.listen(8080, () => {
    console.log("Servicor iniciado en port: " + server.address().port);
  });
  server.on("error", () => console.log(`Error en el servidor: ${error}`));
  //Configurar el middleware de análisis de cuerpos
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/1.0/proveedores", router);
  //app.use('/public', express.static(__dirname + '/public'));
};

app.get("/api/1.0/proveedores", async (req, res) => {
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

app.get("/api/1.0/proveedores/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const datos = await selectOne(knex, "proveedores", "id_proveedor", "id_proveedor", id);
    if (datos.length) {
      res.json(datos);
    } else {
      res.json({ Mensaje: "La búsqueda no obtuvo coincidencias." });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos" });
  }
});

// Cerrar la conexión al finalizar la aplicación
process.on("exit", () => {
  knex.destroy();
});

module.exports = { iniciaServidorWeb };
