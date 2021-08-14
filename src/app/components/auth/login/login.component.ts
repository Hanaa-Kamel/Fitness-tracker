import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      email : new FormControl('', {
        validators : [Validators.required , Validators.email]
      }),
      password : new FormControl('' , {
        validators : [Validators.required ]

      })
    })
    console.log(this.loginForm.value)
  }

  onSubmit()
  {
    this.authService.login({
      email : this.loginForm.value.email,
      password : this.loginForm.value.password


    });
    console.log('helloooooooooooo');
  }


}
