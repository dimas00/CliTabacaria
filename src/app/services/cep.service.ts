import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CEPService {

  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}`

  constructor(private http: HttpClient) { }

}