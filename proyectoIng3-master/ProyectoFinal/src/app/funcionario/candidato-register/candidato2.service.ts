import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { candidato } from './canditato';

@Injectable({
  providedIn: 'root'
})
export class Candidato2Service {
  private baseUrl=environment.baseUrl
  constructor(private http:HttpClient) { }

  actualizarCandidato(id:string,candidato:candidato){
    const url=`${this.baseUrl}/candidato/${id}`
    return this.http.put<candidato>(url,candidato).pipe(
      catchError(err=>of(err.error))
    )
  }
  getAll(){
    const url=`${this.baseUrl}/candidato`
    return this.http.get<candidato[]>(url)
  }
  getOneUser(id:string){
    const url=`${this.baseUrl}/candidato/detail/${id}`
    return this.http.get<candidato>(url).pipe(
      catchError(err=>of(err.error))
    )
  }
  insert(candidato:candidato){
    const url=`${this.baseUrl}/candidato`
    return this.http.post<candidato>(url,candidato).pipe(
      catchError(err=>of(err.error))
    )
}
}
