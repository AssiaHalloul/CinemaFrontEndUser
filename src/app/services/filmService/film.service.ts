import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../../models/film.model';
const baseUrl = 'http://localhost:8080/api/films';
const baseUrlGallerie='http://localhost:8080/api/galleries';
const baseUrlEvent='http://localhost:8080/api/evenements/filmsEvent';

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  host:string = "http://localhost:8080";
  constructor(private http: HttpClient) { }


  getFilmByStatus(status: any): Observable<Film[]> {
      return this.http.get<Film[]>(`${baseUrl}/filmByStatus?status=${status}`);
  }

  getFilmById(id: any): Observable<any> {
        return this.http.get(`${baseUrl}/${id}`);
  }

  getGallerieByFilmId(id: any): Observable<any> {
          return this.http.get(`${baseUrlGallerie}/filmsImages/${id}`);
  }

  getEventByFilmId(id: any): Observable<any> {
          return this.http.get(`${baseUrlEvent}/${id}`);
  }

  getGallerieByEventId(id: any): Observable<any> {
            return this.http.get(`${baseUrlGallerie}/EventFilmImages/${id}`);
  }

  getFilms(): Observable<Film[]> {
      return this.http.get<Film[]>(`${baseUrl}/`);
    }



    getFilmByStatusAndGenre(status: any,genre:any): Observable<Film[]> {
      return this.http.get<Film[]>(`${baseUrl}/filmByStatusANDGenre?status=${status}&genre=${genre}`);
    }

    getFilmsByDate(date: any): Observable<Film[]> {
      return this.http.get<Film[]>(`${baseUrl}/filmByDate?date=${date}`);
  }

}
