import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePreRattrapagePageRoutingModule } from './update-pre-rattrapage-routing.module';

import { UpdatePreRattrapagePage } from './update-pre-rattrapage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePreRattrapagePageRoutingModule
  ],
  declarations: [UpdatePreRattrapagePage]
})
export class UpdatePreRattrapagePageModule {}
