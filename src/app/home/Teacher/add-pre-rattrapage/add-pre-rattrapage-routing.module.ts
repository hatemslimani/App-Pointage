import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPreRattrapagePage } from './add-pre-rattrapage.page';

const routes: Routes = [
  {
    path: '',
    component: AddPreRattrapagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPreRattrapagePageRoutingModule {}
