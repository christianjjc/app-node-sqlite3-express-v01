const deleteReg = async (conn, table, campoBuscar, id) => {
    try {
      const rows = await conn(table).where(campoBuscar, "=", id).del();
      return rows;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };
  
  
  module.exports = { deleteReg };
  