import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private apiUrl = 'http://localhost:5000/api/kits';

  constructor(private http: HttpClient) {}

  // Metodo per ottenere la lista di kit pizza
  getPizzaKits(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
}