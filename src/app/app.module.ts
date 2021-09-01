import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbSidebarModule,
  NbMenuModule,
  NbTabsetModule,
  NbDialogModule,
  NbCardModule,
  NbDialogRef,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbPasswordAuthStrategy,
  NbAuthModule,
  NbAuthJWTToken,
} from '@nebular/auth';
import { NgxAuthModule } from './auth/auth.module';
import { RoleProvider } from './role.provider';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AuthGuard } from './guard/auth-guard.service';
import { VehiculesComponent } from './dashboard/composants/vehicules/vehicules.component';
import { BackdropClickDialogComponent } from './users/modal/backdrop-dialog.component';
import { DialogBackdropClickComponent } from './users/modal/modal.component';
import { TypesComponent } from './dashboard/composants/types/types.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    DashboardComponent,
    VehiculesComponent,
    BackdropClickDialogComponent,
    DialogBackdropClickComponent,
    TypesComponent,
  ],
  imports: [
    NbCardModule,
    NbTabsetModule,
    BrowserAnimationsModule,
    NbIconModule, // <---------
    NbSidebarModule.forRoot(), // <---------
    NbMenuModule.forRoot(), // <---------
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgxAuthModule,
    NbSecurityModule.forRoot({
      accessControl: {
        user: {
          view: ['auto', 'hr'],
        },
        moderator: {
          parent: 'user',
          create: 'auto',
        },
        admin: {
          parent: 'moderator',
          create: 'hr',
          remove: '*',
        },
      },
    }),
    NbThemeModule.forRoot({ name: 'default' }),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',

          baseEndpoint: 'http://127.0.0.1:8000/api/',
          login: {
            endpoint: 'login',
            method: 'post',
            alwaysFail: false,
            requireValidToken: true,
            redirect: {
              success: '/home',
              failure: null,
            },
          },
          token: {
            class: NbAuthJWTToken,
            key: 'token',
          },
        }),
      ],
      forms: {},
    }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbDialogModule.forRoot(),
    ReactiveFormsModule,

  ],
  providers: [
    { provide: NbRoleProvider, useClass: RoleProvider },
    AuthGuard,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
