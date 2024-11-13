import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  isLoggedIn:number=0; // 0No 1-student 2-trainer
  userid:number=0;
  baseUrl='http://localhost:8082/';
}
