import { UsersComponent } from './users/users.component';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbLogoutComponent } from '@nebular/auth';
import { AuthGuard } from './guard/auth-guard.service';
import { NbAuthComponent } from './auth/auth.component';

import { NgxLoginComponent } from './auth/login/login.component';
import { RedirectComponent } from './auth/login/redirect/redirect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { VehiculesComponent } from './dashboard/composants/vehicules/vehicules.component';
import { RegisterComponent } from './auth/register/register.component';
import { TypesComponent } from './dashboard/composants/types/types.component';
import { DualListComponentC } from './components/dual-list/dual-list.component';
import { DualListThreeComponent } from './components/dual-list-three/dual-list-three.component';
// import { VehiculesTwoComponent } from './dashboard/composants/vehicules-two/vehicules-two.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: NbAuthComponent,
    // canActivate: [LoginGuard],

    children: [
      {
        path: 'login',
        component: NgxLoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },

  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'composants/vehicule', component: VehiculesComponent },
      // { path: 'composants/vehicule-two', component: VehiculesTwoComponent },
      { path: 'dual-list', component: DualListComponentC },
      {
        path: 'users',
        component: UsersComponent,
      },
      { path: '', component: DualListThreeComponent },

      { path: 'types', component: TypesComponent },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'logout',
    component: NbLogoutComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '*', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
