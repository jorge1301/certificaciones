import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Portafolio } from 'src/app/models/portafolio.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  token: string;


  constructor(public http: HttpClient) {
    this.cargarStorage();
   }

  cargarPortafolios(desde: number = 0) {
    let url = URL_SERVICIOS + '/portafolio?desde=' + desde;
    return this.http.get(url);
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }

  buscarPortafolios(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/portafolio/' + termino;
    url += '?token=' + this.token;
    return this.http.get(url).pipe(
    map((resp: any) => resp.portafolio));

  }

  eliminarPortafolios(id: string) {
    let url = URL_SERVICIOS + '/portafolio/' + id;
    url += '?token=' + this.token;
    return this.http.delete(url);

  }
}

