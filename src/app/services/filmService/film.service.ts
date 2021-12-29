import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../../models/film.model';
const baseUrl = 'http://localhost:8080/api/films/filmByStatus';

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  host:string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

//   getFilms(): Observable<Film[]> {
//       return this.http.get<Film[]>(`${baseUrl}/`);
//   }
  getFilmByStatus(status: any): Observable<Film[]> {
      return this.http.get<Film[]>(`${baseUrl}?status=${status}`);
    }
}
