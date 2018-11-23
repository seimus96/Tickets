import { RegisterPage } from './../register/register';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReadTicketsPage } from '../read-tickets/read-tickets';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  loginForm: FormGroup;
  public userData = { "mail": "", 
                      "pass": ""/*, "email": "", "name": "" */}
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(this.navParams.get('usuario'));
    if (this.navParams.get('flag') != null){
      this.userData.mail = this.navParams.get('usuario');
    }else{
      this.userData.mail = '';
      this.userData.pass = '';
      this.loginForm = null;
    }

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
/*
  ionViewWillEnter(){
    this.userData.mail = '';
    this.userData.pass = '';
  }*/

  goLogin(){
    console.log("mail es: " + this.userData.mail);
    console.log("password es: " + this.userData.pass);
    this.navCtrl.push(ReadTicketsPage, {testo: this.userData.mail});
  }
}
