import { CommonModule } from '@angular/common';
import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { NgxAuthRoutingModule } from './auth-routing.module';
import {
  NbAuthModule,
  NbTokenLocalStorage,
  NbTokenStorage,
} from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
} from '@nebular/theme';
import { NbAuthComponent } from './auth.component';

import { NgxLoginComponent } from './login/login.component';
import { RedirectComponent } from './login/redirect/redirect.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbCardModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    // NgxAuthRoutingModule,

    NbAuthModule,
  ],
  declarations: [NgxLoginComponent, NbAuthComponent, RedirectComponent, RegisterComponent],
  providers: [{ provide: NbTokenStorage, useClass: NbTokenLocalStorage }],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class NgxAuthModule {}
