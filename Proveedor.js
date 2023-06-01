class Proveedor {
    constructor(id_proveedor, ruc, razon_social, direccion) {
      (this.id_proveedor = id_proveedor),
        (this.ruc = ruc),
        (this.razon_social = razon_social),
        (this.direccion = direccion);
    }
  }
  
  let proveedores = [];
  proveedores.push(
    new Proveedor(
      "230601",
      "20140476545",
      "Moro SRL",
      "Av mariategui 446, Jesús María, Lima - 15072"
    )
  );
  proveedores.push(
    new Proveedor(
      "230602",
      "20140400000",
      "JMK",
      "Av mariategui 446, Jesús María, Lima - 15072"
    )
  );
  proveedores.push(
    new Proveedor(
      "230603",
      "20140411111",
      "CAH",
      "Av mariategui 446, Jesús María, Lima - 15072"
    )
  );
  proveedores.push(
    new Proveedor(
      "230604",
      "20140422222",
      "AYM",
      "Av mariategui 446, Jesús María, Lima - 15072"
    )
  );
  proveedores.push(
    new Proveedor(
      "230605",
      "20140433333",
      "CORPECSAC",
      "Av mariategui 446, Jesús María, Lima - 15072"
    )
  );
  proveedores.push(
    new Proveedor(
      "230606",
      "20140444444",
      "KyC",
      "Av mariategui 446, Jesús María, Lima - 15072"
    )
  );
  proveedores.push(
    new Proveedor(
      "230607",
      "20140455555",
      "Brimax",
      "Av mariategui 446, Jesús María, Lima - 15072"
    )
  );
  proveedores.push(
    new Proveedor(
      "230608",
      "20140466666",
      "EL puertito",
      "Av mariategui 446, Jesús María, Lima - 15072"
    )
  );
  proveedores.push(
    new Proveedor(
      "230609",
      "20140477777",
      "El Moyomoyo",
      "Av mariategui 446, Jesús María, Lima - 15072"
    )
  );

  module.exports = { proveedores };