import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl , FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmService } from 'src/app/services/filmService/film.service';
import { GenreService } from 'src/app/services/genreService/genre.service';
import { Genre } from 'src/app/models/genre.model';
import{Film} from '../../models/film.model'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private router: Router,private formBuilder: FormBuilder,private filmService: FilmService,
    private genreService:GenreService) { }

  filterForm: FormGroup;
  films:any;
  genres:any;
  film:Film;

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      genre: new FormControl('', ),
      status: new FormControl('',),
    });
    this.getAllFilms();
    this.getAllGenres();
  }

  getAllFilms(){
    this.filmService.getFilms().subscribe(res => {
      this.films = res;
      console.log("films: " ,res);
    });
  }

  getAllGenres(){
    this.genreService.getGenres().subscribe(res => {
      this.genres = res;
      console.log("genres: " ,res);
    });
  }

  getFilmByStatusAndGenre(status:string,genre:String){
    this.filmService.getFilmByStatusAndGenre(status,genre).subscribe(res => {
                  this.films = res;
                  console.log("filter ",res);
    });
  }



  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.filterForm.value);
    this.getFilmByStatusAndGenre(this.filterForm.value.status,this.filterForm.value.genre);
  }

  filmContent(film:Film){
    console.log(film.id)
    this.router.navigate(['/filmcontent',film.id]);
  }



}
