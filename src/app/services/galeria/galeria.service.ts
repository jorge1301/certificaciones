import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  token: string;

  constructor(public http: HttpClient) {
    this.cargarStorage();
  }

  cargarGalerias(desde: number = 0) {
    let url = URL_SERVICIOS + '/galeria?desde=' + desde;
    return this.http.get(url);
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }

  buscarGalerias(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/galeria/' + termino;
    url += '?token=' + this.token;
    return this.http.get(url).pipe(
      map((resp: any) => resp.galerias));

  }

  eliminarGalerias(id: string) {
    let url = URL_SERVICIOS + '/galeria/' + id;
    url += '?token=' + this.token;
    return this.http.delete(url);

  }
}
