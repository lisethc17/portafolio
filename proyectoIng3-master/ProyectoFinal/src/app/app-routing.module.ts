import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'votante',
    loadChildren: () => import('./votante/votante.module').then(m => m.VotanteModule)
  },
  {
    path: 'informes',
    loadChildren: () => import('./informes/informes.module').then(m => m.InformesModule)
  },
  {
    path: 'funcionario',
    loadChildren: () => import('./funcionario/funcionario.module').then(m => m.FuncionarioModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
