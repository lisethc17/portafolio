import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private router:Router){}
  
irLogin():void{
  console.log("login")
  this.router.navigate(['/auth/login']);
}
irfuncionario():void{
  this.router.navigate(['/funcionario'])
}
irInformes():void{
this.router.navigate(['/informes/inicioInformes']);
}

}
