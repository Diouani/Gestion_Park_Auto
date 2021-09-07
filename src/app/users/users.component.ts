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
  data = [];

  addItem(confirmed, username) {
    this.data.push(confirmed);
    this.data.push(username);
    console.log(this.data);
    console.log(username);
  }
  /* tslint:disable quotemark */
  selectChange;
  static tube: any = [
    { name: 'Lecture Section Véhicule', id: 1 },
    { name: 'Ajout Section Véhicule', id: 2 },
    { name: 'Mise a jour Section Véhicule', id: 3 },
    { name: 'Supression Section Véhicule', id: 4 },
  ];
  /* tslint:enable quotemark */
  @ViewChild('child', { static: true }) child: DualListComponentC;
  clickme(username: string) {
    console.log('it does nothing', username);
  }
  target = [];
  confirmed;
  message;
  source;
  // source = UsersComponent.tube;

  compare(a: any, b: any) {
    const arr = UsersComponent.tube;
    return arr.indexOf(a._id) - arr.indexOf(b._id);
  }

  ngAfterViewInit() {
    this.confirmed = this.child.confirmed.list;
  }

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
  ngOnInit(): void {
    // this.getAllUsers();
    this.getAllRoles();
    // this.source = this.formValue = this.formbuilder.group({
    //   matricule: [''],
    //   nomDutilisateur: [''],
    //   role: [''],
    // });
  }

  getAllRoles() {
    this.api.getRoles().subscribe((res) => {
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
