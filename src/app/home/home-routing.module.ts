import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../role.guard';
import { HomePage } from './home.page';
import { AceuillPage } from './Teacher/aceuill/aceuill.page';

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
        canActivate:[RoleGuard],
        data:{role:'CONTROLLER'},
        loadChildren: () => import('./aceuill/aceuill.module').then( m => m.AceuillPageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
      },
      {
        path: 'class',
        canActivate:[RoleGuard],
        data:{role:'CONTROLLER'},
        loadChildren: () => import('./class/class.module').then( m => m.ClassPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
      },{
        path: 'teacher',
        canActivate:[RoleGuard],
        data:{role:'ENSEIGNANT'},
        loadChildren: () => import('./Teacher/aceuill/aceuill.module').then( m => m.AceuillPageModule)
      },
      {
        path: 'teacher/pre-rattrapage',
        canActivate:[RoleGuard],
        data:{role:'ENSEIGNANT'},
        loadChildren: () => import('./Teacher/pre-rattrapage/pre-rattrapage.module').then( m => m.PreRattrapagePageModule)
      },
      {
        path: 'teacher/rattrapage',
        canActivate:[RoleGuard],
        data:{role:'ENSEIGNANT'},
        loadChildren: () => import('./Teacher/rattrapage/rattrapage.module').then( m => m.RattrapagePageModule)
      },
      {
        path: 'teacher/add-rattrapage',
        canActivate:[RoleGuard],
        data:{role:'ENSEIGNANT'},
        loadChildren: () => import('./Teacher/add-rattrapage/add-rattrapage.module').then( m => m.AddRattrapagePageModule)
      },
      {
        path: 'teacher/update-rattrapage',
        canActivate:[RoleGuard],
        data:{role:'ENSEIGNANT'},
        loadChildren: () => import('./Teacher/update-rattrapage/update-rattrapage.module').then( m => m.UpdateRattrapagePageModule)
      },
      {
        path: 'teacher/add-pre-rattrapage',
        canActivate:[RoleGuard],
        data:{role:'ENSEIGNANT'},
        loadChildren: () => import('./Teacher/add-pre-rattrapage/add-pre-rattrapage.module').then( m => m.AddPreRattrapagePageModule)
      },
      {
        path: 'teacher/update-pre-rattrapage',
        canActivate:[RoleGuard],
        data:{role:'ENSEIGNANT'},
        loadChildren: () => import('./Teacher/update-pre-rattrapage/update-pre-rattrapage.module').then( m => m.UpdatePreRattrapagePageModule)
      },
      {
        path: 'teacher/absence',
        canActivate:[RoleGuard],
        data:{role:'ENSEIGNANT'},
        loadChildren: () => import('./Teacher/absence/absence.module').then( m => m.AbsencePageModule)
      }
    ]
  },
  {
    path: 'absence',
    loadChildren: () => import('./Teacher/absence/absence.module').then( m => m.AbsencePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
