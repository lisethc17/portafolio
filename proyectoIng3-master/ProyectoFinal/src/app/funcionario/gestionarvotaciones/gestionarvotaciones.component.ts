import { Component } from '@angular/core';

@Component({
  selector: 'app-gestionarvotaciones',
  templateUrl: './gestionarvotaciones.component.html',
  styleUrls: ['./gestionarvotaciones.component.css']
})
export class GestionarvotacionesComponent {
  horaInicio: String = "";
  horaFinal: String = "";

  constructor() { }

  registerc() {
    console.log(this.horaInicio);
    console.log(this.horaFinal);
  }
}
