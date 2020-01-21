import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Componentes de administracion
import { PortafolioComponent } from './portafolio/portafolio.component';
import { AgenciasComponent } from './agencias/agencias.component';
import { AvanzadoComponent } from './avanzado/avanzado.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InternacionalComponent } from './internacional/internacional.component';
import { AdministracionComponent } from './administracion.component';
import { SharedModule } from '../shared/shared.module';
import { ADMINISTRACION_ROUTES } from './administracion.routes';
import { CertificadosComponent } from './certificados/certificados.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PortafolioCursosComponent } from './portafolio-cursos/portafolio-cursos.component';
import { ProfileComponent } from './profile/profile.component';

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';
import { AgenciaFormularioComponent } from './agencias/agencia-formulario.component';
import { AvanzadoFormularioComponent } from './avanzado/avanzado-formulario.component';
import { CertificadoFormularioComponent } from './certificados/certificado-formulario.component';
import { GaleriaFormularioComponent } from './galeria/galeria-formulario.component';
import { InternacionalFormularioComponent } from './internacional/internacional-formulario.component';
import { PortafolioFormularioComponent } from './portafolio/portafolio-formulario.component';
import { PortafolioCursosFormularioComponent } from './portafolio-cursos/portafolio-cursos-formulario.component';
import { NgxEditorModule } from 'ngx-editor';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
    declarations: [
        AdministracionComponent,
        PortafolioComponent,
        AgenciasComponent,
        AvanzadoComponent,
        GaleriaComponent,
        InternacionalComponent,
        CertificadosComponent,
        AccountSettingsComponent,
        ProfileComponent,
        PortafolioCursosComponent,
        AgenciaFormularioComponent,
        AvanzadoFormularioComponent,
        CertificadoFormularioComponent,
        GaleriaFormularioComponent,
        InternacionalFormularioComponent,
        PortafolioFormularioComponent,
        PortafolioCursosFormularioComponent
    ],
    imports: [
        SharedModule,
        ADMINISTRACION_ROUTES,
        PipesModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        NgxEditorModule,
        PdfViewerModule
    ],
    exports: [
        PortafolioComponent,
        AgenciasComponent,
        AvanzadoComponent,
        GaleriaComponent,
        InternacionalComponent,
        CertificadosComponent,
        AccountSettingsComponent,
        PortafolioCursosComponent
    ]
})

export class AdministracionModule { }

