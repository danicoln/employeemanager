import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Funcionario } from './../employee/funcionario';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(`${this.apiServerUrl}/funcionarios/all`);
  }

  public addEmployees(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(`${this.apiServerUrl}/funcionarios/add`, funcionario);
  }

  public atualizarEmployees(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.put<Funcionario>(`${this.apiServerUrl}/funcionarios/atualizar`, funcionario);
  }

  public deletarEmployees(funcionarioId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/funcionarios/deletar/${funcionarioId}`);
  }
}
