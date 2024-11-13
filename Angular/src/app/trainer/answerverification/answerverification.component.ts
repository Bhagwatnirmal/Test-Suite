import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-answerverification',
  templateUrl: './answerverification.component.html',
  styleUrl: './answerverification.component.css'
})
export class AnswerverificationComponent {

  
  logs:any;
  constructor(public http:HttpClient, public app:AppComponent)
  {
  let url=this.app.baseUrl+'getAllLogsForVerification';
  this.http.get(url).subscribe((data:any)=>
  {
    if(data==null)
    {
      window.alert('Something is wrong')
    }
    else if(data.length==0)
    {
      window.alert('nothing to show')
    }
    else
    {
      this.logs=data;
    }
  })
  }

  acceptreject(log:any, verify:number)
  {
    let url=this.app.baseUrl+'acceptreject'+log.id;
    this.http.post(url, verify).subscribe((data:any)=>
    {
      if(data==null || data==0)
      {
        window.alert('Something is wrong')
      }
      else{
        let index=this.logs.indexOf(log);
        this.logs.splice(index, 1);
      }
    }
    )
  }
}
