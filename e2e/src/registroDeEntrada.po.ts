import {
  ProtractorExpectedConditions,
  ExpectedConditions,
  ElementFinder,
  $,
  element,
  by,
  browser
} from "protractor";

export class SeccionDeRegistro {
  hasta: ProtractorExpectedConditions;

  constructor() {
    this.hasta = ExpectedConditions;
  }

  // navegando
  navegar(): Promise<void> {
    return browser.get(`${browser.baseUrl}`) as Promise<void>;
  }

  // Obtener elementos del DOM
  getInputPlaca(): ElementFinder {
    return $("#placa");
  }

  getInputCilindraje(): ElementFinder {
    return $("#cilindraje");
  }

  getSelectTipoDeVehiculo(): ElementFinder {
    return $("#tipoDeVehiculo");
  }

  getToastMessage(): ElementFinder {
    return element(by.className("toast-message"));
  }

  getBtnRegistro(): ElementFinder {
    return $("#btnRegistro");
  }

  // Obtener contenido de los elementos del DOM

  async getTextoDelToast(): Promise<string> {
    return await this.getToastMessage().getText();
  }

  // Modificar elementos del DOM

  async setValorPlaca(text: string): Promise<void> {
    return await this.getInputPlaca().sendKeys(text);
  }

  async setValueSelectTipoDeVehiculo(optionI: string): Promise<void> {
    await browser.sleep(500);
    await $('.mat-option[ng-reflect-value="' + optionI + '"]').click();
  }

  async setValorCilindraje(text: string): Promise<void> {
    return await this.getInputCilindraje().sendKeys(text);
  }

  async clickBtnRegistro(): Promise<void> {
    await this.getBtnRegistro().click();
  }

  async clickSelectTipoDeVehiculo(): Promise<void> {
    await this.getSelectTipoDeVehiculo().click();
  }

  // metodos en espera de accion

  async esperarHastaQueElToastEstePresente(): Promise<void> {
    return await this.esperarHastaQueEstePresente(this.getToastMessage());
  }

  async esperarInputDeCilindraje(): Promise<void> {
    return await this.esperarHastaQueEstePresente(this.getInputCilindraje());
  }

  async esperarHastaQueInputDeCilindrajeEsteActivo(): Promise<void> {
    return await this.esperarHastaQueEsteActivo(this.getInputCilindraje());
  }

  async esperarHastaQueEstePresente(element: ElementFinder): Promise<void> {
    const id = await element.getId();
    return await browser.wait(
      this.hasta.presenceOf(element),
      5000,
      `Elemento ${id} demorando en aparecer en el DOM`
    );
  }

  async esperarHastaQueEsteActivo(element: ElementFinder): Promise<void> {
    const id = await element.getId();
    return await browser.wait(
      this.hasta.elementToBeClickable(element),
      5000,
      `Elemento ${id} demorando en aparecer en el DOM`
    );
  }

  // metodos en espera de accion al no aparecer

  async esperarQueElToastDesaparezca(): Promise<void> {
    return await this.esperarQueDesaparezca(this.getToastMessage());
  }

  async esperarQueDesaparezca(element: ElementFinder): Promise<void> {
    const id = await element.getId();
    return await browser.wait(
      this.hasta.stalenessOf(element),
      5000,
      `Elemento ${id} demorando en desaparecer en el DOM`
    );
  }
}
