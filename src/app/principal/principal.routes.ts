import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { AvanzadoComponent } from './avanzado/avanzado.component';
import { InternacionalComponent } from './internacional/internacional.component';
import { AgenciasComponent } from './agencias/agencias.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';

const routes: Routes = [{
    path: '',
    component: PrincipalComponent,
    children: [
        { path: 'portafolio', component: PortafolioComponent, data: { titulo: 'Portafolio' } },
        { path: 'avanzado', component: AvanzadoComponent, data: { titulo: 'Cursos Avanzados' } },
        { path: 'internacional', component: InternacionalComponent, data: { titulo: 'Cursos Internacionales' } },
        { path: 'agencias', component: AgenciasComponent, data: { titulo: 'Agencias' } },
        { path: 'galeria', component: GaleriaComponent, data: { titulo: 'Galeria' } },
        { path: '', component: PortafolioComponent}
    ]
}, { path: '**', component: NopagefoundComponent }
];

export const PRINCIPAL_ROUTES = RouterModule.forChild(routes);
