import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-film-content',
  templateUrl: './film-content.component.html',
  styleUrls: ['./film-content.component.css']
})
export class FilmContentComponent implements OnInit {
   filmSorties = [
       {id: "1", img: "../../../assets/images/1.jpg"},
       {id: "2", img: "../../../assets/images/2.jpg"},
       {id: "3", img: "../../../assets/images/3.jpg"},
       {id: "4", img: "../../../assets/images/4.jpg"},
       {id: "5", img: "../../../assets/images/5.jpg"},
       {id: "6", img: "https://material.angular.io/assets/img/examples/shiba2.jpg"}
     ];
  constructor() { }

  ngOnInit(): void {
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
}
