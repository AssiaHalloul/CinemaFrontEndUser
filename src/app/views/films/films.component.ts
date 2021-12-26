import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl , FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
//   genre = new FormControl('', [Validators.required]);
//   status = new FormControl('', [Validators.required]);
  filterForm = new FormGroup({
      genre: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });
  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  moreDetails(){
    console.log("filmContent")
    this.router.navigate(['/filmcontent']);

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.filterForm.value);
  }



}
