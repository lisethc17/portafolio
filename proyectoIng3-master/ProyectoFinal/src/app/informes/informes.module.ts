import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioinformesComponent } from './inicioinformes/inicioinformes.component';
import { InformesRoutingModule } from './informes-routing.module';
import { InformeoneComponent } from './informeone/informeone.component';
import { InformetwoComponent } from './informetwo/informetwo.component';
import { InformethreeComponent } from './informethree/informethree.component';
import { InformefourComponent } from './informefour/informefour.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { InformefiveComponent } from './informefive/informefive.component';


@NgModule({
  declarations: [
    InicioinformesComponent,
    InformeoneComponent,
    InformetwoComponent,
    InformethreeComponent,
    InformefourComponent,
    InformefiveComponent
  ],
  imports: [
    CommonModule,
    InformesRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class InformesModule { }
