import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertTicketPage } from './insert-ticket';

@NgModule({
  declarations: [
    InsertTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(InsertTicketPage),
  ],
})
export class InsertTicketPageModule {}
