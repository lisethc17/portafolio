import { Candidato2Service } from './../../funcionario/candidato-register/candidato2.service';
import { Component, OnInit } from '@angular/core';
import { SwitchService } from './services/switch.service';
import { candidato } from 'src/app/funcionario/candidato-register/canditato';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.css'],
  providers:[Candidato2Service]
})

export class VotarComponent implements OnInit{
  candidatos!:candidato[];
  modalSwitch:boolean;

  constructor(private modalSS:SwitchService,private candidato2Service:Candidato2Service){}

  ngOnInit(): void {
    this.candidato2Service.getAll().subscribe(
      u=>{this.candidatos=u!
      console.log(this.candidatos)}
    );
    
    this.modalSS.$modal.subscribe((valor)=>{this.modalSwitch = valor})
  }

  openModal(){
    this.modalSwitch = true;
  }

partido1="Partido 1";
}
