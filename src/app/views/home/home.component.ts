import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {FilmService} from '../../services/filmService/film.service';
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

 filmSorties = [
        {id: "1", img: "../../../assets/images/1.jpg"},
        {id: "2", img: "../../../assets/images/2.jpg"},
        {id: "3", img: "../../../assets/images/3.jpg"},
        {id: "4", img: "../../../assets/images/4.jpg"},
        {id: "5", img: "../../../assets/images/5.jpg"},
        {id: "6", img: "https://material.angular.io/assets/img/examples/shiba2.jpg"}
      ];

 filmProchainement : any;

 emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(private router: Router, private filmService:FilmService) { }

  ngOnInit(): void {
    this.getFilmByStatusSortie("prochainement");

  }

  getFilmByStatusSortie(status:string){
    this.filmService.getFilmByStatus(status).subscribe(res => {
                  this.filmProchainement = res;
                  console.log(res);

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

          filmContent(){
            console.log("filmContent")
            this.router.navigate(['/filmcontent']);
          }
          tousFilm(){
            console.log("click here")
            this.router.navigate(['/films'])
          }

}
