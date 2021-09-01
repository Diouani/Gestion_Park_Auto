import { UsersComponent } from './../users.component';
import { UsersModel } from './users.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  template: `
    <nb-card class="dialog-card">
      <nb-card-header>
        <div class="d-flex flex-row-reverse bd-highlight">
          <button
            type="button"
            id="close"
            class="btn-close"
            aria-label="Close"
            (click)="dismiss()"
          ></button>
        </div>

        <div class="d-flex justify-content-center mt-5">
          <hr />
          <strong><h4>Ajout d'un utilisateur</h4></strong>
        </div>
      </nb-card-header>
      <nb-card-body>
        <div class="container px-5 my-5">
          <form id="contactForm" [formGroup]="formValue">
            <div class="form-floating mb-3">
              <input
                class="form-control"
                id="nomDutilisateur"
                type="text"
                placeholder="Nom d&#x27;utilisateur"
                data-sb-validations="required"
                formControlName="nomDutilisateur"
              />
              <label for="nomDutilisateur">Nom d&#x27;utilisateur</label>
              <div
                class="invalid-feedback"
                data-sb-feedback="nomDutilisateur:required"
              >
                Nom d&#x27;utilisateur is required.
              </div>
            </div>
            <div class="form-floating mb-3">
              <input
                class="form-control"
                id="matricule"
                type="text"
                placeholder="Matricule"
                data-sb-validations="required"
                formControlName="matricule"
              />
              <label for="matricule">Matricule</label>
              <div
                class="invalid-feedback"
                data-sb-feedback="matricule:required"
              >
                Matricule is required.
              </div>
            </div>
            <div class="form-floating mb-3">
              <select
                formControlName="role"
                class="form-select"
                id="role"
                aria-label="Role"
              >
                <option value="Utilisateur">Utilisateur</option>
                <option value="Moderateur">Moderateur</option>
                <option value="Administrateur">Administrateur</option>
              </select>
              <label for="role">Role</label>
            </div>
            <div class="d-grid">
              <button
                class="btn btn-primary btn-lg"
                id="submitButton"
                type="submit"
                (click)="addUser()"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      </nb-card-body>
      <nb-card-footer> </nb-card-footer>
    </nb-card>
  `,
})
export class BackdropClickDialogComponent implements OnInit {
  @Input() title: string;

  formValue!: FormGroup;
  usersModelObj: UsersModel = new UsersModel();

  constructor(
    protected ref: NbDialogRef<BackdropClickDialogComponent>,
    private formbuilder: FormBuilder,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.formValue = this.formbuilder.group({
      matricule: [''],
      nomDutilisateur: [''],
      role: [''],
    });
  }
  addUser() {
    this.usersModelObj.matricule = this.formValue.value.matricule;
    this.usersModelObj.nomDutilisateur = this.formValue.value.nomDutilisateur;
    this.usersModelObj.role = this.formValue.value.role;

    console.log(this.usersModelObj);

    this.api.addUser(this.usersModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('User Added succesfully');
        this.formValue.reset();
        let close = document.getElementById('close');
        close?.click();
      },
      (err) => {
        alert('Something Went Wrong');
      }
    );
  }
  onEdit(user: any) {
    console.log(user);
    console.log(this.formValue.controls);
    this.formValue.patchValue({
      matricule: user.matricule,
    });

    this.formValue.get('matricule').valueChanges.subscribe((selectedValue) => {
      console.log('matricule value changed');
      console.log(selectedValue); //latest value of firstname
      console.log(this.formValue.get('matricule').value); //latest value of firstname
    });

    // this.formValue.controls['nomDutilisateur'].setValue(user.nomDutilisateur);
    // this.formValue.controls['role'].setValue(user.role);
  }

  dismiss() {
    this.ref.close();
  }
}
