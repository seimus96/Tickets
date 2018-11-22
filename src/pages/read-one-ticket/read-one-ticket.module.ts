import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadOneTicketPage } from './read-one-ticket';

@NgModule({
  declarations: [
    ReadOneTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadOneTicketPage),
  ],
})
export class ReadOneTicketPageModule {}
