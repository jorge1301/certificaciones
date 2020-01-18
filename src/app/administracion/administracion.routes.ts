import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './administracion.component';
import { AgenciasComponent } from './agencias/agencias.component';
import { AvanzadoComponent } from './avanzado/avanzado.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InternacionalComponent } from './internacional/internacional.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { PortafolioCursosComponent } from './portafolio-cursos/portafolio-cursos.component';
import { AgenciaFormularioComponent } from './agencias/agencia-formulario.component';
import { AvanzadoFormularioComponent } from './avanzado/avanzado-formulario.component';
import { GaleriaFormularioComponent } from './galeria/galeria-formulario.component';
import { InternacionalFormularioComponent } from './internacional/internacional-formulario.component';
import { PortafolioFormularioComponent } from './portafolio/portafolio-formulario.component';
import { CertificadoFormularioComponent } from './certificados/certificado-formulario.component';
import { PortafolioCursosFormularioComponent } from './portafolio-cursos/portafolio-cursos-formulario.component';


const routes: Routes = [{
    path: '',
    component: AdministracionComponent,
    canActivate: [LoginGuardGuard],
    children: [
        { path: 'agencias', component: AgenciasComponent, data: { titulo: 'Agencias' } },
        { path: 'agencia/:id', component: AgenciaFormularioComponent, data: { titulo: 'Agencias' } },
        { path: 'avanzado', component: AvanzadoComponent, data: { titulo: 'Cursos Avanzados' } },
        { path: 'avanzado/:id', component: AvanzadoFormularioComponent, data: { titulo: 'Cursos Avanzados' } },
        { path: 'galeria', component: GaleriaComponent, data: { titulo: 'Galeria' } },
        { path: 'galeria/:id', component: GaleriaFormularioComponent, data: { titulo: 'Galeria' } },
        { path: 'internacional', component: InternacionalComponent, data: { titulo: 'Cursos Internacionales' } },
        { path: 'internacional/:id', component: InternacionalFormularioComponent, data: { titulo: 'Cursos Internacionales' } },
        { path: 'portafolio', component: PortafolioComponent, data: { titulo: 'Portafolio' } },
        { path: 'portafolio/:id', component: PortafolioFormularioComponent, data: { titulo: 'Portafolio' } },
        { path: 'certificados', component: CertificadosComponent, data: { titulo: 'Certificados' } },
        { path: 'certificado/:id', component: CertificadoFormularioComponent, data: { titulo: 'Certificados' } },
        { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Tema' }},
        { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
        { path: 'portafolio-cursos', component: PortafolioCursosComponent, data: { titulo: 'Cursos del Portafolio' } },
        { path: 'portafolio-cursos/:id', component: PortafolioCursosFormularioComponent, data: { titulo: 'Cursos del Portafolio' } }
    ]
}];

export const ADMINISTRACION_ROUTES = RouterModule.forChild(routes);
