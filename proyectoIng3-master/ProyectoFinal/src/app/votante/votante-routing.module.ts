import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { VotarComponent } from './votar/votar.component';
import { MunicipioCambioComponent } from './municipio-cambio/municipio-cambio.component';

const routes: Routes = [
 
  {
    path: 'candidatos',
    component: VotarComponent
  },
  {
    path: 'perfil',
    component: MunicipioCambioComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class VotanteRoutingModule { }