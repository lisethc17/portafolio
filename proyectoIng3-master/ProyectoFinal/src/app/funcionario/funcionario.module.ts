import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CandidatoRegisterComponent } from './candidato-register/candidato-register.component';
import { IniciofuncionarioComponent } from './iniciofuncionario/iniciofuncionario.component';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GestionarvotacionesComponent } from './gestionarvotaciones/gestionarvotaciones.component';


@NgModule({
  declarations: [
    UserRegisterComponent,
    CandidatoRegisterComponent,
    IniciofuncionarioComponent,
    GestionarvotacionesComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FuncionarioRoutingModule,
    FormsModule
  ]
})
export class FuncionarioModule { }
