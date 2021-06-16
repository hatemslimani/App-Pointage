import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreRattrapagePage } from './pre-rattrapage.page';

const routes: Routes = [
  {
    path: '',
    component: PreRattrapagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreRattrapagePageRoutingModule {}
