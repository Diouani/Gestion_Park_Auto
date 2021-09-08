// import { Component, OnInit, ViewChild } from '@angular/core';
// import { ManagingRolesComponent } from 'src/app/components/managing-roles/managing-roles.component';
// import { ApiService } from 'src/app/shared/api.service';

// @Component({
//   selector: 'app-group',
//   templateUrl: './group.component.html',
//   styleUrls: ['./group.component.scss'],
// })
// export class GroupComponent implements OnInit {
//   data: any = {};
//   roleName = {};
//   privileges = [];

//   getAllRoles() {
//     this.api.getRoles().subscribe((res) => {
//       this.source = res;
//     });
//   }

//   addItem(confirmed, username) {
//     this.roleName['roleName'] = username;
//     console.log(this.roleName);
//     this.privileges = confirmed;
//     console.log(this.privileges);
//     this.roleName['privileges'] = this.privileges;
//     this.roleName['id'] = 3;
//     this.data = this.roleName;

//     // this.data.push({ roleName: username });
//     // this.data.push({ privileges: confirmed });
//     console.log(this.data);
//     this.api.addRole(this.data).subscribe(
//       (res) => {
//         console.log(res);
//         alert('Role Added succesfully');
//         // this.formValue.reset();
//       },
//       (err) => {
//         alert('Something Went Wrong');
//       }
//     );
//   }
//   /* tslint:disable quotemark */
//   selectChange;
//   static tube: any = [
//     { name: 'Lecture Section Véhicule', id: 1 },
//     { name: 'Ajout Section Véhicule', id: 2 },
//     { name: 'Mise a jour Section Véhicule', id: 3 },
//     { name: 'Supression Section Véhicule', id: 4 },
//     { name: 'Suupression Section Véhicule', id: 5 },
//   ];
//   /* tslint:enable quotemark */
//   @ViewChild('child', { static: true }) child: ManagingRolesComponent;
//   clickme(username: string) {
//     console.log('it does nothing', username);
//   }
//   target = [];
//   confirmed;
//   message;
//   source = GroupComponent.tube;

//   compare(a: any, b: any) {
//     const arr = GroupComponent.tube;
//     return arr.indexOf(a._id) - arr.indexOf(b._id);
//   }

//   ngAfterViewInit() {
//     this.confirmed = this.child.confirmed.list;
//   }

//   showMessage(e: any) {
//     this.message = { selectChange: e };
//   }

//   constructor(private api: ApiService) {}

//   displayData() {
//     if (this.child.confirmed.list.length !== 0) {
//       console.log(this.child.confirmed.list);
//     } else {
//       console.log('NO DATA TO SEND');
//     }
//   }

//   usersData: any;

//   ngOnInit(): void {
//     // this.getAllUsers();
//     this.getAllRoles();
//     // this.source = this.formValue = this.formbuilder.group({
//     //   matricule: [''],
//     //   nomDutilisateur: [''],
//     //   role: [''],
//     // });
//   }
// }
