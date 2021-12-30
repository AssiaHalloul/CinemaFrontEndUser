import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/models/genre.model';
const baseUrl = 'http://localhost:8080/api/genres';

@Injectable({
  providedIn: 'root'
})

export class GenreService {
  host:string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${baseUrl}/`);
  }
  
}
