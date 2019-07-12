import { Injectable } from "@angular/core";
import { IVehiculo } from "./vehiculo.model";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class VehiculoService {
  private vehiculoServiceUrl = "http://localhost:8080/tickets";

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  listarVehiculosParqueados(): Observable<IVehiculo[]> {
    return this.http.get<IVehiculo[]>(this.vehiculoServiceUrl).pipe(
      catchError(this.handleError<IVehiculo[]>("listarVehiculosParqueados", []))
    );
  }

  registrarEntrada(vehiculo: IVehiculo): Observable<any> {
    return this.http.post(this.vehiculoServiceUrl, vehiculo, httpOptions).pipe(
      catchError(this.handleError<any>("registrando entrada"))
    );
  }

  registrarSalida(vehiculo: IVehiculo): Observable<any> {
    return this.http.put(this.vehiculoServiceUrl, vehiculo, httpOptions).pipe(
      catchError(this.handleError<any>("registrando salida"))
    );
  }
}
