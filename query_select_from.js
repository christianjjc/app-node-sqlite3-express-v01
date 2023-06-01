const { options } = require("./options/sqlite3DB.js");
const knex = require("knex")(options);

knex
  .select("*")
  .from("proveedores")
  .orderBy("id_proveedor")
  .then((rows) => {
    const proveedores = rows.map((row) => {
      return {
        id_proveedor: row["id_proveedor"],
        ruc: row["ruc"],
        razon_social: row["razon_social"],
        direccion: row["direccion"],
      };
    });
    console.table(proveedores);
  })
  .catch((err) => {
    console.log(err);
    throw new Error(err);
  })
  .finally(() => {
    knex.destroy();
  });