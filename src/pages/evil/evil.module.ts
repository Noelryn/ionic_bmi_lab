import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvilPage } from './evil';

@NgModule({
  declarations: [
    EvilPage,
  ],
  imports: [
    IonicPageModule.forChild(EvilPage),
  ],
})
export class EvilPageModule {}
