import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { StudentComponent } from '../student.component';
@Component({
  selector: 'app-showtest',
  templateUrl: './showtest.component.html',
  styleUrl: './showtest.component.css'
})
export class ShowtestComponent {

  tests:any;

  constructor(public http:HttpClient, public app:AppComponent, public student:StudentComponent)
  {
    let url=this.app.baseUrl+'giveActiveTests'
    this.http.get(url).subscribe((data:any)=>
    {
      this.tests=data;
    }
    );
  }

  attempt(testid:number)
  {
    let url=this.app.baseUrl+'giveMeTestLogs'+this.app.userid+'and'+testid;
    this.http.get(url).subscribe((data:any)=>
    {
      this.student.logs=data;
      this.student.whatToShow=2;
    }
    );
  }
}
