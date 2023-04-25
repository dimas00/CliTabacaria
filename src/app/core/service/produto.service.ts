import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: Object[] = [];
  readonly url = 'http://localhost:8080/TabacariaApp';

  constructor(private http: HttpClient) { }

  public getProdutos(): Observable<Object[]> {
    return this.http.get<Object[]>(`${this.url}/produto`);
  }
}
