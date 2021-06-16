import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateRattrapagePage } from './update-rattrapage.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateRattrapagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateRattrapagePageRoutingModule {}
