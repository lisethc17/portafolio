import { FuncionarioService } from './../services/funcionario.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Candidato2Service } from './candidato2.service';

@Component({
  selector: 'app-candidato-register',
  templateUrl: './candidato-register.component.html',
  styleUrls: ['./candidato-register.component.css']
})
export class CandidatoRegisterComponent {
  cedula: string = "";
  existe: boolean
  candidatoForm2: FormGroup = this.fb.group({
    slogan: [""],
    partidoPolitico: [""],
    propuesta: [""],
    cedCiudadano: [""]
  })
  candidatoForm: FormGroup = this.fb.group({
    nombres: [""],
    apellidos: [""],
    municipionacimiento: [""],
    fechanacimiento: [""],
    pais: [""],
    departamentoresidencia: [""],
    municipioresidencia: [""],
    lugarvotacion: [""],
    correo: [""],
    pass: [""],
    phone: [""],
    voto: [""],
    id: [""],
   
  })

  constructor(private candidatoService: Candidato2Service, 
    private fb: FormBuilder, private funcionarioservice:FuncionarioService) { }

  ngOnInit() {
    this.candidatoForm.disable();
    this.candidatoForm2.get("cedCiudadano")?.disable();
    

  }
  consultar(id: string) {
    this.funcionarioservice.getOneUser(id).subscribe(res => {
      if (res == "User not present in the database") {
        this.existe = false
      } else {
        this.candidatoForm2.get("cedCiudadano")?.setValue(res.id)
        this.candidatoForm.get("nombres")?.setValue(res.nombres)
        this.candidatoForm.get("apellidos")?.setValue(res.apellidos)
        this.candidatoForm.get("municipionacimiento")?.setValue(res.municipionacimiento)
        this.candidatoForm.get("fechanacimiento")?.setValue(res.fechanacimiento)
        this.candidatoForm.get("pais")?.setValue(res.pais)
        this.candidatoForm.get("departamentoresidencia")?.setValue(res.departamentoresidencia)
        this.candidatoForm.get("municipioresidencia")?.setValue(res.municipioresidencia)
        this.candidatoForm.get("lugarvotacion")?.setValue(res.lugarvotacion)
        this.candidatoForm.get("correo")?.setValue(res.correo)
        this.candidatoForm.get("pass")?.setValue(res.pass)
        this.candidatoForm.get("phone")?.setValue(res.phone)
      
        if (this.candidatoForm.value) {
          this.existe = true
          
        } else {
          this.existe = false
        }
       
      }

    })
  }
  register() {
    console.log(this.candidatoForm2.value)
    this.candidatoService.insert(this.candidatoForm2.value).subscribe(res => {
      this.existe = false
      this.candidatoForm.reset()
      this.cedula = ""
      
      this.candidatoForm2.get("slogan")?.disable()
      this.candidatoForm2.get("partidoPolitico")?.disable()
      this.candidatoForm2.get("propuesta")?.disable()
      console.log("actualizado")
    })
  }
}
