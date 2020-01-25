import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PRINCIPAL_ROUTES } from './principal.routes';
import { AvanzadoComponent } from './avanzado/avanzado.component';
import { InternacionalComponent } from './internacional/internacional.component';
import { AgenciasComponent } from './agencias/agencias.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PipesModule } from '../pipes/pipes.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModule } from '@ngx-gallery/core';

@NgModule({
    declarations: [
        PrincipalComponent,
        PortafolioComponent,
        AvanzadoComponent,
        InternacionalComponent,
        AgenciasComponent,
        GaleriaComponent,
        NavbarComponent
    ],
    imports: [
        PRINCIPAL_ROUTES,
        CommonModule,
        PipesModule,
        FormsModule,
        NgbModule,
        GalleryModule.withConfig({})
        ],
    exports: [
    ]
})
export class PrincipalModule { }
