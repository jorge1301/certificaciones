import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Administración',
      icono: 'mdi mdi-angular',
      submenu: [
        { titulo: 'Portafolio', url: '/portafolio' },
        { titulo: 'Cursos del Portafolio', url: '/portafolio-cursos' },
        { titulo: 'Cursos Avanzados', url: '/avanzado' },
        { titulo: 'Cursos Internacionales', url: '/internacional' },
        { titulo: 'Agencias', url: '/agencias' },
        { titulo: 'Galeria', url: '/galeria' },
        { titulo: 'Certificados', url: '/certificados' }
      ]
    }
  ];

  constructor() { }
}
