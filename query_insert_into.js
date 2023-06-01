
const moment = require("moment");
const { proveedores } = require("./Proveedor.js");

const generaID = () => {
  const id = moment().format("YYMM");
  console.log(id);
};

const insertData = (connection, nombreTabla, reg) => {
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

//insertData(knex, "proveedores", proveedores);

generaID();
