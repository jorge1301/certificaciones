import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { AgenciasComponent } from './agencias/agencias.component';
import { AvanzadoComponent } from './avanzado/avanzado.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InternacionalComponent } from './internacional/internacional.component';
import { AdministracionComponent } from './administracion.component';
import { SharedModule } from '../shared/shared.module';
import { ADMINISTRACION_ROUTES } from './administracion.routes';
import { CertificadosComponent } from './certificados/certificados.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
    declarations: [
        AdministracionComponent,
        DashboardComponent,
        PortafolioComponent,
        AgenciasComponent,
        AvanzadoComponent,
        ContactenosComponent,
        GaleriaComponent,
        InternacionalComponent,
        CertificadosComponent,
        CertificadoComponent,
        AccountSettingsComponent
    ],
    imports: [
        SharedModule,
        ADMINISTRACION_ROUTES
    ],
    exports: [
        DashboardComponent,
        PortafolioComponent,
        AgenciasComponent,
        AvanzadoComponent,
        ContactenosComponent,
        GaleriaComponent,
        InternacionalComponent,
        CertificadosComponent,
        CertificadoComponent,
        AccountSettingsComponent
    ]
})

export class AdministracionModule { }

