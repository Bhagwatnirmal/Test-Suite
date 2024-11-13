import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(public http:HttpClient, public app:AppComponent){}

  name:string='';
  username:string='';
  password:string='';
  role:number=1;

  register(form: NgForm) {
    // Perform custom validation for password and username
    this.checkPasswordSameAsUsername(form);

    if (form.valid) {
      let obj = {
        "name": this.name,
        "username": this.username,
        "password": this.password,
        "role": this.role
      };

      let url = this.app.baseUrl+'register'; 
      this.http.post(url, obj).subscribe((data: any) => {
        if (data === 1) {
          window.alert('Registered Successfully');
        } else if (data[0] === 1) {
          window.alert('Fill proper data and try again');
        }
      });

      window.alert("Regiter Successful");
      
      this.emptyField(form);
    }
  }

  emptyField(form: NgForm){
    this.name = '';
    this.username = '';
    this.password = '';
    form.resetForm();
  }

  checkPasswordSameAsUsername(form: NgForm) {
    const passwordControl = form.controls['password'];
    const usernameControl = form.controls['username'];

    if (passwordControl.value === usernameControl.value) {
      passwordControl.setErrors({ sameAsUsername: true });
    } else {
      if (passwordControl.errors) {
        delete passwordControl.errors['sameAsUsername'];
        if (!Object.keys(passwordControl.errors).length) {
          passwordControl.setErrors(null);
        }
      }
    }
  }
}
