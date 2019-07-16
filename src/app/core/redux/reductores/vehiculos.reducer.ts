import { IVehiculo } from "app/vehiculos/shared/vehiculo.model";
import { IAction } from "../acciones";
import * as TiposDeAccion from "../acciones/tiposDeAccion";

export interface IVehiculoState {
  vehiculosParqueados: IVehiculo[];
  vehiculoARegistrar?: IVehiculo;
  vehiculoQueSaldra?: IVehiculo;
  registrarEntrada: boolean;
  registrarSalida: boolean;
}

export const DEFAULT_STATE: IVehiculoState = {
  vehiculosParqueados: [],
  registrarEntrada: false,
  registrarSalida: false
};

export const vehiculoReducer = (state: IVehiculoState, action: IAction) => {
  switch (action.type) {
    case TiposDeAccion.REGISTRAR_ENTRADA:
      return registrarEntrada(state, action.payload);
  }
  return state;
};

const registrarEntrada = (state: IVehiculoState, vehiculo: IVehiculo) => {
  state.vehiculoARegistrar = vehiculo;
  return Object.assign({}, state, {
    vehiculoARegistrar: vehiculo,
    registrarEntrada: true
  });
};
