import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ApiService } from '../shared/api.service';
import { BackdropClickDialogComponent } from './modal/backdrop-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(
    private api: ApiService,
    private dialogService: NbDialogService,
    private formbuilder: FormBuilder
  ) {}

  private open(closeOnBackdropClick: boolean) {
    this.dialogService.open(BackdropClickDialogComponent, {
      closeOnBackdropClick,
    });
  }
  usersData: any;
  formValue!: FormGroup;
  ngOnInit(): void {
    this.getAllUsers();
    this.formValue = this.formbuilder.group({
      matricule: [''],
      nomDutilisateur: [''],
      role: [''],
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
}
