import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePreRattrapagePage } from './update-pre-rattrapage.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePreRattrapagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePreRattrapagePageRoutingModule {}
