import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioinformesComponent } from './inicioinformes/inicioinformes.component';
import { InformeoneComponent } from './informeone/informeone.component';
import { InformetwoComponent } from './informetwo/informetwo.component';
import { InformethreeComponent } from './informethree/informethree.component';
import { InformefourComponent } from './informefour/informefour.component';
import { InformefiveComponent } from './informefive/informefive.component';

const routes: Routes = [
  {
    path: 'inicioInformes', 
    component: InicioinformesComponent,
   children: [
      {
        path: 'informe1',
        component: InformeoneComponent
      },
      {
        path: 'informe2',
        component: InformetwoComponent
      },
      {
        path: 'informe3',
        component: InformethreeComponent
      },
      {
        path: 'informe4',
        component: InformefourComponent
      },
      {
        path: 'informe5',
        component: InformefiveComponent
      }
    ]
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
export class InformesRoutingModule { }