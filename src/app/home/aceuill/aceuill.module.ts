import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AceuillPageRoutingModule } from './aceuill-routing.module';

import { AceuillPage } from './aceuill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AceuillPageRoutingModule
  ],
  declarations: [AceuillPage]
})
export class AceuillPageModule {}
