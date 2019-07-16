import * as TiposDeAccion from "./tiposDeAccion";
import {
  IVehiculo,
  IResultadoSalida
} from "app/vehiculos/shared/vehiculo.model";

export interface IAction {
  type: string;
  payload?: any;
}

export const cargarVehiculosParqueados = (): IAction => {
  return {
    type: TiposDeAccion.CARGAR_VEHICULOS_PARQUEADOS
  };
};

export const notificarCargaDeVehiculos = (vehiculos: IVehiculo[]): IAction => {
  return {
    type: TiposDeAccion.NOTIFICAR_CARGA_DE_VEHICULOS,
    payload: vehiculos
  };
};

export const registrarEntrada = (vehiculo: IVehiculo): IAction => {
  return {
    type: TiposDeAccion.REGISTRAR_ENTRADA,
    payload: vehiculo
  };
};

export const notificarRegistroDeEntrada = (horaDeEntrada: Date): IAction => {
  return {
    type: TiposDeAccion.NOTIFICAR_REGISTRO_DE_ENTRADA,
    payload: horaDeEntrada
  };
};

export const registrarSalida = (): IAction => {
  return {
    type: TiposDeAccion.REGISTRAR_SALIDA
  };
};

export const notificarRegistroDeSalida = (
  salida: IResultadoSalida
): IAction => {
  return {
    type: TiposDeAccion.NOTIFICAR_REGISTRO_DE_SALIDA,
    payload: salida
  };
};

export const solicitarConfirmacionSalida = (
  vehiculoQueSaldra: IVehiculo
): IAction => {
  return {
    type: TiposDeAccion.SOLICITAR_CONFIRMACION_SALIDA,
    payload: vehiculoQueSaldra
  };
};

export const cancelarSalida = (): IAction => {
  return {
    type: TiposDeAccion.CANCELAR_SALIDA
  };
};
