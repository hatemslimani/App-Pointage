import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RattrapagePageRoutingModule } from './rattrapage-routing.module';

import { RattrapagePage } from './rattrapage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RattrapagePageRoutingModule
  ],
  declarations: [RattrapagePage]
})
export class RattrapagePageModule {}
