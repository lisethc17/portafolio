import { Router } from '@angular/router';
import { LoginserviceService } from './../loginservice.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  usuarioForm: FormGroup = this.fb.group({
    correo: [""],
    pass: [""]
  })

  constructor(private loginservice:LoginserviceService, private fb: FormBuilder, private router:Router) {}

  login() {
    this.loginservice.getOneUser(this.usuarioForm.value).subscribe(res => {
      

        if(res.roles === "ROLE_USER"){
        this.router.navigate(['/votante/candidatos']);

      }else{

        this.router.navigate(['/funcionario'])
      }
    
    })
  }
}
