import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPreRattrapagePageRoutingModule } from './add-pre-rattrapage-routing.module';

import { AddPreRattrapagePage } from './add-pre-rattrapage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPreRattrapagePageRoutingModule
  ],
  declarations: [AddPreRattrapagePage]
})
export class AddPreRattrapagePageModule {}
