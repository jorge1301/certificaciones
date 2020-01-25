import { Component, OnInit, ViewChild } from '@angular/core';
import { GaleriaService } from '../../services/service.index';
import {Galeria} from '../../models/galeria.model';
import { GalleryItem, ImageItem, GalleryComponent } from '@ngx-gallery/core';
import { ImagenPipe } from '../../pipes/imagen.pipe';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: [],
  providers: [ImagenPipe]
})
export class GaleriaComponent implements OnInit {
  galeriaLista: Galeria[] = [];
  imagenes: GalleryItem[];
  items: GalleryItem[];
  @ViewChild(GalleryComponent, { static: false }) gallery: GalleryComponent;

  constructor(public galeriaService: GaleriaService, private pipeImagen: ImagenPipe) { }

  ngOnInit() {
    this.cargarInformacion();
  }

  cargarInformacion() {
    this.galeriaService.cargarGalerias(0, 50)
    .subscribe((resp: any) => {
      this.galeriaLista = resp.galeria;
      this.extraerImagen();
    });
  }

  extraerImagen() {
    this.galeriaLista.forEach(element => {
      this.gallery.addImage({ src: this.pipeImagen.transform(element.imagen, 'galerias'),
      thumb: this.pipeImagen.transform(element.imagen, 'galerias')});
    });
  }
}

