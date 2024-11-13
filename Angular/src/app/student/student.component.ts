import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  constructor(public app:AppComponent){}

  whatToShow:number=1; //1-showTests  2-AttemptTest

  logs:any;

  logout(){
    this.app.isLoggedIn=0;
  }
}
