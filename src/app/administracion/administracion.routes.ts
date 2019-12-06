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


const routes: Routes = [{
    path: '',
    component: AdministracionComponent,
    children: [
        { path: 'agencias', component: AgenciasComponent },
        { path: 'avanzado', component: AvanzadoComponent },
        { path: 'contactenos', component: ContactenosComponent },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'galeria', component: GaleriaComponent },
        { path: 'internacional', component: InternacionalComponent },
        { path: 'portafolio', component: PortafolioComponent },
        { path: 'certificados', component: CertificadosComponent },
        { path: 'certificado', component: CertificadoComponent },
        { path: 'account-settings', component: AccountSettingsComponent}
    ]
}];

export const ADMINISTRACION_ROUTES = RouterModule.forChild(routes);
