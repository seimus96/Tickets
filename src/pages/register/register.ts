import { HomePage } from './../home/home';
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
  confPwd: any;
  confirmated: boolean = false;
  error: string ="Obligatorio";
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
      phone: new FormControl('', ),
      pass: new FormControl('', Validators.required),
      pass2: new FormControl('', Validators.required)
    });
  }
  /*
  static passwordsMatch(cg: FormGroup): {[err: string]: any} {
    let pass = cg.get('pass');
    let pass2 = cg.get('pass2');
    let rv: {[error: string]: any} = {};
    if ((pass.touched || pass2.touched) && pass.value !== pass2.value) {
      rv['passwordMismatch'] = true;
    }
    return rv;
  }
  */
  goRegister(){
    /*console.log("mail es: " + this.userData.mail);
    console.log("nombre es: " + this.userData.name);
    console.log("telefono es: " + this.userData.phone);
    console.log("password es: " + this.userData.pass);*/
    if(this.confPwd == this.userData.pass) {
      //console.log("confPwd es: " + this.confPwd);
      this.confirmated = false;
      this.navCtrl.setRoot(HomePage,{usuario:this.userData.mail,
                                     flag: 1});
    } else {
      this.confirmated = true;
    }
  }


}
