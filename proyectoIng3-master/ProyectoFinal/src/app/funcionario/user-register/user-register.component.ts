import { usuario } from './../interface/funcionario';
import { FuncionarioService } from './../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  cedula: string = "";
  existe2: boolean;
  existe: boolean
  usuarioForm: FormGroup = this.fb.group({
    id: [""],
    nombres: [""],
    apellidos: [""],
    municipionacimiento: [""],
    fechanacimiento: [""],
    pais: [""],
    departamentoresidencia: [""],
    municipioresidencia: ["", [Validators.required, Validators.minLength(2)]],
    lugarvotacion: [""],
    correo: ["", [Validators.required, Validators.minLength(8), Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)]],
    pass: [""],
    phone: ["", [Validators.required, Validators.min(10)]],
    voto: [""]
  })

  constructor(private funcionarioService: FuncionarioService, private fb: FormBuilder) { }

  ngOnInit() {
    this.usuarioForm.get("nombres")?.disable()
    this.usuarioForm.get("apellidos")?.disable()
    this.usuarioForm.get("municipionacimiento")?.disable()
    this.usuarioForm.get("pais")?.disable()
    this.usuarioForm.get("departamentoresidencia")?.disable()
    this.usuarioForm.get("lugarvotacion")?.disable()
    this.usuarioForm.get("fechanacimiento")?.disable()
  }
  consultar(id: string) {
    this.funcionarioService.getOneUser(id).subscribe(res => {
      if (res == "User not present in the database") {
        this.existe = false
        console.log(res)
      } else {
        this.usuarioForm.get("id")?.setValue(res.id)
        this.usuarioForm.get("nombres")?.setValue(res.nombres)
        this.usuarioForm.get("apellidos")?.setValue(res.apellidos)
        this.usuarioForm.get("municipionacimiento")?.setValue(res.municipionacimiento)
        this.usuarioForm.get("fechanacimiento")?.setValue(res.fechanacimiento)
        this.usuarioForm.get("pais")?.setValue(res.pais)
        this.usuarioForm.get("departamentoresidencia")?.setValue(res.departamentoresidencia)
        this.usuarioForm.get("municipioresidencia")?.setValue(res.municipioresidencia)
        this.usuarioForm.get("lugarvotacion")?.setValue(res.lugarvotacion)
        this.usuarioForm.get("correo")?.setValue(res.correo)
        this.usuarioForm.get("pass")?.setValue(res.pass)
        this.usuarioForm.get("phone")?.setValue(res.phone)

        if (this.usuarioForm.value) {
          this.existe = true
        } else {
          this.existe = false
        }
      }

    })


  }
  register() {
    const id = this.usuarioForm.get("id")?.value
    this.usuarioForm.get("id")?.disable()
    this.usuarioForm.get("nombres")?.enable()
    this.usuarioForm.get("apellidos")?.enable()
    this.usuarioForm.get("municipionacimiento")?.enable()
    this.usuarioForm.get("pais")?.enable()
    this.usuarioForm.get("departamentoresidencia")?.enable()
    this.usuarioForm.get("lugarvotacion")?.enable()
    this.usuarioForm.get("fechanacimiento")?.enable()
    this.funcionarioService.actualizarUsuario(id, this.usuarioForm.value).subscribe(res => {
      this.existe = false
      this.usuarioForm.reset()
      this.cedula = ""
      this.usuarioForm.get("nombres")?.disable()
      this.usuarioForm.get("apellidos")?.disable()
      this.usuarioForm.get("municipionacimiento")?.disable()
      this.usuarioForm.get("pais")?.disable()
      this.usuarioForm.get("departamentoresidencia")?.disable()
      this.usuarioForm.get("lugarvotacion")?.disable()
      this.usuarioForm.get("fechanacimiento")?.disable()
      console.log("actualizado")
    })
  }
}

