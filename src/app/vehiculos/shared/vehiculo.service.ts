import { Injectable } from "@angular/core";
import { IVehiculo } from "./vehiculo.model";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

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
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  listarVehiculosParqueados(): Observable<IVehiculo[]> {
    return this.http.get<IVehiculo[]>(this.vehiculoServiceUrl).pipe(
      tap(_ => console.log("vehiculos parqueados obtenidos")),
      catchError(this.handleError<IVehiculo[]>("listarVehiculosParqueados", []))
    );
  }
}
