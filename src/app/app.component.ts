import { FuncionarioService } from './service/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'

import { Funcionario } from './employee/funcionario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  public funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) { }


  ngOnInit() {
      this.getFuncionarios();
  }

  public getFuncionarios():void{
    this.funcionarioService.getEmployees().subscribe(
      (response: Funcionario[]) => {
        this.funcionarios = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
