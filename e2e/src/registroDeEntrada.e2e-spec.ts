import { SeccionDeRegistro } from "./registroDeEntrada.po";

describe("Estacionamiento registrar ", () => {
  let seccionDeRegistro: SeccionDeRegistro;
  const placa: string = "PED124";
  const placaMoto: string = "PED123";
  const tipoVehiculoCarro: string = "CARRO";
  const tipoVehiculoMoto: string = "MOTO";
  const cilindraje: string = "150";

  beforeEach(async () => {
    seccionDeRegistro = new SeccionDeRegistro();
    seccionDeRegistro.navegar();
  });

  it("deberia registrar carro", async () => {
    // Arrange
    const mensajeEsperado =
      "se registro la entrada del vehiculo con placa " +
      placa +
      " de manera exitosa";

    await seccionDeRegistro.setValorPlaca(placa);
    await seccionDeRegistro.clickSelectTipoDeVehiculo();
    await seccionDeRegistro.setValueSelectTipoDeVehiculo(tipoVehiculoCarro);
    await seccionDeRegistro.clickBtnRegistro();
    await seccionDeRegistro.esperarHastaQueElToastEstePresente();

    // Act
    const contenidoDelToast = await seccionDeRegistro.getTextoDelToast();

    // Assert
    expect(contenidoDelToast.trim()).toEqual(mensajeEsperado);
  });

  it("deberia registrar moto", async () => {
    // Arrange
    const mensajeEsperado =
      "se registro la entrada del vehiculo con placa " +
      placaMoto +
      " de manera exitosa";

    await seccionDeRegistro.setValorPlaca(placaMoto);
    await seccionDeRegistro.clickSelectTipoDeVehiculo();
    await seccionDeRegistro.setValueSelectTipoDeVehiculo(tipoVehiculoMoto);
    await seccionDeRegistro.esperarInputDeCilindraje();
    await seccionDeRegistro.setValorCilindraje(cilindraje);
    await seccionDeRegistro.clickBtnRegistro();
    await seccionDeRegistro.esperarHastaQueElToastEstePresente();

    // Act
    const contenidoDelToast = await seccionDeRegistro.getTextoDelToast();

    // Assert
    expect(contenidoDelToast.trim()).toEqual(mensajeEsperado);
  });

  it("no deberia dejar registrar porque el vehiculo ya fue ingresado", async () => {
    // Arrange
    const mensajeEsperado = "El vehiculo ya se encuentra en el parqueadero.";

    await seccionDeRegistro.setValorPlaca(placa);
    await seccionDeRegistro.clickSelectTipoDeVehiculo();
    await seccionDeRegistro.setValueSelectTipoDeVehiculo(tipoVehiculoCarro);
    await seccionDeRegistro.clickBtnRegistro();
    await seccionDeRegistro.esperarHastaQueElToastEstePresente();

    // Act
    const contenidoDelToast = await seccionDeRegistro.getTextoDelToast();

    // Assert
    expect(contenidoDelToast.trim()).toEqual(mensajeEsperado);
  });

  it("no deberia dejar registrar porque no digitó placa", async () => {
    // Arrange
    const mensajeEsperado = "Debes ingresar la placa";

    await seccionDeRegistro.setValorPlaca("");
    await seccionDeRegistro.clickSelectTipoDeVehiculo();
    await seccionDeRegistro.setValueSelectTipoDeVehiculo(tipoVehiculoCarro);
    await seccionDeRegistro.clickBtnRegistro();
    await seccionDeRegistro.esperarHastaQueElToastEstePresente();

    // Act
    const contenidoDelToast = await seccionDeRegistro.getTextoDelToast();

    // Assert
    expect(contenidoDelToast.trim()).toEqual(mensajeEsperado);
  });
});
