import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from './auth/auth.component';

import { NgxLoginComponent } from './auth/login/login.component';
import { RedirectComponent } from './auth/login/redirect/redirect.component';
import { HomeComponent } from './dashboard/home/home.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: NgxLoginComponent, // <---
      },
      {
        path: 'logged',
        component: RedirectComponent, // <---
      },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: '**', redirectTo: 'home' },

  // {
  //   path: 'auth',
  //   loadChildren: './auth/auth.module#NgxAuthModule',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
