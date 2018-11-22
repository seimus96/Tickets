import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ReadOneTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read-one-ticket',
  templateUrl: 'read-one-ticket.html',
})

export class ReadOneTicketPage {

  ticketId;
  tickets;
  ticket;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {

  var characters =  [
    {
      ticket: '1',
      fecha: '10/11/2018',
      items: [
              { title: 'Estado: ', note: 'Open' },
              { title: 'Asunto: ', note: 'blah blah' },
              { title: 'Departamento: ', note: 'blah blah blah' }
      ]
    },
    {
      ticket: '2',
      fecha: '10/11/2016',
      items: [
              { title: 'Estado: ', note: 'Asignado' },
              { title: 'Asunto: ', note: 'Mi plantita no crece :\'v' },
              { title: 'Departamento: ', note: 'Agricultura' },
              { title: 'Funcionario: ', note: 'Niky Minaj' }
      ]
    },
    {
      ticket: '3',
      fecha: '23/07/2017',
      items: [
              { title: 'Estado: ', note: 'Closed' },
              { title: 'Asunto: ', note: 'Planté tomates y me crecen pistaches xD' },
              { title: 'Departamento: ', note: 'Soporte Agropecuario' },
              { title: 'Funcionario: ', note: 'Pepe el verdadero' },
              { title: 'Solucion: ', note: 'kayece vieja piruja' }
      ]
    },
    {
      ticket: '4',
      fecha: '18/02/2016',
      items: [
              { title: 'Estado: ', note: 'Reasignado' },
              { title: 'Asunto: ', note: 'El ganado se vuelve loco' },
              { title: 'Departamento:  ', note: 'Ganaderia' },
              { title: 'Funcionario Anterior:  ', note: 'Salmón' },
              { title: 'Comentario:  ', note: 'Hijo: tus enamoradas no son vacas :v \n reasigno' },
              { title: 'Funcionario: ', note: 'Liam Neeson' },
              { title: 'Comentario: ', note: 'I will find you' }
      ]
    },
    {
      ticket: '5',
      fecha:'01/10/2017',
      items: [
              { title: 'Estado: ', note: 'Open' },
              { title: 'Asunto: ', note: 'Tomaco no crece bien.' },
              { title: 'Departamento: ', note: 'Soporte Técnico' }
      ]
    },
    {
      ticket: '6',
      fecha:'06/06/2016',
      items: [
              { title: 'Estado: ', note: 'Reasignado' },
              { title: 'Asunto: ', note: 'Basura en los alredores' },
              { title: 'Departamento: ', note: 'Consorcio' },
              { title: 'Funcionario Anterior:  ', note: 'Roshi' },
              { title: 'Comentario: ', note: 'Reasigno' },
              { title: 'Funcionario: ', note: 'Vegeta' },
              { title: 'Comentario: ', note: 'KAKAROTOO' }
      ]
    },
    {
      ticket: '7',
      fecha:'22/11/2016',
      items: [
              { title: 'Estado: ', note: 'Closed' },
              { title: 'Asunto: ', note: 'Yukki' },
              { title: 'Departamento: ', note: 'Soporte' },
              { title: 'Funcionario:  ', note: 'Minerva' },
              { title: 'Solucion: ', note: 'Heart on fire' }
      ]
    },
    {
      ticket: '8',
      fecha:'22/11/2016',
      items: [
              { title: 'Estado:  ', note: 'Open' },
              { title: 'Asunto:  ', note: 'IMPORTANTE gigi yssi pizy' },
              { title: 'Departamento:  ', note: 'Manicho' }
      ]
    },
    {
      ticket: '9',
      fecha:'09/10/2016',
      items: [
              { title: 'Estado:  ', note: 'Open' },
              { title: 'Asunto:  ', note: 'Totto' },
              { title: 'Departamento:  ', note: 'Soporte' }
      ]
    },
    {
      ticket: '25',
      fecha:'23/07/2017',
      items: [
              { title: 'Estado:  ', note: 'Asignado' },
              { title: 'Asunto:  ', note: 'Obtener calculo de ganado' },
              { title: 'Departamento:  ', note: 'Ganaderia' },
              { title: 'Funcionario:  ', note: 'Alberto Pezo' }
      ]
    },
    {
      ticket: '26',
      fecha:'06/06/2017',
      items: [
              { title: 'Estado: ', note: 'Asignado' },
              { title: 'Asunto: ', note: 'Juicios por abogado' },
              { title: 'Departamento: ', note: 'Soporte' },
              { title: 'Funcionario: ', note: 'Fernando Procel' }
      ]
    },
    {
      ticket: '27',
      fecha:'22/11/2017',
      items: [
              { title: 'Estado: ', note: 'Closed' },
              { title: 'Asunto: ', note: 'Lado Oscuro' },
              { title: 'Departamento: ', note: 'Soporte' },
              { title: 'Funcionario: ', note: 'Darth Vader' },
              { title: 'Solución: ', note: 'Me converti en lo que jure destruir' }
      ]
    },
    {
      ticket: '60',
      fecha:'09/10/2017',
      items: [
              { title: 'Estado: ', note: 'Asignado' },
              { title: 'Asunto: ', note: 'Rescatar a la princesa zelda' },
              { title: 'Departamento: ', note: 'Ganaderia' },
              { title: 'Funcionario: ', note: 'Link' }
      ]
    },
    {
      ticket: '61',
      fecha:'01/01/2019',
      items: [
              { title: 'Estado: ', note: 'Reasignado' },
              { title: 'Asunto: ', note: 'Rescatar a la princesa zelda' },
              { title: 'Departamento: ', note: 'Ganaderia' },
              { title: 'Funcionario Anterior: ', note: 'Ganondorf' },
              { title: 'Comentario: ', note: 'Haré mia al trifuerza' },
              { title: 'Funcionario: ', note: 'Linkle' },
              { title: 'Comentario: ', note: 'HYAAA' }
      ]
    },
    {
      ticket: '101',
      fecha:'23/07/2018',
      items: [
              { title: 'Estado: ', note: 'Reasignado' },
              { title: 'Asunto: ', note: 'Salto de fe' },
              { title: 'Departamento: ', note: 'Soporte' },
              { title: 'Funcionario Anterior: ', note: 'Altair' },
              { title: 'Comentario: ', note: 'Yo no tengo problemas con eso' },
              { title: 'Funcionario: ', note: 'Ezio Auditore' },
              { title: 'Comentario: ', note: 'Los controles se arreglan a partir de la 2da entrega' }
      ]
    },
    {
      ticket: '107',
      fecha:'06/06/2018',
      items: [
              { title: 'Estado: ', note: 'Closed' },
              { title: 'Asunto: ', note: 'Mis peces no se reproducen' },
              { title: 'Departamento: ', note: 'Agricultura' },
              { title: 'Funcionario:  ', note: 'Borja Pavón' },
              { title: 'Solucion: ', note: 'Que alguien llame a alguien' }
      ]
    },
    {
      ticket: '120',//120
      fecha:'22/11/2018',
      items: [
              { title: 'Estado: ', note: 'Open' },
              { title: 'Asunto: ', note: 'River Folk' },
              { title: 'Departamento: ', note: 'Soporte' }
      ]
    }
  ];

  this.ticketId = this.navParams.get('itemRx');
  this.tickets = characters;
  //this.ticket = this.navParams.get('itemRx');
  this.searchByName(this.navParams.get('itemRx'));
  }

  ionViewDidLoad() {
    console.log(this.ticketId);
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
 }

 searchByName(id){
  for(let charac of this.tickets){
    //console.log(charac.ticket);
    if(charac.ticket == id){
      this.ticket = charac;
      break;
    }
    /*for (let b of charac.items){
      console.log(b.title);
    }*/
  }
 }


}
