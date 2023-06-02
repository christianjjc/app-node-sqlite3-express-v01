const moment = require("moment");

/* const insertData = (conn, table, orderBy, campoBuscar, datoBuscar) => {
  connection(nombreTabla)
    .insert(reg)
    .then((e) => {
      console.log(e);
    })
    .catch((error) => {
      console.error("Error al realizar el insert:", error);
    })
    .finally(() => {
      knex.destroy();
    });
};
 */
//insertData(knex, "proveedores", proveedores);

const insertData = async (conn, table, reg) => {
  try {
    await conn(table).insert(reg);
    console.log({ mensaje: "Datos Insertados con exito", reg: reg });
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

module.exports = { insertData };
