import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRattrapagePage } from './add-rattrapage.page';

const routes: Routes = [
  {
    path: '',
    component: AddRattrapagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRattrapagePageRoutingModule {}
