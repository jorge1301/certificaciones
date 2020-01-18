import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursoInternacionalService {
  token: string;

  constructor( public http: HttpClient) {
    this.cargarStorage();
   }

  cargarCursoInternacional(desde: number = 0) {
    let url = URL_SERVICIOS + '/internacional?desde=' + desde;
    return this.http.get(url);
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }

  buscarCursoInternacional(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/internacionales/' + termino;
    url += '?token=' + this.token;
    return this.http.get(url).pipe(
      map((resp: any) => resp.internacionales));

  }

  eliminarCursoInternacional(id: string) {
    let url = URL_SERVICIOS + '/internacional/' + id;
    url += '?token=' + this.token;
    return this.http.delete(url);

  }
}
