import { Injectable } from "@angular/core";
import { IVehiculo } from "./vehiculo.model";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { environment } from "@environment/environment";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

const urlServicio = environment.urlTickets

@Injectable({
  providedIn: "root"
})
export class VehiculoService {
  vehiculosParqueados: IVehiculo[] = [];
  vehiculoQueSaldra: IVehiculo | null;

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      return throwError(error.error.message);
    };
  }

  listarVehiculosParqueados() {
    this.http
      .get<IVehiculo[]>(urlServicio)
      .pipe(
        catchError(
          this.handleError<IVehiculo[]>("listarVehiculosParqueados", [])
        )
      )
      .subscribe(vehiculos => {
        this.vehiculosParqueados = vehiculos;
      });
  }

  registrarEntrada(vehiculo: IVehiculo): Observable<any> {
    return this.http.post(urlServicio, vehiculo, httpOptions).pipe(
      catchError(this.handleError<any>("registrando salida")),
      map((respuesta: any) => {
        vehiculo.horaDeEntrada = respuesta.datos;
        this.vehiculosParqueados.push(vehiculo);
      })
    );
  }

  confirmarSalida(placa: string): void {
    this.vehiculoQueSaldra = this.vehiculosParqueados.find(
      vehiculo => vehiculo.placa === placa
    );
  }

  registrarSalida(): Observable<any> {
    return this.http
      .put(`${urlServicio}/${this.vehiculoQueSaldra.placa}`, httpOptions)
      .pipe(
        catchError(this.handleError<any>("registrando salida")),
        map(respuesta => {
          this.vehiculoQueSaldra.horaDeSalida = respuesta.datos.horaDeSalida;
          this.vehiculoQueSaldra.totalAPagar = respuesta.datos.totalAPagar;
          this.listarVehiculosParqueados();
        })
      );
  }
}
