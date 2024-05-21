import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotarComponent } from './votar/votar.component';
import { MunicipioCambioComponent } from './municipio-cambio/municipio-cambio.component';
import { InicioComponent } from './inicio/inicio.component';
import { VotanteRoutingModule } from './votante-routing.module';
import { ModalComponent } from './votar/modal/modal.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    VotarComponent,
    MunicipioCambioComponent,
    InicioComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    VotanteRoutingModule,
    FormsModule
  ],
  exports: [
    InicioComponent,
    MunicipioCambioComponent,
    VotarComponent
  ]
})
export class VotanteModule { }
