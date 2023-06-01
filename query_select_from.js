const selectAll = async (conn, table, orderBy, cantReg = 100000) => {
  try {
    const rows = await conn
      .select("*")
      .from(table)
      .limit(cantReg)
      .orderBy(orderBy);
    const proveedores = rows.map((row) => {
      return {
        id_proveedor: row["id_proveedor"],
        ruc: row["ruc"],
        razon_social: row["razon_social"],
        direccion: row["direccion"],
      };
    });
    return proveedores;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  } /* finally {
    knex.destroy();
  } */
};

const selectOne = async (conn, table, orderBy, campoBuscar, datoBuscar) => {
  try {
    const rows = await conn
      .select("*")
      .from(table)
      .where(campoBuscar, datoBuscar)
      .orderBy(orderBy);
    const proveedores = rows.map((row) => {
      return {
        id_proveedor: row["id_proveedor"],
        ruc: row["ruc"],
        razon_social: row["razon_social"],
        direccion: row["direccion"],
      };
    });
    return proveedores;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  } /* finally {
    knex.destroy();
  } */
};

module.exports = { selectAll, selectOne };
