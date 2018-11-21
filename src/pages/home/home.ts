import { RegisterPage } from './../register/register';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  loginForm: FormGroup;
  public userData = { "mail": "", 
                      "pass": ""/*, "email": "", "name": "" */};
  constructor(public navCtrl: NavController) {
    
  }
  goRegister(){
    this.navCtrl.push(RegisterPage, {testo:'Pistashe'});
  }

  ngOnInit(){
    //let EMAILPATTERN = /^[a-z0-9!#$%&'+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-][a-z0-9])?(\.[a-z0-9]([a-z0-9-][a-z0-9])?)$/i;
    this.loginForm = new FormGroup({
      
      mail: new FormControl('', Validators.required),

      pass: new FormControl('', Validators.required)
/*,
      name: new FormControl('', [Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(4),
      Validators.maxLength(30)]),

      mail: new FormControl('', [Validators.required,
      Validators.pattern(EMAILPATTERN)]),

      usename: new FormControl('', [Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
      Validators.minLength(4),
      Validators.maxLength(10)]),
      
      */
    });
  }

  goLogin(){
    console.log("mail es: " + this.userData.mail);
    console.log("password es: " + this.userData.pass);

  }
}
