import { Component, OnInit, ViewChild } from '@angular/core';
import { GaleriaService } from '../../services/service.index';
import {Galeria} from '../../models/galeria.model';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { galleryOptions } from '../../config/gallery';
import { ImagenPipe } from '../../pipes/imagen.pipe';
import { DomSeguroPipe } from '../../pipes/dom-seguro.pipe';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  providers: [ImagenPipe, DomSeguroPipe]
})
export class GaleriaComponent implements OnInit {
  opcionesGaleria: NgxGalleryOptions[];
  galeriaLista: Galeria[] = [];
  galeriaImagenes: NgxGalleryImage[];
  galeriaImagenesListado = [];

  constructor(private galeriaService: GaleriaService, private pipeImagen: ImagenPipe, private pipeDomSeguro: DomSeguroPipe) {
    this.opcionesGaleria = galleryOptions;
   }

  ngOnInit() {
    this.cargarInformacion();
  }

  cargarInformacion() {
    this.galeriaService.cargarGalerias(0, 0)
    .subscribe((resp: any) => {
      this.galeriaLista = resp.galeria;
      this.extraerImagen();
    });
  }

  extraerImagen() {
    this.galeriaLista.forEach(element => {
      this.galeriaImagenesListado.push({
        small: this.pipeImagen.transform(element.imagen, 'galerias'),
        medium: this.pipeImagen.transform(element.imagen, 'galerias'),
        big: this.pipeImagen.transform(element.imagen, 'galerias'),
        description: this.pipeDomSeguro.transform(element.informacion)
      });
    });
    this.galeriaImagenes = this.galeriaImagenesListado;
  }
}

