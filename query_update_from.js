const updateReg = async (conn, table, campoBuscar, id, array) => {
  try {
    const rows = await conn(table).where(campoBuscar, "=", id).update({
      ruc: array.ruc,
      razon_social: array.razon_social,
      direccion: array.direccion,
    });
    return rows;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};


module.exports = { updateReg };

