import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { Agencia } from 'src/app/models/agencia.model';
import { UsuarioService } from '../usuario/usuario.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {

  constructor(public http: HttpClient, public usuarioService: UsuarioService) {
    this.usuarioService.cargarStorage();

  }

  cargarAgencias(desde: number = 0) {
    let url = URL_SERVICIOS + '/agencia?desde=' + desde;
    return this.http.get(url);
  }

  buscarAgencias(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/agencias/' + termino;
    url += '?token=' + this.usuarioService.token;
    return this.http.get(url).pipe(
      map((resp: any) => resp.agencias));

  }

  eliminarAgencias(id: string) {
    let url = URL_SERVICIOS + '/agencia/' + id;
    url += '?token=' + this.usuarioService.token;
    return this.http.delete(url);
  }

  crearAgencias(archivo: FormData, agencia: Agencia) {
    let url = URL_SERVICIOS + '/agencia';
    const data = {
      informacion: agencia.informacion
    };
    archivo.append('data', JSON.stringify(data));

    if (agencia._id !== 'nuevo') {
      url += '/' + agencia._id + '?token=' + this.usuarioService.token;
      return this.http.put(url, archivo).pipe(
        map((resp: any) => {
          Swal.fire('Agencia actualizada', ' ', 'success');
        })
      );
    } else {
      url += '?token=' + this.usuarioService.token;
      return this.http.post(url, archivo).pipe(
        map((resp: any) => {
          Swal.fire('Agencia creada', ' ', 'success');
          return resp.agenciaDB;
        })
      );
    }
  }

  buscarAgenciaId(id: string) {
    let url = URL_SERVICIOS + '/agencia/' + id + '?token=' + this.usuarioService.token;
    return this.http.get(url).pipe (
      map((resp: any) => {
        return resp.agencia;
      })
    );
  }
}
