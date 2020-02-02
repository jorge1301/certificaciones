import { NgModule } from '@angular/core';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PRINCIPAL_ROUTES } from './principal.routes';
import { AvanzadoComponent } from './avanzado/avanzado.component';
import { InternacionalComponent } from './internacional/internacional.component';
import { AgenciasComponent } from './agencias/agencias.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
    declarations: [
        PortafolioComponent,
        AvanzadoComponent,
        InternacionalComponent,
        AgenciasComponent,
        GaleriaComponent
    ],
    imports: [
        PRINCIPAL_ROUTES,
        CommonModule,
        PipesModule,
        FormsModule,
        NgbModule,
        NgxGalleryModule
    ],
    exports: [
    ]
})
export class PrincipalModule { }
