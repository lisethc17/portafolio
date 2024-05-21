import { candidato } from 'src/app/funcionario/candidato-register/canditato';
import { Component, Input } from '@angular/core';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() candidato:candidato;

  constructor(private modalSS: SwitchService){}

  closeModal(){
    this.modalSS.$modal.emit(false)
  }

}
