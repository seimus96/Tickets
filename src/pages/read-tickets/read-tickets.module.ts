import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadTicketsPage } from './read-tickets';

@NgModule({
  declarations: [
    ReadTicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadTicketsPage),
  ],
})
export class ReadTicketsPageModule {}
