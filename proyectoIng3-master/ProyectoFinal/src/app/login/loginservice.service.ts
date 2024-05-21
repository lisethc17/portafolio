import { usuario } from './../funcionario/interface/funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private baseUrl=environment.baseUrl
  constructor(private http:HttpClient) { }

  getOneUser(usuario:usuario){
    const url=`${this.baseUrl}/auth`
    return this.http.post<usuario>(url,usuario)
}
}
