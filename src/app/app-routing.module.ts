import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FilmsComponent } from './views/films/films.component';
import { SeancesComponent } from './views/seances/seances.component';
import { FilmContentComponent } from './views/film-content/film-content.component';

const routes:Routes=[
 {path:'',component:HomeComponent},
 {path:'films',component:FilmsComponent},
 {path:'seances',component:SeancesComponent},
 {path:'filmcontent/:id',component:FilmContentComponent},
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
