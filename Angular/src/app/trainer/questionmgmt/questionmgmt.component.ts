import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-questionmgmt',
  templateUrl: './questionmgmt.component.html',
  styleUrl: './questionmgmt.component.css'
})
export class QuestionmgmtComponent {

  constructor(public http:HttpClient, public app:AppComponent){}

  questions:any[]=[];

  load()
  {
    let url=this.app.baseUrl+'giveQuestion';
    this.http.get(url).subscribe((data:any)=>
    {
        this.questions=data;
    }
    );
  }

      name:string='';

  add()
  {
    let url=this.app.baseUrl+'addQuestion';
    this.http.post(url, this.name).subscribe((data:any)=>
    {
       this.questions.push(data);
    }
    );
  }

  delete(question:any)
  {
    let url=this.app.baseUrl+'delete'+question.id;
    this.http.get(url).subscribe((data:any)=>
    {
      if(data==1)
      {
        let index=this.questions.indexOf(question);
        if(index>=0)
        {
          this.questions.splice(index,1);
        }
      }
      else{
        alert('Exception on server')
      }
    }
    );
  }

}


