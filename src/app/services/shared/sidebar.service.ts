import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'Portafolio', url: '/portafolio' },
        { titulo: 'Agencias', url: '/agencias' },
        { titulo: 'Cursos Avanzados', url: '/avanzado' },
        { titulo: 'Cursos Internacionales', url: '/internacional' },
        { titulo: 'Galeria', url: '/galeria' },
        { titulo: 'Contactenos', url: '/contactenos' },
        { titulo: 'Certificados', url: '/certificados' },
        { titulo: 'Certificado', url: '/certificado' }
      ]
    }
  ];

  constructor() { }
}
