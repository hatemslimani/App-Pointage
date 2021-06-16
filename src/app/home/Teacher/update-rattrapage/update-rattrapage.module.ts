import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRattrapagePageRoutingModule } from './update-rattrapage-routing.module';

import { UpdateRattrapagePage } from './update-rattrapage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateRattrapagePageRoutingModule
  ],
  declarations: [UpdateRattrapagePage]
})
export class UpdateRattrapagePageModule {}
