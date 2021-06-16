import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AceuillPage } from './aceuill.page';

const routes: Routes = [
  {
    path: '',
    component: AceuillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AceuillPageRoutingModule {}
