import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Inject} from '@angular/core';
import {FilmService} from '../../../services/filmService/film.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  galleries:any;
  constructor(public dialogRef: MatDialogRef<EvenementComponent>,private filmService:FilmService,@Inject(MAT_DIALOG_DATA) public data: any) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {

     this.getGallerieByEventId(this.data.eventInformations.id);
  }

  getGallerieByEventId(id:any){
          this.filmService.getGallerieByEventId(id).subscribe(res => {
              this.galleries=res;
              console.log(res);

          });
      }

}
