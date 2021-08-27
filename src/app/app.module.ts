import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbIconModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbPasswordAuthStrategy,
  NbAuthModule,
  NbAuthJWTToken,
} from '@nebular/auth';
import { NgxAuthModule } from './auth/auth.module';
import { RoleProvider } from './role.provider';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';
import { HomeComponent } from './dashboard/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserAnimationsModule,
    NbIconModule,               // <---------
    NbSidebarModule.forRoot(),  // <---------
    NbMenuModule.forRoot(),     // <---------
    NbThemeModule.forRoot({name: 'default'}),
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
          view: ['auto', 'update'],
        },
        moderator: {
          parent: 'user',
          create: 'auto',
        },
        admin: {
          parent: 'moderator',
          create: 'update',
          remove: '*',
        },
      },
    }),
    NbThemeModule.forRoot({ name: 'default' }),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',

          baseEndpoint: 'http://127.0.0.1:8000/api',
          login: {
            endpoint: '/login',
            method: 'post',
            alwaysFail: false,
            requireValidToken: true,
            redirect: {
              success: '/logged',
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
  ],
  providers: [
    { provide: NbRoleProvider, useClass: RoleProvider },
    // {
    //   provide: NbRoleProvider,
    //   useValue: {
    //     getRole: () => {
    //       return observableOf('user');
    //     },
    //   },
    // },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
