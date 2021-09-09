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
  NbListComponent,
  NbListModule,
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SmartTableService } from './shared/smart-table/smart-table.service';
import { SmartTableData } from './shared/smart-table/smart-table';
import { Ng2SmartTableComponent, Ng2SmartTableModule } from 'ng2-smart-table';
import { ModalComponent } from './components/modal/modal.component';

import { SweetAlertService } from 'angular-sweetalert-service';
import { DataTablesModule } from 'angular-datatables';
import { UiSwitchModule } from 'ngx-ui-switch';
import { VehiculesTwoComponent } from './dashboard/vehicules-two/vehicules-two.component';

import { DualListComponent } from './components/dual-list/dual-list.component';

import { ManagingRolesComponent } from './components/managing-roles/managing-roles.component';
// import { GroupComponent } from './users/group/group.component';
import { RoleComponent } from './users/role/role.component';
// import { DualListTransferComponent } from './components/dual-list-transfer/dual-list-transfer.component';

@NgModule({
  declarations: [
    VehiculesTwoComponent,
    AppComponent,
    HomeComponent,
    UsersComponent,
    DashboardComponent,
    VehiculesComponent,
    BackdropClickDialogComponent,
    DialogBackdropClickComponent,
    TypesComponent,
    ModalComponent,
    DualListComponent,
    ManagingRolesComponent,
    // GroupComponent,
    RoleComponent,
    // DualListTransferComponent,
    // VehiculesTwoComponent,
  ],
  imports: [
    NbListModule,
    Ng2SmartTableModule,
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
      accessControl: {},
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
    NgbModule,
    DataTablesModule,
    UiSwitchModule,
  ],
  providers: [
    { provide: NbRoleProvider, useClass: RoleProvider },
    AuthGuard,
    SmartTableService,
    SweetAlertService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
