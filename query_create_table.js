const { options } = require("./config/sqlite3DB.js");
const knex = require("knex")(options);

/* CREATE TABLE `proveedores` (
  `id_proveedor` char(7) NOT NULL,
  `ruc` char(11) NOT NULL,
  `razon_social` varchar(250) DEFAULT NULL,
  `direccion` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id_proveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
 */

const crearTabla = async (connection, nombreTabla) => {
  await connection.schema.dropTableIfExists(nombreTabla);
  connection.schema
    .createTable(nombreTabla, (table) => {
      table.string("id_proveedor", 7).primary().notNullable().unique(),
        table.string("ruc", 11),
        table.string("razon_social", 250),
        table.string("direccion", 500);
    })
    .then(() => {
      console.log("Tabla creada con éxito");
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err);
    })
    .finally(() => {
      knex.destroy();
    });
};

/* const ejecutaScripts = async () => {
  try {
    await crearTabla(knex, "proveedores");
    insertData(knex, "proveedores", proveedores);
  } catch (error) {
    console.log("Error en la ejecución en Bloque", error);
  }
};

ejecutaScripts();
 */

crearTabla(knex, "proveedores");
