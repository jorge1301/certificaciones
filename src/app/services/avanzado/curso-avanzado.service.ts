import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursoAvanzadoService {
  token: string;

  constructor(public http: HttpClient) {
    this.cargarStorage();
   }

  cargarCursoAvanzado(desde: number = 0) {
    let url = URL_SERVICIOS + '/avanzado?desde=' + desde;
    return this.http.get(url);
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }

  buscarCursoAvanzado(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/avanzados/' + termino;
    url += '?token=' + this.token;
    return this.http.get(url).pipe(
      map((resp: any) => resp.avanzados));

  }

  eliminarCursoAvanzado(id: string) {
    let url = URL_SERVICIOS + '/avanzado/' + id;
    url += '?token=' + this.token;
    return this.http.delete(url);

  }
}
