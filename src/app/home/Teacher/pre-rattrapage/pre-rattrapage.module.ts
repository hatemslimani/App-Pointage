import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreRattrapagePageRoutingModule } from './pre-rattrapage-routing.module';

import { PreRattrapagePage } from './pre-rattrapage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreRattrapagePageRoutingModule
  ],
  declarations: [PreRattrapagePage]
})
export class PreRattrapagePageModule {}
