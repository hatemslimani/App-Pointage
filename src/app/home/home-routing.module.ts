import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:
    [
      {
        path: '',
        redirectTo: 'aceuil',
        pathMatch: 'full'
      },
      {
        path: 'aceuil',
        loadChildren: () => import('./aceuill/aceuill.module').then( m => m.AceuillPageModule)
      },
      {
        path: 'class',
        loadChildren: () => import('./class/class.module').then( m => m.ClassPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
