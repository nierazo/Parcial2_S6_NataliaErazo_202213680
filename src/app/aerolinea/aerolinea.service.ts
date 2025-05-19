import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aerolinea } from './aerolinea';

@Injectable({
  providedIn: 'root'
})
export class AerolineaService {

private apiUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) { }


  getAerolineas(): Observable<Aerolinea[]> {
    return this.http.get<Aerolinea[]>(this.apiUrl);
  }

  getAerolinea(id: string): Observable<Aerolinea> {
    return this.http.get<Aerolinea>(this.apiUrl + "/" + id);
  }

}
