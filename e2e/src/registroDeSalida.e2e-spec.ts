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
    const mensajeEsperado = "Cobrar: $1,000";

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
    await seccionDeRegistro.esperarTotalAPagar();
    // Act
    const contenidoDelToast = await seccionDeRegistro.getTextoTotalAPagar();

    // Assert
    expect(contenidoDelToast.trim()).toEqual(mensajeEsperado);
  });
});
