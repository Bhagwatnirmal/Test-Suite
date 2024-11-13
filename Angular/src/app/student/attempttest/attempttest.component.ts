import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { StudentComponent } from '../student.component';

@Component({
  selector: 'app-attempttest',
  templateUrl: './attempttest.component.html',
  styleUrl: './attempttest.component.css'
})
export class AttempttestComponent {

  constructor(public student:StudentComponent, public http:HttpClient, public app:AppComponent){}

  showIndex:number=-1;
  load(i:number)
  {
      this.showIndex=i;
  }

  update()
  {
    let url=this.app.baseUrl+'update'+this.student.logs[this.showIndex].id;
    this.http.post(url, this.student.logs[this.showIndex].answer).subscribe((data:any)=>
    {
      if(data==null || data==0)
      {
        window.alert('Something is wrong')
      }
      else
      {
        window.alert('Done');
      }
    }
    )
  }

  submit()
  {
    let url=this.app.baseUrl+'submit'+this.student.logs[this.showIndex].id;
    this.http.get(url).subscribe((data:any)=>
    {
      if(data==null || data==0)
      {
        window.alert('Something is wrong')
      }
      else
      {
        this.student.logs[this.showIndex].submit=1;
        window.alert('Done');
      }
    }
    )
  }

  backToTests()
  {
    this.student.whatToShow=1;
  }

  charCount: number = 0;

  validateText(value: string): void {
    const regex = /[a-zA-Z0-9]/g;
    const matches = value.match(regex);
    this.charCount = matches ? matches.length : 0;
  }

  back(){
    this.student.whatToShow=1;
  }
}
