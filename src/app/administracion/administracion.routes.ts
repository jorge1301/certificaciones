import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './administracion.component';
import { AgenciasComponent } from './agencias/agencias.component';
import { AvanzadoComponent } from './avanzado/avanzado.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InternacionalComponent } from './internacional/internacional.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [{
    path: '',
    component: AdministracionComponent,
    canActivate: [LoginGuardGuard],
    children: [
        { path: 'agencias', component: AgenciasComponent, data: { titulo: 'Agencias' } },
        { path: 'avanzado', component: AvanzadoComponent, data: { titulo: 'Cursos Avanzados' } },
        { path: 'contactenos', component: ContactenosComponent, data: { titulo: 'Contactenos' } },
        { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
        { path: 'galeria', component: GaleriaComponent, data: { titulo: 'Galeria' } },
        { path: 'internacional', component: InternacionalComponent, data: { titulo: 'Cursos Internacionales' } },
        { path: 'portafolio', component: PortafolioComponent, data: { titulo: 'Portafolio' } },
        { path: 'certificados', component: CertificadosComponent, data: { titulo: 'Certificados' } },
        { path: 'certificado', component: CertificadoComponent },
        { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del tema' }},
        { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } }
    ]
}];

export const ADMINISTRACION_ROUTES = RouterModule.forChild(routes);
