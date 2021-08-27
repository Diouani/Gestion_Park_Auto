import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from './auth/auth.component';


import { NgxLoginComponent } from './auth/login/login.component';
import { RedirectComponent } from './auth/login/redirect/redirect.component';

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NgxLoginComponent, // <---
      },
      {
        path: 'logged',
        component: RedirectComponent, // <---
      },
    ],
  },

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
