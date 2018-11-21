import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage implements OnInit{
  
  registerForm: FormGroup;
  public userData = { "mail": "", 
                      "name":"", 
                      "phone":"",
                      "pass": ""};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('testo'));
  }
  goCancel(){
    this.navCtrl.pop();
  }

  ngOnInit(){
    this.registerForm = new FormGroup({
      
      mail: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)

    });
  }

  goRegister(){
    console.log("mail es: " + this.userData.mail);
    console.log("nombre es: " + this.userData.name);
    console.log("telefono es: " + this.userData.phone);
    console.log("password es: " + this.userData.pass);

  }

}
