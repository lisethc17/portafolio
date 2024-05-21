import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
const routes: Routes = [
  {
    path: 'login', component: FormularioComponent
  },
  {
    path:'recuperarContraseña',
    component: RecuperarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
