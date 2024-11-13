import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.css'
})
export class TrainerComponent {

  constructor(public app:AppComponent){}

  whatToShow:number=0;
  changeWhatToShow(num:number)
  {
    this.whatToShow=num;
  }

  logout(){
    this.app.isLoggedIn=0;
  }
}
