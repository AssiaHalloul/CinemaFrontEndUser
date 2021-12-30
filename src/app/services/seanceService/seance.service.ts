import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seance } from 'src/app/models/seance.model';
const baseUrl = 'http://localhost:8080/api/seances';

@Injectable({
  providedIn: 'root'
})

export class SeanceService {
  host:string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  getFilmsSeances(id: any): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${baseUrl}/filmSeances?film=${id}`);
  }
  
}
