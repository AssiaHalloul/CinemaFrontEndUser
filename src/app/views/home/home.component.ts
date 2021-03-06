import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {FilmService} from '../../services/filmService/film.service';
import{Film} from '../../models/film.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 films: any;
 slides = [
       {id: "1", img: "../../../assets/images/park.jpg"},
       {id: "2", img: "../../../assets/images/park.jpg"},
       {id: "3", img: "../../../assets/images/park.jpg"}
     ];

 filmSorties:any;

 filmProchainement : any;
 film:Film;

 emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(private router: Router, private filmService:FilmService) { }

  ngOnInit(): void {

    this.getFilmByStatusSortie("sortie");
    this.getFilmByStatusProchainement("prochainement");


  }

  getFilmByStatusProchainement(status:string){
      this.filmService.getFilmByStatus(status).subscribe(res => {
                    this.filmProchainement = res;
                    console.log(res);

      });
    }

  getFilmByStatusSortie(status:string){
        this.filmService.getFilmByStatus(status).subscribe(res => {
                      this.filmSorties = res;
                     // console.log(res);

        });
      }

  customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 2
          },
          740: {
            items: 3
          },
          940: {
            items:1
          }
        },
        nav: true,

      }

      lesSorties: OwlOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
              0: {
                items: 1
              },
              400: {
                items: 2
              },
              740: {
                items: 3
              },
              940: {
                items:7
              }
            },
            nav: false
          }

          filmContent(film:Film){
           // console.log(film.id)
            this.router.navigate(['/filmcontent',film.id]);
          }
          tousFilm(){
           // console.log("click here")
            this.router.navigate(['/films'])
          }

}
