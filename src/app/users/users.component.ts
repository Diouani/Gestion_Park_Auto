import { DualListComponentC } from './../components/dual-list/dual-list.component';
import { ModalConfig } from './../components/modal/modal.config';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ApiService } from '../shared/api.service';
import { BackdropClickDialogComponent } from './modal/backdrop-dialog.component';
import { ModalComponent } from '../components/modal/modal.component';
import { ViewChild } from '@angular/core';
import { DualListComponent } from 'angular-dual-listbox';
import { UserManagementServiceService } from '../shared/management.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  data: any = {};
  roleName = {};
  privileges = [];

  addItem(confirmed, username) {
    this.roleName['name'] = username;
    console.log(this.roleName);
    this.privileges = confirmed;
    console.log(this.privileges);
    this.roleName['privileges'] = this.privileges;
    this.roleName['id'] = Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    this.data = this.roleName;

    // this.data.push({ roleName: username });
    // this.data.push({ privileges: confirmed });
    console.log(this.data);
    this.api.addRole(this.data).subscribe(
      (res) => {
        console.log(res);
        alert('Role Added succesfully');
        // this.formValue.reset();
      },
      (err) => {
        alert('Something Went Wrong');
      }
    );
  }
  /* tslint:disable quotemark */
  selectChange;
  static tube: any = [
    { name: 'Lecture Section Véhicule', id: 1 },
    { name: 'Ajout Section Véhicule', id: 2 },
    { name: 'Mise a jour Section Véhicule', id: 3 },
    { name: 'Supression Section Véhicule', id: 4 },
    { name: 'Suupression Section Véhicule', id: 5 },
  ];
  /* tslint:enable quotemark */
  @ViewChild('child', { static: true }) child: DualListComponentC;
  clickme(username: string) {
    console.log('it does nothing', username);
  }
  target = [];
  confirmed: Array<any>;
  private confirmedStations: Array<any>;
  message;

  source = UsersComponent.tube;

  compare(a: any, b: any) {
    const arr = UsersComponent.tube;
    return arr.indexOf(a._id) - arr.indexOf(b._id);
  }

  // ngAfterViewInit() {
  //   this.confirmed = this.child.confirmed.list;
  // }

  showMessage(e: any) {
    this.message = { selectChange: e };
  }

  @ViewChild('modal') private modalComponent: ModalComponent;
  modalConfig = {
    modalTitle: 'hello',
    dismissButtonLabel: 'di',
    closeButtonLabel: 'Close',
  };
  constructor(
    private api: ApiService,
    private dialogService: NbDialogService,
    private formbuilder: FormBuilder
  ) {}

  displayData() {
    if (this.child.confirmed.list.length !== 0) {
      console.log(this.child.confirmed.list);
    } else {
      console.log('NO DATA TO SEND');
    }
  }

  private open(closeOnBackdropClick: boolean) {
    this.dialogService.open(BackdropClickDialogComponent, {
      closeOnBackdropClick,
    });
  }
  usersData: any;
  formValue!: FormGroup;
  private stations: Array<any> = [
    { key: 20, station: 'Florida', state: 'CO' },
    { key: 21, station: 'Bocea', state: 'CO' },
    { key: 22, station: 'Carbon Jct', state: 'CO' },
    { key: 23, station: 'Durango', state: 'CO' },
    { key: 24, station: 'Home Ranch', state: 'CO' },
    { key: 25, station: 'Trimble Springs', state: 'CO' },
    { key: 26, station: 'Hermosa', state: 'CO' },
    { key: 27, station: 'Rockwood', state: 'CO' },
    { key: 28, station: 'Tacoma', state: 'CO' },
    { key: 29, station: 'Needleton', state: 'CO' },
    { key: 30, station: 'Elk Park', state: 'CO' },
    { key: 31, station: 'Silverton', state: 'CO' },
    { key: 32, station: 'Eureka', state: 'CO' },
  ];
  ngOnInit(): void {
    this.confirmedStations = new Array<any>();
    this.confirmed = this.confirmedStations;
    this.confirmedStations.push(this.stations[31]);
    this.confirmedStations.push(this.stations[30]);
    this.confirmedStations.push(this.stations[29]);
    // this.getAllUsers();
    this.getAllPrivileges();
    // this.source = this.formValue = this.formbuilder.group({
    //   matricule: [''],
    //   nomDutilisateur: [''],
    //   role: [''],
    // });
  }

  getAllPrivileges() {
    this.api.getPrivileges().subscribe((res) => {
      this.source = res;
    });
  }

  getAllUsers() {
    this.api.getUsers().subscribe((res) => {
      this.usersData = res;
    });
  }
  deleteUser(id: number) {
    this.api.deleteUser(id).subscribe((res) => {
      alert('User Deleted');
      this.getAllUsers();
    });
  }

  openWithoutBackdropClick() {
    this.open(false);
  }

  async openModal() {
    return await this.modalComponent.open();
  }
}
