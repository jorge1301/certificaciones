import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {
  token: string;

  constructor(public http: HttpClient) {
    this.cargarStorage();
  }

  cargarCertificados(desde: number = 0) {
    let url = URL_SERVICIOS + '/certificado/certificados/'
    let params = new HttpParams();
    params = params.append('desde', desde.toString());
    params = params.append('token', this.token);
    return this.http.get(url, {params});
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }

  buscarCertificados(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/certificados/' + termino;
    url += '?token=' + this.token;
    return this.http.get(url).pipe(
      map((resp: any) => resp.certificados));

  }

  eliminarCertificados(id: string) {
    let url = URL_SERVICIOS + '/certificado/' + id;
    url += '?token=' + this.token;
    return this.http.delete(url);

  }
}
