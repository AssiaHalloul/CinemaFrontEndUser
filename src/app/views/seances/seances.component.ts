import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  moreDetails(){
      console.log("filmContent")
      this.router.navigate(['/filmcontent']);

    }

}
