import { Component, OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {FilmService} from '../../services/filmService/film.service';
import{Film} from '../../models/film.model'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EvenementComponent} from './evenement/evenement.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-film-content',
  templateUrl: './film-content.component.html',
  styleUrls: ['./film-content.component.css']
})
export class FilmContentComponent implements OnInit {


   contentFilm:any;
   eventsFilm:any;
   videoTrailer:any;
   rousUrl:any;
   acteurs:any[];
   galleries:any[];
  constructor(public dialog: MatDialog,private sanitizer:DomSanitizer,private router: Router,private route:ActivatedRoute, private filmService:FilmService) { }
  idFilm=this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.getContentFilmById(this.idFilm);
    this.getGallerieByFilmId(this.idFilm);
    this.getEventsFilmById(this.idFilm);

  }


  openDialog(event:any): void {
      const dialogRef = this.dialog.open(EvenementComponent, {
        height: '550px',
        width: '800px',
        data: {eventInformations: event}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
    }


  getContentFilmById(id:any){
        this.filmService.getFilmById(id).subscribe(res => {
                      this.contentFilm = res;
                      this.acteurs=res.acteurs;
                      this.rousUrl = "https://www.youtube.com/embed/"+res.trailer;
                      this.videoTrailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.rousUrl);
                      console.log(res);

        });
    }

    getEventsFilmById(id:any){
            this.filmService.getEventByFilmId(id).subscribe(res => {
                 this.eventsFilm=res;
                 console.log(res);
            });
    }


  getGallerieByFilmId(id:any){
        this.filmService.getGallerieByFilmId(id).subscribe(res => {
            this.galleries=res;
            console.log(res);

        });
    }




}
