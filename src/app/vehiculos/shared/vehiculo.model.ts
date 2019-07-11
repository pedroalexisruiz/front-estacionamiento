export interface IVehiculo {
  id: number;
  placa: string;
  tipoDeVehiculo: string;
  cilindraje?: number;
  totalAPagar?: number;
  horaDeEntrada?: Date
  horaDeSalida?: Date
}
