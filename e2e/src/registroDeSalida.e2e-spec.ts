import { SeccionDeSalida } from "./registroDeSalida.po";

describe("Estacionamiento registrar ", () => {
  let seccionDeRegistro: SeccionDeSalida;
  const placa: string = "LIN124";
  const tipoVehiculoCarro: string = "CARRO";

  beforeEach(async () => {
    seccionDeRegistro = new SeccionDeSalida();
    seccionDeRegistro.navegar();
  });

  it("deberia sacar el vehiculo", async () => {
    // Arrange
    const mensajeEsperado =
      "El vehiculo con placa " +
      placa +
      " fue retirado";

    await seccionDeRegistro.setValorPlaca(placa);
    await seccionDeRegistro.clickSelectTipoDeVehiculo();
    await seccionDeRegistro.setValueSelectTipoDeVehiculo(tipoVehiculoCarro);
    await seccionDeRegistro.clickBtnRegistro();
    await seccionDeRegistro.esperarHastaQueElToastEstePresente();
    await seccionDeRegistro.esperarQueElToastDesaparezca();
    await seccionDeRegistro.esperarBotonSacarVehiculo(placa);
    await seccionDeRegistro.clickBtnSacarVehiculo(placa);
    await seccionDeRegistro.esperarBotonConfirmarSalida();
    await seccionDeRegistro.clickBtnConfirmarSalida();
    await seccionDeRegistro.esperarHastaQueElToastEstePresente();
    // Act
    const contenidoDelToast = await seccionDeRegistro.getTextoDelToast();

    // Assert
    expect(contenidoDelToast.trim()).toEqual(mensajeEsperado);
  });
});
