import { SeccionDeRegistro } from "./registroDeEntrada.po";

describe("Estacionamiento registrar ", () => {
  let registerPage: SeccionDeRegistro;
  const placa: string = "URG-585";
  const placaMoto: string = "URG-586";
  const tipoVehiculoCarro: string = "CARRO";
  const tipoVehiculoMoto: string = "MOTO";

  beforeEach(async () => {
    registerPage = new SeccionDeRegistro();
    registerPage.navegar();
  });

  it("deberia registrar carro", async () => {
    // Arrange
    const expectedMessage =
      "se registro la entrada del vehiculo con placa " + placa + " de manera exitosa";

    await registerPage.setValorPlaca(placa);
    await registerPage.clickSelectTipoDeVehiculo();
    await registerPage.setValueSelectTipoDeVehiculo(tipoVehiculoCarro);
    await registerPage.clickBtnRegistro();
    await registerPage.esperarHastaQueElToastEstePresente();

    // Act
    const toastContent = await registerPage.getToastMessageText();

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);
  });

  it("deberia registrar moto", async () => {
    // Arrange
    const expectedMessage =
      "se registro la entrada del vehiculo con placa " +
      placaMoto +
      " de manera exitosa";

    await registerPage.setValorPlaca(placaMoto);
    await registerPage.clickSelectTipoDeVehiculo();
    await registerPage.setValueSelectTipoDeVehiculo(tipoVehiculoMoto);
    await registerPage.esperarInputDeCilindraje();
    await registerPage.clickBtnRegistro();
    await registerPage.esperarHastaQueElToastEstePresente();

    // Act
    const toastContent = await registerPage.getToastMessageText();

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);
  });

  it("no deberia dejar registrar", async () => {
    // Arrange
    const expectedMessage = "El vehículo ya se encuentra en el parqueadero.";

    await registerPage.setValorPlaca(placa);
    await registerPage.clickSelectTipoDeVehiculo();
    await registerPage.setValueSelectTipoDeVehiculo(tipoVehiculoCarro);
    await registerPage.clickBtnRegistro();
    await registerPage.esperarHastaQueElToastEstePresente();

    // Act
    const toastContent = await registerPage.getToastMessageText();

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);
  });

  it("no deberia dejar registrar porque no digitó placa", async () => {
    // Arrange
    const expectedMessage = "Debes ingresar la placa";

    await registerPage.setValorPlaca("");
    await registerPage.clickSelectTipoDeVehiculo();
    await registerPage.setValueSelectTipoDeVehiculo(tipoVehiculoCarro);
    await registerPage.clickBtnRegistro();
    await registerPage.esperarHastaQueElToastEstePresente();

    // Act
    const toastContent = await registerPage.getToastMessageText();

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);
  });
});
