import { usuario } from './../interface/funcionario';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private baseUrl=environment.baseUrl
  constructor(private http:HttpClient) { 

  }
  getOneUser(id:string){
    const url=`${this.baseUrl}/ciudadano/detail/${id}`
    return this.http.get<usuario>(url).pipe(
      catchError(err=>of(err.error))
    )
  }
  actualizarUsuario(id:string,usuario:usuario){
    const url=`${this.baseUrl}/ciudadano/${id}`
    return this.http.put<usuario>(url,usuario).pipe(
      catchError(err=>of(err.error))
    )
  }
}
