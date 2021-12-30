import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/services/filmService/film.service';
import { SeanceService } from 'src/app/services/seanceService/seance.service';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent implements OnInit {

  constructor(private router: Router,private filmService:FilmService, private seanceService:SeanceService) { 
  }
  
  day:any;
  filmseances:any;
  seances:any;
 currentWeek:any= [];
 details:any=[];
 curr = new Date; // get current date
 firstDay =new Date(this.curr.setDate(this.curr.getDate() - this.curr.getDay()+ (this.curr.getDay() == 0 ? -6:1)));
 lastDay= new Date(this.curr.setDate(this.curr.getDate() - this.curr.getDay() +7));

  ngOnInit(): void {
    for(let i=this.firstDay; i<=this.lastDay;i.setDate(i.getDate() + 1)){
      console.log(i.getDate());
      this.currentWeek.push({"number":i.getDate(),"jour":i.toISOString().split("T")[0]});
    }
    //this.getFilmsSeanceByDate(this.currentWeek.find((item: any) => item.number === 30).jour);
  }

  isSelected(day: String) {
    if(day<(new Date()).toISOString().split("T")[0]){
        return true;
    }else {
        return false;
    }
  }

  //item:any;
  tabClick(event: MatTabChangeEvent) {
    const tab = event.tab.textLabel;
    console.log(tab);
    //this.getFilmsSeanceByDate(this.currentWeek.find((item: any) => item.number === 29).jour);
    this.getFilmsSeanceByDate(this.currentWeek.find((item: any) => item.number == tab).jour);
  }

  getFilmsSeanceByDate(date:string){
    this.details=[];
    this.filmService.getFilmsByDate(date).subscribe(res => {
        this.seances = res;
        this.seances.forEach((element:any) => {
          this.seanceService.getFilmsSeances(element.id).subscribe(res => {
            this.filmseances=res;
            this.details.push({
              "id":element.id,
              "titre":element.titre,
              "poster":element.poster,
              "dates": this.filmseances
            });
          });      
        });
    });
  }

  moreDetails(){
      console.log("filmContent")
      this.router.navigate(['/filmcontent']);

  }

}
