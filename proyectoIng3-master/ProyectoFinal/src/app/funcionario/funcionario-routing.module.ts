import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IniciofuncionarioComponent } from './iniciofuncionario/iniciofuncionario.component';
import { CandidatoRegisterComponent } from './candidato-register/candidato-register.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { GestionarvotacionesComponent } from './gestionarvotaciones/gestionarvotaciones.component';

const routes: Routes = [
  {
    path: '', 
    component: IniciofuncionarioComponent
  },
  {
    path: 'registrarUsuario',
    component: UserRegisterComponent
  },
  {
    path: 'registrarCandidato',
    component: CandidatoRegisterComponent
  },
  {
    path: 'gestionarVotaciones',
    component: GestionarvotacionesComponent
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
export class FuncionarioRoutingModule { }