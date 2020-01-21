import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import { Galeria } from '../../models/galeria.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor(public http: HttpClient, public usuarioService: UsuarioService) {
    this.usuarioService.cargarStorage();
  }

  cargarGalerias(desde: number = 0) {
    let url = URL_SERVICIOS + '/galeria?desde=' + desde;
    return this.http.get(url);
  }

  buscarGalerias(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/galeria/' + termino;
    url += '?token=' + this.usuarioService.token;
    return this.http.get(url).pipe(
      map((resp: any) => resp.galerias));

  }

  eliminarGalerias(id: string) {
    let url = URL_SERVICIOS + '/galeria/' + id;
    url += '?token=' + this.usuarioService.token;
    return this.http.delete(url);
  }

  crearGalerias(archivo: FormData, galeria: Galeria) {
    let url = URL_SERVICIOS + '/galeria';
    const data = {
      informacion: galeria.informacion
    };
    archivo.append('data', JSON.stringify(data));

    if (galeria._id !== 'nuevo') {
      url += '/' + galeria._id + '?token=' + this.usuarioService.token;
      return this.http.put(url, archivo).pipe(
        map((resp: any) => {
          Swal.fire('Galeria actualizada', ' ', 'success');
        })
      );
    } else {
      url += '?token=' + this.usuarioService.token;
      return this.http.post(url, archivo).pipe(
        map((resp: any) => {
          Swal.fire('Galeria creada', ' ', 'success');
          return resp.galeriaDB;
        })
      );
    }
  }

  buscarGaleriasId(id: string) {
    let url = URL_SERVICIOS + '/galeria/' + id + '?token=' + this.usuarioService.token;
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.galeria;
      })
    );
  }
}
