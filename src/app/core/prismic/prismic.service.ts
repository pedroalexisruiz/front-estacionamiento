import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { CONFIG } from "prismic-configuration";
import * as Prismic from "prismic-javascript";

@Injectable({
  providedIn: "root"
})
export class PrismicService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      return throwError(error.error.message);
    };
  }

  getPreguntas() {
    Prismic.api(CONFIG.apiEndpoint)
      .then(api => {
        // así se obtienen las relaciones directamente, el problema es que conlleva 
        // agregar todos los atributos al arreglo fetchLinks
        // return api.query(
        //   [
        //     Prismic.Predicates.at(
        //       "document.type",
        //       "pregunta-seleccion-multiple-respuesta"
        //     )
        //   ],
        //   {
        //     fetchLinks: ["respuesta-de-seleccion.pregunta_hija", "respuesta-de-seleccion.titulo"],
        //     pageSize: 25,
        //     page: 1,
        //     orderings: "[my.pregunta-seleccion-multiple-respuesta.date desc]"
        //   }
        // );

        return api.query("", {
          pageSize: 25,
          page: 1
        });
      })
      .then(response => {
        debugger;
      });
  }
}
