import { ReadOneTicketPage } from './../read-one-ticket/read-one-ticket';
import { InsertTicketPage } from './../insert-ticket/insert-ticket';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-read-tickets',
  templateUrl: 'read-tickets.html',
})
export class ReadTicketsPage {

  items = [ 
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '25',
  '26',
  '27',
  '60',
  '61',
  '101',
  '107',
  '120'
  ];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
    let modal = this.modalCtrl.create(ReadOneTicketPage, item);
    modal.present();
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('testo'));
  }

  goInsert(){
    this.navCtrl.push(InsertTicketPage);
  }
}
