import { Component, OnInit } from '@angular/core';
import { CursoAvanzado } from '../../models/cursoAvanzado.model';
import { CursoAvanzadoService } from '../../services/service.index';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { configuracion } from '../../config/editor';

@Component({
  selector: 'app-avanzado-formulario',
  templateUrl: './avanzado-formulario.component.html',
  styles: []
})
export class AvanzadoFormularioComponent implements OnInit {
  avanzado: CursoAvanzado = new CursoAvanzado();
  imagenSubir: File;
  imagenTemporal: string | ArrayBuffer;
  configuraciones = configuracion;
  id: string;

  constructor(
    public avanzadoService: CursoAvanzadoService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(params => {
      this.id = params.id;
      if (this.id !== 'nuevo') {
        this.buscarInformacion(this.id);
      }
    });
   }

  ngOnInit() {
  }

  seleccionarImagen(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }
    if (archivo.type.indexOf('image') < 0) {
      Swal.fire('Solo imagenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = archivo;
    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL(archivo);
    reader.onloadend = () => this.imagenTemporal = reader.result;
  }

  crearCursoAvanzado(formulario: NgForm) {
    if (formulario.invalid) {
      return;
    }
    const programacion = this.avanzado.programacion;
    this.avanzado = formulario.value;
    this.avanzado._id = this.id;
    this.avanzado.programacion = programacion;
    const formData = new FormData();
    if (this.imagenSubir) {
      formData.append('imagen', this.imagenSubir, this.imagenSubir.name);
    }
    this.avanzadoService.crearCursosAvanzados(formData, this.avanzado)
      .subscribe(() => {
        this.router.navigate(['/avanzado']);
      }
      );
  }

  buscarInformacion(id) {
    this.avanzadoService.buscarCursoAvanzadoId(id)
      .subscribe((avanzado) => {
        this.avanzado = avanzado;
      });
  }

}
